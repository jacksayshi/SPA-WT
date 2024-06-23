import React, { useState } from 'react';
import '../Styles/TeamMembers.css';

const TeamMembers = ({ teamMembers }) => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="team-members">
      <button className="popup-button" onClick={togglePopup}>
        Team Members
      </button>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h3>Team Members</h3>
            <ul>
              {teamMembers.map((member, index) => (
                <li key={index}>{member.name}</li>
              ))}
            </ul>
          </div>
          <div className="popup-overlay" onClick={togglePopup}></div>
        </div>
      )}
    </div>
  );
};

export default TeamMembers;
