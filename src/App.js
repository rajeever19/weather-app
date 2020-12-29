import React from "react";
import { BrowserRouter, Redirect, Route } from "react-router-dom";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import WeatherData from "./component/WeatherData";
import About from './component/About';

const App = () => {
  return (
    <div className="container-fluid">
      <BrowserRouter>
        <Navbar />
        <Route component={About} path="/About" exact />
        
        <Route component={Home} path="/" exact />
        <Route component={WeatherData} exact path="/WeatherData/:place?" />
      </BrowserRouter>
    </div>
  );
};

export default App;
