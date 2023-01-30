import React from "react";
import "./common.scss";
import "./app.scss";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import { DarkModeContext } from "./context/darkModeContext";
import { useContext } from "react";

function App() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={`theme-${darkMode ? "dark" : "light"}`}>
      <div className="app">
        <Menu />
        <div className="main">
          <Navbar />
          <div>Videos</div>
          <div>Videos</div>
          <div>Videos</div>
          <div>Videos</div>
          <div>Videos</div>
          <div>Videos</div>
          <div>Videos</div>
          <div>Videos</div>
          <div>Videos</div>
          <div>Videos</div>
          <div>Videos</div>
          <div>Videos</div>
          <div>Videos</div>
          <div>Videos</div>
          <div>Videos</div>
          <div>Videos</div>
          <div>Videos</div>
          <div>Videos</div>
          <div>Videos</div>
          <div>Videos</div>
          <div>Videos</div>
          <div>Videos</div>
          <div>Videos</div>
          <div>Videos</div>
          <div>Videos</div>
          <div>Videos</div>
          <div>Videos</div>
          <div>Videos</div>
          <div>Videos</div>
          <div>Videos</div>
          <div>Videos</div>
          <div>Videos</div>
          <div>Videos</div>
          <div>Videos</div>
          <div>Videos</div>
          <div>Videos</div>
          <div>Videos</div>
          <div>Videos</div>
          <div>Videos</div>
          <div>Videos</div>
          <div>Videos</div>
          <div>Videos</div>
          <div>Videos</div>
          <div>Videos</div>
          <div>Videos</div>
          <div>Videos</div>
          <div>Videos</div>
          <div>Videos</div>
          <div>Videos</div>
          <div>Videos</div>
          <div>Videos</div>
          <div>Videos</div>
          <div>Videos</div>
          <div>Videos</div>
          <div>Videos</div>
          <div>Videos</div>
          <div>Videos</div>
          <div>Videos</div>
          <div>Videos</div>
          <div>Videos</div>
          <div>Videos</div>
          <div>Videos</div>
          <div>Videos</div>
        </div>
      </div>
    </div>
  );
}

export default App;
