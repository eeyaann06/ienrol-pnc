import React from "react";
import { FaUserCircle } from "react-icons/fa";
import "../styles/sidebar.css";

const SideBar = ({ isOpen }) => {
  return (
    <aside className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="sidebar-profile">
        <FaUserCircle className="sidebar-avatar" />
        <h3 className="sidebar-user-name">KIPTE, CHRISTINE JOY</h3>
        <p className="sidebar-user-role">2001765</p>
      </div>

      <nav className="sidebar-nav">
        <button className="nav-item active">Clearance</button>
      </nav>
    </aside>
  );
};

export default SideBar;
