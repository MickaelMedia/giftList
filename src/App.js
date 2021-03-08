import React from 'react';
import './App.css';
import Header from "./Header";
import Gifts from "./Gifts";

function App() {

  

  return (
    <div className="app">
      <Header />

      <div className="app__main">
        <Gifts />
      </div>
      
    </div>
  );
}

export default App;
