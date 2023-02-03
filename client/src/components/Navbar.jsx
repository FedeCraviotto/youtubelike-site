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
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

function Navbar({ setMenuOpen, menuBackdrop }) {
  const [userLogged, setUserLogged] = useState(false);

  const [configMenuOpen, setConfigMenuOpen] = useState(false);

  const [currentUser, setCurrentUser] = useState({
    id: 44,
    cover:
      "https://i.ytimg.com/vi/WYp9Eo9T3BA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA70fLxAnFjKz506cZ_Naivou-HYA",
    userName: "Fede Craviotto",
    email: "fc@gmail.com",
    avatar:
      "https://yt3.ggpht.com/ytc/AL5GRJW6fobZK0VK-aBTyGiVjTB6It9BtIYWMvncEhFWEA=s68-c-k-c0x00ffffff-no-rj",
  });

  const configMenuref = useRef();

  useEffect(()=>{
      configMenuOpen ? configMenuref.current.style.display = 'flex' : configMenuref.current.style.display = 'none';
  }, [configMenuOpen])

  function handleRedirect() {
    window.location.replace("/");
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
        <div className="logo" onClick={handleRedirect}>
          <img src={YoutubeLogo} alt="" />
          YouTube
        </div>
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
          <ul className="config-menu" ref={configMenuref}>
            <li className="item" onClick={toggleMode}>
            <SettingsBrightnessOutlinedIcon />
            {darkMode ? "Modo Claro" : "Modo Oscuro"}
            </li>
            {userLogged && 
            <li className="item"onClick={()=> setUserLogged(false)}>
            <SettingsBrightnessOutlinedIcon />
            Logout
            </li> }
            
          </ul>
          {!userLogged ? (
            <>
              <MoreVertOutlinedIcon onClick={() =>setConfigMenuOpen(!configMenuOpen)}/>{" "}
              <button onClick={()=> setUserLogged(true)}>
                <AccountCircleOutlinedIcon
                />
                Acceder
              </button>
            </>
          ) : (
            <>
              <VideoCallOutlinedIcon />
              <NotificationsOutlinedIcon />
              <button className="logged-menu">
                <img
                  src={currentUser.avatar}
                  alt={currentUser.userName}
                  onClick={()=> setConfigMenuOpen(!configMenuOpen)}
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
