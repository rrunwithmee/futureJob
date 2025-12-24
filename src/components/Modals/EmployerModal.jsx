import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Modal.css';

// Модальное окно для работодателей
const EmployerModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  
  if (!isOpen) return null;

  // Обработчик клика на кнопку "Разместить вакансию"
  const handlePostVacancy = () => {
    onClose();
    navigate('/post-vacancy');
  };

  // Обработчик закрытия по клику на фон
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleBackdropClick}>
      <div className="modal-content modal-employer">
        {/* Кнопка закрытия */}
        <button className="modal-close" onClick={onClose}>×</button>
        
        <div className="modal-body">
          {/* Левая часть - изображение placeholder */}
          <div className="modal-image-placeholder"></div>
          
          {/* Правая часть - контент */}
          <div className="modal-text-content">
            <h2 className="modal-title">Для работодателей</h2>
            
            <p className="modal-description">
              Находите лучших специалистов в области будущих технологий. Наша платформа использует AI для точного подбора кандидатов.
            </p>
            
            <ul className="modal-features">
              <li>AI-подбор кандидатов</li>
              <li>Управление вакансиями</li>
              <li>Аналитика откликов</li>
            </ul>
            
            <button className="modal-button" onClick={handlePostVacancy}>
              Разместить вакансию
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployerModal;

