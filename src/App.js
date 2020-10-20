import React from 'react';
import './App.css';
import Header from "./Header";
import Gifts from "./Gifts";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="App">
      <Header /> 
      
      <div className="app__main">
        <Sidebar />
      <Gifts />
      </div>
    </div>
  );
}

export default App;
