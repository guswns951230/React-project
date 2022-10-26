import { NavLink } from "react-router-dom";

const WelcomePage = () => {
  return (
    <div>
      <h1>Welcome page</h1>
      <NavLink to="home">Start</NavLink>
    </div>
  );
};

export default WelcomePage;
