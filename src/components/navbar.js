import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <Navbar id="nav" expand="lg" variant="dark">
      <Navbar.Brand href="#home" className="text-light" id="brand">
        <img src="./img/brand.svg"/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto ">
          <Nav.Link as={Link} to="/" className="text-dark">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/login" className="text-dark">
            Login
          </Nav.Link>
          <Nav.Link as={Link} to="/Register" className="text-dark">
            Register
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;