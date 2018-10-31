import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

import Header from './components/header';
import Login from './components/login/login';
import Home from './components/home/home';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header /> 
          <Route exact path="/" component={Login} />
          <Route exact path="/home" component={Home} />
        </div>
      </Router>
    );
  }
}

export default App;
