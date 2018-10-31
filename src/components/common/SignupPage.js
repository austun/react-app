import React from 'react';
import {loginService} from "../../service/LoginService";

class SignupPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            passwordConfirmation: '',
            errors: null,
            isLoading: false,
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();

        this.setState({isLoading: true});
        if ((this.state.password === this.state.passwordConfirmation) && (this.state.password !== '' && this.state.username !== '' && this.state.passwordConfirmation !== '')) {
            loginService.signup(this.state.username, this.state.password)
                .then(response => {
                        if (response) {
                            this.props.router.push('/login');
                        } else {
                            this.setState({errors: "Sign up attempt is not successful", isLoading: false});
                        }
                    }
                );
        } else if (this.state.password !== this.state.passwordConfirmation) {
            alert('Password and password confirmation does not match!');
            this.props.router.push('/login');
        } else {
            alert('All fields should be filled!');
            this.props.router.push('/login');
        }
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        const {errors, username, password, passwordConfirmation, isLoading} = this.state;
        return (
            <div className="row">
                <div className="col-md-4 offset-md-4">
                    <form onSubmit={this.onSubmit}>
                        <h1>Register</h1>

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
                            <label htmlFor="passwordConfirmation">Password Confirmation</label>
                            <input type="password" className="form-control" name="passwordConfirmation"
                                   value={passwordConfirmation} onChange={this.onChange}/>
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary btn-lg" disabled={isLoading}>Sign Up</button>
                        </div>

                        {errors != null && <div className="alert alert-danger">{errors}</div>}
                    </form>
                </div>
            </div>
        );
    }
}

export default SignupPage;