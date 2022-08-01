import React from 'react';
import './scripts/scripts'
import './App.css';
import { numToLet } from './scripts/scripts';

function App() {

  console.log(numToLet(4, false))
  console.log(numToLet([1,2,3,4,5,6,4,4,4,4,4,2], true))

  return (
    <div className="App">
      <h1>MusiqTools</h1>
      <p>A straightforward app designed to make music theory less of a headache.</p>
    </div>
  );
}

export default App;
