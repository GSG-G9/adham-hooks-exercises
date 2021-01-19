import React, { useState } from 'react';
import Exercise1 from './Components/Exercise1';
import Exercise2 from './Components/Exercise2';
import Exercise3 from './Components/Exercise3';
import Exercise4 from './Components/Exercise4';

function App() {
  return (
    <div className="App">
      <Exercise1 />
      <Exercise2 />
      <Exercise3 />
      <br />
      <br />
      <Exercise4 />
    </div>
  );
}

export default App;
