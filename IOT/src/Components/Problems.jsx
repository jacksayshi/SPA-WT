


// import React from 'react';
// import { Link } from 'react-router-dom';
// import '../Styles/Problems.css';  // Ensure the CSS is properly linked

// const Problems = () => {
//   const problemData = [
//     { id: 1, title: 'Problem 1', description: 'Description of Problem 1.', solutions: ['Solution 1', 'Solution 2'], methodologies: ['Methodology 1', 'Methodology 2'] },
//     { id: 2, title: 'Problem 2', description: 'Description of Problem 2.', solutions: ['Solution 5', 'Solution 6'], methodologies: ['Methodology 3'] },
//     { id: 2, title: 'Problem 2', description: 'Description of Problem 2.', solutions: ['Solution 5', 'Solution 6'], methodologies: ['Methodology 3'] },
//     { id: 2, title: 'Problem 2', description: 'Description of Problem 2.', solutions: ['Solution 5', 'Solution 6'], methodologies: ['Methodology 3'] },
//     { id: 2, title: 'Problem 2', description: 'Description of Problem 2.', solutions: ['Solution 5', 'Solution 6'], methodologies: ['Methodology 3'] },
//     { id: 2, title: 'Problem 2', description: 'Description of Problem 2.', solutions: ['Solution 5', 'Solution 6'], methodologies: ['Methodology 3'] },
//     { id: 2, title: 'Problem 2', description: 'Description of Problem 2.', solutions: ['Solution 5', 'Solution 6'], methodologies: ['Methodology 3'] },
//     { id: 2, title: 'Problem 2', description: 'Description of Problem 2.', solutions: ['Solution 5', 'Solution 6'], methodologies: ['Methodology 3'] },
//     { id: 2, title: 'Problem 2', description: 'Description of Problem 2.', solutions: ['Solution 5', 'Solution 6'], methodologies: ['Methodology 3'] },
//     { id: 2, title: 'Problem 2', description: 'Description of Problem 2.', solutions: ['Solution 5', 'Solution 6'], methodologies: ['Methodology 3'] },
//     { id: 2, title: 'Problem 2', description: 'Description of Problem 2.', solutions: ['Solution 5', 'Solution 6'], methodologies: ['Methodology 3'] },
//     { id: 2, title: 'Problem 2', description: 'Description of Problem 2.', solutions: ['Solution 5', 'Solution 6'], methodologies: ['Methodology 3'] },
//     // Add more problems as needed
//     { id: 2, title: 'Problem 2', description: 'Description of Problem 2.', solutions: ['Solution 5', 'Solution 6'], methodologies: ['Methodology 3'] },
//     { id: 2, title: 'Problem 2', description: 'Description of Problem 2.', solutions: ['Solution 5', 'Solution 6'], methodologies: ['Methodology 3'] },
//     { id: 2, title: 'Problem 2', description: 'Description of Problem 2.', solutions: ['Solution 5', 'Solution 6'], methodologies: ['Methodology 3'] }, 
//     { id: 2, title: 'Problem 2', description: 'Description of Problem 2.', solutions: ['Solution 5', 'Solution 6'], methodologies: ['Methodology 3'] },
//   ];

//   return (
//     <div className="problems-container">
//       {problemData.map((problem, idx) => (
//         <div key={idx} className="problem-card">
//           <h3>{problem.title}</h3>
//           <p>{problem.description}</p>
//           <div className="solutions">
//             {problem.solutions.map((solution, sIndex) => (
//               <Link key={sIndex} to="/solutions">{solution}</Link>  
//             ))}
//           </div>
//           <div className="methodologies">
//             {problem.methodologies.map((methodology, mIndex) => (
//               <Link key={mIndex} to="/methodologies">{methodology}</Link>
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Problems;

// import React from 'react';
// import '../Styles/Problems.css';

// const Problems = ({ problems, selectedProblem, onSelectProblem }) => {
//   if (selectedProblem) {
//     return (
//       <div className="problem-content">
//         <h2>{selectedProblem.title}</h2>
//         <p>{selectedProblem.description}</p>
//         <h3>Solutions</h3>
//         <ul>
//           {selectedProblem.solutions.map((solution, index) => (
//             <li key={index}>{solution}</li>
//           ))}
//         </ul>
//         <h3>Methodologies</h3>
//         <ul>
//           {selectedProblem.methodologies.map((methodology, index) => (
//             <li key={index}>{methodology}</li>
//           ))}
//         </ul>
//         <button onClick={() => onSelectProblem(null)}>Back to All Problems</button>
//       </div>
//     );
//   }

//   return (
//     <div className="problems-container">
//       {problems.map((problem, idx) => (
//         <div key={idx} className="problem-card" onClick={() => onSelectProblem(problem)}>
//           <h3>{problem.title}</h3>
//           <p>{problem.description}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Problems;

import React from 'react';
import '../Styles/Problems.css';

const Problems = ({ problems, selectedProblem, onSelectProblem }) => {
  if (selectedProblem) {
    return (
      <div className="problem-content">
        <h2>{selectedProblem.title}</h2>
        <p>{selectedProblem.description}</p>
        <h3>problem defination</h3>
        <p>{selectedProblem.section1}</p>
        <h3>Solutions Overview</h3>
        <p>{selectedProblem.section2}</p>
        <h3>Methodology approaches</h3>
        <p>{selectedProblem.section3}</p>
        <button onClick={() => onSelectProblem(null)}>Back to All Problems</button>
      </div>
    );
  }

  return (
    <div className="problems-container">
      {problems.map((problem, idx) => (
        <div key={idx} className="problem-card" onClick={() => onSelectProblem(problem)}>
          <h3>{problem.title}</h3>
          <p>{problem.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Problems;
