import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const slideCurrentRef = useRef(null);
  const slideNextRef = useRef(null);

  const images = useMemo(() => ['images/cute_kitten.jpeg', 'images/multiple_kittens.jpeg', 'images/furry_kitten.jpeg'], []);

  const transitionToNextImage = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    
    const nextIndex = (currentIndex + 1) % images.length;
    if (slideNextRef.current) {
      slideNextRef.current.src = images[nextIndex];
      slideNextRef.current.style.transition = 'none';
      slideNextRef.current.style.transform = 'translateX(100%)';
      
      // Force reflow
      void slideNextRef.current.offsetWidth;
      
      // Animate both images
      if (slideCurrentRef.current) {
        slideCurrentRef.current.style.transition = 'transform 1s ease-in-out';
      }
      slideNextRef.current.style.transition = 'transform 1s ease-in-out';
      
      if (slideCurrentRef.current) {
        slideCurrentRef.current.style.transform = 'translateX(-100%)';
      }
      slideNextRef.current.style.transform = 'translateX(0)';
      
      // After transition, update current image and reset positions
      setTimeout(() => {
        setCurrentIndex(nextIndex);
        if (slideCurrentRef.current) {
          slideCurrentRef.current.src = images[nextIndex];
          slideCurrentRef.current.style.transition = 'none';
          slideCurrentRef.current.style.transform = 'translateX(0)';
        }
        
        if (slideNextRef.current) {
          slideNextRef.current.style.transition = 'none';
          slideNextRef.current.style.transform = 'translateX(100%)';
        }
        
        setIsTransitioning(false);
      }, 1000);
    }
  }, [currentIndex, isTransitioning, images]);

  const transitionToPrevImage = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    if (slideNextRef.current) {
      slideNextRef.current.src = images[prevIndex];
      slideNextRef.current.style.transition = 'none';
      slideNextRef.current.style.transform = 'translateX(-100%)';
      
      // Force reflow
      void slideNextRef.current.offsetWidth;
      
      // Animate both images
      if (slideCurrentRef.current) {
        slideCurrentRef.current.style.transition = 'transform 1s ease-in-out';
      }
      slideNextRef.current.style.transition = 'transform 1s ease-in-out';
      
      if (slideCurrentRef.current) {
        slideCurrentRef.current.style.transform = 'translateX(100%)';
      }
      slideNextRef.current.style.transform = 'translateX(0)';
      
      // After transition, update current image and reset positions
      setTimeout(() => {
        setCurrentIndex(prevIndex);
        if (slideCurrentRef.current) {
          slideCurrentRef.current.src = images[prevIndex];
          slideCurrentRef.current.style.transition = 'none';
          slideCurrentRef.current.style.transform = 'translateX(0)';
        }
        
        if (slideNextRef.current) {
          slideNextRef.current.style.transition = 'none';
          slideNextRef.current.style.transform = 'translateX(-100%)';
        }
        
        setIsTransitioning(false);
      }, 1000);
    }
  }, [currentIndex, isTransitioning, images]);

  useEffect(() => {
    // Auto-advance slides every 5 seconds
    const interval = setInterval(transitionToNextImage, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, isTransitioning, transitionToNextImage]);

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Welcome to Darksun Ragdolls</h1>
            <p>
              At Darksun Ragdolls, we specialize in raising affectionate and well-socialized Ragdoll kittens. 
              Our goal is to find loving homes for our kittens where they can bring joy, companionship, and a lifetime of purrs.
            </p>
            <div className="hero-buttons">
              <Link to="/kittens" className="primary-button">
                View Available Kittens
              </Link>
              <Link to="/program" className="secondary-button">
                Learn About Our Program
              </Link>
            </div>
          </div>
          <div className="slideshow-container">
            <img
              ref={slideCurrentRef}
              src={images[currentIndex]}
              alt="Kitten slideshow"
              className="slide"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                transition: 'transform 1s ease-in-out'
              }}
            />
            <img
              ref={slideNextRef}
              src={images[(currentIndex + 1) % images.length]}
              alt="Next kitten"
              className="slide"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                transition: 'transform 1s ease-in-out',
                transform: 'translateX(100%)'
              }}
            />
            <div className="nav-area left" onClick={transitionToPrevImage}></div>
            <div className="nav-area right" onClick={transitionToNextImage}></div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="about-section">
        <div className="container">
          <h2>About Darksun Ragdolls</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                We are a small, family-owned cattery dedicated to breeding healthy, well-tempered Ragdoll cats. 
                Our breeding program focuses on producing kittens with excellent health, temperament, and conformation 
                to the Ragdoll breed standard.
              </p>
              <p>
                Each kitten is raised in our home with love and attention, ensuring they are well-socialized 
                and ready for their forever families. We take pride in our commitment to responsible breeding 
                practices and the health of our cats.
              </p>
              <Link to="/about" className="learn-more-button">
                Learn More About Us
              </Link>
            </div>
            <div className="about-image">
              <img src="images/cute_kitten.jpeg" alt="About Darksun Ragdolls" />
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Section */}
      <section className="navigation-section">
        <div className="container">
          <h2>Explore Our Ragdoll Family</h2>
          <p className="section-subtitle">Discover everything we have to offer</p>
          <div className="navigation-cards">
            <div className="nav-card">
              <img src="images/multiple_kittens.jpeg" alt="Available Kittens" />
              <h3>Available Kittens</h3>
              <p>Browse our current litter of adorable Ragdoll kittens available for adoption.</p>
              <Link to="/kittens" className="nav-button">
                View Available Kittens
              </Link>
            </div>
            <div className="nav-card">
              <img src="images/cute_kitten.jpeg" alt="Previous Adoptions" />
              <h3>Previous Adoptions</h3>
              <p>See the success stories of kittens who have found their forever homes.</p>
              <Link to="/previous-kittens" className="nav-button">
                View Success Stories
              </Link>
            </div>
            <div className="nav-card">
              <img src="images/furry_kitten.jpeg" alt="Our Breeding Program" />
              <h3>Our Breeding Program</h3>
              <p>Learn about our TICA registered parents and breeding standards.</p>
              <Link to="/program" className="nav-button">
                Explore Our Program
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Section */}
      <section className="quick-contact-section">
        <div className="container">
          <h2>Ready to Adopt?</h2>
          <p>Get in touch with us to learn more about our available kittens and adoption process.</p>
          <div className="quick-contact-info">
            <div className="contact-item">
              <img src="images/email.png" alt="Email" />
              <a href="mailto:Darksunragdolls@gmail.com">Darksunragdolls@gmail.com</a>
            </div>
            <div className="contact-item">
              <img src="images/phone.png" alt="Phone" />
              <span>1 (502) 509-1468</span>
            </div>
          </div>
          <Link to="/contact" className="contact-button">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
