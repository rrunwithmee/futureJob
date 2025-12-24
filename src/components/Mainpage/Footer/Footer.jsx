import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-grid">
          {/* Колонка с логотипом */}
          <div className="footer-column logo-column">
            <div className="footer-logo">FutureJob</div>
          </div>
          
          {/* Колонка - Соискателям */}
          <div className="footer-column">
            <h3 className="footer-column-title">Соискателям</h3>
            <ul className="footer-links">
              <li><Link to="/vacancies">Вакансии</Link></li>
              <li><Link to="/resumes">Резюме</Link></li>
              <li><Link to="/recommendations">Рекомендации</Link></li>
            </ul>
          </div>
          
          {/* Группа: Работодателям + Контакты */}
          <div className="employers-contacts-group">
            {/* Колонка - Работодателям */}
            <div className="footer-column">
              <h3 className="footer-column-title">Работодателям</h3>
              <ul className="footer-links">
                <li><Link to="/post-vacancy">Разместить вакансию</Link></li>
                <li><Link to="/candidates">Поиск кандидатов</Link></li>
                <li><Link to="/tariffs">Тарифы</Link></li>
              </ul>
            </div>
            
            {/* Колонка - Контакты (поднята вверх и справа) */}
            <div className="footer-column contacts-column">
              <h3 className="footer-column-title">Контакты</h3>
              <div className="footer-contacts">
                <div className="contact-email">info@futurejob.ru</div>
                <div className="contact-phone">+7 (495) 125-84-49</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
