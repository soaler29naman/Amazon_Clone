import React from "react";
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
function App() {
  return (
    //BEM

    <Router>

    <div className="App">
      <Header/>
      <Home/>
    <Routes>

      </Routes>
     </div>
     </Router>
  );
}

export default App;
