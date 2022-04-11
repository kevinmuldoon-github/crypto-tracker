
import './App.css'
import React from 'react';
import CryptoBox from './containers/CryptoBox';

function App() {
  return (
    <div id="main-container">
      <header>
        <h1><i class="fa-brands fa-bitcoin"></i>&nbsp; Crypto Tracker</h1>
      </header>
    <main>
    <CryptoBox />

    </main>
    </div>
  );
}

export default App;
