import React from "react";
import './navbar.scss';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import KeyboardVoiceOutlinedIcon from '@mui/icons-material/KeyboardVoiceOutlined';


// import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

function Navbar(){

    return(
        <div className="navbar">
            <div className="wrapper">                
                <div className="search">
                    <input type="text" placeholder="Buscar"/>
                    <button>
                        <SearchOutlinedIcon />
                    </button>
                    <button className="microphone">
                        <KeyboardVoiceOutlinedIcon/>
                    </button>
                </div>
                
                <div className="actions">
                    <NotificationsOutlinedIcon />
                    <VideoCallOutlinedIcon />
                    <button>
                        <AccountCircleOutlinedIcon/>
                        Sign In
                    </button>
                </div>
            </div>
        </div>
    )
};
export default Navbar;