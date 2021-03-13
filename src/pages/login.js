import React, { useState, useContext } from "react";
import { UserContext } from "../context/userContext";
import { Modal, Button } from "react-bootstrap";
import { useHistory, Link } from "react-router-dom";

function Login() {
  // const useForm = (initialValues) => {
  //   const [values, setValues] = useState(initialValues);

  //   return {
  //     values,
  //   }
  // }

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  function handleClick(event) {
    event.preventDefault();
  }

  return (
    <div className="text-center">
      <div className="form-signin">
        <form>
          <h1 className="login-h1">Log In</h1>

          <input
            onChange={handleChange}
            name="email"
            value={user.email}
            type="email"
            className="form-control login-input"
            placeholder="Email Address"
            autofocus
          />
          <pre>{JSON.stringify(user.email, 2, null)}</pre>
          <input
            onChange={handleChange}
            value={user.password}
            name="password"
            type="password"
            className="form-control login-input"
            placeholder="Password"
          />
          <pre>{JSON.stringify(user.password, 2, null)}</pre>

          <Link to="/home">
            <button
              className=" btn btn-lg login-btn"
              onClick={handleClick}
              type="submit"
            >
              Log in
            </button>
          </Link>

          <div className="mt-3">
            <label>
              Don't have an account? Click
              <Link to="/register"> Here</Link>
            </label>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
