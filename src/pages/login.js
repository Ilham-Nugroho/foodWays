import React, { useState, useContext } from "react";
import { UserContext } from "../context/userContext";
import { Modal, Button } from "react-bootstrap";
import { useHistory, Link } from "react-router-dom";

import { API, setAuthToken } from "../config/api";
import Register from "./Register";

function Login() {
  const router = useHistory();
  const [state, dispatch] = useContext(UserContext);
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  const [user, setUser] = useState({
    email: "kfc@gmail.com",
    password: "kfc123",
  });

  const { email, password } = user;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const LoginUser = () => {
    handleClose();
  };

  const handleClose = () => {
    setShow(false);
  };

  const handleClose2 = () => {
    setShow2(false);
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const body = JSON.stringify({
        email,
        password,
      });

      const response = await API.post("/login", body, config);
      console.log(response.data);
      console.log(response.data.data.profile);

      dispatch({
        type: "LOGIN_SUCCESS",
        payload: response.data.data.profile,
      });

      setAuthToken(response.data.data.profile.token);
      router.push("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="text-center">
      <div className="form-signin">
        <form onSubmit={onSubmit}>
          <h1 className="login-h1">Log In</h1>

          <input
            onChange={handleChange}
            name="email"
            value={email}
            type="email"
            className="form-control login-input"
            placeholder="Email Address"
            autofocus
          />

          <input
            onChange={handleChange}
            value={password}
            name="password"
            type="password"
            className="form-control login-input"
            placeholder="Password"
          />
          <pre>{JSON.stringify(user, null, 2)}</pre>

          <button
            className=" btn btn-lg login-btn mt-3"
            onClick={LoginUser}
            type="submit"
          >
            Log in
          </button>

          <div className="mt-3">
            <label>
              Don't have an account? Click
              <span
                style={{ cursor: "pointer" }}
                variant="primary"
                onClick={() => {
                  handleClose();
                  setShow2(true);
                }}
              >
                Here
              </span>
            </label>
          </div>
        </form>
      </div>
      <Modal show={show2} onHide={handleClose2}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Register />
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Login;
