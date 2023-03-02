import React from "react";
import "./Login.css";
import logo from "./Background.png";
import { loginUrl } from "./spotify";

function Login() {
  return (
    <div className="login">
      <img src={logo} alt="logo" />
      {/*Host your image somewhere and use the link here and remove the import an above img src*/}
      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  );
} 

export default Login;