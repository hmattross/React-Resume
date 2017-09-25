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
                    <ul>
                        <li>
                            Advanced factory testing by displaying more relevant information to testers based on their specifications and feedback
                        </li>
                        <li>
                            Led development for Factory Topography Editor to connect services to hardware on the factory floor
                        </li>
                        <li>
                            Involved with full stack design by communicating needs, changes, and performance improvements to backend and database teams
                        </li>
                        <li>
                            Helped to lead the conversion to React front end applications and standardization of Github, Flux Architecture, and unit testing with Jest to improve code reliability, readability, and performance
                        </li>
                        <li>
                            Continuously improved the engineering process through research to deliver faster, more sustainable code
                        </li>
                        <li>
                        Worked globally with multiple teams in an Agile/Scrum environment with continuous delivery
                        </li>
                    </ul>
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
                    <ul>
                        <li>
                            Created first prototype product for startup company with two employees
                        </li>
                        <li>
                            Full stack development of a Stock Market Tracking web application to help users determine when to buy and sell
                        </li>
                        <li>
                            Researched entire web application process to build application from scratch
                        </li>
                        <li>
                            Improved performance of data calculation from days to hours using loop optimization and multithreading
                        </li>
                    </ul>
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
                    <ul>
                        <li>
                            Collaborated to create new standard of home healthcare manual prototype to improve employee knowledge and performance while increasing revenue for the company
                        </li>
                        <li>
                            Improved office work by debugging office hardware, network, and software
                        </li>
                    </ul>
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
                    <ul>
                        <li>
                            Improved ability for the logistics team to search and pull any data from NASA property creation, movement, and destruction
                        </li>
                        <li>
                            Problem solved with supervisor for best process to store and retrieve data
                        </li>
                        <li>
                            Standardized logistical data entry
                        </li>
                        <li>
                            Streamlined data movement between departments
                        </li>
                    </ul>
                </Well>
            </Panel>
        );
    }
}

export default WorkExperience;