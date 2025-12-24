import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Vacancy/VacanciesPage.css';
import { createVacancyChat } from '../../utils/chatUtils';

// Функция получения класса категории
const getCategoryClass = (category) => {
  if (category === 'Информационные технологии') return 'category-it';
  if (category === 'Экология') return 'category-ecology';
  if (category === 'Биоинженерия') return 'category-bioengineering';
  return '';
};

// Страница вакансий в категории Экология
const EcologyVacancies = () => {
  const navigate = useNavigate();

  // Обработчик отклика на вакансию
  const handleRespond = (vacancy) => {
    const chatId = createVacancyChat(vacancy.title, vacancy.id);
    localStorage.setItem('pendingChatId', chatId);
    navigate('/account');
  };

  const vacancies = [
    {
      id: 1,
      title: 'Эколог-аналитик',
      company: 'GreenTech Solutions',
      category: 'Экология',
      city: 'Санкт-Петербург',
      experience: 'Опыт от 2 лет',
      salary: 'от 90 000 ₽',
      description: 'Проведение экологических исследований и анализ данных по охране окружающей среды.'
    },
    {
      id: 2,
      title: 'Эколог-проектировщик',
      company: 'ЭкоПроект Групп',
      category: 'Экология',
      city: 'Москва',
      experience: 'Опыт от 2 лет',
      salary: 'от 75 000 ₽',
      description: 'Разработка разделов проектной документации, проведение экологической экспертизы.'
    },
    {
      id: 3,
      title: 'Гидробиолог',
      company: 'АкваЭко',
      category: 'Экология',
      city: 'Сочи',
      experience: 'Опыт от 2 лет',
      salary: 'от 65 000 ₽',
      description: 'Исследование водных экосистем, проведение гидробиологического мониторинга.'
    }
  ];

  return (
    <div className="page-wrapper">
      <div className="vacancies-main">
        <div className="vacancies-container">
          {/* Левая колонка - фильтры */}
          <aside className="filters-sidebar">
            <h3>Фильтры</h3>
            <div className="filter-section">
              <label>Сфера</label>
              <select className="filter-select" defaultValue="Экология">
                <option>Все сферы</option>
                <option>Информационные технологии</option>
                <option>Экология</option>
                <option>Биоинженерия</option>
              </select>
            </div>
            
            <div className="filter-section">
              <label>Город</label>
              <select className="filter-select">
                <option>Все города</option>
                <option>Москва</option>
                <option>Санкт-Петербург</option>
                <option>Новосибирск</option>
                <option>Сочи</option>
              </select>
            </div>
            
            <button className="apply-filters-btn">Применить</button>
          </aside>

          {/* Правая колонка - вакансии */}
          <div className="vacancies-content">
            {/* Секция поиска */}
            <div className="search-section">
              <div className="search-input-container">
                <input 
                  type="text" 
                  placeholder="Должность, ключевые слова..."
                  className="search-input"
                />
                <button className="search-btn">Найти вакансии</button>
              </div>
            </div>

            {/* Список вакансий */}
            <div className="vacancies-list">
              {vacancies.map(vacancy => (
                <div key={vacancy.id} className="vacancy-card">
                  <div className="vacancy-header">
                    <h3 className="vacancy-title">{vacancy.title}</h3>
                    <span className="vacancy-company">{vacancy.company}</span>
                  </div>
                  
                  <div className="vacancy-info">
                    <span className={`vacancy-category ${getCategoryClass(vacancy.category)}`}>
                      {vacancy.category}
                    </span>
                    <span className="vacancy-location">{vacancy.city}</span>
                    <span className="vacancy-experience">{vacancy.experience}</span>
                    <span className="vacancy-salary">{vacancy.salary}</span>
                  </div>
                  
                  <p className="vacancy-description">{vacancy.description}</p>
                  
                  <button 
                    className="respond-btn"
                    onClick={() => handleRespond(vacancy)}
                  >
                    Откликнуться
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcologyVacancies;

