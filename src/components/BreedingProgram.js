import React from 'react';

const BreedingProgram = () => {
  return (
    <div className="breeding-program-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Our Breeding Program</h1>
          <p>Learn about our commitment to excellence in Ragdoll breeding</p>
        </div>
      </section>

      {/* Breeding Philosophy */}
      <section className="philosophy-section">
        <div className="container">
          <h2>Our Breeding Philosophy</h2>
          <div className="philosophy-content">
            <div className="philosophy-text">
              <p>
                At Darksun Ragdolls, we believe in responsible breeding practices that prioritize 
                the health, temperament, and well-being of our cats above all else. Our breeding 
                program is built on the foundation of producing healthy, well-socialized kittens 
                that meet the Ragdoll breed standard.
              </p>
              <p>
                We carefully select our breeding cats based on health testing, temperament, 
                and conformation to ensure the best possible outcomes for our kittens and their 
                future families.
              </p>
            </div>
            <div className="philosophy-image">
              <img src="images/multiple_kittens.jpeg" alt="Our Breeding Philosophy" />
            </div>
          </div>
        </div>
      </section>

      {/* Parent Cats */}
      <section className="parents-section">
        <div className="container">
          <h2>Meet Our Parent Cats</h2>
          <div className="parents-grid">
            <div className="parent-cat">
              <div className="parent-image">
                <img src="images/cute_kitten.jpeg" alt="Queen - Luna" />
              </div>
              <div className="parent-info">
                <h3>Queen - Luna</h3>
                <p className="parent-description">
                  Our beautiful blue point queen with excellent temperament and health. 
                  Luna is known for producing gentle, affectionate kittens.
                </p>
                <div className="parent-details">
                  <p><strong>Color:</strong> Blue Point</p>
                  <p><strong>Age:</strong> 3 years</p>
                  <p><strong>Health:</strong> HCM negative, PKD negative</p>
                </div>
              </div>
            </div>

            <div className="parent-cat">
              <div className="parent-image">
                <img src="images/furry_kitten.jpeg" alt="Stud - Shadow" />
              </div>
              <div className="parent-info">
                <h3>Stud - Shadow</h3>
                <p className="parent-description">
                  Our handsome seal point stud with outstanding conformation and gentle nature. 
                  Shadow's kittens inherit his beautiful markings and sweet personality.
                </p>
                <div className="parent-details">
                  <p><strong>Color:</strong> Seal Point</p>
                  <p><strong>Age:</strong> 4 years</p>
                  <p><strong>Health:</strong> HCM negative, PKD negative</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Health & Genetics */}
      <section className="health-section">
        <div className="container">
          <h2>Health & Genetics</h2>
          <div className="health-content">
            <div className="health-text">
              <h3>Health Testing</h3>
              <p>
                All our breeding cats undergo comprehensive health testing to ensure we're 
                producing the healthiest kittens possible. We test for common genetic conditions 
                that can affect Ragdolls.
              </p>
              <ul className="health-list">
                <li>HCM (Hypertrophic Cardiomyopathy) testing</li>
                <li>PKD (Polycystic Kidney Disease) testing</li>
                <li>Regular veterinary check-ups</li>
                <li>Vaccination protocols</li>
                <li>Parasite prevention</li>
              </ul>
            </div>
            <div className="health-image">
              <img src="images/cute_kitten.jpeg" alt="Health & Genetics" />
            </div>
          </div>
        </div>
      </section>

      {/* Facility Tour */}
      <section className="facility-section">
        <div className="container">
          <h2>Our Facility</h2>
          <p className="section-subtitle">A clean, safe environment for our cats and kittens</p>
          <div className="facility-grid">
            <div className="facility-item">
              <img src="images/cute_kitten.jpeg" alt="Nursery Area" />
              <h3>Nursery Area</h3>
              <p>Dedicated space for mothers and newborn kittens</p>
            </div>
            <div className="facility-item">
              <img src="images/multiple_kittens.jpeg" alt="Play Area" />
              <h3>Play Area</h3>
              <p>Large space for kittens to socialize and play</p>
            </div>
            <div className="facility-item">
              <img src="images/furry_kitten.jpeg" alt="Adult Quarters" />
              <h3>Adult Quarters</h3>
              <p>Comfortable living space for our breeding cats</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="certifications-section">
        <div className="container">
          <h2>Our Certifications</h2>
          <div className="certifications-grid">
            <div className="certification">
              <div className="cert-icon">🏆</div>
              <h3>CFA Registered</h3>
              <p>Cat Fanciers' Association registered cattery</p>
            </div>
            <div className="certification">
              <div className="cert-icon">❤️</div>
              <h3>Health Guarantee</h3>
              <p>Comprehensive health guarantee for all kittens</p>
            </div>
            <div className="certification">
              <div className="cert-icon">📋</div>
              <h3>Pedigree Papers</h3>
              <p>Full pedigree documentation for all kittens</p>
            </div>
            <div className="certification">
              <div className="cert-icon">🏥</div>
              <h3>Veterinary Care</h3>
              <p>Regular veterinary care and health monitoring</p>
            </div>
          </div>
        </div>
      </section>

      {/* Breeding Standards */}
      <section className="standards-section">
        <div className="container">
          <h2>Breeding Standards</h2>
          <div className="standards-content">
            <div className="standards-text">
              <h3>What We Look For</h3>
              <ul className="standards-list">
                <li><strong>Health:</strong> Excellent health with no genetic conditions</li>
                <li><strong>Temperament:</strong> Gentle, affectionate, and social personality</li>
                <li><strong>Conformation:</strong> Meets Ragdoll breed standard</li>
                <li><strong>Pedigree:</strong> Strong genetic background</li>
                <li><strong>Age:</strong> Appropriate breeding age and health</li>
              </ul>
            </div>
            <div className="standards-image">
              <img src="images/multiple_kittens.jpeg" alt="Breeding Standards" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="contact-cta">
        <div className="container">
          <h2>Questions About Our Program?</h2>
          <p>We're happy to discuss our breeding practices and answer any questions you may have.</p>
          <div className="cta-buttons">
            <a href="mailto:Darksunragdolls@gmail.com" className="primary-button">
              Email Us
            </a>
            <a href="tel:1-502-509-1468" className="secondary-button">
              Call Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BreedingProgram;
