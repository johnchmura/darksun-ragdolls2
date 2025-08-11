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

    const handleScroll = () => {
      updateBackgroundHeight();
      
      // Scroll spy - update current section based on scroll position
      const sections = ['home', 'cats', 'contact'];
      const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 0;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= navbarHeight + 100) { // 100px threshold
            setCurrentSection(sectionId);
            break;
          }
        }
      }
    };

    updateBackgroundHeight();
    window.addEventListener('resize', handleScroll);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleScroll);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <BackgroundContainer />
      <Navbar currentSection={currentSection} onSectionChange={scrollToSection} />
      <Home onSectionChange={scrollToSection} />
      <Cats />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
