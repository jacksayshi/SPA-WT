

import React from 'react';
import '../Styles/SideNavbar.css';

const SideNavbar = ({ problems, onSelectProblem }) => {
  return (
    <nav className="side-navbar">
      <h2>Problems</h2>
      <ul>
        {problems.map((problem) => (
          <li key={problem.id} onClick={() => onSelectProblem(problem)}>
            <a href="#">{problem.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SideNavbar;