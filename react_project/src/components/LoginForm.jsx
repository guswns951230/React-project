import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import DataContext from "../context/DataContext";

const LoginForm = () => {
  const [name, setName] = useState("");
  const { action } = useContext(DataContext);
  const navigate = useNavigate();

  const loginUser = () => {
    action.setUser({ name: name, profile: null });
    navigate("/home");
  };

  return (
    <Form className="m-5" onSubmit={loginUser}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>ID</Form.Label>
        <Form.Control
          type="text"
          placeholder="ID를 입력해주세요"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default LoginForm;
