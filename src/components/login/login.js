import React from 'react';
import './login.css';

const login = () => (
  <div className="login">
    <div className="container">
      <div className="card col-lg-7 mx-auto">
        <div className="card-body">
          <h3 className="card-title text-center">Welcome back</h3>
          <p className="card-text text-center">use your credentials to get to your account and discover more.</p>

          <form>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
            </div>
            <div className="form-group form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
              <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
            </div>
            <button type="submit" className="btn btn-primary">Hop in</button>
          </form>

        </div>
      </div>
    </div>
    
  </div>
);


export default login;
