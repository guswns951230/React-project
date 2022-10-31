import { NavLink, useNavigate } from "react-router-dom";
import { useState, useContext, useEffect } from "react";

import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCut } from "@fortawesome/free-solid-svg-icons";

import DataContext from "../context/DataContext";

const NavbarComp = () => {
  const [login, setLogin] = useState(false);
  const data = useContext(DataContext);
  const navigate = useNavigate();

  useEffect(() => {
    setLogin(data.state.user ? true : false);
  }, []);

  const logOut = () => {
    setLogin(false);
    data.action.setUser(null);
    navigate("/home");
  };

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
            <NavLink className="nav-link" to="/home">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/contact">
              Contact
            </NavLink>
            <NavLink className="nav-link" to="/reservation">
              예약
            </NavLink>
          </Nav>
          <Navbar className="justify-content-end" to="loginPage">
            {login ? (
              <Nav>
                <NavLink className="nav-link" to="/mypage">
                  {data.state.user.name}님의 My Page
                </NavLink>
                <Button variant="outline-light" onClick={logOut}>
                  Log Out
                </Button>{" "}
              </Nav>
            ) : (
              <div>
                <Button variant="outline-light">Log In</Button>{" "}
              </div>
            )}
          </Navbar>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComp;
