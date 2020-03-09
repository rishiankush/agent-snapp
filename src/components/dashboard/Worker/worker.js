import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withRouter } from 'react-router-dom';
import JobList from '../Worker/JobList';
import Wheader from './common/Wheader';
import Wsidebar from './common/Wsidebar';
import dashboardSettingNavigation from '../../../assets/images/dashboardSettingNavigation.png'


class Worker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobshowArrow : false,
      distanceshowArrow : true,
      HRateshowArrow : true,
      distanceSlider:10
    };
  }

  render() {
    return (
      <div>
          <div className="workersetting header with-back">
          <Wheader url={('/setting')} menuImg={dashboardSettingNavigation}/>
          <JobList />
          </div>
          <Wsidebar />
        </div>
    );

  }
}

export default withRouter(Worker);