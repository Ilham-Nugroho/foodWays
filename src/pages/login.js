import React from 'react';
import { Link } from "react-router-dom";

function Login() {
  return(
<div className="text-center" >
  <div className="form-signin" >
    <form>
    <h1 className="login-h1">
      Log In
    </h1>
    

    
    <input type="email" id="inputEmail" className="form-control login-input" placeholder="Email Address" required autofocus/>  
    <input type="password" id="inputPassword" className="form-control login-input" placeholder="Password" required/>

    <button className=" btn btn-lg login-btn" type="submit">Log in</button>

    <div className="mt-3">
      <label> Don't have an account? Click 
      <Link to="/register"> Here</Link>
      </label>
    </div>
    </form>

  </div>    
</div>
  )
}





export default Login;