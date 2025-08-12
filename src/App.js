import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AvailableKittens from './components/AvailableKittens';
import BreedingProgram from './components/BreedingProgram';
import AboutContact from './components/AboutContact';
import PreviousKittens from './components/PreviousKittens';
import Footer from './components/Footer';
import BackgroundContainer from './components/BackgroundContainer';

function App() {
  return (
    <Router>
      <div className="App">
        <BackgroundContainer />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/kittens" element={<AvailableKittens />} />
          <Route path="/program" element={<BreedingProgram />} />
          <Route path="/about" element={<AboutContact />} />
          <Route path="/previous-kittens" element={<PreviousKittens />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
