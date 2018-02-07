import * as React from 'react';
import { withRouter } from 'react-router-dom';
import { LoginProps } from '../containers/LoginContainer';

//the second parameter type of Login
const initialState: LoginProps.IState = {
    username: '',
    password: ''
};

class Login extends React.Component<LoginProps.IProps, LoginProps.IState> {
    constructor(props: LoginProps.IProps) {
        super(props);
        this.state = initialState;

        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleUsernameChange(e: React.FormEvent<HTMLInputElement>) {
        this.setState({
            username: e.currentTarget.value
        });
    }

    handlePasswordChange(e: React.FormEvent<HTMLInputElement>) {
        this.setState({
            password: e.currentTarget.value
        });
    }

    handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (this.state.username.length > 0 && this.state.password.length > 0) {
            alert('A name was submitted ' + this.state.username + ' and ' + this.state.password);
        }
        else {
            alert('Invalid username or password');
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} >
                    <label className="login-label">
                        <b>Please enter username and password</b> <br/> <br/>
                    </label>
                    <input type="text" onChange={this.handleUsernameChange} className="login-fields" placeholder="Username" /> <br />
                    <input type="password" onChange={this.handlePasswordChange} className="login-fields" placeholder="Password" /> <br />
                    <input type="submit" className="login-button" value="Login" />
                        
                </form>
            </div>
        );
    }
}

//export default withRouter(Login);
export default Login;
               