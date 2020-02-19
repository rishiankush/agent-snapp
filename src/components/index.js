import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {withRouter} from 'react-router-dom';

class AppIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <div>
            <p>Hello This is Agents Napp App</p>
        </div>
    );
        
  }
}

export default withRouter(AppIndex);
