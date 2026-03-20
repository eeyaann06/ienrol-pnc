import React from "react";
import ToggleMenu from "./toggle-menu";
import Mode from "./mode";
import Profile from "./profile";
import "../styles/header.css";

const Header = ({ onToggleMenu }) => {
  return (
    <header className="header">
      <h1 className="logo">iEnrol</h1>
      <div className="icons">
        <ToggleMenu onToggle={onToggleMenu} />
        <Mode />
        <Profile />
      </div>
    </header>
  );
};

export default Header;
