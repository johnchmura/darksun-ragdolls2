import React from 'react';
import { Link } from 'react-router-dom';

const PreviousKittens = () => {
  return (
    <div className="previous-kittens-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Previously Adopted Kittens</h1>
          <p>Celebrating our successful adoptions and the joy our kittens have brought to their forever families</p>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="success-stories-section">
        <div className="container">
          <h2>Success Stories</h2>
          <div className="stories-grid">
            <div className="story-card">
              <img src="images/cute_kitten.jpeg" alt="Adopted Kitten - Luna" />
              <div className="story-content">
                <h3>Luna</h3>
                <p className="adoption-date">Adopted: December 2024</p>
                <p className="story-text">
                  Luna was adopted by the Johnson family and has become the perfect companion for their two young children. 
                  She's known for her gentle nature and love of cuddles.
                </p>
                <div className="family-quote">
                  <p>"Luna has brought so much joy to our home. She's the perfect family cat!"</p>
                  <span>- The Johnson Family</span>
                </div>
              </div>
            </div>

            <div className="story-card">
              <img src="images/multiple_kittens.jpeg" alt="Adopted Kitten - Shadow" />
              <div className="story-content">
                <h3>Shadow</h3>
                <p className="adoption-date">Adopted: December 2024</p>
                <p className="story-text">
                  Shadow found his forever home with the Davis family. He's become best friends with their golden retriever 
                  and loves to play in their large backyard.
                </p>
                <div className="family-quote">
                  <p>"Shadow is the most affectionate cat we've ever met. He's perfect!"</p>
                  <span>- The Davis Family</span>
                </div>
              </div>
            </div>

            <div className="story-card">
              <img src="images/furry_kitten.jpeg" alt="Adopted Kitten - Bella" />
              <div className="story-content">
                <h3>Bella</h3>
                <p className="adoption-date">Adopted: December 2024</p>
                <p className="story-text">
                  Bella was adopted by the Wilson family and has become the queen of their household. She loves to sit 
                  in sunny windows and chase laser pointers.
                </p>
                <div className="family-quote">
                  <p>"Bella is absolutely beautiful and has such a sweet personality. We're so lucky!"</p>
                  <span>- The Wilson Family</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Adoption Process Section */}
      <section className="adoption-process-section">
        <div className="container">
          <h2>Our Adoption Process</h2>
          <div className="process-content">
            <div className="process-text">
              <h3>How We Find Forever Homes</h3>
              <p>
                We take great care in matching our kittens with the right families. Our adoption process ensures 
                that each kitten goes to a loving home where they'll be cherished for life.
              </p>
              <div className="process-steps">
                <div className="step">
                  <div className="step-number">1</div>
                  <div className="step-content">
                    <h4>Initial Contact</h4>
                    <p>Families reach out to express interest and learn about our kittens</p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-number">2</div>
                  <div className="step-content">
                    <h4>Getting to Know You</h4>
                    <p>We discuss your lifestyle, experience, and what you're looking for in a cat</p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-number">3</div>
                  <div className="step-content">
                    <h4>Meet & Greet</h4>
                    <p>You visit our cattery to meet the kittens and see our facility</p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-number">4</div>
                  <div className="step-content">
                    <h4>Adoption Day</h4>
                    <p>Your new family member goes home with all necessary paperwork and care instructions</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="process-image">
              <img src="images/cute_kitten.jpeg" alt="Adoption Process" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="contact-cta">
        <div className="container">
          <h2>Interested in Our Future Litters?</h2>
          <p>While our current kittens have found their homes, we'd love to keep you updated on future litters.</p>
          <div className="cta-buttons">
            <Link to="/about" className="primary-button">
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
