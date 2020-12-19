import React from 'react';
import './LoginPage.css';

function LoginPage() {
  return (
    <form>
      <label id="username">Username: </label>
      <input type="text" aria-required="true"/>
      <p></p>
      <label id="password">Password: </label>
      <input type="text" aria-required="true"/>
      <p></p>
      <input id="login" type="submit" name="login" value="Log In"/>
    </form>
  );
}

export default LoginPage;
