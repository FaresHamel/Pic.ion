import React from 'react';
import './Register.css';

const Register = () => (
  <div className="signup">
    <div className="container">
      <div className="card col-lg-7 mx-auto">
        <div className="card-body">
          <h3 className="card-title text-center">Welcome to Pic.ion</h3>
          <p className="card-text text-center">The leading website for quality images of all kinds</p>

          <form>
          <div className="form-group">
              <label htmlFor="exampleInputEmail1">Username</label>
              <input type="text" className="form-control" id="exampleInputUser" placeholder="Enter you username"/>
            </div>
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
              <label className="form-check-label" htmlFor="exampleCheck1">I'm not a robot</label>
            </div>
            <button type="submit" className="btn btn-primary">Create An Account</button>
          </form>

        </div>
      </div>
    </div>
  </div>
);



export default Register;
