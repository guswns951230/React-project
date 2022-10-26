import { NavLink } from "react-router-dom";

const NavbarComp = () => {
  return (
    <div>
      <NavLink to="/">Logo</NavLink>
      <NavLink to="home">Home</NavLink>
      <NavLink to="reservation">예약</NavLink>
      <NavLink to="contact">Contact</NavLink>
      <NavLink to="loginPage">Log In</NavLink>
    </div>
  );
};

export default NavbarComp;
