import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withRouter } from 'react-router-dom';
import LoginLogo from '../../assets/images/AgentSnapLoginLogo.png';


class LoginPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <div id="Login">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="loginPageLogo"><a onClick={()=>this.props.history.push('/')}><img src={LoginLogo} /> </a></div>
              </div>
            </div>
            <div className="row loginArea">
              <div className="col-md-4">
              </div>
              <div className="text-left col-md-4">
              <h1> Login </h1>
                <p className="otp text-center">Please enter your mobile number</p>
                <div className="input-group mb-3">
                  <input type="Password" className="form-control" placeholder="Enter your password" aria-label="password" name="phone" required />
                </div>
                <p className="forgotPassword text-center"><a href="#"> Forgot Password </a></p>
                <div className="text-center">
                  <a className="btn theme-color-them-btn btn-primary">Continue</a>
                </div>
                <div className="col-md-12 text-center">
                  <a href="#" className="use-my-contact">Use Facebook Instead</a>
                </div>
              </div>
              <div className="col-md-4">
              </div>
            </div>

          </div>
        </div>
      </div>
    );

  }
}

export default withRouter(LoginPassword);
