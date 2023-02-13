import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

import "./register.scss";

function Register() {
  

  const navigate = useNavigate();
  const [err, setErr] = useState(null);
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
    image: "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png",
    repeatPassword: "",
  });

  function handleChange(e) {
    setInputs((previousInputs) => ({
      ...previousInputs,
      [e.target.name]: e.target.value,
    }));
  }

  async function handleClick(e) {
    e.preventDefault();
    if(inputs.password!==inputs.repeatPassword) return setErr('Passwords don\'t match');
    try {
      await axios.post(process.env.REACT_APP_API + "/auth/signup",inputs);
      navigate('/login');
    } catch (error) {
        setErr(error.response.data.message);
    }
  };
  return (
    <div className="login">
      <div className="wrapper">
        <h1>Login</h1>
        <input type="text" name='name' placeholder="name" onChange={handleChange}/>
        <input type="text" name='email' placeholder="email" onChange={handleChange}/>
        <input type="password" name='password' placeholder="password" onChange={handleChange}/>
        <input type="password" name='repeatPassword' placeholder="repeat pass" onChange={handleChange}/>
        {err && err}
        <div className="buttons">
          <button onClick={handleClick}>
            Registrarme
          </button>
          <p>Ya tienes cuenta?</p>
          <Link to={"/login"}>Ingresá</Link>
        </div>
      </div>
    </div>
  );
}
export default Register;
