import React from 'react';
import './ResumeModal.css';

// Модальное окно с контактами кандидата
const ContactModal = ({ isOpen, onClose, candidate }) => {
  if (!isOpen || !candidate) return null;

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
          <h2 className="resume-modal-title">Контакты</h2>
          
          <div className="contact-info">
            <div className="contact-item">
              <label className="contact-label">Email:</label>
              <div className="contact-value">{candidate.email}</div>
            </div>
            
            <div className="contact-item">
              <label className="contact-label">Телефон:</label>
              <div className="contact-value">{candidate.phone}</div>
            </div>
          </div>
          
          <button className="resume-modal-button" onClick={onClose}>
            Закрыть
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;

