import React from 'react';
import './Education.css';

function Education() {
  return (
    <section id="education">
      <div className="container">
        <h2>Education</h2>
        <div className="row">
          {/* Bachelor Degree */}
          <div className="col-md-6">
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">Bachelor of Information Technology (BSC IT)</h5>
                <h6 className="card-text">
                  <a href="https://mu.ac.in/" target="_blank" rel="noopener noreferrer">
                    Mumbai University
                  </a>, Graduated: 2024, S.M. Shetty College (Powai)
                </h6>
                <p className="card-text">
                  Achieved a solid foundation in information technology and programming concepts. <strong>CGPI:</strong> 6.33
                </p>
              </div>
            </div>
          </div>

          {/* Science - College */}
          <div className="col-md-6">
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">Science</h5>
                <h6 className="card-text">IDUBS College, Graduated: 2021</h6>
                <p className="card-text">
                  Studied science and mathematics with a keen interest in technology. <strong>Result:</strong> 69%
                </p>
              </div>
            </div>
          </div>

          {/* High School */}
          <div className="col-md-6">
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">High School</h5>
                <h6 className="card-text">Saraswati English High School, Graduated: 2019</h6>
                <p className="card-text">
                  Developed an interest in technology through science and mathematics. <strong>Result:</strong> 67%
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
