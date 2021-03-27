import React, { useState, useContext } from "react";
import { UserContext } from "../context/userContext";
import { Modal } from "react-bootstrap";
import { useQuery, useMutation } from "react-query";
import { useHistory } from "react-router-dom";

import { API, setAuthToken } from "../config/api";

import Login from "./login";

function Register() {
  const [state, dispatch] = useContext(UserContext);
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  const router = useHistory();

  const [form, setForm] = useState({
    email: "",
    password: "",
    name: "",
    phone: "",
    role: "",
  });
  const { email, password, name, phone, role } = form;

  //NEW
  const { data: Profiles, loading, error, refetch } = useQuery(
    "userCache",
    async () => {
      const response = await API.get("/profiles");

      return response.data.data.profiles;
    }
  );
  //NEW

  const registerProfile = useMutation(async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({
      name,
      email,
      password,
      phone,
      role,
    });

    const response = await API.post("/register", body, config);
    refetch();

    dispatch({
      type: "LOGIN_SUCCESS",
      payload: response.data.data.profile,
    });

    setAuthToken(response.data.data.profile.token);

    router.push("/");
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    registerProfile.mutate();
  }; //NEW

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prevState) => ({
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

  if (error) {
    return <h1>error bro</h1>;
  }

  return (
    <div className="text-center" onHide={handleClose2}>
      <div className="form-signin">
        <form onSubmit={handleSubmit}>
          <h1 className="login-h1">Register</h1>

          {registerProfile.error?.response?.data && (
            <div class="alert alert-danger" role="alert">
              {registerProfile.error?.response?.data.message}
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
          <input
            onChange={handleChange}
            value={name}
            name="name"
            type="text"
            className="form-control register-input"
            placeholder="Full Name"
          />
          <input
            onChange={handleChange}
            value={phone}
            name="phone"
            type="text"
            className="form-control register-input"
            placeholder="Phone"
          />
          <input
            onChange={handleChange}
            value={role}
            name="role"
            type="text"
            className="form-control register-input"
            placeholder="Role (USER / PARTNER)"
          />
          {/* <select
            onChange={handleChange}
            className="form-control register-input"
          >
            <option onChange={handleChange} name="role" value="USER">
              USER
            </option>
            <option onChange={handleChange} name="role" value="PARTNER">
              PARTNER
            </option>
          </select> */}
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
