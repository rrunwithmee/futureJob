import React from 'react';
import './Pages.css';

// Страница рекомендаций
const Recommendations = () => {
  return (
    <div className="page-wrapper">
      <div className="page-content">
        <h1 className="page-title">Рекомендации</h1>
        
        <div className="page-card">
          <h2 className="section-title">Полезные советы для соискателей</h2>
          
          <div className="recommendations-content">
            <p>
              Здесь вы найдете полезные рекомендации по поиску работы, 
              составлению резюме и подготовке к собеседованиям.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommendations;

