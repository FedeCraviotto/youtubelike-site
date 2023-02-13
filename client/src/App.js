import React, { useEffect, useRef, useState } from "react";
import "./common.scss";
import "./app.scss";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import { DarkModeContext } from "./context/darkModeContext";
import { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Reproducer from "./pages/Reproducer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import axios from "axios";
import { useSelector } from "react-redux";
axios.defaults.withCredentials = true;

// RouterProvider --> Si tengo vistas aparte de la aplicacion principal.
// Por ejemplo el Login, Register, ademas de la App ppal, que comparte navbar y etc.
// Recordar setearle los children
// NO va a haber elementos compartidos POR FUERA de las app o vistas ppales. 

//PERO

// BrowserRouter --> Lo uso tengo SIEMPRE UN MISMO OVERLAY, compartido por varias vistas o apps.
// Recordar que cada Route tiene element={}

//ENTONCES

// Mi App va a tener Paginas que no comparten funcionalidades? RouterProvider
// Mi App va a compartir un mismo menu? -> BroserRouter

function App() {

  const {currentUser} = useSelector((state)=> state.user);
  const menuBackdrop = useRef(null);
  // As useRef doesn't triggers element's re-render, we should force the re-render
  // If we don't force the re render, useRef initally will be 'undefined'
  const [refAcquired, setRefAcquired] = useState(false);

  useEffect(() => {
    setRefAcquired(true);
  },[]);

  function handleMenuClose() {
    setMenuOpen(false);
    menuBackdrop.current.style.opacity = "0";
    menuBackdrop.current.style.zIndex = "-1";
  }

  const [menuOpen, setMenuOpen] = useState(false);

  const { darkMode } = useContext(DarkModeContext);

  return (
    <BrowserRouter>
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <div className="app">
          <div className="main">
            <div
              className="backdrop"
              ref={menuBackdrop}
              onClick={handleMenuClose}
            ></div>
            <Navbar setMenuOpen={setMenuOpen} menuBackdrop={menuBackdrop} />
            <Menu
              menuOpen={menuOpen}
              setMenuOpen={setMenuOpen}
              menuBackdrop={menuBackdrop}
            />
            <div className="main-wrapper">
                <Routes>
                  <Route  path="/">
                    <Route exact index element={<Home type={'random'}/>} />
                    <Route path="/trends"  element={<Home type={'trend'}/>} />
                    <Route path="/subscriptions" element={<Home type={'sub'}/>} />
                  </Route>
                  <Route path="video">
                    <Route path=":id" element={<Reproducer />} />
                  </Route>
                  <Route path="/login" element={currentUser ? (<Navigate replace to={"/"} />) : (<Login />)} />
                  <Route path="/register" element={currentUser ? (<Navigate replace to={"/"} />) :(<Register />)} />
                </Routes>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
