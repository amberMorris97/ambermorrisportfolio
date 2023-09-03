import React, { useState } from 'react';
import Header from './components/Header.jsx';
import Landing from './components/Landing.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import WorkExperience from './components/WorkExperience.jsx';
import Contact from './components/Contact.jsx';
import JaneRosenzweig from './components/projectPages/JaneRosenzweig.jsx';

const App = () => {
  const [display, setDisplay] = useState('landing');
  const displayObj = {
    landing: Landing,
    jane: JaneRosenzweig
  }
  const CurrentDisplay = displayObj[display];



  return (
    <div className="app">
      <Landing />
      <Skills />
      <Projects setDisplay={setDisplay} />
      <WorkExperience />
      <Contact />
    </div>
  );
}

export default App;