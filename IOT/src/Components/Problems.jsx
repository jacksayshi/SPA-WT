



import React from 'react';

import '../Styles/Problems.css';

const Problems = ({ problems, selectedProblem, onSelectProblem, selectedCategory }) => {
  const filteredProblems = selectedCategory
    ? problems.filter(problem => problem.section1.toLowerCase().includes(selectedCategory.toLowerCase()))
    : problems;

  if (selectedProblem) {
    return (
      <div className="problem-content">
        <h2>{selectedProblem.title}</h2>
        <p>{selectedProblem.description}</p>
        <h3>Problem Definition</h3>
        <p>{selectedProblem.section1}</p>
        <h3>Solutions Overview</h3>
        <p>{selectedProblem.section2}</p>
        <h3>Methodology Approaches</h3>
        <p>{selectedProblem.section3}</p>
        <button onClick={() => onSelectProblem(null)}>Back to All Problems</button>
      </div>
    );
  }

  return (
    <div className="problems-container">
      {filteredProblems.map((problem, idx) => (
        <div key={idx} className="problem-card" onClick={() => onSelectProblem(problem)}>
          <h3>{problem.title}</h3>
          <p>{problem.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Problems;

