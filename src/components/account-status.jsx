import React from "react";
import { FaCreditCard } from "react-icons/fa";
import "../styles/dashboard.css";

const AccountStatus = () => {
  const student = { name: "Christine Joy Kipte", id: "2001765" };
  const totalBalance = 30340.0;
  const downPayment = 15000.0;
  const remainingBalance = totalBalance - downPayment;

  const fmt = (n) =>
    "₱ " +
    n.toLocaleString("en-PH", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

  const initials = student.name
    .split(" ")
    .filter((_, i, a) => i === 0 || i === a.length - 1)
    .map((w) => w[0])
    .join("");

  return (
    <div className="acct-card">
      <div className="acct-header">
        <div className="acct-header-left">
          <FaCreditCard className="acct-header-icon" />
          <span>Account Status</span>
        </div>
        <span className="acct-header-sub">Accounting Office</span>
      </div>

      <div className="acct-body">
        <div className="acct-student-row">
          <div className="acct-avatar">{initials}</div>
          <div>
            <p className="acct-student-name">{student.name}</p>
            <p className="acct-student-id">Student No. {student.id}</p>
          </div>
        </div>

        <div className="acct-remaining-block">
          <span className="acct-remaining-label">Remaining Balance</span>
          <span className="acct-remaining-amount">{fmt(remainingBalance)}</span>
          <span className="acct-remaining-note">
            You still have an unsettled balance in your account.
          </span>
        </div>

        <div className="acct-breakdown">
          <p className="acct-breakdown-title">Computation</p>
          <div className="acct-breakdown-row">
            <span className="acct-breakdown-label">Total Balance</span>
            <span className="acct-breakdown-amount">{fmt(totalBalance)}</span>
          </div>
          <div className="acct-breakdown-row">
            <span className="acct-breakdown-label">Down Payment</span>
            <span className="acct-breakdown-amount acct-paid">
              − {fmt(downPayment)}
            </span>
          </div>
          <div className="acct-breakdown-divider" />
          <div className="acct-breakdown-row">
            <span className="acct-breakdown-label-bold">Remaining Balance</span>
            <span className="acct-breakdown-amount acct-due">
              {fmt(remainingBalance)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountStatus;
