import React from 'react';

const Contact = () => {
  return (
    <div className="contact-page">
      {/* Main Contact Section */}
      <section className="main-contact-section">
        <div className="container">
          <div className="contact-message">
            <h2>We'd Love to Hear from You</h2>
            <p>
              Whether you have questions about our kittens, want to learn more about our adoption process, 
              or just want to say hello, we're here to help. Don't hesitate to reach out - we're passionate 
              about finding the perfect homes for our Ragdoll kittens and love connecting with fellow cat lovers.
            </p>
          </div>

          <div className="contact-options">
            <div className="contact-option">
              <div className="option-icon">
                <img src="images/email.png" alt="Email" />
              </div>
              <h3>Email Us</h3>
              <p>Perfect for detailed questions and initial inquiries</p>
              <div className="contact-value">Darksunragdolls@gmail.com</div>
              <a href="mailto:Darksunragdolls@gmail.com" className="contact-button">
                Send Email
              </a>
            </div>

            <div className="contact-option">
              <div className="option-icon">
                <img src="images/phone.png" alt="Phone" />
              </div>
              <h3>Call Us</h3>
              <p>Great for urgent questions</p>
              <div className="contact-value">1 (502) 509-1468</div>
              <a href="tel:1-502-509-1468" className="contact-button">
                Call Now
              </a>
            </div>
          </div>

          <div className="location-info">
            <div className="location-item">
              <div className="location-icon">📍</div>
              <div>
                <strong>Location</strong>
                <span>Salem, Indiana</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
