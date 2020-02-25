import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withRouter } from 'react-router-dom';
import MainHeader from './common/mainHeader';
import EarnBanner from './common/EarnBanner';

class AppIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <div id="MainPage">
          <MainHeader />
          <div className="container">
            <div className="row">
              <EarnBanner />
            </div>
          </div>
        </div>
      </div>
    );

  }
}

export default withRouter(AppIndex);
