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
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  loginFailure,
  loginSuccess,
  logout,
  loginStart,
} from "../redux/userSlice";
import OutsideAlerter from "./OutsideAlerter";
import { auth, provider } from "../firebase.js";
import { signInWithPopup } from "firebase/auth";
import axios from "axios";
import UploadPopup from "./UploadPopup";

function Navbar({ setMenuOpen, menuBackdrop }) {
  const { currentUser } = useSelector((state) => {
    return state.user;
  });
  const [configMenuOpen, setConfigMenuOpen] = useState(false);
  const [videoPopup, setVideoPopup] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const configMenuref = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { toggleMode, darkMode } = useContext(DarkModeContext);

  useEffect(() => {
    configMenuOpen
      ? (configMenuref.current.style.display = "flex")
      : (configMenuref.current.style.display = "none");
  }, [configMenuOpen]);

  function handleMenuOpen() {
    setMenuOpen(true);
    menuBackdrop.current.style.opacity = "0.5";
    menuBackdrop.current.style.zIndex = "9";
  }

  function signInWithGoogle() {
    signInWithPopup(auth, provider)
      .then((result) => {
        dispatch(loginStart());
        axios
          .post(`${process.env.REACT_APP_API}/auth/google`, {
            name: result.user.displayName,
            email: result.user.email,
            image: result.user.photoURL,
          })
          .then((userFromDB) => {
            dispatch(loginSuccess(userFromDB.data));
          })
          .catch((error) => {
            dispatch(loginFailure());
            console.log(error);
          });
      })
      .catch((error) => {
        dispatch(loginFailure());
        console.log(error);
      });
  }

  const handleKeydown = (e) => {
    if (e.key === "Enter") {
      navigate(`/search?q=${searchQuery}`);
    }
  };

  const handleLogout = async () => {
    axios
      .post(`${process.env.REACT_APP_API}/auth/signout`)
      .then((res) => {
        dispatch(logout());
      })
      .catch((err) => {
        throw new Error(err.message)
      });
    setConfigMenuOpen(!configMenuOpen);
  };

  return (
    <>
      <div className="navbar">
        <div className="wrapper">
          <MenuOutlinedIcon className="burguer" onClick={handleMenuOpen} />
          <Link to={"/"}>
            <div className="logo">
              <img
                src={YoutubeLogo}
                alt="youtube logo"
                referrerPolicy="no-referrer"
              />
              YouTube
            </div>
          </Link>
          <div className="search">
            <input
              type="text"
              placeholder="Buscar"
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleKeydown}
            />
            <button onClick={() => navigate(`/search?q=${searchQuery}`)}>
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
                    onClick={handleLogout}
                  >
                    <SettingsBrightnessOutlinedIcon />
                    Logout
                  </li>
                )}
              </ul>
            </OutsideAlerter>
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
                <button onClick={signInWithGoogle}>Sign In with google</button>
              </div>
            ) : (
              <>
                <VideoCallOutlinedIcon onClick={() => setVideoPopup(true)} />
                <NotificationsOutlinedIcon />
                <button className="logged-menu">
                  <img
                    src={currentUser?.picture || currentUser?.image}
                    alt={currentUser?.name || currentUser?.name}
                    onClick={() => setConfigMenuOpen(!configMenuOpen)}
                    referrerPolicy="no-referrer"
                  />
                </button>
              </>
            )}
          </div>
        </div>
      </div>
      {videoPopup && <UploadPopup setVideoPopup={setVideoPopup} />}
    </>
  );
}
export default Navbar;
