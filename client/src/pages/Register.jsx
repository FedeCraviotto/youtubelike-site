import React from "react";
import './register.scss';

function Register(){
    function handleRedirectToLogin() {
        window.location.replace("/login");
      }

    return(
        <div className="login">
            <div className="wrapper">
                <h1>Login</h1>
                <input type="text" placeholder="username"/>
                <input type="text" placeholder="email"/>
                <input type="password" placeholder="password" />
                <input type="password" placeholder="repeat pass"/>
                <div className="buttons">
                    <button onClick={()=> {
                        window.location.replace("/");
                    }}>Registrarme</button>
                    <p>Ya tienes cuenta?</p>
                    <button onClick={handleRedirectToLogin}>Acceder</button>
                </div>
            </div>
        </div>
    )
}
export default Register;