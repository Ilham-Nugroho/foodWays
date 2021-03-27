import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

import React, { useState } from "react";

import { Modal } from "react-bootstrap";
import Login from "../pages/login";
import Register from "../pages/register";

import { API } from "../config/api";

const NavbarComponent = () => {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  const handleClose = () => {
    setShow(false);
  };

  const handleClose2 = () => {
    setShow2(false);
  };

  return (
    <div>
      <Navbar id="nav" expand="lg" variant="dark">
        <Navbar.Brand href="/" className="text-light" id="brand">
          <img src="./img/brand.svg" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto ">
            <Nav.Link className="text-dark">
              <button
                className="btn btn-md nav-login-btn"
                onClick={() => {
                  setShow(true);
                }}
              >
                Log In
              </button>
            </Nav.Link>
            <Nav.Link className="text-dark">
              <button
                className="btn btn-md nav-login-btn"
                onClick={() => {
                  setShow2(true);
                }}
              >
                Register
              </button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Modal show={show} onHide={handleClose}>
        {/* <Modal.Header closeButton></Modal.Header> */}
        <Modal.Body>
          <Login />
        </Modal.Body>
      </Modal>
      <Modal show={show2} onHide={handleClose2}>
        {/* <Modal.Header closeButton></Modal.Header> */}
        <Modal.Body>
          <Register />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default NavbarComponent;
