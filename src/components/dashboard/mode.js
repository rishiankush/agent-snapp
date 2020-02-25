import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withRouter } from 'react-router-dom';
import UserProfileImg from '../../assets/images/userprofileimg.jpg';
import DashboardUserOptions from '../../assets/images/dashboardSettingNavigation.png'
import DashboardUserSetting from '../../assets/images/dashboardSettingSetting.png'


class Mode extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className="ModePage bgc-main pt-1">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div class="WhatLooking c-white text-center">What are you looking to do?</div>
                        </div>
                        <div className="col-md-12">
                            <div class="mx-auto mode-container bgc-white rounded">
                                <div className="userProfile">
                                    <img src={UserProfileImg} />
                                </div>
                                <div className="row DashboardSettingOption">
                                    <div className="col-md-6">
                                        <div className="navigation options">
                                           <a onClick={()=>this.props.history.push('/')}> <img src={DashboardUserOptions} /> </a>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="setting options">
                                        <a onClick={()=>this.props.history.push('/')}> <img src={DashboardUserSetting} /> </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="WorkdMode mode text-center mt-2">
                                    <a href="/worker">
                                        <span class="mode-title f-sec-b c-main">Work</span></a>
                                    <div class="mode-desc">Browse jobs posted by hiring agents, earn money and build your business
                                </div>
                                </div>

                                <div class="HireMode mode text-center mt-4">
                                    <a href="/hirer/home">
                                        <span class="mode-title f-sec-b c-black">Hire</span></a>
                                    <div class="mode-desc">Hire qualified talent and earn time doing the things you love
                                        </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );

    }
}

export default withRouter(Mode);
