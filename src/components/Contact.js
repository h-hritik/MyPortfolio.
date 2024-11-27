import React, { useState } from 'react';
import { FaEnvelope, FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [formErrors, setFormErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    if (!formData.name) errors.name = 'Name is required';
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Valid email is required';
    if (!formData.message) errors.message = 'Message is required';
    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');
    setSuccessMessage('');

    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: JSON.stringify({
          access_key: '071ef91c-ed1d-4c49-8262-48f6069ec599',
          subject: 'New Contact Form Submission',
          ...formData
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const result = await response.json();
      if (response.ok) {
        setSuccessMessage('Thank you for your message! We will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setErrorMessage(`Error: ${result.message}`);
      }
    } catch (error) {
      setErrorMessage('Something went wrong. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact">
      <div className="container">
        <h2>Contact</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              className={`form-control ${formErrors.name ? 'error-input' : ''}`}
              value={formData.name}
              onChange={handleChange}
              required
            />
            {formErrors.name && <span className="error-text">{formErrors.name}</span>}
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              className={`form-control ${formErrors.email ? 'error-input' : ''}`}
              value={formData.email}
              onChange={handleChange}
              required
            />
            {formErrors.email && <span className="error-text">{formErrors.email}</span>}
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea
              name="message"
              className={`form-control ${formErrors.message ? 'error-input' : ''}`}
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            {formErrors.message && <span className="error-text">{formErrors.message}</span>}
          </div>
          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? "Sending..." : "Send Email"}
          </button>
        </form>
        {successMessage && <p className="success-message">{successMessage}</p>}
        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <ul className="contact-info">
          <li><FaEnvelope className="icon" /> <strong>Email:</strong> <a href="mailto:hrithikm247@gmail.com">hrithikm247@gmail.com</a></li>
          <li><FaLinkedin className="icon" /> <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/hrithik-maurya-792995253/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></li>
          <li><strong>Phone:</strong> <a href="tel:+919324544634">+91 9324544634</a></li>
          <li>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram className="icon" /></a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook className="icon" /></a>
            <a href="https://github.com/h-hritik" target="_blank" rel="noopener noreferrer"><FaGithub className="icon" /></a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Contact;
