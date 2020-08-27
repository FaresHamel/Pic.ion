import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './login/Login'
import Signup from './sign-up/Signup'

function App() {
  return (
    <Router>
      <h1>Welcome</h1>
      <Route path="/login" component={Login} />
    </Router>
  );
}

export default App;
