import React from 'react';
import './ResumeModal.css';

// Модальное окно для успешных действий
const SuccessModal = ({ isOpen, onClose, title, message }) => {
  if (!isOpen) return null;

  // Обработчик клика на фон
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay resume-modal-overlay" onClick={handleBackdropClick}>
      <div className="modal-content resume-modal-content">
        {/* Кнопка закрытия */}
        <button className="modal-close" onClick={onClose}>×</button>
        
        <div className="resume-modal-body">
          <h2 className="resume-modal-title">{title}</h2>
          
          <p style={{ 
            fontSize: '16px', 
            color: '#333', 
            textAlign: 'center', 
            marginBottom: '24px',
            lineHeight: '1.6'
          }}>
            {message}
          </p>
          
          <button className="resume-modal-button" onClick={onClose}>
            Принять
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;

