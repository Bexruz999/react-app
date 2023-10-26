import logo from './logo.svg';
import './App.css';
import { nanoid } from 'nanoid'
import React, { useState } from 'react';

function id() { return nanoid();}

function App() {
  const [name, setName] = useState(false);
  const show = false;
  function clickHandler() {
    setName(!name);
  }
  let elem = '';
  if (name) {
    elem = <div><p>text</p></div>
  } else {
    elem = <div>{id()}</div>
  }
  return <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Edit <code>src/App.js</code> and save to reload.</p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          { elem }
        </a>
        <button onClick={clickHandler}>btn</button>
      </header>
    </div>
}

export default App;
