import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { UserContext } from "../context/userContext";

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
        to="/user"
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
        to="/add-menu"
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
