import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withRouter } from 'react-router-dom';
import LoginLogo from '../../assets/images/magnetIcons.png';
import BackArrow from '../../assets/images/backArrow.png'
import UploadAvtar from '../../assets/images/avtaar.svg'


class SignpuStepone extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div id="Singup">
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
            <div className="col-md-3">
            </div>
            <div className="text-center col-md-6">

              <div class="back-header justify-content-center"><div class="back">

                <a onClick={() => this.props.history.push('/login')}><img src={BackArrow} alt="Back" /></a></div><span class="f-main-b">Sign up</span></div>

              <p className="aboutYourself text-left"> Please provide some information about yourself </p>
              <form>
              <div class="my-2 row">
                <div class="col-sm-6 col-12 mt-2 col">
                  <input type="text" class="form-control input" placeholder="Full Name" name="name" /></div>
                <div class="col-sm-6 col-12 mt-2 col">
                  <select name="type" class="form-control input">
                    <option value="">Agent Type</option>
                    <option value="service">Servicing</option>
                    <option value="hire">Hiring</option>
                  </select>
                </div>
              </div>
              <div class="my-2 row">
                <div class="col">
                  <input type="text" class="form-control input" placeholder="123 Broadway, Albany NY 12201" name="address" />
                </div>
              </div>

              <div class="mt-4 mb-2 row">
                <div class="col text-left">
                  <span>Email, Phone, Business</span>
                </div>
              </div>

              <div class="my-2 row">
                <div class="col-sm-6 col-12 mt-2 col">
                  <input type="email" class="form-control input" placeholder="Email" name="email" />
                </div><div class="col-sm-6 col-12 mt-2 col">
                  <input type="tel" class="form-control input" placeholder="Phone Number" name="phone" />
                </div>
              </div>

              <div class="my-2 row">
                <div class="col">
                  <input type="text" class="form-control input" placeholder="Brokerage" name="brokerage" />
                </div>
              </div>

              <div class="mt-4 row">
                <div class="col-sm-6 col-12 mt-2 col">
                  <span class="mb-2 d-block text-left">MLS #</span>
                  <input type="text" class="form-control input" placeholder="123456789" name="mls" />
                </div>
                <div class="col-sm-6 col-12 mt-2 d-flex align-items-end col">
                  <img src={UploadAvtar} alt="Avatar" class="UploadUserAvtar rounded-circle mr-2" />
                  <div class="flex-fill"><span class="d-block">Profile Photo</span>
                    <button type="button" class="btn btn-light d-block w-100 btn btn-secondary">Browse</button>
                    <input type="file" class="d-none form-control-file" />
                  </div>
                </div>
              </div>

              <div class="mt-4 mb-2 row">
                <div class="text-left col">
                  <span>Password</span>
                </div>
              </div>

              <div class="my-2 row">
                <div class="col-sm-6 col-12 mt-2 col">
                  <input type="password" class="form-control input" placeholder="Password" name="password" />
                </div>
              </div>
              <button type="submit" class="bgc-main d-block w-100 py-2 border-0 mt-5 btn btn-secondary" onClick={()=>this.props.history.push('/mode')}>Finish Sign Up</button>              
              </form>
            </div>
            <div className="col-md-3">
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

export default withRouter(SignpuStepone);
