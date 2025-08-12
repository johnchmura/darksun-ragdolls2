import React, { useState, useEffect } from 'react';
import CatModal from './CatModal';

const AvailableKittens = () => {
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCat, setSelectedCat] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [filters, setFilters] = useState({
    age: 'all',
    gender: 'all',
    color: 'all',
    availability: 'all'
  });

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

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const filteredCats = cats.filter(cat => {
    if (filters.age !== 'all' && cat.age !== filters.age) return false;
    if (filters.gender !== 'all' && cat.gender !== filters.gender) return false;
    if (filters.color !== 'all' && cat.color !== filters.color) return false;
    if (filters.availability !== 'all') {
      if (filters.availability === 'available' && cat.reserved) return false;
      if (filters.availability === 'reserved' && !cat.reserved) return false;
    }
    return true;
  });

  return (
    <div className="kittens-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Available Kittens</h1>
          <p>Find your perfect Ragdoll companion from our carefully bred kittens</p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="filters-section">
        <div className="container">
          <div className="filters">
            <div className="filter-group">
              <label>Age:</label>
              <select 
                value={filters.age} 
                onChange={(e) => handleFilterChange('age', e.target.value)}
              >
                <option value="all">All Ages</option>
                <option value="8 weeks">8 weeks</option>
                <option value="12 weeks">12 weeks</option>
                <option value="16 weeks">16 weeks</option>
              </select>
            </div>
            
            <div className="filter-group">
              <label>Gender:</label>
              <select 
                value={filters.gender} 
                onChange={(e) => handleFilterChange('gender', e.target.value)}
              >
                <option value="all">All Genders</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            
            <div className="filter-group">
              <label>Color:</label>
              <select 
                value={filters.color} 
                onChange={(e) => handleFilterChange('color', e.target.value)}
              >
                <option value="all">All Colors</option>
                <option value="seal">Seal</option>
                <option value="blue">Blue</option>
                <option value="chocolate">Chocolate</option>
                <option value="lilac">Lilac</option>
              </select>
            </div>
            
            <div className="filter-group">
              <label>Availability:</label>
              <select 
                value={filters.availability} 
                onChange={(e) => handleFilterChange('availability', e.target.value)}
              >
                <option value="all">All</option>
                <option value="available">Available</option>
                <option value="reserved">Reserved</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Kittens Display */}
      <section className="kittens-display">
        <div className="container">
          {loading ? (
            <div className="loading-section">
              <div className="spinner">
                <div className="loader"></div>
              </div>
              <p className="loader-text">Finding kittens!</p>
            </div>
          ) : (
            <>
              {filteredCats.length === 0 ? (
                <div className="no-results">
                  <h3>No kittens match your filters</h3>
                  <p>Try adjusting your search criteria or check back later for new arrivals.</p>
                  <button 
                    className="reset-filters-button"
                    onClick={() => setFilters({
                      age: 'all',
                      gender: 'all',
                      color: 'all',
                      availability: 'all'
                    })}
                  >
                    Reset Filters
                  </button>
                </div>
              ) : (
                <>
                  <div className="results-count">
                    <p>Showing {filteredCats.length} kitten{filteredCats.length !== 1 ? 's' : ''}</p>
                  </div>
                  <div className="cards-container">
                    {filteredCats.map((cat, index) => (
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
                          {cat.gender && <p className="cat-gender">Gender: {cat.gender}</p>}
                          {cat.color && <p className="cat-color">Color: {cat.color}</p>}
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-list">
            <div className="faq-item">
              <h3>When are kittens ready to go home?</h3>
              <p>All DarkSun Ragdolls can go home at 10 weeks old. We begin accepting reservations at 8 weeks.</p>
            </div>
            <div className="faq-item">
              <h3>What's included with adoption?</h3>
              <p>Each kitten comes with first shots, vet check, TICA registration papers with all rights attached, and a health guarantee.</p>
            </div>
            <div className="faq-item">
              <h3>What is the price for Izzy and Tusk's kittens?</h3>
              <p>Izzy and Tusk's kittens are $1,500 each, with half payment ($750) required to reserve and the remaining $750 due when the kitten goes home.</p>
            </div>
            <div className="faq-item">
              <h3>Do you ship kittens?</h3>
              <p>We prefer local pickup but can arrange transportation for approved adopters within reasonable distance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="contact-cta">
        <div className="container">
          <h2>Ready to Adopt?</h2>
          <p>Have questions about our kittens or the adoption process? We're here to help!</p>
          <div className="cta-buttons">
            <a href="mailto:Darksunragdolls@gmail.com" className="primary-button">
              Email Us
            </a>
            <a href="tel:1-502-509-1468" className="secondary-button">
              Call Us
            </a>
          </div>
        </div>
      </section>

      {/* Modal */}
      {showModal && selectedCat && (
        <CatModal 
          cat={selectedCat} 
          onClose={closeModal}
          onContactClick={() => {
            closeModal();
            window.location.href = 'mailto:Darksunragdolls@gmail.com';
          }}
        />
      )}
    </div>
  );
};

export default AvailableKittens;
