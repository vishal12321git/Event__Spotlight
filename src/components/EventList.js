// src/components/EventList.js
import React from 'react';
import EventCard from './EventCard';
import events from '../mockData';
import './EventList.css';

const EventList = ({ searchTerm, setSelectedEvent }) => {
  // Filter events based on the search term
  const filteredEvents = events.filter((event) =>
    event.name.toLowerCase().includes(searchTerm.toLowerCase()) || // Match event name
    event.location.toLowerCase().includes(searchTerm.toLowerCase()) // Match event location
  );

  return (
    <div className="event-list">
      {filteredEvents.map((event) => (
        <EventCard
          key={event.id}
          event={event}
          onClick={() => setSelectedEvent(event)} // Set the selected event
        />
      ))}
    </div>
  );
};

export default EventList;
