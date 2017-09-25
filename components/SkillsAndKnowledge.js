import React from 'react';
import { Panel } from 'react-bootstrap';

class SkillsAndKnowledge extends React.Component {
    render() {
        return(
            <Panel header="Skills and Knowledge">
                <div>
                    <b>Languages:</b> React, Java, JavaScript, HTML/CSS, JQuery, C/C++/C#, MYSQL, Verilog
                </div>
                <div>
                    <b>Methodologies:</b> Agile Software Development, Cloud Deployment, Joint Application Development, Flux Architecture, Object Oriented Programming, Data Structures
                </div>
                <div>
                    <b>Technologies:</b> Bootstrap, Node.js, Eclipse, Visual Code, JSON, REST, Visual Studios, ActiveMQ, jQuery, XML, .NET, Github, SVN
                </div>
            </Panel>
        );
    }
}

export default SkillsAndKnowledge;