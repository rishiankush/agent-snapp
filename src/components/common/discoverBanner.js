import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ServicingAgent from './ServicingAgent';
import SliderNavigation from './SliderNavigation';

class DiscoverBanner extends Component {
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
                        <h1>The boost your <br /> business needs</h1>
                    </div>
                    <div className="col-md-12">
                    <a className="btn btn-primary">Discover Talent </a>
                    <div className="clearfix"></div>
                    </div>
                <div className="col-md-12">
                    <p> Become a hiring agent and gain more time for things you love > </p>
                </div>
                <div className="col-md-12">
                    <SliderNavigation />
                </div>
            </div>
            </div>

    );

    }
}

export default withRouter(DiscoverBanner);
