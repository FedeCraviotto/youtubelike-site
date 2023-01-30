import React from "react";
import './menu.scss';
import YoutubeLogo from '../images/yt-med.png';
import HomeIcon from "@mui/icons-material/Home";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import SportsBasketballOutlinedIcon from "@mui/icons-material/SportsBasketballOutlined";
import MovieOutlinedIcon from "@mui/icons-material/MovieOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import SettingsBrightnessOutlinedIcon from "@mui/icons-material/SettingsBrightnessOutlined";
import { DarkModeContext } from '../context/darkModeContext.js';
import { useContext } from "react";

function Menu(){

    const {toggleMode} = useContext(DarkModeContext);
    return (
      <div className="menu">
        <div className="wrapper">
          <div className="logo">
            <img src={YoutubeLogo} alt="" />
            YouTube
          </div>
          <div className="item">
            <HomeIcon />
            Home
          </div>
          <div className="item">
            <ExploreOutlinedIcon />
            Explore
          </div>
          <div className="item">
            <SubscriptionsOutlinedIcon />
            Subscriptions
          </div>
          <hr />
          <div className="item">
            <VideoLibraryOutlinedIcon />
            Library
          </div>
          <div className="item">
            <HistoryOutlinedIcon />
            History
          </div>
          <hr />
          <div className="login">
            Sign in for more videos, comment, and suscribe
            <button>
              <AccountCircleOutlinedIcon />
              Sign In
            </button>
          </div>
          <hr />
          <div className="item">
            <LibraryMusicOutlinedIcon />
            Music
          </div>
          <div className="item">
            <SportsBasketballOutlinedIcon />
            Sports
          </div>
          <div className="item">
            <SportsEsportsOutlinedIcon />
            Gaming
          </div>
          <div className="item">
            <MovieOutlinedIcon />
            Movies
          </div>
          <div className="item">
            <ArticleOutlinedIcon />
            News
          </div>
          <div className="item">
            <LiveTvOutlinedIcon />
            Live
          </div>
          <hr />
          <div className="item">
            <SettingsOutlinedIcon />
            Settings
          </div>
          <div className="item">
            <FlagOutlinedIcon />
            Report
          </div>
          <div className="item">
            <HelpOutlineOutlinedIcon />
            Help
          </div>
          <div className="item" onClick={toggleMode}>
              <SettingsBrightnessOutlinedIcon />
              Toggle Mode
          </div>
        </div>
      </div>
    );
}
export default Menu;