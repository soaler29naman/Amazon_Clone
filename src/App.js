import React from "react";
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
function App() {
  return (
    //BEM

    <Router>

    <div className="App">
      <Header/>
    <Routes>
    <Route path="/login" element={
          <React.Fragment>
            <h1>Login page</h1>
          </React.Fragment>
    }/> 
    <Route path="/checkout" element={
          <React.Fragment>
            <Checkout/>
          </React.Fragment>
    }/> 
    <Route path="/" element={
          <React.Fragment>
            <Home/>
          </React.Fragment>
    }/> 

      </Routes>
     </div>
     </Router>
  );
}

export default App;
