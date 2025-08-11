import React, { useState } from 'react';

const Navbar = ({ currentSection, onSectionChange }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  const handleNavClick = (sectionId) => {
    onSectionChange(sectionId);
    setIsActive(false); // Close mobile menu when clicking a link
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <a href="#home" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}>
          Darksun Ragdolls
        </a>
      </div>
      <div className={`hamburger ${isActive ? 'active' : ''}`} onClick={toggleMenu}>
        <span className="hamburger-icon">&#9776;</span>
      </div>
      <ul className={`navLinks ${isActive ? 'active' : ''}`}>
        <li>
          <a 
            href="#home" 
            onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}
            className={currentSection === 'home' ? 'active' : ''}
          >
            Home
          </a>
        </li>
        <li>
          <a 
            href="#cats" 
            onClick={(e) => { e.preventDefault(); handleNavClick('cats'); }}
            className={currentSection === 'cats' ? 'active' : ''}
          >
            Our Ragdolls
          </a>
        </li>
        <li>
          <a 
            href="#contact" 
            onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}
            className={currentSection === 'contact' ? 'active' : ''}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
