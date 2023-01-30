import React from "react";
import './navbar.scss';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
function Navbar(){
    return(
        <div className="navbar">
            <div className="wrapper">
                <div className="search">
                    <input type="text" placeholder="Search"/>
                    <SearchOutlinedIcon />
                </div>
                <button>
                    <AccountCircleOutlinedIcon/>
                    Sign In
                </button>
            </div>
        </div>
    )
};
export default Navbar;