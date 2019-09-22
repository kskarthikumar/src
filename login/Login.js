import React from 'react';
import './Login.css';

function Login() {
  return (
    <div className="loginForm">
    <form>
        <label>
          Username
        </label>
          <input type="text" name="name" />
        <label>
          Password
        </label>
          <input type="password" name="pwd" />
        <input type="submit" value="Login" />
      </form>
      </div>
  );
}

export default Login;
