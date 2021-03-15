import React, { useContext } from "react";
import { Navbar, Nav, NavDropdown, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

import { CartContext } from "../context/cartContext";

import DropUser from "./drop-user";

const NavbarIn = () => {
  const test = <img src="/img/profil.png" />;
  const [state, dispatch] = useContext(CartContext);

  // const apakah = () => {
  //   {
  //     state.carts.length > 1 ? "69" : "33";
  //   }
  // };

  return (
    <div>
      <Navbar id="nav" expand="lg" variant="dark">
        <Navbar.Brand as={Link} to="/" className="text-light " id="brand">
          <img src="/img/brand.svg" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto ">
            <Nav.Link as={Link} to="/cart" className="text-dark mt-3">
              <img src="/img/cart.png" />
              <Badge
                pill
                variant="danger"
                style={{ position: "relative", bottom: "10px", right: "10px" }}
              >
                {state.carts.length > 0 ? state.carts.length : null}
              </Badge>
            </Nav.Link>
            <NavDropdown title={test} id="nav-dropdown">
              <DropUser />
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarIn;
