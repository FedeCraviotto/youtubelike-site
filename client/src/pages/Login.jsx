import React from "react";
import './login.scss';

function Login(){

    function handleRedirectToRegister() {
        window.location.replace("/register");
      }

    return(
        <div className="login">
            <div className="wrapper">
                <h1>Login</h1>
                <input type="text" placeholder="username"/>
                <input type="password" placeholder="password" />
                <div className="buttons">
                    <button>Acceder</button>
                    <p>No tienes cuenta?</p>
                    <button onClick={handleRedirectToRegister} >Registrarme</button>
                </div>
            </div>
        </div>
    )
}
export default Login;