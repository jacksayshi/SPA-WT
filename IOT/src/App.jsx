import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Problems from '../src/Components/Problems';
import SolutionPage from '../src/Components/SolutionsPage';
import MethodologyPage from '../src/Components/MethodologyPage';
import Navbar from '../src/Components/Navigation';
import Footer from '../src/Components/Footer';
import './App.css';
import TitleAbout from './Components/TitleAbout';

function App() {
  return (
    <Router>
      <Navbar />
      <TitleAbout/>
      <Routes>
        <Route path="/" element={<Problems />} />
        <Route path="/solutions" element={<SolutionPage />} />
        <Route path="/methodologies" element={<MethodologyPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
