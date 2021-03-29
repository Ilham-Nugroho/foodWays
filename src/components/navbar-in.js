import React, { useContext } from "react";
import { useQuery } from "react-query";

import { Navbar, Nav, NavDropdown, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

import { API, setAuthToken } from "../config/api";

import { UserContext } from "../context/userContext";
import { CartContext } from "../context/cartContext";

import DropUser from "./dropdown/dropDown-user";
import DropPartner from "./dropdown/dropDown-partner";

const NavbarIn = () => {
  const [cartState, cartDispatch] = useContext(CartContext);
  const [userState, userDispatch] = useContext(UserContext);

  const {
    data: navbarPartnerData,
    error: navbarPartnerError,
    loading: navbarPartnerLoading,
    refetch: navbarPartnerRefetch,
  } = useQuery(["navbarPartnerCache", userState.user.id], async () => {
    return API.get(`/profile/${userState.user.id}`);
  });

  const profileImg = (
    <img
      src={navbarPartnerData?.data?.data?.profile?.avatar}
      style={{ height: "50px", width: "50px", borderRadius: "100%" }}
    />
  );

  const totalQty = cartState.carts.reduce((qty, item) => {
    return qty + item.qty;
  }, 0);

  return (
    <div>
      <Navbar id="nav" expand="lg" variant="dark">
        <Navbar.Brand
          as={Link}
          to="/"
          className="text-light "
          id="brand"
          style={{ position: "relative", left: "25px" }}
        >
          <img src="/img/brand.svg" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className="ml-auto "
            style={{ position: "relative", right: "25px" }}
          >
            <Nav.Link
              as={Link}
              to="/cart"
              className="text-dark mt-3 "
              style={{ position: "relative", right: "10px", bottom: "1px" }}
            >
              <img src="/img/cart.png" />
              <Badge
                pill
                variant="danger"
                style={{ position: "relative", bottom: "10px", right: "10px" }}
              >
                {totalQty > 0 ? totalQty : null}
              </Badge>
            </Nav.Link>
            <NavDropdown title={profileImg} id="nav-dropdown">
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
