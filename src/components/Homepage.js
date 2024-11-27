import React from 'react';
import './Homepage.css';

function HomePage() {
  return (
    <div>
      {/* Header */}
      <header className="header">
      
      </header>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="container">
          <h1>Welcome to My Portfolio</h1>
          <p>Hi, I'm Hritik Maurya, a passionate developer. Explore my work and get to know more about me!</p>
 
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="container">
          <h2>About Me</h2>
          <p>
            I am a dedicated web developer with expertise in React, JavaScript, and backend technologies. I enjoy building innovative and
            user-friendly applications that solve real-world problems. When I am not coding, I enjoy learning new technologies and improving my skills.
          </p>
        </div>
      </section>

      {/* Projects Section */}
   
      {/* Footer */}
      <footer className="footer">
  <div className="container">
    <div className="footer-content">
      {/* About Section */}
      <div className="footer-section about">
        <h3>About Me</h3>
        <p>
          Hi, I'm Hritik Maurya, a passionate web developer dedicated to building user-friendly and innovative applications. Let's connect and collaborate!
        </p>
      </div>

      {/* Navigation Links */}
      <div className="footer-section links">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="/Homepage">Home</a></li>
          <li><a href="/About">About</a></li>
          <li><a href="/Projects">Projects</a></li>
          <li><a href="/Contact">Contact</a></li>
        </ul>
      </div>

      {/* Social Media Section */}
      <div className="footer-section social">
        <h3>Follow Me</h3>
        <div className="social-links">
          <a href="https://github.com/h-hritik/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i> GitHub
          </a>
          <a href="https://www.linkedin.com/in/hrithik-maurya-792995253/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
          <a href="https://x.com/MauryaHrit18109" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i> Twitter
          </a>
        </div>
      </div>
    </div>

    <div className="footer-bottom">
      <p>© 2024 Hritik Maurya. All rights reserved.</p>
    </div>
  </div>
</footer>

    </div>
  );
}

export default HomePage;
