import React, { useState, useRef, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";
import "../styles/header.css";

const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  const user = {
    name: "Christine Joy Kipte",
    student_number: "2001765",
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="profile-container" ref={ref}>
      <button
        className="icon-btn"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Profile"
      >
        <FaUserCircle className="icon" />
      </button>

      {isOpen && (
        <div className="profile-dropdown">
          <div className="dropdown-header">
            <FaUserCircle className="dropdown-avatar" />
            <div className="dropdown-user-info">
              <span className="user-name">{user.name}</span>
              <span className="user-username">{user.student_number}</span>
            </div>
          </div>
          <ul className="dropdown-links">
            <li>
              <button className="logout-btn">Logout</button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Profile;
