import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AvailableKittens from './components/AvailableKittens';
import BreedingProgram from './components/BreedingProgram';
import About from './components/About';
import Contact from './components/Contact';
import PreviousKittens from './components/PreviousKittens';
import Footer from './components/Footer';
import BackgroundContainer from './components/BackgroundContainer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <BackgroundContainer />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/kittens" element={<AvailableKittens />} />
          <Route path="/program" element={<BreedingProgram />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/previous-kittens" element={<PreviousKittens />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
