import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';


class SliderNavigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <div className="SliderNavigation">
                <ul>
                    <li><a onClick={()=>this.props.history.push('./')}> <i className="IconsSheet earnIcons" /><p> Earn </p> </a></li>
                    <li><a onClick={()=>this.props.history.push('./discover')}> <i className="IconsSheet discover" /> <p> Discover </p></a></li>
                    <li><a onClick={()=>this.props.history.push('./explore')}> <i className="IconsSheet explore" /> <p> Explore </p></a></li>
                    <li><a onClick={()=>this.props.history.push('./experience')}> <i className="IconsSheet experience" /> <p> Experience </p></a></li>
                    <li><a onClick={()=>this.props.history.push('./newtalent')}> <i className="IconsSheet new" /> <p> New </p></a></li>
                </ul>
            </div>
        );

    }
}

export default withRouter(SliderNavigation);
