import React from 'react';
import './Pages.css';

// Страница тарифов для работодателей
const Tariffs = () => {
  const tariffs = [
    {
      id: 1,
      name: 'Базовый',
      price: '9 900 ₽',
      period: 'в месяц',
      features: [
        'Размещение до 5 вакансий',
        'Просмотр до 100 резюме',
        'Базовый поиск кандидатов',
        'Email поддержка'
      ],
      popular: false
    },
    {
      id: 2,
      name: 'Профессиональный',
      price: '19 900 ₽',
      period: 'в месяц',
      features: [
        'Размещение до 20 вакансий',
        'Просмотр безлимитных резюме',
        'Расширенный поиск с AI',
        'Приоритетная поддержка',
        'Аналитика откликов',
        'Персональный менеджер'
      ],
      popular: true
    },
    {
      id: 3,
      name: 'Корпоративный',
      price: '39 900 ₽',
      period: 'в месяц',
      features: [
        'Безлимитное размещение вакансий',
        'Все функции Профессионального',
        'Интеграция с HR-системами',
        'Кастомная аналитика',
        'Доступ к базе талантов',
        'Дедicated менеджер'
      ],
      popular: false
    }
  ];

  return (
    <div className="page-wrapper">
      <div className="page-content tariffs-page">
          <h1 className="page-title">Тарифы</h1>
          <p className="page-subtitle">Выберите подходящий тариф для вашей компании</p>
          
          <div className="tariffs-grid">
            {tariffs.map(tariff => (
              <div key={tariff.id} className={`tariff-card ${tariff.popular ? 'tariff-popular' : ''}`}>
                {tariff.popular && <div className="popular-badge">Популярный</div>}
                
                <h2 className="tariff-name">{tariff.name}</h2>
                <div className="tariff-price">
                  <span className="price-amount">{tariff.price}</span>
                  <span className="price-period">{tariff.period}</span>
                </div>
                
                <ul className="tariff-features">
                  {tariff.features.map((feature, index) => (
                    <li key={index} className="feature-item">
                      <span className="feature-check">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className={`tariff-button ${tariff.popular ? 'tariff-button-popular' : ''}`}>
                  Выбрать тариф
                </button>
              </div>
            ))}
          </div>
          
          <div className="tariffs-note">
            <p>Все тарифы включают 14 дней бесплатного пробного периода</p>
          </div>
      </div>
    </div>
  );
};

export default Tariffs;

