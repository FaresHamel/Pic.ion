import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import login from './components/Login/login'
import Register from './components/Register/Register'
import Navbar from './components/Navbar/Navbar'
import HomePage from './components/HomePage/HomePage'



function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <Router>
        <Route path="/" component={Navbar}/>
        <Route path="/" exact component={HomePage}/>
        <Route path="/login" component={login} /> 
        <Route path="/register" component={Register} />
      </Router>
    </div>
  );
}

export default App;
