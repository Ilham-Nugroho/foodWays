import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { UserContext } from "../context/userContext";

const DropUser = () => {
  const [state, dispatch] = useContext(UserContext);

  const LogoutUser = () => {
    dispatch({
      type: "LOGOUT",
    });
  };

  return (
    <div id="nav-dropdown">
      <NavDropdown.Item as={Link} to="/user" className="nav-dropdown">
        <img src="/img/profilelogo.png" /> Profile
      </NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item className="nav-dropdown" onClick={LogoutUser}>
        <img src="/img/logoutlogo.png" />
        Log Out
      </NavDropdown.Item>
    </div>
  );
};

export default DropUser;
