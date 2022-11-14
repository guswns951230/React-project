import { Outlet } from "react-router-dom";
import NavbarComp from "../components/NavbarComp";

const Layout = () => {
  return (
    <div>
      <NavbarComp />
      <Outlet />
    </div>
  );
};

export default Layout;
