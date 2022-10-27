import { NavLink } from "react-router-dom";

const WelcomePage = () => {
  return (
    <div>
      <h1>Welcome page</h1>
      <button>
        <NavLink to="home">Start</NavLink>
      </button>
    </div>
  );
};

export default WelcomePage;
