import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withRouter } from 'react-router-dom';
import JobList from '../Worker/JobList';
import Wheader from './common/Wheader';
import Wsidebar from './common/Wsidebar';
import dashboardSettingNavigation from '../../../assets/images/dashboardSettingNavigation.png'
import UserProfile from '../../../assets/images/userProfile.png';
import JobPostCover from '../../../assets/images/jobPostCover.png';



class Expressintreset extends Component {
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
             
          

            </div>
          </div>
        </div>
        <Wsidebar />
      </div>
    );

  }
}

export default withRouter(Expressintreset);