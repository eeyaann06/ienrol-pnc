import React from "react";
import { FaCreditCard } from "react-icons/fa";
import "../styles/dashboard.css";

const AccountStatus = () => {
  const balance = 15340.0;

  return (
    <div className="card card-dark-header">
      <div className="card-header">
        <div className="card-header-left">
          <FaCreditCard className="card-header-icon" />
          <span>Account Status</span>
        </div>
        <span className="card-header-sub">Accounting Office</span>
      </div>
      <div className="card-body">
        <p className="balance-label">
          Balance:{" "}
          <span className="balance-amount">
            ₱{" "}
            {balance.toLocaleString("en-PH", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </span>
        </p>
        <p className="card-note">
          You still have unsettled balance in your account.
        </p>
      </div>
    </div>
  );
};

export default AccountStatus;
