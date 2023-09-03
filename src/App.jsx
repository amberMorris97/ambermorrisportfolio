import React, { useState } from 'react';
import Header from './components/Header.jsx';
import Landing from './components/Landing.jsx';

const App = () => {
  const [display, setDisplay] = useState('landing');
  const displayObj = {
    landing: Landing,
  }
  const CurrentDisplay = displayObj[display];

  return (
    <div className="app">
      <CurrentDisplay setDisplay={setDisplay} />
    </div>
  );
}

export default App;