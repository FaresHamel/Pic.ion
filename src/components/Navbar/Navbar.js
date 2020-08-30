import React from 'react';
import './Navbar.css';
import { useHistory } from "react-router-dom";



class Navbar extends React.Component {
  


  goToLogin = () => {
    this.props.history.push("/login")
  }
  goToRegister = () => {
    this.props.history.push("/register")
  }


  render() {
    return (
      <div className="Navbar">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#">Pic.io</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <form className="form-inline my-2 my-lg-0 ml-5 col-6 d-flex">
          <input className="form-control mr-sm-2 flex-grow-1 rounded-100" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-info my-2 my-sm-0" type="submit">Search</button>
        </form>

        <ul className="navbar-nav mx-auto">
          <li className="nav-item">
            <a className="nav-link" href="#">FAQ <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">EXPLORE</a>
          </li>
          <li className="nav-item">
          <button type="button" className="btn btn-outline-light mx-2">Submit a photo</button>
          </li>
        </ul>
        
        <button type="button" 
                className="btn btn-primary mx-1"
                onClick={this.goToLogin}>Login</button>
        <button type="button" 
                className="btn btn-success mx-1"
                onClick={this.goToRegister}>Register</button>

      </div>
      </nav>
    </div>
    )
  }
}

// const Navbar = () => (
  
// );

Navbar.propTypes = {};

Navbar.defaultProps = {};

export default Navbar;
