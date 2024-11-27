import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Collapse the navbar on navigation change
    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarCollapse) {
      const collapse = new window.bootstrap.Collapse(navbarCollapse, {
        toggle: false
      });
      collapse.hide();
    }
  }, [location]);

  return (
    <nav className={`navbar navbar-expand-lg navbar-dark ${scrolled ? 'bg-dark navbar-scrolled' : 'bg-transparent'}`}>
      <div className="container">
        <Link className="navbar-brand" to="/">Hritik Portfolio</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className={`nav-item ${location.pathname === "/" ? "active" : ""}`}>
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className={`nav-item ${location.pathname === "/About" ? "active" : ""}`}>
              <Link className="nav-link" to="/About">About</Link>
            </li>
            <li className={`nav-item ${location.pathname === "/Education" ? "active" : ""}`}>
              <Link className="nav-link" to="/Education">Education</Link>
            </li>
            <li className={`nav-item ${location.pathname === "/Projects" ? "active" : ""}`}>
              <Link className="nav-link" to="/Projects">Projects</Link>
            </li>
            <li className={`nav-item ${location.pathname === "/Certification" ? "active" : ""}`}>
              <Link className="nav-link" to="/Certification">Certifications</Link>
            </li>
            <li className={`nav-item ${location.pathname === "/Contact" ? "active" : ""}`}>
              <Link className="nav-link" to="/Contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
