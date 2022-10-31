import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import "../css/welcomePage.css";

const WelcomePage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <h1>Welcome page</h1>
      </div>
      <div>
        <Button
          variant="outline-dark"
          onClick={() => {
            navigate("/home");
          }}
        >
          start
        </Button>
      </div>
    </>
  );
};

export default WelcomePage;
