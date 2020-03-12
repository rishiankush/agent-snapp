import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withRouter } from 'react-router-dom';
import BackArrow from '../../../assets/images/backArrow.png'
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Wheader from './common/Wheader';
import Wsidebar from './common/Wsidebar';


class Workerprofile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobshowArrow : false,
      distanceshowArrow : true,
      HRateshowArrow : true,
      distanceSlider:10,
      BackArrowbtn : props.arrowbtn,
    };
  }

  render() {
    return (
      <div>
        <div className="workersetting header with-back">
         <Wheader url={('/worker')}  menuImg={BackArrow}/>
          <div className="container">
            <div className="row">
              <div className="col-md-3"></div>
              <div className="serviceagentsettings col-md-6">
                <div className="showprofilehiring border d-flex justify-content-between">
                  <label className="mb-0">
                    Show profile to hiring agents</label>
                  <input type="checkbox" className="switch_1" />
                </div>
                <div class="panel-desc px-4 my-3">Turning this on will allow your profile to be shown to hiring agents interested in your services.</div>                <Accordion defaultActiveKey="0">
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0" onClick={()=>this.expandSetting('job')}>
                    <div className="panel-header">Job Types</div>
                    <div className={this.state.jobshowArrow ? 'closearrow' : 'closearrow active' }> <span></span>
                    <span></span></div>
                    <div className="panel-desc">Which jobs are you interested in being hired for?</div>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body>
                        <div className="showprofilehiring border d-flex justify-content-between">
                          <label className="mb-0">
                            Showings
                          </label>
                         <input type="checkbox" className="switch_1" />
                        </div>
                        
                        <div className="showprofilehiring border d-flex justify-content-between">
                          <label className="mb-0">
                          Open Houses
                          </label>
                         <input type="checkbox" className="switch_1" />
                        </div>

                        <div className="showprofilehiring border d-flex justify-content-between">
                          <label className="mb-0">
                          Closings
                          </label>
                         <input type="checkbox" className="switch_1" />
                        </div>

                        <div className="showprofilehiring border d-flex justify-content-between">
                          <label className="mb-0">
                          Appraisals
                          </label>
                         <input type="checkbox" className="switch_1" />
                        </div>

                        <div className="showprofilehiring border d-flex justify-content-between">
                          <label className="mb-0">
                          Inspections
                          </label>
                         <input type="checkbox" className="switch_1" />
                        </div>

                        <div className="showprofilehiring border d-flex justify-content-between">
                          <label className="mb-0">
                          Repairs
                          </label>
                         <input type="checkbox" className="switch_1" />
                        </div>

                        </Card.Body>
                    </Accordion.Collapse>
                  </Card>

                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="1" onClick={()=>this.expandSetting('distance')}>
                    <div className="panel-header">Distance</div>
                    <div className={this.state.distanceshowArrow ? 'closearrow' : 'closearrow active' }> <span></span>
                    <span></span></div>
                    <div class="panel-desc">How far from your current location will you work?</div>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                      <Card.Body>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>

                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="2" onClick={()=>this.expandSetting('hRate')}>
                    <div className="panel-header">Hourly Rate</div>
                    <div className={this.state.HRateshowArrow ? 'closearrow' : 'closearrow active' }> <span></span>
                    <span></span></div>
                    <div class="panel-desc">What is your desired hourly rate?</div>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="2">
                      <Card.Body>
                       hello
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>

                </Accordion>

                <div col-md-12>
                <button type="submit" class="bgc-main d-block w-100 py-2 border-0 mt-5 f-main-b btn btn-secondary">Save Settings</button>
                </div>
              </div>
              <div className="col-md-3">
              </div>
            </div>
          </div>
        </div>
      <Wsidebar />  
      </div>
    );

  }
}

export default withRouter(Workerprofile);
