
import React from 'react';
import '../Styles/HorizontalNavBar.css';

const HorizontalNavBar = ({ onCategorySelect }) => {
  return (
    <div className="horizontal-navbar">
        <a href="#" onClick={() => onCategorySelect('home')}>Home</a>
      <div className="dropdown">
        <a href="#">Solutions</a>
        <div className="dropdown-content">
          <a href="#" onClick={() => onCategorySelect('optimization theory')}>Optimization Theory</a>
          <a href="#" onClick={() => onCategorySelect('control theory')}>Control Theory</a>
          <a href="#" onClick={() => onCategorySelect('reinforcement learning')}>Reinforcement Learning</a>
        </div>
      </div>
      <div className="dropdown">
        <a href="#">Methodologies</a>
        <div className="dropdown-content">
          <a href="#" onClick={() => onCategorySelect('system implementation')}>System Implementation</a>
          <a href="#" onClick={() => onCategorySelect('theoretical analysis')}>Theoretical Analysis</a>
          <a href="#" onClick={() => onCategorySelect('measurement study')}>Measurement Study</a>
          <a href="#" onClick={() => onCategorySelect('simulations vs emulation vs real prototype')}>Simulations vs Emulation vs Real Prototype</a>
        </div>
      </div>
    </div>
  );
};

export default HorizontalNavBar;
