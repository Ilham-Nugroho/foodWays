import React, { useState, useContext } from "react";
import { useQuery, useMutation } from "react-query";

import { UserContext } from "../context/userContext";
import { Modal, Button } from "react-bootstrap";
import { useHistory, Link } from "react-router-dom";

import { API, setAuthToken } from "../config/api";
import Register from "./register";

function Login() {
  const router = useHistory();
  const [state, dispatch] = useContext(UserContext);
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  const [form, setForm] = useState({
    email: "kfc@gmail.com",
    password: "kfc123",
  });

  const { email, password } = form;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prevState) => ({
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

  // {registerProfile.error?.response?.data && (
  //   <div class="alert alert-danger" role="alert">
  //     {registerProfile.error?.response?.data.message}
  //   </div>
  // )}

  const login = useMutation(async () => {
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
    // console.log(response.data);

    dispatch({
      type: "LOGIN_SUCCESS",
      payload: response.data.data.profile,
    });

    setAuthToken(response.data.data.profile.token);
    router.push("/");
  });

  const onSubmit = async (event) => {
    event.preventDefault();

    login.mutate();
  };

  return (
    <div className="text-center">
      <div className="form-signin">
        <form onSubmit={onSubmit}>
          <h1 className="login-h1">Log In</h1>

          {login.error?.response?.data && (
            <div class="alert alert-danger" role="alert">
              {login.error?.response?.data?.message}
            </div>
          )}

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
          <pre>{JSON.stringify(form, null, 2)}</pre>

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
