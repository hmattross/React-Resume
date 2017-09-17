import React from 'react';
import { Panel, Well } from 'react-bootstrap';

class WorkExperience extends React.Component {
    render() {
        return(
            <Panel header="Work Experience">
                <div className="row">
                    <div className="col-sm-8">
                        <span><b>Hewlett Packard Enterprise,</b> Software Engineer</span>
                    </div>
                    <div className="col-sm-4">
                        <span><b>January 2015 to Present</b></span>
                    </div>
                </div>
                <Well>
                    <div>
                        <span>Design, develop, and test cloud based user interface tools for Factory Manufacturing in Server Supply Chain</span>
                    </div>
                    <div>
                        <span>Understand user requirements, user feedback, and future product changes to improve factory efficiency</span>
                    </div>
                    <div>
                        <span>Improve existing applications using new technologies and system architectures</span>
                    </div>
                    <div>
                        <span>Work globally with multiple teams in an Agile/Scrum environment with continuous delivery</span>
                    </div>
                    <div>
                        <span>Design standardized web application development process using new technology, standardized architecture, and standardized testing that adapts to future product changes, user needs, and functionality improvements</span>
                    </div>
                    <div>
                        <span>Lead developer for Factory Topography Application to map different factory testing stations</span>
                    </div>
                    <div>
                        <span>Developer for Test Executive for factory floor to test completed servers</span>
                    </div>
                    <div>
                        <span>Developer for Cloud Appliance Configurator</span>
                    </div>
                </Well>
                <div className="row">
                    <div className="col-sm-8">
                        <span><b>MKD Technologies,</b> Intern</span>
                    </div>
                    <div className="col-sm-4">
                        <span><b>May 2014 to Dec 2014</b></span>
                    </div>
                </div>
                <Well>
                    <div>
                        <span>Designed, developed, and tested Stock Market Tracking web application</span>
                    </div>
                    <div>
                        <span>Implemented automated algorithms using object orientation, loop optimization, and multithreading to analyze market trends</span>
                    </div>
                    <div>
                        <span>Front end web development using HTML, JavaScript, JSON, and jQuery</span>
                    </div>
                    <div>
                        <span>Data storage and manipulation using MYSQL</span>
                    </div>
                </Well>
                <div className="row">
                    <div className="col-sm-8">
                        <span><b>BrightStar of Friendswood,</b> Intern</span>
                    </div>
                    <div className="col-sm-4">
                        <span><b>May 2012 to August 2013</b></span>
                    </div>
                </div>
                <Well>
                    <div>
                        <span>Developed a standardized healthcare manual for current and future employees</span>
                    </div>
                    <div>
                        <span>Debug office hardware, network, and software</span>
                    </div>
                    <div>
                        <span>Managed payroll</span>
                    </div>
                    <div>
                        <span>IT support</span>
                    </div>
                </Well>
                <div className="row">
                    <div className="col-sm-8">
                        <span><b>Hamilton Sundstrand,</b> Intern</span>
                    </div>
                    <div className="col-sm-4">
                        <span><b>January to June of 2011</b></span>
                    </div>
                </div>
                <Well>
                    <div>
                        <span>Documented NASA property creation, movement, and destruction</span>
                    </div>
                    <div>
                        <span>Problem solved with supervisor for best process to store and retrieve data</span>
                    </div>
                    <div>
                        <span>Understood and streamlined movement of information between departments</span>
                    </div>
                </Well>
            </Panel>
        );
    }
}

export default WorkExperience;