import React from "react";
import "./login.scss";
import { Link } from "react-router-dom";
function Login() {
  return (
    <div className="login">
      <div className="wrapper">
        <h1>Login</h1>
        <input type="text" placeholder="username" />
        <input type="password" placeholder="password" />
        <div className="buttons">
          <Link to={"/"}>
            Acceder
          </Link>
          <p>No tienes cuenta?</p>
          <Link to={"/register"}>
            Registrarme
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Login;
