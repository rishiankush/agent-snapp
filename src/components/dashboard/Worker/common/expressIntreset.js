import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withRouter } from 'react-router-dom';
import Wheader from './Wheader';
import Wsidebar from './Wsidebar';
import dashboardSettingNavigation from '../../../../assets/images/dashboardSettingNavigation.png'
import UserProfile from '../../../../assets/images/userProfile.png';
import JobPostCover from '../../../../assets/images/jobPostCover.png';

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
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="intrestBox">
                  <div className="title_Text">
                    <h2> $50 <span>per hour</span> </h2>
                    <p className="MLSalign"> MLS# - 109083729 </p>
                  </div>
                  <div class="form-group">
                  <textarea class="form-control" rows="5" id="comment"></textarea>
                  </div>
                  <button type="submit" class="bgc-main d-block w-100 py-2 border-0 f-main-b btn btn-secondary">Express Intreset</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

  }
}

export default withRouter(Expressintreset);