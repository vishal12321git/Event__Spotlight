// src/App.js
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import EventList from './components/EventList';
import EventModal from './components/EventModal';
import './App.css';

const App = () => {
  // State to manage search term, selected event, loading status, and theme
  const [searchTerm, setSearchTerm] = useState(''); // Search input state
  const [selectedEvent, setSelectedEvent] = useState(null); // Currently selected event
  const [isLoading, setIsLoading] = useState(true); // Loading state for initial fetch
  const [isDarkMode, setIsDarkMode] = useState(false); // Theme state for dark/light mode

  const closeModal = () => setSelectedEvent(null); // Close the event modal

  // Simulate loading time
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1500); // 1.5 seconds delay for loading
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode); // Toggle between dark and light mode
  };

  return (
    <div className={`App ${isDarkMode ? 'dark-mode' : 'light-mode'}`}> {/* Apply theme class */}
      <Navbar 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm} 
        toggleTheme={toggleTheme} 
        isDarkMode={isDarkMode} 
      />
      {isLoading ? (
        <div className="loading-spinner">Loading...</div> // Show loading spinner
      ) : (
        <EventList 
          searchTerm={searchTerm} 
          setSelectedEvent={setSelectedEvent} 
          isDarkMode={isDarkMode} // Pass down the dark mode state
        />
      )}
      <EventModal event={selectedEvent} onClose={closeModal} /> {/* Modal for event details */}
    </div>
  );
};

export default App;
