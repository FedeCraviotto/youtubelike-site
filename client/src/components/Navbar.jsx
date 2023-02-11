import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import KeyboardVoiceOutlinedIcon from "@mui/icons-material/KeyboardVoiceOutlined";
import YoutubeLogo from "../images/yt-med.png";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import SettingsBrightnessOutlinedIcon from "@mui/icons-material/SettingsBrightnessOutlined";
import { DarkModeContext } from "../context/darkModeContext.js";
import { useContext, useState, useEffect, useRef } from "react";
import jwt_decode from "jwt-decode";
import { Link } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import { loginFailure, loginStart, loginSuccess, logout } from "../redux/userSlice";
import OutsideAlerter from "./OutsideAlerter";


function Navbar({ setMenuOpen, menuBackdrop }) {
  // Object.keys(myObject).length !== 0

  const {currentUser} = useSelector((state)=>{
    return state.user
  })
  const [configMenuOpen, setConfigMenuOpen] = useState(false);

  const configMenuref = useRef();

  const dispatch = useDispatch();

  useEffect(() => {
    /* global google */
    google?.accounts.id.initialize({
      client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
      callback: handleCallbackResponse,
    });
  }, []);

  useEffect(() => {
    !currentUser &&
      google.accounts.id.renderButton(document.getElementById("signInDiv"), {
        theme: "outline",
        size: "large",
      });
  }, [currentUser]);


  useEffect(() => {
    configMenuOpen
    ? (configMenuref.current.style.display = "flex")
    : (configMenuref.current.style.display = "none");
  }, [configMenuOpen]);

  function handleCallbackResponse(response) {
    let decodedUserInfo = jwt_decode(response.credential);
    if (typeof decodedUserInfo === "object") {
      dispatch(loginSuccess(decodedUserInfo))
    }
  }

  function handleMenuOpen() {
    setMenuOpen(true);
    menuBackdrop.current.style.opacity = "0.5";
    menuBackdrop.current.style.zIndex = "9";
  }

  const { toggleMode, darkMode } = useContext(DarkModeContext);

  return (
    <div className="navbar">
      <div className="wrapper">
        <MenuOutlinedIcon className="burguer" onClick={handleMenuOpen} />
        <Link to={"/"}>
          <div className="logo">
            <img src={YoutubeLogo} alt="youtube logo" />
            YouTube
          </div>
        </Link>
        <div className="search">
          <input type="text" placeholder="Buscar" />
          <button>
            <SearchOutlinedIcon />
          </button>
          <button className="microphone">
            <KeyboardVoiceOutlinedIcon />
          </button>
        </div>

        <div className="actions">
          <OutsideAlerter setConfigMenuOpen configMenuOpen>
          <ul className="config-menu" ref={configMenuref}>
            <li className="item" onClick={toggleMode}>
              <SettingsBrightnessOutlinedIcon />
              {darkMode ? "Modo Claro" : "Modo Oscuro"}
            </li>
            {currentUser && (
              <li
                className="item"
                onClick={() => {
                  dispatch(logout())
                  setConfigMenuOpen(!configMenuOpen)
                }}
              >
                <SettingsBrightnessOutlinedIcon />
                Logout
              </li>
            )}
          </ul>
          </OutsideAlerter >
          {!currentUser ? (
            <div className="login-menu">
              <MoreVertOutlinedIcon
                onClick={() => setConfigMenuOpen(!configMenuOpen)}
              />{" "}
              <button>
                <Link to={"/login"}>
                  <AccountCircleOutlinedIcon />
                  Acceder
                </Link>
              </button>
              <div id="signInDiv"></div>
            </div>
          ) : (
            <>
              <VideoCallOutlinedIcon onClick={()=> console.log(currentUser)}/>
              <NotificationsOutlinedIcon />
              <button className="logged-menu">
                <img
                  src={currentUser?.picture || currentUser?.image}
                  alt={currentUser?.name || currentUser?.name}
                  onClick={() => setConfigMenuOpen(!configMenuOpen)}
                />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
export default Navbar;
