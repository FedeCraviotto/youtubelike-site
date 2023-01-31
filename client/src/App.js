import React from "react";
import "./common.scss";
import "./app.scss";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import { DarkModeContext } from "./context/darkModeContext";
import { useContext } from "react";
import { createBrowserRouter,
  RouterProvider,
  Navigate
   } from 'react-router-dom';

function App() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={`theme-${darkMode ? "dark" : "light"}`}>
      <div className="app">
        
          <Menu />
          <div className="main">
            <Navbar />
            <div className="wrapper">
              
            </div>
          </div>
        
      </div>
    </div>
  );
}

export default App;
