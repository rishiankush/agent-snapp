import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withRouter } from 'react-router-dom';
import MainHeader from './common/mainHeader';
import ExperienceBanner from './common/experienceBanner';

class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <div id="experience">
          <MainHeader />
          <div className="container">
            <div className="row">
              <ExperienceBanner />
            </div>
          </div>
        </div>
      </div>
    );

  }
}

export default withRouter(Experience);
