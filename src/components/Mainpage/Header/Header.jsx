import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import './Header.css';
import EmployerModal from '../../Modals/EmployerModal';
import CandidateModal from '../../Modals/CandidateModal';

// Компонент хедера с навигацией
const Header = () => {
  const navigate = useNavigate();
  const [isEmployerModalOpen, setIsEmployerModalOpen] = useState(false);
  const [isCandidateModalOpen, setIsCandidateModalOpen] = useState(false);

  // Обработчик клика на кнопку "Войти" - переход на страницу авторизации
  const handleLogin = () => {
    navigate('/login');
  };

  // Обработчик клика на кнопку "Регистрация" - переход на страницу регистрации
  const handleRegister = () => {
    navigate('/register');
  };

  // Обработчик клика на "Рассылка" - переход на страницу подписки
  const handleMailing = () => {
    navigate('/mailing');
  };

  // Обработчик открытия модального окна для работодателей
  const handleEmployersClick = () => {
    setIsEmployerModalOpen(true);
  };

  // Обработчик открытия модального окна для соискателей
  const handleCandidatesClick = () => {
    setIsCandidateModalOpen(true);
  };

  return (
    <header className="header">
      <div className="header__container">
        {/* Логотип слева - ссылка на главную */}
        <Link to="/" className="header__logo">
          <h1 className="logo-text">
            <span className="logo-future">Future</span>
            <span className="logo-job">Job</span>
          </h1>
        </Link>

        {/* Навигация по центру */}
        <nav className="header__nav">
          <ul className="nav__list">
            <li className="nav__item">
              <NavLink to="/vacancies" className="nav__link">Вакансии</NavLink>
            </li>
            <li className="nav__item">
              <span className="nav__link" onClick={handleCandidatesClick} style={{ cursor: 'pointer' }}>Соискателям</span>
            </li>
            <li className="nav__item">
              <span className="nav__link" onClick={handleEmployersClick} style={{ cursor: 'pointer' }}>Работодателям</span>
            </li>
          </ul>
        </nav>

        {/* Правая часть */}
        <div className="header__actions">
          <div className="mailing-container">
            <span className="mailing-text" onClick={handleMailing}>
              Рассылка
            </span>
          </div>
          <div className="action-buttons">
            <button className="btn btn-login" onClick={handleLogin}>Войти</button>
            <button className="btn btn-register" onClick={handleRegister}>Регистрация</button>
          </div>
        </div>
      </div>
      
      {/* Модальные окна */}
      <EmployerModal 
        isOpen={isEmployerModalOpen} 
        onClose={() => setIsEmployerModalOpen(false)} 
      />
      <CandidateModal 
        isOpen={isCandidateModalOpen} 
        onClose={() => setIsCandidateModalOpen(false)} 
      />
    </header>
  );
};

export default Header;
