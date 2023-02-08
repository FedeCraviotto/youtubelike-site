import { Link } from "react-router-dom";
import React from "react";
import "./register.scss";

function Register() {
  return (
    <div className="login">
      <div className="wrapper">
        <h1>Login</h1>
        <input type="text" placeholder="username" />
        <input type="text" placeholder="email" />
        <input type="password" placeholder="password" />
        <input type="password" placeholder="repeat pass" />
        <div className="buttons">
          <Link to={"/register"}>Registrarme</Link>
          <p>Ya tienes cuenta?</p>
          <Link to={"/login"}>Ingresá</Link>
        </div>
      </div>
    </div>
  );
}
export default Register;
