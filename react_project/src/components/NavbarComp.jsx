import { NavLink, useNavigate } from "react-router-dom";
import { useState, useContext, useEffect } from "react";

import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCut } from "@fortawesome/free-solid-svg-icons";

import DataContext from "../context/DataContext";
import "../css/NavbarComp.css";

const NavbarComp = () => {
  const [login, setLogin] = useState(false);
  const data = useContext(DataContext);
  const navigate = useNavigate();

  useEffect(() => {
    setLogin(data.state.user ? true : false);
  }, [data.state.user]);

  const logOut = () => {
    setLogin(false);
    data.action.setUser(null);
    navigate("/home");
  };

  // 현재 페이지 url 가져오기
  const getCurrentURL = () => {
    return window.location.href;
  };
  const url = getCurrentURL();

  return (
    <div>
      <Navbar className="navbar" bg="dark" variant="dark">
        <Container>
          <NavLink className="navbar-brand" to="/">
            <FontAwesomeIcon icon={faCut} /> marcufali
          </NavLink>
          <Nav className="me-auto">
            <NavLink className="nav-link" to="/home">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/info">
              정보
            </NavLink>
            <NavLink className="nav-link" to="/reservation">
              예약
            </NavLink>
          </Nav>
          <Navbar.Collapse className="justify-content-end">
            {
              login ? (
                <Nav>
                  <NavLink
                    className="nav-link"
                    style={{ color: "white" }}
                    to="/mypage"
                  >
                    {data.state.user.name}님의 My Page
                  </NavLink>
                  <Button variant="outline-light" onClick={logOut}>
                    Log Out
                  </Button>{" "}
                </Nav>
              ) : url === "http://localhost:3000/React-project/login" ? (
                <div>
                  <Button
                    variant="outline-light"
                    onClick={() => {
                      navigate("/signup");
                    }}
                  >
                    Sign Up
                  </Button>
                </div>
              ) : (
                <div>
                  <Button
                    variant="outline-light"
                    onClick={() => {
                      navigate("/login");
                    }}
                  >
                    Log In
                  </Button>{" "}
                </div>
              )
              // <div>
              //   <Button
              //     variant="outline-light"
              //     onClick={() => {
              //       navigate("/login");
              //     }}
              //   >
              //     Log In
              //   </Button>{" "}
              // </div>
            }
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComp;
