import React, { useState } from 'react';
import './EventCard.css';

const EventCard = ({ event, onClick }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 100); // reset after 100ms
    onClick(); // call the onClick passed from parent
  };

  return (
    <div
      className={`event-card clickable ${isClicked ? 'clicked' : ''}`}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyPress={(e) => {
        if (e.key === 'Enter') handleClick();
      }}
    >
      <img
        src={event.image}
        alt={event.name}
        className="event-image"
        loading="lazy"
      />
      <h2>{event.name}</h2>
      <p><strong>Date:</strong> {event.date}</p>
      <p><strong>Location:</strong> {event.location}</p>
    </div>
  );
};

export default EventCard;
