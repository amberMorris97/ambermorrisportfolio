import React, { useState } from 'react';
import Header from './components/Header.jsx';
import Landing from './components/Landing.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import WorkExperience from './components/WorkExperience.jsx';
import Contact from './components/Contact.jsx';

const App = () => {
  const [display, setDisplay] = useState('landing');
  const displayObj = {
    landing: Landing,
  }
  const CurrentDisplay = displayObj[display];



  return (
    <div className="app">
      <Header />
      <Landing />
      <Skills />
      <Projects setDisplay={setDisplay} />
      <WorkExperience />
      <Contact />
    </div>
  );
}

export default App;