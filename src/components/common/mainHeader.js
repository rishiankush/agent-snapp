import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import AgentSnapLogo from '../../assets/images/agentSnapLogo.png';
import SiteClogo from './SiteClogo';

class MainHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
    <div id="header">
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="brandname">
                        <SiteClogo />
                    </div>
                </div>

                <div className="col-md-8">
                    <div className="navigation">
                        <ul>
                            <li><a onClick={()=>this.props.history.push('/login')}> Log in </a> </li>
                            <li className="active"> <a onClick={()=>this.props.history.push('/')}> Sign up </a> </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    </div>
    );
        
  }
}

export default withRouter(MainHeader);
