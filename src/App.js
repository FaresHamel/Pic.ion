import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import login from './components/login/login'
import signup from './components/signup/signup'
import Navbar from './components/Navbar/Navbar'
import HomePage from './components/HomePage/HomePage'
import { Link } from 'react-router-dom'


function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Route path="/" exact component={HomePage}/>
        <Route path="/login" component={login} />
        <Route path="/register" component={signup} />
      </Router>
    </div>
  );
}

export default App;
