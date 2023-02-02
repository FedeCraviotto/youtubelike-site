import './navbar.scss';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import KeyboardVoiceOutlinedIcon from '@mui/icons-material/KeyboardVoiceOutlined';
import YoutubeLogo from '../images/yt-med.png';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';


function Navbar({ setMenuOpen, menuBackdrop }){
    function handleRedirect(){
        window.location.replace('/');
      }
      
      function handleMenuOpen(){
        setMenuOpen(true);
        menuBackdrop.current.style.opacity = "0.5";
        menuBackdrop.current.style.zIndex = "9";
      }
    
    return(
        <div className="navbar">
            <div className="wrapper">
                <MenuOutlinedIcon className="burguer" onClick={handleMenuOpen}/>
                <div className="logo" onClick={handleRedirect}>
                    <img src={YoutubeLogo} alt="" />
                    YouTube
                </div>               
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
                    <VideoCallOutlinedIcon />
                    <NotificationsOutlinedIcon />
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