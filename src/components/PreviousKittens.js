import React from 'react';
import { Link } from 'react-router-dom';

const PreviousKittens = () => {
  return (
    <div className="previous-kittens-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Adoption Success Stories</h1>
          <p>This page will showcase our successful adoptions and the joy our kittens bring to their forever families</p>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="coming-soon-section">
        <div className="container">
          {/* Content will be added here in the future */}
        </div>
      </section>



      {/* Contact CTA Section */}
      <section className="contact-cta">
        <div className="container">
          <h2>Interested in Our Future Litters?</h2>
          <p>While our current kittens have found their homes, we'd love to keep you updated on future litters.</p>
          <div className="cta-buttons">
            <Link to="/contact" className="primary-button">
              Contact Us
            </Link>
            <Link to="/program" className="secondary-button">
              Learn About Our Program
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PreviousKittens;
