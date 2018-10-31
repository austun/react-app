import React from 'react';
import {Link} from 'react-router-3';
import {connect} from 'react-redux';

class HomePage extends React.Component {
    render() {
        let renderList = [];
        if (this.props.isAuthenticated) {
            renderList[0] = <p>On Campaigns page, ad campaigns will be listed.</p>;
            renderList[1] = <p>Details of campaign modal will be opened once user clicks the details button at the right end.</p>;
            renderList[2] = <Link to="campaigns" className="btn btn-primary btn-lg">Show Campaigns</Link>;
        } else {
            renderList[0] = <p>Please first login to see ad campaigns.</p>;
            renderList[1] = <p>If you don't have an account please register.</p>;
            renderList[2] = <Link to="login" className="btn btn-primary btn-lg">Login / Sign Up</Link>;
        }
        return (
            <div className="jumbotron">
                <h1>Welcome to Ad Campaigns Listing App!</h1>
                {renderList}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        isAuthenticated: state.isAuthenticated
    };
}

export default connect(mapStateToProps, null)(HomePage);