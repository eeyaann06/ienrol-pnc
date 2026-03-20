import React from "react";
import { FaFolder } from "react-icons/fa";
import "../styles/dashboard.css";

const RequirementsStatus = () => {
  return (
    <div className="card card-dark-header">
      <div className="card-header">
        <div className="card-header-left">
          <FaFolder className="card-header-icon" />
          <span>Requirements Status</span>
        </div>
        <span className="card-header-sub">OUR</span>
      </div>
      <div className="card-body">
        <p className="excluded-title">Currently Excluded</p>
        <p className="card-note">
          Requirements status is currently excluded from the enrolment process.
        </p>
      </div>
    </div>
  );
};

export default RequirementsStatus;
