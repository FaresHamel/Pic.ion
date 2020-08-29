import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import login from './components/login/login'
import signup from './components/signup/signup'
import Navbar from './components/Navbar/Navbar'
import Gallery from './components/Gallery/Gallery'


function App() {
  return (
    <div>
      <Navbar />
      <div className="imageBackground"></div>
      <div className="w-100">
        <Gallery/>
      </div>
      <Router>
        <Route path="/login" component={login} />
        <Route path="/register" component={signup} />
      </Router>
    </div>
  );
}

export default App;
