import React from 'react';
import {connect} from 'react-redux';

export default function (ComposedComponent) {
    class Authenticate extends React.Component {
        componentWillMount() {
            if (!this.props.isAuthenticated) {
                alert('Please login to see this page!');
                this.props.router.push('/login');
            }
        }

        componentWillUpdate(nextProps) {
            if (!nextProps.isAuthenticated) {
                this.props.router.push('/');
            }
        }

        render() {
            return (
                <ComposedComponent {...this.props} />
            );
        }
    }

    function mapStateToProps(state) {
        return {
            isAuthenticated: state.isAuthenticated
        };
    }

    return connect(mapStateToProps, null)(Authenticate);
}