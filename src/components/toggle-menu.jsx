import React from "react";
import { FaBars } from "react-icons/fa";
import "../styles/header.css";

const ToggleMenu = ({ onToggle }) => {
  return (
    <button className="icon-btn" onClick={onToggle} aria-label="Toggle Menu">
      <FaBars className="icon" />
    </button>
  );
};

export default ToggleMenu;
