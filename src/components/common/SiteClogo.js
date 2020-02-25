import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class SiteClogo extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
          <div class="logo">
          <span class="f-sec"><span class="c-white">agent</span>
          <span class="c-main">snapp</span></span>
      </div>

    );

    }
}

export default withRouter(SiteClogo);

