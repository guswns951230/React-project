import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const emailCraete = () => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
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
        if (errorCode === "auth/email-already-in-use") {
          alert("이미 사용중인 E-mail입니다.");
        } else if (password.length < 6) {
          alert("password는 6자리 이상 설정하세요.");
        }
      });
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <Form
        className="m-5"
        // onSubmit={loginUser}
      >
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

        {/* <Button variant="primary" type="submit">
          Login
        </Button> */}
      </Form>
      <Button onClick={emailCraete}>Sign Up</Button>
    </div>
  );
};

export default SignupPage;
