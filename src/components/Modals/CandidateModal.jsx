import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Modal.css';

// Модальное окно для соискателей
const CandidateModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  
  if (!isOpen) return null;

  // Обработчик клика на кнопку "Создать резюме"
  const handleCreateResume = () => {
    onClose();
    navigate('/resumes');
  };

  // Обработчик закрытия по клику на фон
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleBackdropClick}>
      <div className="modal-content modal-candidate">
        {/* Кнопка закрытия */}
        <button className="modal-close" onClick={onClose}>×</button>
        
        <div className="modal-body">
          {/* Левая часть - контент */}
          <div className="modal-text-content">
            <h2 className="modal-title">Для соискателей</h2>
            
            <p className="modal-description">
              Создавайте профессиональное резюме, получайте персонализированные рекомендации и находите идеальные вакансии в быстрорастущих отраслях.
            </p>
            
            <ul className="modal-features">
              <li>Персональные рекомендации вакансий</li>
              <li>Умный подбор компаний</li>
              <li>Уведомления о новых вакансиях</li>
            </ul>
            
            <button className="modal-button" onClick={handleCreateResume}>
              Создать резюме
            </button>
          </div>
          
          {/* Правая часть - изображение placeholder */}
          <div className="modal-image-placeholder"></div>
        </div>
      </div>
    </div>
  );
};

export default CandidateModal;

