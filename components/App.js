import React from 'react';
import Greeting from './Greeting.js';
import Banner from './Banner.js';
import Info from './Info.js';
import Objective from './Objective.js';
import Education from './Education.js';
import SkillsAndKnowledge from './SkillsAndKnowledge';
import WorkExperience from './WorkExperience';
import Footer from './Footer';

class App extends React.Component {
    render() {
        return (
            <div id="app">
                <Greeting />
                <Banner />
                <Info />
                <div className="container">
                    <Objective />
                    <Education />
                    <SkillsAndKnowledge />
                    <WorkExperience />
                </div>
                <Footer />
            </div>
        );
    }
}

export default App;