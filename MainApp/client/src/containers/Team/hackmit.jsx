import React from 'react';

function TeamPage() {
  return (
    <div className="App">
      {/* Navigation Bar */}
      <nav className="navbar">
        <ul>
          <li><a href="#" className="active">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Profile</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>

      {/* Main Content */}
      <div className="content">
        <div className="card">
          <img src="https://via.placeholder.com/60x60" alt="Event" className="icon" />
          <h2>HackMIT find-a-team</h2>
          <p>Date of the event:</p>
          <p>No. of people in the event:</p>
          <p>No. of people currently looking for a team:</p>
          <button className="join-button">Join Event</button>
        </div>
      </div>
    </div>
  );
}

export default TeamPage;
