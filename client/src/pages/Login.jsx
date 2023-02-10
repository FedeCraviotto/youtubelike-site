import React, { useState } from "react";
import "./login.scss";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

function Login() {

  const navigate = useNavigate();
  const [err, setErr] = useState(null);
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    setInputs((previousInputs) => ({
      ...previousInputs,
      [e.target.name]: e.target.value,
    }));
  }

  async function handleClick(e) {
    e.preventDefault();
    try {
      await axios.post(process.env.REACT_APP_API + "/auth/signin",inputs);
      navigate('/');
    } catch (error) {
        setErr(error.response.data.message);
    }
  };

  return (
    <div className="login">
      <div className="wrapper">
        <h1>Login</h1>
        <input type="text" name='email' placeholder="email" onChange={handleChange}/>
        <input type="password" name='password' placeholder="password" onChange={handleChange}/>
        {err && err}
        
        <div className="buttons">
          <button onClick={handleClick}>
            Acceder
          </button>
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
