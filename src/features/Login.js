import React, { useState } from "react";

import "./Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "../firebase";

function Login() {
  const loginUser = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };

  return (
    <div className="user">
      <h1>Login Page</h1>
      <Button onClick={loginUser}>Log In</Button>
    </div>
  );
}

export default Login;