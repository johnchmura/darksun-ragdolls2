import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="page">
      <div className="contact-container">
        <div className="contact-image">
          <img src="images/cute_kitten.jpeg" alt="Cute kitten" />
        </div>
        <div className="contact-text">
          <h1>Connect With Us</h1>
          <ul>
            <li>Thank you for your interest in Darksun Ragdolls!</li>
            <li>We are delighted to share that all kittens from our latest litter have found their forever homes.</li>
            <li>If you would like to be notified when our next litter becomes available, please send us your contact information.</li>
            <li>We look forward to keeping you updated on any future arrivals.</li>
          </ul>
          <p>Have questions about our Ragdolls or the adoption process? Reach out to us!</p>
          <p>
            <img src="images/email.png" alt="Email Icon" style={{ verticalAlign: 'middle' }} /> 
            <a href="mailto:Darksunragdolls@gmail.com">Darksunragdolls@gmail.com</a><br />
            <img src="images/phone.png" alt="Phone Icon" style={{ verticalAlign: 'middle' }} /> 1 (502) 509-1468
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
