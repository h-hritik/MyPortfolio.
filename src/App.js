// Includes Popper and Bootstrap JS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css'; // Renamed import to avoid conflict
import About from './components/About';
import Certification from './components/Certification';
import Contact from './components/Contact';
import Education from './components/Education';
import HomePage from './components/Homepage'; // Ensure this matches the actual file name
import Navbar from './components/Navbar';
import Projects from './components/Projects';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Changed the default route to HomePage */}
        <Route path="/Homepage" element={<HomePage />} />
        <Route path="/About" element={<About />} />
        <Route path="/Education" element={<Education />} />
        <Route path="/Certification" element={<Certification />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;