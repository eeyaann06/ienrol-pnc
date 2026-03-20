import React from "react";
import { FaTimesCircle } from "react-icons/fa";
import "../styles/dashboard.css";

const pendingSubjects = [
  { code: "CA2", title: "Competency Appraisal 2" },
  { code: "SOC101", title: "The Contemporary World" },
  {
    code: "RLENCM122",
    title: "Intensive Nursing Practicum (Hospital & Community Settings)",
  },
  { code: "NCM121", title: "Disaster Nursing" },
  { code: "RLENCM121", title: "Disaster Nursing RLE" },
];

const GradesStatus = () => {
  return (
    <div className="card">
      <p className="card-notice">
        Your grades for <strong>Second Semester A.Y. 2025-2026</strong> have not
        all been submitted by your instructor/s yet.
      </p>
      <ul className="subject-list">
        {pendingSubjects.map((subject) => (
          <li key={subject.code} className="subject-item">
            <FaTimesCircle className="subject-icon" />
            <span>
              <strong>{subject.code}</strong> - {subject.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GradesStatus;
