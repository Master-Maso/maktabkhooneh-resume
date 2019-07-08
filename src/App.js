import React from 'react';

import TitlesSection from './sections/TitlesSection';
import AboutSection from './sections/AboutSection';
import SkillSection from './sections/SkillSection';
import './App.css';

function App() {
    return (
        <div className="App">
            <div className="navigation" />
            <TitlesSection/>
            <AboutSection/>
            <SkillSection/>
        </div>
    );
}

export default App;
