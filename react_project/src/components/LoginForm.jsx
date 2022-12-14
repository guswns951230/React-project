// import { useState, useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

// import DataContext from "../context/DataContext";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const { action } = useContext(DataContext);
  const navigate = useNavigate();

  // const loginUser = () => {
  //   action.setUser({ name: name, profile: null });
  //   navigate("/home");
  // };

  const emailLogin = (e) => {
    e.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate("/home");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage);
        if (errorCode === "auth/wrong-password") {
          alert("잘못된 password입니다.");
        } else if (errorCode === "auth/user-not-found") {
          alert("존재하지 않는 사용자입니다.");
        }
      });
  };

  return (
    <div>
      <h1>Log in</h1>
      <Form className="m-5" onSubmit={emailLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>E-mail</Form.Label>
          <Form.Control
            type="email"
            placeholder="E-mail을 입력해주세요"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
};

export default LoginForm;
