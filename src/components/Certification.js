import React from 'react';
import './certification.css'; // Make sure to link your CSS

function Certification() {
  return (
    <>
      <section
        id="certifications"
        className="py-5 my-2"
      >
        <div className="container">
          <h2>Certifications</h2>
          <div className="row">
            <div className="col-md-4 my-2">
              <div className="card shadow">
                <div className="card-body">
                  <h5 className="card-title">Javascript</h5>
                  <p className="card-text">Learn full concept of Javascript from Simplilearn website.</p>
                  <a href="https://simpli-web.app.link/e/BuUL4FR4OOb" download className="btn btn-primary" title="Download JavaScript Certificate">Download</a>
                </div>
              </div>
            </div>

            <div className="col-md-4 my-2">
              <div className="card shadow">
                <div className="card-body">
                  <h5 className="card-title">React</h5>
                  <p className="card-text">Full concepts of React.</p>
                  <a href="https://simpli-web.app.link/e/1VN9VAG4OOb" download className="btn btn-primary" title="Download React Certificate">Download</a>
                </div>
              </div>
            </div>

            <div className="col-md-4 my-2">
              <div className="card shadow">
                <div className="card-body">
                  <h5 className="card-title">C++</h5>
                  <p className="card-text">Full concepts of Object Oriented Programming in C++.</p>
                  <a href="https://simpli-web.app.link/e/jxZLVKL4OOb" download className="btn btn-primary" title="Download C++ Certificate">Download</a>
                </div>
              </div>
            </div>

            <div className="col-md-4 my-2">
              <div className="card shadow">
                <div className="card-body">
                  <h5 className="card-title">MySQL</h5>
                  <p className="card-text">Full concept of SQL.</p>
                  <a href="https://simpli-web.app.link/e/3CBQgmI4OOb" download className="btn btn-primary" title="Download MySQL Certificate">Download</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Certification;
