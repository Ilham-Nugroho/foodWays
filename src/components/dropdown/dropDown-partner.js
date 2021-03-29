import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";

import { useQuery } from "react-query";

import { API } from "../../config/api";

import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { UserContext } from "../../context/userContext";

const DropPartner = () => {
  const [state, dispatch] = useContext(UserContext);

  const LogoutUser = () => {
    dispatch({
      type: "LOGOUT",
    });
  };

  return (
    <div id="nav-dropdown">
      <NavDropdown.Item
        as={Link}
        to={`/partner/${state.user.id}`}
        className="nav-dropdown d-flex justify-content-start"
      >
        <img
          className="pr-3"
          src="/img/profilelogo.png"
          style={{ height: "30px" }}
        />{" "}
        Profile
      </NavDropdown.Item>
      <NavDropdown.Item
        as={Link}
        to={`/${state.user.id}/add-menu`}
        className="nav-dropdown d-flex justify-content-start"
      >
        <img
          className="pr-3"
          src="/img/addproductlogo.png"
          style={{ height: "30px" }}
        />{" "}
        Add Product
      </NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item
        className="nav-dropdown d-flex justify-content-start"
        onClick={LogoutUser}
      >
        <img
          className="pr-3"
          src="/img/logoutlogo.png"
          style={{ height: "30px" }}
        />
        Log Out
      </NavDropdown.Item>
    </div>
  );
};

export default DropPartner;
