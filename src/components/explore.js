import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withRouter } from 'react-router-dom';
import MainHeader from './common/mainHeader';
import ExploreBanner from './common/exploreBanner';

class explore extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <div id="explore">
          <MainHeader />
          <div className="container">
            <div className="row">
              <ExploreBanner />
            </div>
          </div>
        </div>
      </div>
    );

  }
}

export default withRouter(explore);
