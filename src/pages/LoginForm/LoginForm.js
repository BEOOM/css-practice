import './LoginForm.css';
import React from 'react';

const LoginForm = () => {
  return (
    <div class="loginFormBody">
      <div class="loginFormBox">
        <div class="loginForm">
          <h2>Sign In</h2>
          <div class="loginFormInputBox">
            <input type="text" required="required" class="loginFormInput" />
            <span class="loginFormSpan">Username</span>
            <i class="loginFormI"></i>
          </div>
          <div class="loginFormInputBox">
            <input type="password" required="required" class="loginFormInput" />
            <span class="loginFormSpan">Password</span>
            <i class="loginFormI"></i>
          </div>
          <div class="loginLinks">
            <a href="#">Forgot Password</a>
            <a href="#">Sign UP</a>
          </div>
          <input class="loginSubmit" type="submit" value="Login" />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
