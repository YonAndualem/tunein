import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar } from "@mui/material";
import { useDataLayerValue } from "./DataLayer";

function Header({ spotify }) {
    const [{ user }, dispatch] = useDataLayerValue();

    return (
        <div className="header">
        <div className="header__left">
            <SearchIcon />
            <input
                placeholder="Search for Artists, Songs, or Podcasts"
                type="text"
            /> 
        </div>

        <div className="header__right">
            <div className="header__info">
            <Avatar src={user?.images[0]?.url} alt="avatar" />
            <h4>{user?.display_name}</h4>
            </div>
        </div>
        </div>
        
    );
    }

export default Header;