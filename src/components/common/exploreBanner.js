import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import SliderNavigation from './SliderNavigation';

class ExploreBanner  extends Component {
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
                        <h1>Opportunity is <br /> knocking</h1>
                    </div>
                    <div className="col-md-12">
                    <a className="btn btn-primary"> Explore Opportunities </a>
                    <div className="clearfix"></div>
                    </div>
                <div className="col-md-12">
                <p> Whether it's a showing, optn house, closing, appraisal, inspection, or repair <br /> find opportunities that fit your schedule ></p>
                </div>
                <div className="col-md-12">
                    <SliderNavigation />
                </div>
            </div>
            </div>

    );

    }
}

export default withRouter(ExploreBanner);
