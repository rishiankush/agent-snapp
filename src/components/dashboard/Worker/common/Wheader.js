import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withRouter } from 'react-router-dom';
// import BackArrow from '../../../../assets/images/backArrow.png'

class WHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };



  }
  render() {
    return (
<div className="pageHeader">
<a className="back">
  <img onClick={()=>this.props.history.push(this.props.url)} src={this.props.menuImg} alt="Back" /></a> 
<div className="page-title">Service Agent Settings</div>  


<div className="clearfix"></div>
</div>
    );

}
}

export default withRouter(WHeader);