import React from 'react';
import './login.css';

const login = () => (
  <div className="login">
    <div className="container">
      <div className="card col-lg-7">
        <div className="card-body">
          <h3 className="card-title text-center">Welcome back</h3>
          <p className="card-text text-center">use your credentials to get to your account and discover more.</p>

          <form>
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
              <label class="form-check-label" for="exampleCheck1">Remember me</label>
            </div>
            <button type="submit" class="btn btn-primary">Hop in</button>
          </form>

        </div>
      </div>
    </div>
    
  </div>
);


export default login;
