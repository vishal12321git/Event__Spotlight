// src/components/Navbar.js
import React from 'react';
import './Navbar.css';

const Navbar = ({ searchTerm, setSearchTerm, toggleTheme, isDarkMode }) => (
  <nav className="navbar">
    <div className="navbar-title">
      <h1>EventSpot Lite</h1> {/* Application title */}
    </div>
    <input
      type="text"
      placeholder="Search events..." // Placeholder text for search input
      value={searchTerm} // Controlled input value
      onChange={(e) => setSearchTerm(e.target.value)} // Update search term on input change
      className="navbar-search"
    />
    <button onClick={toggleTheme} className="theme-toggle">
      {isDarkMode ? "☀️" : "🌙"} {/* Toggle button to switch between light and dark modes */}
    </button>
  </nav>
);

export default Navbar;
