import React, { useState } from "react";
import { Link } from "react-router-dom";

// Mock data for events
const initialEvents = [
  {
    id: 1,
    title: "Company Annual Meeting",
    date: "2024-06-15",
    location: "Main Conference Hall",
    status: "Upcoming",
    participants: 150,
  },
  {
    id: 2,
    title: "Team Building Workshop",
    date: "2024-05-20",
    location: "Outdoor Retreat Center",
    status: "Completed",
    participants: 75,
  },
  {
    id: 3,
    title: "Product Launch",
    date: "2024-07-10",
    location: "Innovation Center",
    status: "Planning",
    participants: 100,
  },
];

function EventActivity() {
  // State to manage events
  const [events, setEvents] = useState(initialEvents);

  // State for filtering
  const [filter, setFilter] = useState("All");

  // Filter events based on status
  const filteredEvents = events.filter(
    (event) => filter === "All" || event.status === filter
  );

  // Function to handle event deletion
  const handleDeleteEvent = (id) => {
    setEvents(events.filter((event) => event.id !== id));
  };

  return (
    <div className="event-activity-container">
      <h1>Event Management</h1>

      {/* Filter Section */}
      <div className="event-filters">
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="All">All Events</option>
          <option value="Upcoming">Upcoming</option>
          <option value="Completed">Completed</option>
          <option value="Planning">Planning</option>
        </select>

        <Link
          to="/dashboard/event-activity/create"
          className="create-event-btn"
        >
          Create New Event
        </Link>
      </div>

      {/* Events Table */}
      <table className="events-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Date</th>
            <th>Location</th>
            <th>Status</th>
            <th>Participants</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredEvents.map((event) => (
            <tr key={event.id}>
              <td>{event.title}</td>
              <td>{event.date}</td>
              <td>{event.location}</td>
              <td>
                <span className={`status-badge ${event.status.toLowerCase()}`}>
                  {event.status}
                </span>
              </td>
              <td>{event.participants}</td>
              <td>
                <button
                  onClick={() => handleDeleteEvent(event.id)}
                  className="delete-btn"
                >
                  Delete
                </button>
                <Link
                  to={`/dashboard/event-activity/edit/${event.id}`}
                  className="edit-btn"
                >
                  Edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* No Events Message */}
      {filteredEvents.length === 0 && (
        <div className="no-events-message">
          No events found in the selected category.
        </div>
      )}
    </div>
  );
}

export default EventActivity;
