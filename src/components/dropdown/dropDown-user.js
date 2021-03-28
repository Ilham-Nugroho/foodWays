import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { UserContext } from "../../context/userContext";

const DropUser = () => {
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
          className="pr-4"
          src="/img/profilelogo.png"
          style={{ height: "30px" }}
        />{" "}
        Profile
      </NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item
        className="nav-dropdown d-flex justify-content-start"
        onClick={LogoutUser}
      >
        <img
          className="pr-4"
          src="/img/logoutlogo.png"
          style={{ height: "30px" }}
        />
        Log Out
      </NavDropdown.Item>
    </div>
  );
};

export default DropUser;
