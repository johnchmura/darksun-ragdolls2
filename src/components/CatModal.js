import React from 'react';

const CatModal = ({ cat, onClose, onContactClick }) => {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>&times;</span>
        <img src={cat.image} alt={cat.name} loading="lazy" />
        <h2>{cat.name}</h2>
        <p>{cat.description}</p>
        <button className="contact-button" onClick={onContactClick}>
          Get in Touch
        </button>
      </div>
    </div>
  );
};

export default CatModal;
