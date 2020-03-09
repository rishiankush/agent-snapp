import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import JobThumb from '../../../assets/images/JobThumb.png';

class JobList extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div id="header">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div class="job-item">
                                <a onClick={()=>this.props.history.push('/singleJPost')}>
                                    <div class="job-thumbnail">
                                        <img src={JobThumb} alt="JOB Thumb" class="rounded" />
                                    </div>
                                    <div class="job-info">
                                        <div class="type-date c-gray">
                                            <span class="f-main-b">Showings</span> -<span class="f-main">2020-01-24T00:00:00.000Z</span></div>
                                        <div class="job-title">Home Showing</div><div class="job-address">3708 Mountain RD Haymarket VA 20169</div>
                                        <div class="job-price">$120 Fixed rate</div><div class="job-owner">MSL# - </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div class="job-item">
                                <a href="#">
                                    <div class="job-thumbnail">
                                        <img src={JobThumb} alt="JOB Thumb" class="rounded" />
                                    </div>
                                    <div class="job-info">
                                        <div class="type-date c-gray">
                                            <span class="f-main-b">Showings</span> -<span class="f-main">2020-01-24T00:00:00.000Z</span></div>
                                        <div class="job-title">Home Showing</div><div class="job-address">3708 Mountain RD Haymarket VA 20169</div>
                                        <div class="job-price">$120 Fixed rate</div><div class="job-owner">MSL# - </div>
                                    </div></a>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div class="job-item">
                                <a href="#">
                                    <div class="job-thumbnail">
                                        <img src={JobThumb} alt="JOB Thumb" class="rounded" />
                                    </div>
                                    <div class="job-info">
                                        <div class="type-date c-gray">
                                            <span class="f-main-b">Showings</span> -<span class="f-main">2020-01-24T00:00:00.000Z</span></div>
                                        <div class="job-title">Home Showing</div><div class="job-address">3708 Mountain RD Haymarket VA 20169</div>
                                        <div class="job-price">$120 Fixed rate</div><div class="job-owner">MSL# - </div>
                                    </div></a>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div class="job-item">
                                <a href="#">
                                    <div class="job-thumbnail">
                                        <img src={JobThumb} alt="JOB Thumb" class="rounded" />
                                    </div>
                                    <div class="job-info">
                                        <div class="type-date c-gray">
                                            <span class="f-main-b">Showings</span> -<span class="f-main">2020-01-24T00:00:00.000Z</span></div>
                                        <div class="job-title">Home Showing</div><div class="job-address">3708 Mountain RD Haymarket VA 20169</div>
                                        <div class="job-price">$120 Fixed rate</div><div class="job-owner">MSL# - </div>
                                    </div></a>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div class="job-item">
                                <a href="#">
                                    <div class="job-thumbnail">
                                        <img src={JobThumb} alt="JOB Thumb" class="rounded" />
                                    </div>
                                    <div class="job-info">
                                        <div class="type-date c-gray">
                                            <span class="f-main-b">Showings</span> -<span class="f-main">2020-01-24T00:00:00.000Z</span></div>
                                        <div class="job-title">Home Showing</div><div class="job-address">3708 Mountain RD Haymarket VA 20169</div>
                                        <div class="job-price">$120 Fixed rate</div><div class="job-owner">MSL# - </div>
                                    </div></a>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div class="job-item">
                                <a href="#">
                                    <div class="job-thumbnail">
                                        <img src={JobThumb} alt="JOB Thumb" class="rounded" />
                                    </div>
                                    <div class="job-info">
                                        <div class="type-date c-gray">
                                            <span class="f-main-b">Showings</span> -<span class="f-main">2020-01-24T00:00:00.000Z</span></div>
                                        <div class="job-title">Home Showing</div><div class="job-address">3708 Mountain RD Haymarket VA 20169</div>
                                        <div class="job-price">$120 Fixed rate</div><div class="job-owner">MSL# - </div>
                                    </div></a>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div class="job-item">
                                <a href="#">
                                    <div class="job-thumbnail">
                                        <img src={JobThumb} alt="JOB Thumb" class="rounded" />
                                    </div>
                                    <div class="job-info">
                                        <div class="type-date c-gray">
                                            <span class="f-main-b">Showings</span> -<span class="f-main">2020-01-24T00:00:00.000Z</span></div>
                                        <div class="job-title">Home Showing</div><div class="job-address">3708 Mountain RD Haymarket VA 20169</div>
                                        <div class="job-price">$120 Fixed rate</div><div class="job-owner">MSL# - </div>
                                    </div></a>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div class="job-item">
                                <a href="#">
                                    <div class="job-thumbnail">
                                        <img src={JobThumb} alt="JOB Thumb" class="rounded" />
                                    </div>
                                    <div class="job-info">
                                        <div class="type-date c-gray">
                                            <span class="f-main-b">Showings</span> -<span class="f-main">2020-01-24T00:00:00.000Z</span></div>
                                        <div class="job-title">Home Showing</div><div class="job-address">3708 Mountain RD Haymarket VA 20169</div>
                                        <div class="job-price">$120 Fixed rate</div><div class="job-owner">MSL# - </div>
                                    </div></a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class="job-item">
                                <a href="#">
                                    <div class="job-thumbnail">
                                        <img src={JobThumb} alt="JOB Thumb" class="rounded" />
                                    </div>
                                    <div class="job-info">
                                        <div class="type-date c-gray">
                                            <span class="f-main-b">Showings</span> -<span class="f-main">2020-01-24T00:00:00.000Z</span></div>
                                        <div class="job-title">Home Showing</div><div class="job-address">3708 Mountain RD Haymarket VA 20169</div>
                                        <div class="job-price">$120 Fixed rate</div><div class="job-owner">MSL# - </div>
                                    </div></a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );

    }
}

export default withRouter(JobList);
