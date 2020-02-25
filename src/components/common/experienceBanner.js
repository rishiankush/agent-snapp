import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ServicingAgent from './ServicingAgent';
import SliderNavigation from './SliderNavigation';

class ExperienceBanner  extends Component {
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
                        <h1>Do the homework  <br /> before you hire</h1>
                    </div>
                    <div className="col-md-12">
                    <a className="btn btn-primary"> What others are saying </a>
                    <div className="clearfix"></div>
                    </div>
                <div className="col-md-12">
                <p> Feel secure when hiring by reading reviews and testimonials about <br /> members of our community > </p>
                </div>
                <div className="col-md-12">
                    <SliderNavigation />
                </div>
            </div>
            </div>

    );

    }
}

export default withRouter(ExperienceBanner);
