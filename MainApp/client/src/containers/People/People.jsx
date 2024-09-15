import React, { useState } from 'react';
import './people.css';
import { Kanika, ProfileIcon1, ProfileIcon2, ProfileIcon3, ProfileIcon4, ProfileIcon5, ProfileIcon6 } from '../../components/Images';
import { useNavigate } from 'react-router';

const SuggestedProfiles = () => {
  const [backgroundColor, setBackgroundColor] = useState('#FFF5E1');
  const navigate = useNavigate()

  const handleBackgroundColorChange = (event) => {
    setBackgroundColor(event.target.value);
  };

  const profiles = [
    {
      name: 'Kanika Gupta',
      title: 'Full Stack Developer',
      image: Kanika,
    },
    {
      name: 'Avery Williams',
      title: 'Full Stack Developer',
      image: ProfileIcon2,
    },
    {
      name: 'Avery Williams',
      title: 'Full Stack Developer',
      image: ProfileIcon3,
    },
    {
      name: 'Avery Williams',
      title: 'Full Stack Developer',
      image: ProfileIcon4,
    },
    {
      name: 'Avery Williams',
      title: 'Full Stack Developer',
      image: ProfileIcon5,
    },
    {
      name: 'Avery Williams',
      title: 'Full Stack Developer',
      image: ProfileIcon6,
    },
  ];

  return (
    <div className="container" style={{ backgroundColor: backgroundColor, cursor: "pointer" }}>
      <div className="title">Suggested for you</div>
      <div className="profile-grid">
        {profiles.map((profile, index) => (
          <div onClick={e => {navigate("/chat")}} key={index} className="profile-card">
            <img src={profile.image} alt={profile.name} className="profile-image" />
            <div className="profile-info">
              <div className="profile-name">{profile.name}</div>
              <div className="profile-title">{profile.title}</div>
              <div className="profile-badge">
                <span className="profile-badge-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                  </svg>
                </span>
                <span className="profile-badge-text">2/4</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="background-color-picker">
        <label htmlFor="backgroundColor">Background Color:</label>
        <input
          type="color"
          id="backgroundColor"
          value={backgroundColor}
          onChange={handleBackgroundColorChange}
        />
      </div>
    </div>
  );
};

export default SuggestedProfiles