import React, { useState } from 'react';
import './ResumeModal.css';

// Модальное окно для добавления образования
const AddEducationModal = ({ isOpen, onClose, onAdd }) => {
  const [text, setText] = useState('');

  if (!isOpen) return null;

  // Обработчик клика на фон
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Обработчик добавления
  const handleAdd = () => {
    if (text.trim()) {
      onAdd(text);
      setText('');
      onClose();
    }
  };

  return (
    <div className="modal-overlay resume-modal-overlay" onClick={handleBackdropClick}>
      <div className="modal-content resume-modal-content">
        {/* Кнопка закрытия */}
        <button className="modal-close" onClick={onClose}>×</button>
        
        <div className="resume-modal-body">
          <h2 className="resume-modal-title">Образование</h2>
          
          <textarea
            className="resume-modal-input"
            placeholder="Добавить образование ..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows="8"
          />
          
          <button className="resume-modal-button" onClick={handleAdd}>
            Добавить
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddEducationModal;

