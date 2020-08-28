import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import login from './components/login/login'
import signup from './components/signup/signup'


function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Router>
        <Route path="/login" component={login} />
        <Route path="/register" component={signup} />
      </Router>
    </div>
  );
}

export default App;
