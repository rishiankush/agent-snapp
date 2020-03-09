import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withRouter } from 'react-router-dom';
import UserProfile from '../../../../assets/images/userProfile.png';
import UserProfile1 from '../../../../assets/images/userProfile1.png';
import UserProfile2 from '../../../../assets/images/userProfile2.png';
import JobQus from '../../../../assets/images/JobQus.png';
import Tpcalendar from '../../../../assets/images/tp-calendar.png';

class Wsidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobshowArrow : false,
      distanceshowArrow : true,
      HRateshowArrow : true,
      distanceSlider:10
    };
  }
  render() {
    return (
<div className="sideBar">
<div class="user-menu row">
  <img src={UserProfile} />
</div>

<div class="jobInQues row">
  <img src={JobQus} />
</div>

<div class="calendar-wrapper row">
  <img src={Tpcalendar} />
</div>

<div className="conversations">
<div className="conversationsList">
  <ul>
    <li><a href="#"> <img src={UserProfile} />  </a>  </li>
    <li><a href="#"> <img src={UserProfile1} />  </a>  </li>
    <li><a href="#"> <img src={UserProfile2} />  </a>  </li>
    <li><a href="#"> <img src={UserProfile} />  </a>  </li>
    <li><a href="#"> <img src={UserProfile1} />  </a>  </li>
    <li><a href="#"> <img src={UserProfile2} />  </a>  </li>
  </ul>
</div>
</div>

</div>

);

}
}

export default withRouter(Wsidebar);