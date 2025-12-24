import React from 'react';
import { Link } from 'react-router-dom';
import './MainContent.css'

const MainContent = () => {
  return (
    <div className="main-content-wrapper">
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Найди свою профессию будущего</h1>
          <p className="hero-subtitle">
            Специализированная площадка для трудоустройства<br />
            в сфере ИТ, экологии и биоинженерии
          </p>
          
          <div className="search-container">
            <input 
              type="text" 
              placeholder="Должность, ключевые слова..." 
              className="search-input"
            />
            <button className="search-button">
              Найти вакансии
            </button>
          </div>
        </div>
      </section>
      
      {/* Популярные категории */}
      <section className="categories-section">
        <div className="section-container">
          <h2 className="section-title">Популярные категории</h2>
          
          <div className="categories-grid">
            {/* Категория 1 - Информационные технологии */}
            <Link to="/category/it" className="category-card">
              <div className="category-icon category-icon-blue"></div>
              <h3 className="category-title">Информационные технологии</h3>
              <p className="category-count">Более 500+ вакансий</p>
            </Link>
            
            {/* Категория 2 - Экология */}
            <Link to="/category/ecology" className="category-card">
              <div className="category-icon category-icon-green"></div>
              <h3 className="category-title">Экология</h3>
              <p className="category-count">Более 500+ вакансий</p>
            </Link>
            
            {/* Категория 3 - Биоинженерия */}
            <Link to="/category/bioengineering" className="category-card">
              <div className="category-icon category-icon-purple"></div>
              <h3 className="category-title">Биоинженерия</h3>
              <p className="category-count">Более 500+ вакансий</p>
            </Link>
          </div>
        </div>
      </section>
    </div> // ← Закрытие общего контейнера
  );
};

export default MainContent;