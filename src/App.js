import React from 'react';
import './app.css';
import GameBox from './GameBox';
import NewGame from './NewGame';

function App() {
  return (
    <div>
      <h1>HOT or COLD</h1>
      <GameBox />
      <NewGame />
    </div>
  );
}

export default App;