import { NavLink } from "react-router-dom";

import { Container, Nav, Navbar } from "react-bootstrap";

const NavbarComp = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <NavLink className="navbar-brand" to="/">
            Navbar
          </NavLink>
          <Nav className="me-auto">
            {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link> */}
            <NavLink className="nav-link" to="/">
              Logo
            </NavLink>
            <NavLink className="nav-link" to="home">
              Home
            </NavLink>
            <NavLink className="nav-link" to="reservation">
              예약
            </NavLink>
            <NavLink className="nav-link" to="contact">
              Contact
            </NavLink>
            <NavLink className="nav-link" to="loginPage">
              Log In
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComp;
