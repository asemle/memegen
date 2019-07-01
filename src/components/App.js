import React from 'react';
import './App.css';

import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
      <Footer/>
    </div>
  );
}

export default App;
