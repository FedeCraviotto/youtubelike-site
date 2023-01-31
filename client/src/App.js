import React from "react";
import "./common.scss";
import "./app.scss";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import { DarkModeContext } from "./context/darkModeContext";
import { useContext } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Reproducer from "./pages/Reproducer";

function App() {

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
        <Menu />
        <div className="main">
          <Navbar />
          <div className="wrapper">
            <RouterProvider router={customRouterProvider} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
