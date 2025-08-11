import React, { useState, useEffect } from 'react';
import CatModal from './CatModal';

const Cats = () => {
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCat, setSelectedCat] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const API_URL = "https://script.google.com/macros/s/AKfycbyr9uQPQe0mLSdXPxdhDDeFLUB-NnmFzQT2aATFD8s5EQeJNM_KnZCDZhIEXKc7RpN9/exec";
  const CACHE_KEY = "catDataCache";
  const CACHE_TIME = 1000;

  const fetchCats = async () => {
    const cachedData = localStorage.getItem(CACHE_KEY);
    const cachedTimestamp = localStorage.getItem(CACHE_KEY + "_time");

    if (cachedData && cachedTimestamp && (Date.now() - cachedTimestamp < CACHE_TIME)) {
      console.log("Using cached data");
      return JSON.parse(cachedData);
    }

    try {
      console.log("Fetching new data from Google Sheets...");
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();

      if (data.length > 0) {
        localStorage.setItem(CACHE_KEY, JSON.stringify(data));
        localStorage.setItem(CACHE_KEY + "_time", Date.now());
      }
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
  };

  useEffect(() => {
    const loadCats = async () => {
      setLoading(true);
      const catData = await fetchCats();
      setCats(catData);
      setLoading(false);
    };

    loadCats();
  }, []);

  const handleCatClick = (cat) => {
    setSelectedCat(cat);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedCat(null);
  };

  const scrollToContact = () => {
    closeModal();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 0;
      window.scrollTo({
        top: contactSection.offsetTop - navbarHeight,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="cats" className="page">
      <h2>Meet our kittens!</h2>
      
      {loading ? (
        <>
          <div className="spinner">
            <div className="loader"></div>
          </div>
          <p className="loader-text">Finding kittens!</p>
        </>
      ) : (
        <>
          {cats.length === 0 ? (
            <p>No cats available.</p>
          ) : (
            <div className="cards-container">
              {cats.map((cat, index) => (
                <div 
                  key={index} 
                  className="cat-card" 
                  onClick={() => handleCatClick(cat)}
                >
                  <div className="cat-card-left" style={{ position: 'relative' }}>
                    <img src={cat.image} alt={cat.name} loading="lazy" />
                    {cat.reserved && (
                      <div className="reserved-label">{cat.reserved}</div>
                    )}
                  </div>
                  <div className="cat-card-right">
                    <h3 className="cat-name">{cat.name}</h3>
                    <p className="cat-description">{cat.description}</p>
                    {cat.age && <p className="cat-age">Age: {cat.age}</p>}
                  </div>
                </div>
              ))}
            </div>
          )}
          <button 
            className="contact-button"
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 0;
                window.scrollTo({
                  top: contactSection.offsetTop - navbarHeight,
                  behavior: 'smooth'
                });
              }
            }}
          >
            Contact Us
          </button>
        </>
      )}

      {showModal && selectedCat && (
        <CatModal 
          cat={selectedCat} 
          onClose={closeModal} 
          onContactClick={scrollToContact}
        />
      )}
    </section>
  );
};

export default Cats;
