import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class ServicingAgent extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <div className="ServicingAgent">
                <div className="text">
                    <p> Servicing Agent </p>
                    <h2>Potential Earnings</h2>
                </div>
                <div className="inputBoxSlider">
                    <input type="text" placeholder="If I work xy$ will be the return" class="form-control" id="usr" />
                </div>
            </div>
        );

    }
}

export default withRouter(ServicingAgent);
