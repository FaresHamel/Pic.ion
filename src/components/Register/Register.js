import React from 'react';
import './Register.css';

const Register = () => (
  <div className="signup">
    <div className="container">
      <div className="card col-lg-7">
        <div className="card-body">
          <h3 className="card-title text-center">Welcome to Pic.ion</h3>
          <p className="card-text text-center">The leading website for quality images of all kinds</p>

          <form>
          <div class="form-group">
              <label for="exampleInputEmail1">Username</label>
              <input type="text" class="form-control" id="exampleInputUser" placeholder="Enter you username"/>
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
              <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
            </div>
            <div class="form-group form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
              <label class="form-check-label" for="exampleCheck1">I'm not a robot</label>
            </div>
            <button type="submit" class="btn btn-primary">Create An Account</button>
          </form>

        </div>
      </div>
    </div>
  </div>
);



export default Register;
