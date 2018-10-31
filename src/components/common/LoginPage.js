import React from 'react';
import {connect} from 'react-redux';
import {loginSuccess} from '../../actions/Actions';
import {loginService} from '../../service/LoginService';
import {Link} from 'react-router-3';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            errors: null,
            isLoading: false,
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
        this.setState({isLoading: true});
        loginService.login(this.state.username, this.state.password)
            .then(response => {
                    if (response) {
                        this.props.loginSuccess();
                        this.props.router.push('/');
                    } else {
                        this.setState({errors: "Login attempt is not successful", isLoading: false});
                    }
                }
            );
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        const {errors, username, password, isLoading} = this.state;

        return (
            <div className="row">
                <div className="col-md-4 offset-md-4">
                    <form onSubmit={this.onSubmit}>
                        <h1>Login</h1>

                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" className="form-control" name="username" value={username}
                                   onChange={this.onChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" name="password" value={password}
                                   onChange={this.onChange}/>
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary btn-lg" disabled={isLoading}>Login</button>
                            <Link to="/register" className="btn btn-link">Sign Up</Link>
                        </div>

                        {errors != null && <div className="alert alert-danger">{errors}</div>}
                    </form>
                </div>
            </div>
        );
    }
}

export default connect(null, {loginSuccess})(LoginPage);