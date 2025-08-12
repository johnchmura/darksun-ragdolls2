import React from 'react';

const About = () => {
  return (
    <div className="about-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>About Us</h1>
          <p>Learn more about our family ragdoll business and our mission</p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="story-section">
        <div className="container">
          <h2>Our Family Story</h2>
          <div className="story-content">
            <div className="story-text">
              <p>
                Darksun Ragdolls is a family-owned and operated cattery that began as a passion 
                project when we welcomed our first Ragdoll cat into our family. We were immediately 
                captivated by their gentle nature, stunning appearance, and loving personalities.
              </p>
              <p>
                What started as a hobby quickly grew into a dedicated breeding program focused 
                on producing healthy, well-tempered Ragdoll kittens. As a family business, we 
                believe that every family deserves to experience the joy and companionship that 
                these amazing cats bring.
              </p>
              <p>
                Our mission is simple: to breed healthy, happy Ragdolls that bring joy to 
                families while maintaining the highest standards of care and ethical breeding practices. 
                We treat every kitten as if they were part of our own family.
              </p>
            </div>
            <div className="story-image">
              <img src="images/cute_kitten.jpeg" alt="Our Family Story" />
            </div>
          </div>
        </div>
      </section>

      {/* Current Parents Section */}
      <section className="current-parents-section">
        <div className="container">
          <h2>Meet Our Current Parents</h2>
          <div className="parents-grid">
            <div className="parent-cat">
              <div className="parent-image">
                <img src="images/cute_kitten.jpeg" alt="Queen - Izzy (Isabella/Gypsy)" />
              </div>
              <div className="parent-info">
                <h3>Queen - Izzy (Isabella/Gypsy)</h3>
                <p className="parent-description">
                  Our beautiful queen with excellent temperament and health. Izzy is known for 
                  producing gentle, affectionate kittens with stunning markings.
                </p>
                <div className="parent-details">
                  <p><strong>Registered Name:</strong> Isabella (aka Gypsy)</p>
                  <p><strong>Registration:</strong> TICA Registered</p>
                  <p><strong>Health:</strong> Excellent health, vet checked</p>
                </div>
              </div>
            </div>

            <div className="parent-cat">
              <div className="parent-image">
                <img src="images/multiple_kittens.jpeg" alt="Stud - Tusk (Peter)" />
              </div>
              <div className="parent-info">
                <h3>Stud - Tusk (Peter)</h3>
                <p className="parent-description">
                  Our handsome stud with outstanding conformation and gentle nature. Tusk's 
                  kittens inherit his beautiful markings and sweet personality.
                </p>
                <div className="parent-details">
                  <p><strong>Registered Name:</strong> Tusk (Peter)</p>
                  <p><strong>Registration:</strong> TICA Registered</p>
                  <p><strong>Health:</strong> Excellent health, vet checked</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Litter Section */}
      <section className="upcoming-litter-section">
        <div className="container">
          <h2>Spring 2025 Litter</h2>
          <div className="litter-content">
            <div className="litter-info">
              <h3>Izzy and Tusk's Kittens</h3>
              <p>
                We are excited to announce that Izzy and Tusk will be having kittens in Spring 2025! 
                These kittens will be the result of our carefully planned breeding program.
              </p>
              <div className="litter-details">
                <h4>Important Information:</h4>
                <ul>
                  <li><strong>Price:</strong> $1,500 per kitten</li>
                  <li><strong>Reservation:</strong> Half payment ($750) required to reserve</li>
                  <li><strong>Reservation Start:</strong> 8 weeks old</li>
                  <li><strong>Go Home Date:</strong> 10 weeks old</li>
                  <li><strong>Registration:</strong> All rights attached to papers</li>
                  <li><strong>Health:</strong> First shots and vet checked before going home</li>
                </ul>
              </div>
            </div>
            <div className="litter-image">
              <img src="images/furry_kitten.jpeg" alt="Spring 2025 Litter" />
            </div>
          </div>
        </div>
      </section>

      {/* Current Status Section */}
      <section className="current-status-section">
        <div className="container">
          <h2>Current Availability</h2>
          <div className="status-content">
            <div className="status-text">
              <h3>Latest Update</h3>
              <p>
                We are delighted to share that all kittens from our latest litter have found 
                their forever homes. Thank you to all the wonderful families who have welcomed 
                our kittens into their lives!
              </p>
              <p>
                If you would like to be notified when our next litter becomes available, 
                please send us your contact information. We look forward to keeping you 
                updated on any future arrivals.
              </p>
            </div>
            <div className="status-image">
              <img src="images/multiple_kittens.jpeg" alt="Current Status" />
            </div>
          </div>
        </div>
      </section>

      {/* Location & Hours */}
      <section className="location-section">
        <div className="container">
          <h2>Location & Hours</h2>
          <div className="location-content">
            <div className="location-info">
              <h3>Visit Our Family Cattery</h3>
              <p>
                We welcome visitors by appointment to meet our cats and see our facility. 
                This helps ensure the safety and comfort of our cats while providing you 
                with a personal family experience.
              </p>
              <div className="location-details">
                <p><strong>Address:</strong> Louisville, Kentucky</p>
                <p><strong>Hours:</strong> By appointment only</p>
                <p><strong>Contact:</strong> Call or email to schedule a visit</p>
              </div>
            </div>
            <div className="location-image">
              <img src="images/furry_kitten.jpeg" alt="Our Location" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="container">
          <h2>What Our Families Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial">
              <div className="testimonial-content">
                <p>
                  "Our Ragdoll kitten from Darksun Ragdolls is absolutely perfect! 
                  The family was so caring and professional throughout the entire process."
                </p>
                <div className="testimonial-author">
                  <strong>- The Smith Family</strong>
                </div>
              </div>
            </div>
            <div className="testimonial">
              <div className="testimonial-content">
                <p>
                  "The adoption process was smooth and professional. Our kitten came 
                  with all the necessary paperwork and health guarantees as promised."
                </p>
                <div className="testimonial-author">
                  <strong>- The Davis Family</strong>
                </div>
              </div>
            </div>
            <div className="testimonial">
              <div className="testimonial-content">
                <p>
                  "We couldn't be happier with our new family member. The family breeders 
                  were so helpful and answered all our questions with patience."
                </p>
                <div className="testimonial-author">
                  <strong>- The Wilson Family</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
