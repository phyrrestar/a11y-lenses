import logo from './logo.svg';
import './App.css';

import React, { useEffect, useState } from 'react';


function App() {
  const [data, setData] = useState({});

  useEffect(() => {
  fetch('/stuff.json')
  .then(response => response.json())
  .then(r => (console.log(r), setData(r)));
  }, [data]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          data: {data.bla}
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
