import React from "react";
import "./Header.css";
import PersonIcon from "@mui/icons-material/Person";
import { IconButton } from "@mui/material";
import ForumIcon from "@mui/icons-material/Forum";

export default function Header() {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon fontSize="large" className="person_logo" />
      </IconButton>
      <img
        className="img_logo"
        src="https://1000logos.net/wp-content/uploads/2018/07/Tinder-icon.png"
        alt="tinder"
      />

      <IconButton>
        <ForumIcon fontSize="large" className="forum_logo" />
      </IconButton>
    </div>
  );
}
