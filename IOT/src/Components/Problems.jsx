
// import React from 'react';
// import '../Styles/Problems.css';  // Ensure the CSS is properly linked

// const Problems = () => {
//   const problemData = [
//     { id: 1, title: 'Problem 1', description: 'Description of Problem 1.', solutions: ['Solution 1', 'Solution 2'] },
//     { id: 2, title: 'Problem 2', description: 'Description of Problem 2.', solutions: ['Solution 3'] },
//     { id: 2, title: 'Problem 2', description: 'Description of Problem 2.', solutions: ['Solution 3'] },
//     { id: 2, title: 'Problem 2', description: 'Description of Problem 2.', solutions: ['Solution 3'] },
//     { id: 2, title: 'Problem 2', description: 'Description of Problem 2.', solutions: ['Solution 3'] },
//     { id: 2, title: 'Problem 2', description: 'Description of Problem 2.', solutions: ['Solution 3'] },
//     { id: 2, title: 'Problem 2', description: 'Description of Problem 2.', solutions: ['Solution 3'] },
//     { id: 2, title: 'Problem 2', description: 'Description of Problem 2.', solutions: ['Solution 3'] },
//     // Add up to 50 problems as needed
//   ];

//   return (
//     <div className="problems-container">
//       {problemData.map((problem) => (
//         <div key={problem.id} className="problem-card">
//           <h3>{problem.title}</h3>
//           <p>{problem.description}</p>
//           {problem.solutions.map((solution, index) => (
//             <a key={index} href="#">{solution}</a>  
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Problems;


import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Problems.css';  // Ensure the CSS is properly linked

const Problems = () => {
  const problemData = [
    { id: 1, title: 'Problem 1', description: 'Description of Problem 1.', solutions: ['Solution 1', 'Solution 2'], methodologies: ['Methodology 1', 'Methodology 2'] },
    { id: 2, title: 'Problem 2', description: 'Description of Problem 2.', solutions: ['Solution 5', 'Solution 6'], methodologies: ['Methodology 3'] },
    { id: 2, title: 'Problem 2', description: 'Description of Problem 2.', solutions: ['Solution 5', 'Solution 6'], methodologies: ['Methodology 3'] },
    { id: 2, title: 'Problem 2', description: 'Description of Problem 2.', solutions: ['Solution 5', 'Solution 6'], methodologies: ['Methodology 3'] },
    { id: 2, title: 'Problem 2', description: 'Description of Problem 2.', solutions: ['Solution 5', 'Solution 6'], methodologies: ['Methodology 3'] },
    { id: 2, title: 'Problem 2', description: 'Description of Problem 2.', solutions: ['Solution 5', 'Solution 6'], methodologies: ['Methodology 3'] },
    { id: 2, title: 'Problem 2', description: 'Description of Problem 2.', solutions: ['Solution 5', 'Solution 6'], methodologies: ['Methodology 3'] },
    { id: 2, title: 'Problem 2', description: 'Description of Problem 2.', solutions: ['Solution 5', 'Solution 6'], methodologies: ['Methodology 3'] },
    { id: 2, title: 'Problem 2', description: 'Description of Problem 2.', solutions: ['Solution 5', 'Solution 6'], methodologies: ['Methodology 3'] },
    { id: 2, title: 'Problem 2', description: 'Description of Problem 2.', solutions: ['Solution 5', 'Solution 6'], methodologies: ['Methodology 3'] },
    { id: 2, title: 'Problem 2', description: 'Description of Problem 2.', solutions: ['Solution 5', 'Solution 6'], methodologies: ['Methodology 3'] },
    { id: 2, title: 'Problem 2', description: 'Description of Problem 2.', solutions: ['Solution 5', 'Solution 6'], methodologies: ['Methodology 3'] },
    // Add more problems as needed
    { id: 2, title: 'Problem 2', description: 'Description of Problem 2.', solutions: ['Solution 5', 'Solution 6'], methodologies: ['Methodology 3'] },
    { id: 2, title: 'Problem 2', description: 'Description of Problem 2.', solutions: ['Solution 5', 'Solution 6'], methodologies: ['Methodology 3'] },
    { id: 2, title: 'Problem 2', description: 'Description of Problem 2.', solutions: ['Solution 5', 'Solution 6'], methodologies: ['Methodology 3'] }, 
    { id: 2, title: 'Problem 2', description: 'Description of Problem 2.', solutions: ['Solution 5', 'Solution 6'], methodologies: ['Methodology 3'] },
  ];

  return (
    <div className="problems-container">
      {problemData.map((problem, idx) => (
        <div key={idx} className="problem-card">
          <h3>{problem.title}</h3>
          <p>{problem.description}</p>
          <div className="solutions">
            {problem.solutions.map((solution, sIndex) => (
              <Link key={sIndex} to="/solutions">{solution}</Link>  
            ))}
          </div>
          <div className="methodologies">
            {problem.methodologies.map((methodology, mIndex) => (
              <Link key={mIndex} to="/methodologies">{methodology}</Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Problems;
