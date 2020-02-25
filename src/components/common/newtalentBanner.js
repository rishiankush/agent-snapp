import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import SliderNavigation from './SliderNavigation';

class NewtalentBanner  extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className="col-md-12">
            <div className="headerBannerText">
                <div className="col-md-12">
                    <h1>News from our <br /> Community</h1>
                </div>
                <div className="col-md-12">
                <a className="btn btn-primary"> Stay up to date </a>
                <div className="clearfix"></div>
                </div>
            <div className="col-md-12">
            <p> The latest AgentSnap news, features, and community updates > </p>
            </div>
            <div className="col-md-12">
                <SliderNavigation />
            </div>
        </div>
        </div>
    );

    }
}

export default withRouter(NewtalentBanner);
