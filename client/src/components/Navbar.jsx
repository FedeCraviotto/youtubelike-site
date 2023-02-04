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
import jwt_decode from 'jwt-decode';

function Navbar({ setMenuOpen, menuBackdrop }) {

  // Object.keys(myObject).length !== 0

  const [userObject, setUserObject] = useState({});

  const [userLogged, setUserLogged] = useState(false);

  const [configMenuOpen, setConfigMenuOpen] = useState(false);

  const configMenuref = useRef();

  useEffect(()=>{
    /* global google */
    google.accounts.id.initialize({
      client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
      callback: handleCallbackResponse
    })

  }, [])

  useEffect(()=>{
    !userLogged && google.accounts.id.renderButton(
      document.getElementById('signInDiv'),
      {theme : 'outline', size: 'large'}
    )
  }, [userLogged])
  
  useEffect(()=>{
      configMenuOpen ? configMenuref.current.style.display = 'flex' : configMenuref.current.style.display = 'none';
  }, [configMenuOpen])

  function handleRedirect() {
    window.location.replace("/");
  }

  function handleCallbackResponse(response){
    console.log(response.credential)
    let decodedUserInfo = jwt_decode(response.credential)
    if ((typeof decodedUserInfo) === 'object') {
      setUserObject(decodedUserInfo);
      setUserLogged(true);
      console.log(decodedUserInfo)  
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
            <li className="item"onClick={()=> {
              setUserLogged(false);
              setUserObject({});
              }}>
            <SettingsBrightnessOutlinedIcon />
            Logout
            </li> }
            
          </ul>
          {!userLogged ? (
            // <>
            //   <MoreVertOutlinedIcon onClick={() =>setConfigMenuOpen(!configMenuOpen)}/>{" "}
            //   <button onClick={()=> setUserLogged(true)}>
            //     <AccountCircleOutlinedIcon
            //     />
            //     Acceder
            //   </button>
            // </>
            <>
              <MoreVertOutlinedIcon onClick={() =>setConfigMenuOpen(!configMenuOpen)}/>{" "}
              <div id="signInDiv"></div>
            </>
          ) : (
            <>
              <VideoCallOutlinedIcon />
              <NotificationsOutlinedIcon />
              <button className="logged-menu">
                <img
                  src={userObject?.picture}
                  alt={userObject?.name}
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
