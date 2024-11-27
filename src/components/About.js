import React from 'react';
import pdf from '../documents/Hritik_Maurya_Resume_Colored_Links.pdf';
import passImage from '../images/pass02.JPG';
import './About.css';

function About() {
  return (
    <div>
      <section id="about" className="py-5">
        <div className="container">
          <div className="row align-items-center">
            {/* About Me Section */}
            <div className="col-md-6">
              <h2>About Me</h2>
              <p>
                <i>
                  Hi, <strong>I'm Hritik.</strong> I'm passionate about web development and enjoy creating intuitive and dynamic web experiences.
                </i>
              </p>
              <p>
                <i>
                  I love to explore the latest web technologies and continuously improve my skills to deliver high-quality projects. Let’s build something amazing together!
                </i>
              </p>
            </div>

            {/* Profile Image */}
            <div className="col-md-6 text-center">
              <img
                src={passImage}
                alt="Hritik Maurya"
                className="img-fluid rounded-circle"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Download Resume Button */}
      <div className="center">
        <a href={pdf} download className="btn btn-primary my-2">
          <b>Download Resume</b>
        </a>
      </div>
    </div>
  );
}

export default About;
