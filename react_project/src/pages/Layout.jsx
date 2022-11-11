import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import NavbarComp from "../components/NavbarComp";

const Layout = () => {
  return (
    <div>
      <NavbarComp />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
