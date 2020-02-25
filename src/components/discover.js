import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withRouter } from 'react-router-dom';
import MainHeader from './common/mainHeader';
import DiscoverTalent from './common/discoverBanner';

class AppIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <div id="Disover">
          <MainHeader />
          <div className="container">
            <div className="row">
              <DiscoverTalent />
            </div>
          </div>
        </div>
      </div>
    );

  }
}

export default withRouter(AppIndex);
