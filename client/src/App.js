import React, { useEffect, useRef, useState } from "react";
import "./common.scss";
import "./app.scss";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import { DarkModeContext } from "./context/darkModeContext";
import { useContext } from "react";
import {
  createBrowserRouter,
  RouterProvider,

} from "react-router-dom";
import Home from "./pages/Home";
import Reproducer from "./pages/Reproducer";
function App() {
  const menuBackdrop = useRef(null)
  // As useRef doesn't triggers component's re-render, we should force the re-render
  // If we don't force the re render, useRef initally will be 'undefined' 
  const [refAcquired, setRefAcquired] = useState(false)
  
  useEffect(() => {
      setRefAcquired(true)
  }, []);

  function handleMenuClose(){
    setMenuOpen(false);
    menuBackdrop.current.style.opacity = "0";
    menuBackdrop.current.style.zIndex = "-1";
  }


  const [menuOpen, setMenuOpen] = useState(false)

  const customRouterProvider = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/video/:id",
      element: <Reproducer />,
    },
  ]);

  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={`theme-${darkMode ? "dark" : "light"}`}>
      <div className="app">
        <div className="main">
          <div className="backdrop" ref={menuBackdrop} onClick={handleMenuClose}></div>
          <Navbar setMenuOpen={setMenuOpen} menuBackdrop={menuBackdrop}/>
          <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} menuBackdrop={menuBackdrop}/>
          <div className="main-wrapper">
            <RouterProvider router={customRouterProvider} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
