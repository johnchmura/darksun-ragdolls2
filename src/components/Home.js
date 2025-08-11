import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';

const Home = ({ onSectionChange }) => {
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
    <section id="home" className="page">
      <div className="home-content">
        <div className="home-text">
          <h1>Welcome to Darksun Ragdolls</h1>
          <p>
            At Darksun Ragdolls, we specialize in raising affectionate and well-socialized Ragdoll kittens. Our goal is to find loving homes for our kittens where they can bring joy, companionship, and a lifetime of purrs.
          </p>
          <div className="home-button-container">
            <button 
              className="home-button"
              onClick={() => onSectionChange('cats')}
            >
              View Kittens
            </button>
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
  );
};

export default Home;
