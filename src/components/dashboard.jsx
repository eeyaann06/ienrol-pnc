import React from "react";
import "../styles/dashboard.css";
import GradesStatus from "./grades-status";
import AccountStatus from "./account-status";
import RequirementsStatus from "./requirements-status";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <GradesStatus />
      <AccountStatus />
      <RequirementsStatus />
    </div>
  );
};

export default Dashboard;
