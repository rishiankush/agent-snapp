import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withRouter } from 'react-router-dom';
import LoginLogo from '../../assets/images/magnetIcons.png';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div id="Login">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="loginPageLogo">

                <div class="logo-header mx-auto">
                  <a onClick={() => this.props.history.push('/')}> <img src={LoginLogo} />
                    <span class="c-black f-sec">agent</span><span class="c-main f-sec">snapp</span>
                  </a>
                </div>
              </div>
            </div>
            </div>
            <div className="row loginArea">
              <div className="col-md-4">
              </div>
              <div className="text-center col-md-4">
                <h3 className="chooseOption"> Choose an option to get started </h3>

                <button class="text-center fb-login f-main-b btn btn-secondary">Use Facebook</button>

                <div class="divider w-sec mx-auto py-sm-4 py-2"><div class="line"></div><span>or</span><div class="line"></div></div>

                <p className="otp text-center">Sign up or login with your email instead</p>

                <form>
                  <input class="form-control w-main mx-auto rounded-0" type="text" placeholder="Enter your email" name="email" />
                  <div class="text-center text-danger">

                  </div>
                  <button type="submit" class="btn text-center d-block rounded-0 w-third bgc-main border-0 mx-auto my-2 c-white py-2 btn btn-secondary">Let's start</button>
                  <a class="btn text-center d-block rounded-0 w-third bgc-main border-0 mx-auto c-white py-2 f-main-b" href="/signgupsetpone"><span>Sign Up</span></a>
                </form>
              </div>
              <div className="col-md-4">
              </div>
            </div>

            <div className="copyright row">
            <div className="text-center col-md-12">
                <div class="small-container text-center mx-auto privacy">
                  <p class="c-gray text-center">By continuing, you're confirming that you've read and agree to our
              <a class="c-black" href="/sites/terms_conditions">Terms and Conditions,</a> <a class="c-black" href="/sites/privacy_policy">Privacy Policy</a> and <a class="c-black" href="/sites/cookie_policy">Cookie Policy</a></p>
                </div>
            </div>
            </div>

          </div>
        </div>
    );

  }
}

export default withRouter(Login);
