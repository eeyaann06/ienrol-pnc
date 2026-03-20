import React, { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import "../styles/header.css";

const Mode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleModeToggle = () => {
    setIsDarkMode((prev) => !prev);
    document.body.classList.toggle("dark-theme", !isDarkMode);
  };

  return (
    <button
      className="icon-btn"
      onClick={handleModeToggle}
      aria-label="Toggle Mode"
    >
      {isDarkMode ? <FaSun className="icon" /> : <FaMoon className="icon" />}
    </button>
  );
};

export default Mode;
