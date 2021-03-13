import React, { useContext, useState } from "react";
import { useHistory, Link } from "react-router-dom";

import { Modal, Button } from "react-bootstrap";

import { UserContext } from "../context/userContext";

import NavbarIn from "../components/navbar-in";
import NavbarOut from "../components/navbar-out";

const HomeIn = () => {
  const router = useHistory();
  const [state, dispatch] = useContext(UserContext);
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

  function handleClick(event) {
    event.preventDefault();
  }

  const LoginUser = () => {
    dispatch({
      type: "LOGIN_SUCCESS",
    });
    handleClose();
    router.push("/menu");
  };

  const handleClose = () => {
    setShow(false);
  };

  const handleClose2 = () => {
    setShow2(false);
  };

  return (
    <div>
      {state.isLogin ? <NavbarIn /> : <NavbarOut />}
      <div className="home-header">
        <div className="header-title">
          <div className="title-content">
            <h1>Are You Hungry?</h1>
            <h1>Express Home Delivery</h1>

            <div className="content-desc">
              <img src="./img/Rectangle 2.png" />
              <p>
                Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem
                ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum
                dolor sit amet
              </p>
            </div>
          </div>
          <div className="header-pizza">
            <img src="./img/pizza.png" />
          </div>
        </div>
      </div>

      <div className="home-content">
        <div className="restaurant">
          <div className="">
            <h3>Popular Restaurant</h3>
          </div>

          <div className="row mt-2">
            <div
              className="mt-2 col-lg-3 col-md-6"
              onClick={() => setShow(true)}
            >
              <div className="restaurant-card">
                <img src="./img/burgerking.png" />
                <h5>Burger King</h5>
              </div>
            </div>

            <div className="mt-2 col-lg-3 col-md-6 ">
              <div className="restaurant-card">
                <img src="./img/starbucks.png" />
                <h5>Starbucks</h5>
              </div>
            </div>

            <div className=" mt-2 col-lg-3 col-md-6 ">
              <div className="restaurant-card">
                <img src="./img/kfc.png" />
                <h5>KFC</h5>
              </div>
            </div>

            <div className="mt-2 col-lg-3 col-md-6 ">
              <div className="restaurant-card">
                <img src="./img/jco.png" />
                <h5>JCo</h5>
              </div>
            </div>
          </div>
        </div>

        <div className="restaurant">
          <div>
            <h3>Restaurant Near You</h3>
          </div>
          <div className="row mt-3">
            <div className="col-lg-3 col-md-6">
              <div className="card">
                <img src="./img/nasgor.png" />
                <h6>Geprek Bensu</h6>
                <p>0.2 KM</p>
              </div>
            </div>

            <div className=" col-lg-3 col-md-6">
              <div className="card">
                <img src="./img/geprek.png" />
                <h6>Nasi Goreng</h6>
                <p>0.6 KM</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="card">
                <img src="./img/pecel.png" />
                <h6>Pecel</h6>
                <p>0.6 KM</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="card">
                <img src="./img/kopi.png" />
                <h6>Kopi Kenangan</h6>
                <p>1.6 KM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
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

                <button
                  className=" btn btn-lg login-btn"
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
          </div>
        </Modal.Body>
      </Modal>

      <Modal show={show2} onHide={handleClose2}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="text-center">
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

                <input
                  onChange={handleChange}
                  value={user.fullname}
                  name="fullname"
                  type="text"
                  className="form-control register-input"
                  placeholder="Full Name"
                />
                <pre>{JSON.stringify(user.fullname, 2, null)}</pre>
                <input
                  onChange={handleChange}
                  value={user.gender}
                  name="gender"
                  type="text"
                  className="form-control register-input"
                  placeholder="Gender"
                />
                <pre>{JSON.stringify(user.gender, 2, null)}</pre>
                <input
                  onChange={handleChange}
                  value={user.phone}
                  name="phone"
                  type="text"
                  className="form-control register-input"
                  placeholder="Phone"
                />
                <pre>{JSON.stringify(user.phone, 2, null)}</pre>

                <button
                  className=" btn btn-lg login-btn"
                  // onClick={LoginUser}
                  type="submit"
                >
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
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default HomeIn;
