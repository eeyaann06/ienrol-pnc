import React from "react";
import { FaUserCircle, FaTimes } from "react-icons/fa";
import "../styles/sidebar.css";

const SideBar = ({ isOpen, onClose }) => {
  return (
    <aside className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="sidebar-header">
        <h2 className="sidebar-logo">iEnrol</h2>
        <button
          className="icon-btn close-btn"
          onClick={onClose}
          aria-label="Close menu"
        >
          <FaTimes />
        </button>
      </div>

      <div className="sidebar-profile">
        <FaUserCircle className="sidebar-avatar" />
        <h3 className="sidebar-user-name">Christine Joy Kipte</h3>
        <p className="sidebar-user-role">2001765</p>
      </div>

      <nav className="sidebar-nav">
        <button className="nav-item active">Clearance</button>
      </nav>
    </aside>
  );
};

export default SideBar;
