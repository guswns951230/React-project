import { NavLink } from "react-router-dom";

import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCut } from "@fortawesome/free-solid-svg-icons";

const NavbarComp = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <NavLink className="navbar-brand" to="/">
            <FontAwesomeIcon icon={faCut} /> marcufali
          </NavLink>
          <Nav className="me-auto">
            {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link> */}
            <NavLink className="nav-link" to="home">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/reservation">
              예약
            </NavLink>
            <NavLink className="nav-link" to="contact">
              Contact
            </NavLink>
          </Nav>
          <NavLink className="justify-content-end" to="loginPage">
            <Button variant="outline-light">Log In</Button>{" "}
          </NavLink>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComp;
