import React from "react";
import './app.scss';
import Menu from "./components/Menu";

function App() {
  return (
    <div className="app">
      <Menu />
      <div className="main">
        <div className="navbar">
          <div className="wrapper">
            Videos
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

