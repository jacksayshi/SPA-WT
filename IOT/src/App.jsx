
// import React, { useState } from 'react';
// import SideNavbar from './Components/SideNavBar1';
// import Problems from './Components/Problems';
// import Footer from './Components/Footer';
// import TitleAbout from './Components/TitleAbout';
// import TeamMembers from './Components/TeamMembers';
// import './App.css';

// function App() {
//   const [selectedProblem, setSelectedProblem] = useState(null);

  
 
//   const problems = [
//     {
//       id: 1,
//       title: "DNS over HTTPS Implementation",
//       description: "Implementing DNS over HTTPS (DoH) to enhance privacy and security in DNS resolution.",
//       section1: "DoH encrypts DNS queries to protect against eavesdropping and manipulation. This section discusses the technical aspects of implementing DoH, including protocol specifications and server-side configurations.",
//       section2: "Challenges in DoH adoption include potential centralization of DNS and the need for client-side support. This section explores these issues and potential solutions.",
//       section3: "Future developments in DoH, such as integration with DNSSEC and performance optimizations, are discussed in this section."
//     },
//     {
//       id: 2,
//       title: "Quantum-Resistant Cryptography",
//       description: "Developing cryptographic algorithms resistant to attacks from quantum computers.",
//       section1: "This section introduces the concept of post-quantum cryptography and its importance in maintaining security in a future with powerful quantum computers.",
//       section2: "Various approaches to quantum-resistant cryptography are discussed, including lattice-based, hash-based, and code-based cryptography.",
//       section3: "The challenges of implementing and standardizing quantum-resistant algorithms are explored, including performance considerations and backward compatibility issues."
//     },
//     {
//       id: 3,
//       title: "AI-Powered Network Intrusion Detection",
//       description: "Utilizing artificial intelligence to enhance network intrusion detection systems.",
//       section1: "This section covers the basics of AI-powered intrusion detection, including machine learning algorithms suitable for network security applications.",
//       section2: "The advantages and potential drawbacks of AI in intrusion detection are discussed, such as improved accuracy and the risk of adversarial attacks on the AI itself.",
//       section3: "Real-world case studies and future directions for AI in network security are explored in this section."
//     },
//     {
//       id: 3,
//       title: "AI-Powered Network Intrusion Detection",
//       description: "Utilizing artificial intelligence to enhance network intrusion detection systems.",
//       section1: "This section covers the basics of AI-powered intrusion detection, including machine learning algorithms suitable for network security applications.",
//       section2: "The advantages and potential drawbacks of AI in intrusion detection are discussed, such as improved accuracy and the risk of adversarial attacks on the AI itself.",
//       section3: "Real-world case studies and future directions for AI in network security are explored in this section."
//     },
//     {
//       id: 3,
//       title: "AI-Powered Network Intrusion Detection",
//       description: "Utilizing artificial intelligence to enhance network intrusion detection systems.",
//       section1: "This section covers the basics of AI-powered intrusion detection, including machine learning algorithms suitable for network security applications.",
//       section2: "The advantages and potential drawbacks of AI in intrusion detection are discussed, such as improved accuracy and the risk of adversarial attacks on the AI itself.",
//       section3: "Real-world case studies and future directions for AI in network security are explored in this section."
//     },
//     {
//       id: 3,
//       title: "AI-Powered Network Intrusion Detection",
//       description: "Utilizing artificial intelligence to enhance network intrusion detection systems.",
//       section1: "This section covers the basics of AI-powered intrusion detection, including machine learning algorithms suitable for network security applications.This section covers the basics of AI-powered intrusion detection, including machine learning algorithms suitable for network security applicationsThis section covers the basics of AI-powered intrusion detection, including machine learning algorithms suitable for network security applicationsThis section covers the basics of AI-powered intrusion detection, including machine learning algorithms suitable for network security applicationsThis section covers the basics of AI-powered intrusion detection, including machine learning algorithms suitable for network security applicationsThis section covers the basics of AI-powered intrusion detection, including machine learning algorithms suitable for network security applicationsThis section covers the basics of AI-powered intrusion detection, including machine learning algorithms suitable for network security applicationsThis section covers the basics of AI-powered intrusion detection, including machine learning algorithms suitable for network security applicationsThis section covers the basics of AI-powered intrusion detection, including machine learning algorithms suitable for network security applicationsThis section covers the basics of AI-powered intrusion detection, including machine learning algorithms suitable for network security applicationsThis section covers the basics of AI-powered intrusion detection, including machine learning algorithms suitable for network security applications",
//       section2: "The advantages and potential drawbacks of AI in intrusion detection are discussed, such as improved accuracy and the risk of adversarial attacks on the AI itself.",
//       section3: "Real-world case studies and future directions for AI in network security are explored in this section."
//     },
//     {
//       id: 3,
//       title: "AI-Powered Network Intrusion Detection",
//       description: "Utilizing artificial intelligence to enhance network intrusion detection systems.",
//       section1: "This section covers the basics of AI-powered intrusion detection, including machine learning algorithms suitable for network security applications.",
//       section2: "The advantages and potential drawbacks of AI in intrusion detection are discussed, such as improved accuracy and the risk of adversarial attacks on the AI itself.",
//       section3: "Real-world case studies and future directions for AI in network security are explored in this section."
//     },

//     {
//       id: 3,
//       title: "AI-Powered Network Intrusion Detection",
//       description: "Utilizing artificial intelligence to enhance network intrusion detection systems.",
//       section1: "This section covers the basics of AI-powered intrusion detection, including machine learning algorithms suitable for network security applications.",
//       section2: "The advantages and potential drawbacks of AI in intrusion detection are discussed, such as improved accuracy and the risk of adversarial attacks on the AI itself.",
//       section3: "Real-world case studies and future directions for AI in network security are explored in this section."
//     },
//     {
//       id: 3,
//       title: "AI-Powered Network Intrusion Detection",
//       description: "Utilizing artificial intelligence to enhance network intrusion detection systems.",
//       section1: "This section covers the basics of AI-powered intrusion detection, including machine learning algorithms suitable for network security applications.",
//       section2: "The advantages and potential drawbacks of AI in intrusion detection are discussed, such as improved accuracy and the risk of adversarial attacks on the AI itself.",
//       section3: "Real-world case studies and future directions for AI in network security are explored in this section."
//     },
//     {
//       id: 3,
//       title: "AI-Powered Network Intrusion Detection",
//       description: "Utilizing artificial intelligence to enhance network intrusion detection systems.",
//       section1: "This section covers the basics of AI-powered intrusion detection, including machine learning algorithms suitable for network security applications.",
//       section2: "The advantages and potential drawbacks of AI in intrusion detection are discussed, such as improved accuracy and the risk of adversarial attacks on the AI itself.",
//       section3: "Real-world case studies and future directions for AI in network security are explored in this section."
//     },
//     {
//       id: 3,
//       title: "AI-Powered Network Intrusion Detection",
//       description: "Utilizing artificial intelligence to enhance network intrusion detection systems.",
//       section1: "This section covers the basics of AI-powered intrusion detection, including machine learning algorithms suitable for network security applications.",
//       section2: "The advantages and potential drawbacks of AI in intrusion detection are discussed, such as improved accuracy and the risk of adversarial attacks on the AI itself.",
//       section3: "Real-world case studies and future directions for AI in network security are explored in this section."
//     },
//     {
//       id: 3,
//       title: "AI-Powered Network Intrusion Detection",
//       description: "Utilizing artificial intelligence to enhance network intrusion detection systems.",
//       section1: "This section covers the basics of AI-powered intrusion detection, including machine learning algorithms suitable for network security applications.",
//       section2: "The advantages and potential drawbacks of AI in intrusion detection are discussed, such as improved accuracy and the risk of adversarial attacks on the AI itself.",
//       section3: "Real-world case studies and future directions for AI in network security are explored in this section."
//     },
//     {
//       id: 3,
//       title: "AI-Powered Network Intrusion Detection",
//       description: "Utilizing artificial intelligence to enhance network intrusion detection systems.",
//       section1: "This section covers the basics of AI-powered intrusion detection, including machine learning algorithms suitable for network security applications.",
//       section2: "The advantages and potential drawbacks of AI in intrusion detection are discussed, such as improved accuracy and the risk of adversarial attacks on the AI itself.",
//       section3: "Real-world case studies and future directions for AI in network security are explored in this section."
//     },
//     {
//       id: 3,
//       title: "AI-Powered Network Intrusion Detection",
//       description: "Utilizing artificial intelligence to enhance network intrusion detection systems.",
//       section1: "This section covers the basics of AI-powered intrusion detection, including machine learning algorithms suitable for network security applications.",
//       section2: "The advantages and potential drawbacks of AI in intrusion detection are discussed, such as improved accuracy and the risk of adversarial attacks on the AI itself.",
//       section3: "Real-world case studies and future directions for AI in network security are explored in this section."
//     },
//     {
//       id: 3,
//       title: "AI-Powered Network Intrusion Detection",
//       description: "Utilizing artificial intelligence to enhance network intrusion detection systems.",
//       section1: "This section covers the basics of AI-powered intrusion detection, including machine learning algorithms suitable for network security applications.",
//       section2: "The advantages and potential drawbacks of AI in intrusion detection are discussed, such as improved accuracy and the risk of adversarial attacks on the AI itself.",
//       section3: "Real-world case studies and future directions for AI in network security are explored in this section."
//     },
//     {
//       id: 3,
//       title: "AI-Powered Network Intrusion Detection",
//       description: "Utilizing artificial intelligence to enhance network intrusion detection systems.",
//       section1: "This section covers the basics of AI-powered intrusion detection, including machine learning algorithms suitable for network security applications.",
//       section2: "The advantages and potential drawbacks of AI in intrusion detection are discussed, such as improved accuracy and the risk of adversarial attacks on the AI itself.",
//       section3: "Real-world case studies and future directions for AI in network security are explored in this section."
//     },
//     {
//       id: 3,
//       title: "AI-Powered Network Intrusion Detection",
//       description: "Utilizing artificial intelligence to enhance network intrusion detection systems.",
//       section1: "This section covers the basics of AI-powered intrusion detection, including machine learning algorithms suitable for network security applications.",
//       section2: "The advantages and potential drawbacks of AI in intrusion detection are discussed, such as improved accuracy and the risk of adversarial attacks on the AI itself.",
//       section3: "Real-world case studies and future directions for AI in network security are explored in this section."
//     },
//     {
//       id: 3,
//       title: "AI-Powered Network Intrusion Detection",
//       description: "Utilizing artificial intelligence to enhance network intrusion detection systems.",
//       section1: "This section covers the basics of AI-powered intrusion detection, including machine learning algorithms suitable for network security applications.",
//       section2: "The advantages and potential drawbacks of AI in intrusion detection are discussed, such as improved accuracy and the risk of adversarial attacks on the AI itself.",
//       section3: "Real-world case studies and future directions for AI in network security are explored in this section."
//     },
//     {
//       id: 3,
//       title: "AI-Powered Network Intrusion Detection",
//       description: "Utilizing artificial intelligence to enhance network intrusion detection systems.",
//       section1: "This section covers the basics of AI-powered intrusion detection, including machine learning algorithms suitable for network security applications.",
//       section2: "The advantages and potential drawbacks of AI in intrusion detection are discussed, such as improved accuracy and the risk of adversarial attacks on the AI itself.",
//       section3: "Real-world case studies and future directions for AI in network security are explored in this section."
//     },
//     {
//       id: 3,
//       title: "AI-Powered Network Intrusion Detection",
//       description: "Utilizing artificial intelligence to enhance network intrusion detection systems.",
//       section1: "This section covers the basics of AI-powered intrusion detection, including machine learning algorithms suitable for network security applications.",
//       section2: "The advantages and potential drawbacks of AI in intrusion detection are discussed, such as improved accuracy and the risk of adversarial attacks on the AI itself.",
//       section3: "Real-world case studies and future directions for AI in network security are explored in this section."
//     },
//     {
//       id: 3,
//       title: "AI-Powered Network Intrusion Detection",
//       description: "Utilizing artificial intelligence to enhance network intrusion detection systems.",
//       section1: "This section covers the basics of AI-powered intrusion detection, including machine learning algorithms suitable for network security applications.",
//       section2: "The advantages and potential drawbacks of AI in intrusion detection are discussed, such as improved accuracy and the risk of adversarial attacks on the AI itself.",
//       section3: "Real-world case studies and future directions for AI in network security are explored in this section."
//     },
//     {
//       id: 3,
//       title: "AI-Powered Network Intrusion Detection",
//       description: "Utilizing artificial intelligence to enhance network intrusion detection systems.",
//       section1: "This section covers the basics of AI-powered intrusion detection, including machine learning algorithms suitable for network security applications.",
//       section2: "The advantages and potential drawbacks of AI in intrusion detection are discussed, such as improved accuracy and the risk of adversarial attacks on the AI itself.",
//       section3: "Real-world case studies and future directions for AI in network security are explored in this section."
//     },
    

//     // Add more problems as needed to reach 50
//   ];

//   return (
//     <div className="app">
//       <div className="content-wrapper">
//         <SideNavbar problems={problems} onSelectProblem={setSelectedProblem} />
//         <main className="main-content">
//           <TitleAbout />
//           <Problems 
//             problems={problems} 
//             selectedProblem={selectedProblem} 
//             onSelectProblem={setSelectedProblem}
//           />
//         </main>
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default App;


import React, { useState } from 'react';
import SideNavbar from './Components/SideNavBar1';
import Problems from './Components/Problems';
import Footer from './Components/Footer';
import TitleAbout from './Components/TitleAbout';
import HorizontalNavBar from './Components/HorizontalNavBar';
import './App.css';

function App() {
  const [selectedProblem, setSelectedProblem] = useState(null);
  const [filteredProblems, setFilteredProblems] = useState([]);
  
  const problems = [
    // ... (your existing problem data)
    
                {
                  id: 1,
                  title: "DNS over HTTPS Implementation",
                  description: "Implementing DNS over HTTPS (DoH) to enhance privacy and security in DNS resolution.",
                  category: "optimization theory",
                  section1: "DoH encrypts DNS queries to protect against eavesdropping and manipulation. This section discusses the technical aspects of implementing DoH, including protocol specifications and server-side configurations.",
                  section2: "Challenges in DoH adoption include potential centralization of DNS and the need for client-side support. This section explores these issues and potential solutions.",
                  section3: "Future developments in DoH, such as integration with DNSSEC and performance optimizations, are discussed in this section."
                },
                {
                  id: 2,
                  title: "Quantum-Resistant Cryptography",
                  description: "Developing cryptographic algorithms resistant to attacks from quantum computers.",
                  category: "control theory",
                  section1: "This section introduces the concept of post-quantum cryptography and its importance in maintaining security in a future with powerful quantum computers.",
                  section2: "Various approaches to quantum-resistant cryptography are discussed, including lattice-based, hash-based, and code-based cryptography.",
                  section3: "The challenges of implementing and standardizing quantum-resistant algorithms are explored, including performance considerations and backward compatibility issues."
                },
                {
                  id: 3,
                  title: "AI-Powered Network Intrusion Detection",
                  description: "Utilizing artificial intelligence to enhance network intrusion detection systems.",
                  category: "reinforcement learning",
                  section1: "This section covers the basics of AI-powered intrusion detection, including machine learning algorithms suitable for network security applications.",
                  section2: "The advantages and potential drawbacks of AI in intrusion detection are discussed, such as improved accuracy and the risk of adversarial attacks on the AI itself.",
                  section3: "Real-world case studies and future directions for AI in network security are explored in this section."
                },
                {
                  id: 3,
                  title: "AI-Powered Network Intrusion Detection",
                  description: "Utilizing artificial intelligence to enhance network intrusion detection systems.",
                  category: "theoretical analysis",
                  section1: "This section covers the basics of AI-powered intrusion detection, including machine learning algorithms suitable for network security applications.",
                  section2: "The advantages and potential drawbacks of AI in intrusion detection are discussed, such as improved accuracy and the risk of adversarial attacks on the AI itself.",
                  section3: "Real-world case studies and future directions for AI in network security are explored in this section."
                },
  ];

 
  const handleCategorySelect = (category) => {
    if (category === 'home') {
      setFilteredProblems([]);
    } else {
      const filtered = problems.filter(problem => problem.category === category);
      setFilteredProblems(filtered);
    }
    setSelectedProblem(null); // Reset the selected problem when category changes
  };

  return (
    <div className="app">
      <HorizontalNavBar onCategorySelect={handleCategorySelect} />
      <div className="content-wrapper">
        <SideNavbar problems={problems} onSelectProblem={setSelectedProblem} />
        <main className="main-content">
          <TitleAbout />
          <Problems 
            problems={filteredProblems.length ? filteredProblems : problems} 
            selectedProblem={selectedProblem} 
            onSelectProblem={setSelectedProblem}
          />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
