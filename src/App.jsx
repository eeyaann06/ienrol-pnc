import React, { useState } from "react";
import "./App.css";
import Header from "./components/header";
import SideBar from "./components/side-bar";
import Dashboard from "./components/dashboard";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="app-container">
      <SideBar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      {isSidebarOpen && (
        <div className="overlay" onClick={() => setIsSidebarOpen(false)} />
      )}
      <div className="main-content">
        <Header onToggleMenu={toggleSidebar} />
        <main className="page-body">
          <Dashboard />
        </main>
      </div>
    </div>
  );
}

export default App;
