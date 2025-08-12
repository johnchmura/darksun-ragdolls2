import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  const closeMenu = () => {
    setIsActive(false);
  };

  const isActiveRoute = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/" onClick={closeMenu}>
          Darksun Ragdolls
        </Link>
      </div>
      <div className={`hamburger ${isActive ? 'active' : ''}`} onClick={toggleMenu}>
        <span className="hamburger-icon">&#9776;</span>
      </div>
      <ul className={`navLinks ${isActive ? 'active' : ''}`}>
        <li>
          <Link 
            to="/" 
            onClick={closeMenu}
            className={isActiveRoute('/') ? 'active' : ''}
          >
            Home
          </Link>
        </li>
        <li>
          <Link 
            to="/kittens" 
            onClick={closeMenu}
            className={isActiveRoute('/kittens') ? 'active' : ''}
          >
            Available Kittens
          </Link>
        </li>
        <li>
          <Link 
            to="/previous-kittens" 
            onClick={closeMenu}
            className={isActiveRoute('/previous-kittens') ? 'active' : ''}
          >
            Previous Kittens
          </Link>
        </li>
        <li>
          <Link 
            to="/program" 
            onClick={closeMenu}
            className={isActiveRoute('/program') ? 'active' : ''}
          >
            Our Program
          </Link>
        </li>
        <li>
          <Link 
            to="/about" 
            onClick={closeMenu}
            className={isActiveRoute('/about') ? 'active' : ''}
          >
            About
          </Link>
        </li>
        <li>
          <Link 
            to="/contact" 
            onClick={closeMenu}
            className={isActiveRoute('/contact') ? 'active' : ''}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
