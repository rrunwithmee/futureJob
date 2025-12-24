import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ResumeModal.css';

// Модальное окно для публикации вакансии (требует регистрации)
const PublishVacancyModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  
  if (!isOpen) return null;

  // Обработчик клика на фон
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Переход на страницу регистрации
  const handleRegister = () => {
    onClose();
    navigate('/register');
  };

  // Переход на страницу входа
  const handleLogin = () => {
    onClose();
    navigate('/login');
  };

  return (
    <div className="modal-overlay resume-modal-overlay" onClick={handleBackdropClick}>
      <div className="modal-content resume-modal-content">
        {/* Кнопка закрытия */}
        <button className="modal-close" onClick={onClose}>×</button>
        
        <div className="resume-modal-body">
          <h2 className="resume-modal-title">Публикация вакансии</h2>
          
          <p style={{ 
            fontSize: '16px', 
            color: '#333', 
            textAlign: 'center', 
            marginBottom: '32px',
            lineHeight: '1.6'
          }}>
            Ваша вакансия будет опубликована после регистрации на платформе. 
            Зарегистрируйтесь или войдите в аккаунт, чтобы завершить публикацию.
          </p>
          
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '12px',
            width: '100%'
          }}>
            <button 
              className="resume-modal-button" 
              onClick={handleRegister}
              style={{ width: '100%' }}
            >
              Регистрация
            </button>
            <button 
              className="resume-modal-button" 
              onClick={handleLogin}
              style={{ 
                width: '100%',
                background: 'transparent',
                color: '#0084FF',
                border: '2px solid #0084FF'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = '#f0f8ff';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'transparent';
              }}
            >
              Войти
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublishVacancyModal;

