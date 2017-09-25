import React from 'react';
import { Panel } from 'react-bootstrap';

class Education extends React.Component {
    render() {
        return(
            <Panel header="Education">
                <div className="row">
                    <div className="col-sm-4">
                        <span><b>University of Texas at Austin</b></span>
                    </div>
                    <div className="col-sm-4">
                        <span>Computer Engineering</span>
                    </div>
                    <div className="col-sm-4">
                        <span><b>Fall 2011-Fall 2014</b></span>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4">
                        <span><b>San Jacinto College</b></span>
                    </div>
                    <div className="col-sm-4">
                        <span></span>
                    </div>
                    <div className="col-sm-4">
                        <span><b>Fall 2009-Summer 2011</b></span>
                    </div>
                </div>
            </Panel>
        );
    }
}

export default Education;