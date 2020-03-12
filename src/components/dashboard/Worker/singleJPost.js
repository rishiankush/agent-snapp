import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withRouter } from 'react-router-dom';
import JobList from '../Worker/JobList';
import Wheader from './common/Wheader';
import Wsidebar from './common/Wsidebar';
import dashboardSettingNavigation from '../../../assets/images/dashboardSettingNavigation.png'
import UserProfile from '../../../assets/images/userProfile.png';
import JobPostCover from '../../../assets/images/jobPostCover.png';
import ExpressIntreset from './common/expressIntreset'

class Worker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobshowArrow: false,
      distanceshowArrow: true,
      HRateshowArrow: true,
      distanceSlider: 10
    };
  }

  render() {
    return (
      <div>
        <div className="job-page workersetting header with-back">
          <Wheader url={('/setting')} menuImg={dashboardSettingNavigation} />
          <div className="container">
            <div className="row">
              <div className="col-md-12">
              <div className="Jobpostcover"> <img src={JobPostCover} /> </div>
              </div>
              </div>
              <div className="row">
                <div class="job-detail col-md-8">
                  <div class="type-date"><span class="type text-left"></span> <span class="date">Showing - 9/15/2019</span></div>
                  <div class="title">Home Showing</div>
                  <div class="address">3708 Mountain RD Haymarket VA 20169</div>
                  <div class="agent">
                    <img class="photo" src={UserProfile} alt="Client Photo" />
                    <div class="info">
                      <div class="type text-left">service</div>
                      <div class="name">Test User</div></div>
                    <div className="contactAgent">
                      <a href="/worker/agent/5e26f5c31f81d70017560dfe">
                        <span class="c-main">Contact Agent</span></a>
                    </div>
                  </div>
                  <div class="description">
                  <label class="">Description</label>
                  <p>jskgjdfklgjdflkgjglkjsklsjkshjgsdhgkdshgksd</p>
                </div>
                </div>
              <div className="col-md-4">
                  <ExpressIntreset />
              </div>
              </div>
            </div>
          </div>
          <Wsidebar />
      </div>
    );

  }
}

export default withRouter(Worker);