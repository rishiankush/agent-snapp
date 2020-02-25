import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withRouter } from 'react-router-dom';
import MainHeader from './common/mainHeader';
import NewtalentBanner from './common/newtalentBanner';

class NewTalent extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <div id="newTalent">
          <MainHeader />
          <div className="container">
            <div className="row">
              <NewtalentBanner />
            </div>
          </div>
        </div>
      </div>
    );

  }
}

export default withRouter(NewTalent);
