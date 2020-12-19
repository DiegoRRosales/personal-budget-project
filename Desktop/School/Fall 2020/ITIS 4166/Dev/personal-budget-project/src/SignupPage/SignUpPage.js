import React from 'react';
import './SignUpPage.css';

function SignUpPage() {
  return (
    <form>
      <label id="name">Name: </label>
      <input type="text" placeholder="Full Name" aria-required="true"/>
      <p></p>
      <label id="email">E-mail address: </label>
      <input type="email" placeholder="abcde@yahoo.com" aria-required="true"/>
      <p></p>
      <label id="username">Username: </label>
      <input type="text" aria-required="true"/>
      <p></p>
      <label id="password">Password: </label>
      <input type="text" aria-required="true"/>
      <p></p>
      <label id="mbudget">Monthly income estimate: $</label>
      <input type="number" placeholder="1500" aria-required="true"/>.00
      <p></p>
      <input id="submit" type="submit" name="submit" value="SUBMIT"/>
      <input id = "reset" type="reset" value="RESET"/>
    </form>
  );
}

export default SignUpPage;
