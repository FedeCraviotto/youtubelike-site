import React, { useState } from "react";
import "./login.scss";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { useDispatch } from "react-redux";
import { loginStart, loginSuccess } from "../redux/userSlice";

function Login() {

  const navigate = useNavigate();
  const [loginError, setLoginError] = useState(null)
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch()

  function handleChange(e) {
    setInputs((previousInputs) => ({
      ...previousInputs,
      [e.target.name]: e.target.value,
    }));
  }

  async function handleClick(e) {
    e.preventDefault();
    dispatch(loginStart());
    try {
      const res = await axios.post(process.env.REACT_APP_API + "/auth/signin",inputs);
      dispatch(loginSuccess(res.data))
      navigate('/');
    } catch (error) {
        setLoginError(error.response.data.message)
    }
  };

  return (
    <div className="login">
      <div className="wrapper">
        <h1>Login</h1>
        <input type="text" name='email' placeholder="email" onChange={handleChange}/>
        <input type="password" name='password' placeholder="password" onChange={handleChange}/>
        <span className="error-message">{loginError && loginError}</span>
        
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
