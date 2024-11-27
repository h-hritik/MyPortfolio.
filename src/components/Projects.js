import React, { useState } from 'react';
import passImage from '../images/bg15.jpg';
import imageurl from '../images/image.png';
import imagenotes from '../images/inotebook.png';
import Image from '../images/React news.png';
import passImage2 from '../images/textconverter.png';
import './Projects.css'; // Ensure this file is created

function Projects() {
  const [showMore, setShowMore] = useState(false);

  const toggleReadMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div>
      <section id="projects" className="py-5 project-bg my-2">
        <div className="container">
          <h2 id="h2">Projects</h2>
          <div className="row">
            {/* Project 1 */}
            <div className="col-md-4">
              <div className="card shadow project-card bg-dark text-light">
                <img src={passImage} className="card-img-top" alt="Project 1" />
                <div className="card-body">
                  <h5 className="card-title">Dental Clinic System</h5>
                  <p className="card-text">
                    The Dental Clinic Management System (DCMS) is a robust software solution crafted using HTML/CSS for frontend design, Bootstrap for responsive layout, Java (servlet, JSP) for backend logic, and MySQL for database management...
                    {showMore && <span> providing a comprehensive suite of tools to manage patient information, appointments, treatments, billing, and administrative tasks seamlessly, taking feedback within a unified platform.</span>}
                  </p>
                  <button onClick={toggleReadMore} className="btn btn-secondary">
                    {showMore ? "Read Less" : "Read More"}
                  </button>
                  <a href="https://vzcwvq.csb.app/Loginhtml.html" className="btn btn-primary ml-2">View Project</a>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="col-md-4">
              <div className="card shadow project-card my-2 bg-dark text-light">
                <img src={passImage2} className="card-img-top" alt="Project 2" />
                <div className="card-body">
                  <h5 className="card-title">Text Converter</h5>
                  <p className="card-text">Text converter - we can perform operations on text like uppercase, lowercase, color change. The application is built in React.</p>
                  <a href="https://text-converter-rouge.vercel.app/" className="btn btn-primary">View Project</a>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="col-md-4 my-3">
              <div className="card shadow project-card my-2 bg-dark text-light">
                <img src={Image} className="card-img-top" alt="Project 3" />
                <div className="card-body">
                  <h5 className="card-title">React News App</h5>
                  <p className="card-text">The website fetches news with the help of APIs, and you can choose multiple fields like science, entertainment, general, sports, etc. The application is built in React.</p>
                  <a href="https://react-news-aihjjuth9-hritik-mauryas-projects.vercel.app/" className="btn btn-primary mx-2">View Project</a>
                </div> 
                <a href="https://youtu.be/3IhKph7uQsA" className="btn btn-primary mb-2" target="_blank" rel="noopener noreferrer">Watch Video</a>
              </div>
            </div>
          </div>
          
          <div className="row">
            {/* Project 4 */}
            <div className="col-md-4 my-2">
              <div className="card shadow project-card my-2 bg-dark text-light">
                <img src={imagenotes} className="card-img-top" alt="Project 4" />
                <div className="card-body">
                  <h5 className="card-title">iNoteBook App</h5>
                  <p className="card-text">iNoteBook - It is a web app to store notes and perform CRUD operations on notes.</p>
                  <a href="https://i-note-book-app-nine.vercel.app/" className="btn btn-primary mx-2 my-2">View Project</a>
                  <a href="https://youtu.be/CAA6FCr8zhk" className="btn btn-primary mb-2" target="_blank" rel="noopener noreferrer">Watch Video</a>
                </div>
              </div>
            </div>

            {/* Project 5 */}
            <div className="col-md-4 my-2">
              <div className="card shadow project-card my-2 bg-dark text-light">
                <img src={imageurl} className="card-img-top" alt="Project 5" />
                <div className="card-body">
                  <h5 className="card-title">ShortenURL app</h5>
                  <p className="card-text">ShortenURL - An application that generates short URLs and stores them in a database.</p>
                  <a href="https://text-converter-rouge.vercel.app/" className="btn btn-primary mx-2 my-2">View Project</a>
                  <a href="https://youtu.be/P2CLQvy1pw8" className="btn btn-primary mb-2" target="_blank" rel="noopener noreferrer">Watch Video</a>
                </div>
              </div>
            </div>

            
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;
