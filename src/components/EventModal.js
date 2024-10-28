// src/components/EventModal.js
import React from 'react';
import './EventModal.css';

const EventModal = ({ event, onClose }) => {
  if (!event) return null; // Return null if no event is selected

  return (
    <div className="modal-overlay" onClick={onClose}> {/* Overlay to close modal on click */}
      <div 
        className="modal-content animate__animated animate__fadeIn" 
        onClick={(e) => e.stopPropagation()} // Prevent click event from bubbling to the overlay
      >
        <button
          className="close-button clickable"
          onClick={onClose} // Close modal when button is clicked
          aria-label="Close modal" // Accessibility label
        >
          X
        </button>
        <img src={event.image} alt={event.name} className="modal-image" /> {/* Event image */}
        <h2>{event.name}</h2> {/* Event name */}
        <p><strong>Date:</strong> {event.date}</p> {/* Event date */}
        <p><strong>Location:</strong> {event.location}</p> {/* Event location */}
        <p>{event.description}</p> {/* Event description */}
      </div>
    </div>
  );
};

export default EventModal;
