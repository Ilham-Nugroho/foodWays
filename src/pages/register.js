import React, { useState, useContext } from "react";
import { UserContext } from "../context/userContext";
import { Modal } from "react-bootstrap";

import Login from "./Login";

function Register() {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  const [user, setUser] = useState({
    email: "",
    password: "",
    fullname: "",
    gender: "",
    phone: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleClose = () => {
    setShow(false);
  };

  const handleClose2 = () => {
    setShow2(false);
  };

  return (
    <div className="text-center" onHide={handleClose2}>
      <div className="form-signin">
        <form>
          <h1 className="login-h1">Register</h1>

          <input
            onChange={handleChange}
            name="email"
            value={user.email}
            type="email"
            className="form-control login-input"
            placeholder="Email Address"
            autofocus
          />

          <input
            onChange={handleChange}
            value={user.password}
            name="password"
            type="password"
            className="form-control login-input"
            placeholder="Password"
          />

          <input
            onChange={handleChange}
            value={user.fullname}
            name="fullname"
            type="text"
            className="form-control register-input"
            placeholder="Full Name"
          />
          <input
            onChange={handleChange}
            value={user.gender}
            name="gender"
            type="text"
            className="form-control register-input"
            placeholder="Gender"
          />
          <input
            onChange={handleChange}
            value={user.phone}
            name="phone"
            type="text"
            className="form-control register-input"
            placeholder="Phone"
          />

          <select className="form-control register-input" name="asWho">
            <option value="user">As User</option>
            <option value="partner">As Partner</option>
          </select>

          <button className=" btn btn-lg login-btn mt-4" type="submit">
            Register
          </button>

          <div className="mt-3">
            <label>
              Don't have an account? Click
              <span
                style={{ cursor: "pointer" }}
                variant="primary"
                onClick={() => {
                  handleClose2();
                  setShow(true);
                }}
              >
                Here
              </span>
            </label>
          </div>
        </form>
      </div>
      <Modal show={show} onHide={handleClose}>
        {/* <Modal.Header closeButton></Modal.Header> */}
        <Modal.Body>
          <Login />
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Register;
