import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import AgentSnapLogo from '../../assets/images/agentSnapLogo.png';
import MainHeader from './mainHeader';
import EarnBanner from './EarnBanner';

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
    <div id="MainPage">
        <div className="container">
            <div className="row">
                <EarnBanner />
            </div>
        </div>
    </div>
    );
        
  }
}

export default withRouter(MainPage);
