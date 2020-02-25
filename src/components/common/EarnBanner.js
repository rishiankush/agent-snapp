import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ServicingAgent from './ServicingAgent';
import SliderNavigation from './SliderNavigation';

class HeaderBanner extends Component {
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
                        <h1>Leverage time Make money</h1>
                    </div>
                    <div className="col-md-12">
                    <a className="btn btn-primary"> Start Earning Today </a>
                    <div className="clearfix"></div>
                    </div>
                <div className="col-md-12">
                    <p> Hiring Agents earn time with family, friends, or for travel by hiring > </p>
                </div>
                <div className="col-md-12">
                    <ServicingAgent />
                </div>
                <div className="col-md-12">
                    <SliderNavigation />
                </div>
            </div>
            </div>

    );

    }
}

export default withRouter(HeaderBanner);
