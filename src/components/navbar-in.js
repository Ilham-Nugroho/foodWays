import React, { useContext } from "react";
import { Navbar, Nav, NavDropdown, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

import { API, setAuthToken } from "../config/api";

import { UserContext } from "../context/userContext";
import { CartContext } from "../context/cartContext";

import DropUser from "./dropdown/dropDown-user";
import DropPartner from "./dropdown/dropDown-partner";

const NavbarIn = () => {
  const test = <img src="/img/profil.png" />;
  const [cartState, cartDispatch] = useContext(CartContext);
  const [userState, userDispatch] = useContext(UserContext);

  return (
    <div>
      <Navbar id="nav" expand="lg" variant="dark">
        <Navbar.Brand
          as={Link}
          to="/"
          className="text-light "
          id="brand"
          style={{ position: "relative", left: "15px" }}
        >
          <img src="/img/brand.svg" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className="ml-auto "
            style={{ position: "relative", right: "15px" }}
          >
            <Nav.Link as={Link} to="/cart" className="text-dark mt-3">
              <img src="/img/cart.png" />
              <Badge
                pill
                variant="danger"
                style={{ position: "relative", bottom: "10px", right: "10px" }}
              >
                {cartState.carts.length > 0 ? cartState.carts.length : null}
              </Badge>
            </Nav.Link>
            <NavDropdown title={test} id="nav-dropdown">
              {userState.user.role == "PARTNER" ? (
                <DropPartner />
              ) : (
                <DropUser />
              )}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarIn;
