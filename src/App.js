import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Cats from './components/Cats';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackgroundContainer from './components/BackgroundContainer';

function App() {
  const [currentSection, setCurrentSection] = useState('home');

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 0;
      window.scrollTo({
        top: element.offsetTop - navbarHeight,
        behavior: 'smooth'
      });
      setCurrentSection(sectionId);
    }
  };

  useEffect(() => {
    const updateBackgroundHeight = () => {
      const bgContainer = document.querySelector('.background-container');
      if (bgContainer) {
        bgContainer.style.height = document.body.scrollHeight + 'px';
      }
    };

    updateBackgroundHeight();
    window.addEventListener('resize', updateBackgroundHeight);
    window.addEventListener('scroll', updateBackgroundHeight);

    return () => {
      window.removeEventListener('resize', updateBackgroundHeight);
      window.removeEventListener('scroll', updateBackgroundHeight);
    };
  }, []);

  return (
    <div className="App">
      <BackgroundContainer />
      <Navbar currentSection={currentSection} onSectionChange={setCurrentSection} />
      <Home onSectionChange={scrollToSection} />
      <Cats />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
