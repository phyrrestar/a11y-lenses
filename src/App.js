import './App.css';

import { lensData } from "./lenses";
import React, { useState } from 'react';

function App() {

  const [lensNum, setLens] = useState(1);
  const max = lensData.lenses.length;

  function getRandom(e) {
    e.preventDefault();
    setLens(Math.floor(Math.random() * (max) + 1));
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={getRandom}>Random Lens</button>
        <a
          className="App-link"
          href="https://www.w3.org/TR/WCAG21/"
          target="_blank"
          rel="noopener noreferrer"
        >
          WCAG 2.1 (Web Content Accessibility Guidelines)
        </a>

          <p>
          {lensNum} 
          </p>
          <p>
          Lens Name: {lensData?.lenses[lensNum-1]?.name}
          </p>
          <p>
          Category: {lensData?.lenses[lensNum-1]?.category}
          </p>
          <p>
          Permanence: {lensData?.lenses[lensNum-1]?.permanence}
          </p>
          <p>
          Description: {lensData?.lenses[lensNum-1]?.description}
          </p>
          <p>
          Timeframe: {lensData?.lenses[lensNum-1]?.timeframe}
          </p>
          <p>Assistive Technology</p>
          <ul>
          {lensData?.lenses[lensNum-1]?.tech?.map(n => <li>{n}</li>)} 
          </ul>
          <p>Strategies</p>
          <ul>
          {lensData?.lenses[lensNum-1]?.strategies?.map(n => <li>{n}</li>)} 
          </ul>
          <p>Personal Life</p>
          <ul>
          {lensData?.lenses[lensNum-1]?.personal?.map(n => <li>{n}</li>)} 
          </ul>
          <p>Remediation Ideas</p>
          <ul>
         {lensData?.lenses[lensNum-1]?.suggestions?.map(n => <li>{n}</li>)} 
          </ul>
          <p>Tools</p>
          <ul>
           
            {lensData?.lenses[lensNum-1]?.tools?.map(n => <li> 
              <a
              className="App-link"
              href={n}
              target="_blank"
              rel="noopener noreferrer"
            >{n}</a></li>)} 
            
          </ul>

      </header>
    </div>
  );
}

export default App;
