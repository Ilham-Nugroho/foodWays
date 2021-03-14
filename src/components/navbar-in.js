import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

import React from "react";

const NavbarIn = () => {
  return (
    <div>
      <Navbar id="nav" expand="lg" variant="dark">
        <Navbar.Brand as={Link} to="/" className="text-light" id="brand">
          <img src="./img/brand.svg" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto ">
            <Nav.Link as={Link} to="/cart" className="text-dark">
              <img src="./img/cart.png" />
            </Nav.Link>
            <Nav.Link as={Link} to="/profile" className="text-dark">
              <img src="./img/profil.png" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarIn;
