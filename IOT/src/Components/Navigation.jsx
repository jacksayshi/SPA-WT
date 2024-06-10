import React, { useState } from 'react';
import '../Styles/Navigation.css'
const Navigation = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const toggleDropdown = () => setShowDropdown(!showDropdown);

  return (
    <div className="navbar">
      <ul>
        <li onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
          Problems
          {showDropdown && <Dropdown />}
        </li>
      </ul>
    </div>
  );
};


const Dropdown = () => {
  const problems = new Array(50).fill(null).map((_, i) => `Problem ${i + 1}`);
  return (
    <div className="dropdown">
      {problems.map((problem, index) => (
        <a key={index} href="#">{problem}</a>
      ))}
    </div>
  );
};

export default Navigation;
