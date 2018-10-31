import React from 'react';
import {Link, IndexLink} from 'react-router-3';
import {connect} from 'react-redux';
import {logout} from '../../actions/Actions';

class Header extends React.Component {
    processLogout(e) {
        e.preventDefault();
        alert('Are you sure?');
        this.props.logout();
    }

    render() {
        let linkToRender = '';
        if (this.props.isAuthenticated) {
            linkToRender = <Link to="/logout" activeClassName="active" onClick={this.processLogout.bind(this)}>Logout</Link>;
        } else {
            linkToRender = <Link to="/login" activeClassName="active">Login</Link>;
        }

        return (
            <nav>
                <IndexLink to="/" activeClassName="active">Home</IndexLink>
                {" | "}
                <Link to="/campaigns" activeClassName="active">Campaigns</Link>
                {" | "}
                <Link to="/about" activeClassName="active">About</Link>
                {" | "}
                {linkToRender}
            </nav>
        );
    }

}

function mapStateToProps(state) {
    return {
        isAuthenticated: state.isAuthenticated
    };
}

export default connect(mapStateToProps, {logout})(Header);
