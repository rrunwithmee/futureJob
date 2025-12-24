// import React from 'react';
// import './VacanciesPage.css';
// import Header from '../Mainpage/Header/Header';


// const VacanciesPage = () => {
//   const vacancies = [
//     {
//       id: 1,
//       title: 'Frontend Developer',
//       company: 'IT Solutions Inc.',
//       category: 'Информационные технологии',
//       city: 'Москва',
//       experience: 'Опыт от 1 года',
//       salary: 'от 120 000 ₽',
//       description: 'Разработка современных веб-приложений с использованием React'
//     },
//     {
//       id: 2,
//       title: 'Эколог-аналитик',
//       company: 'ЭкоСити Solutions',
//       category: 'Финансы',
//       city: 'Санкт-Петербург',
//       experience: 'Опыт от 2 лет',
//       salary: 'от 90 000 ₽',
//       description: 'Проведение экологических исследований и анализ данных по охране окружающей среды.'
//     },
//     {
//       id: 3,
//       title: 'Биоинженер',
//       company: 'BALO International',
//       category: 'Биотехнология',
//       city: 'Новосибирск',
//       experience: 'Опыт от 3 лет',
//       salary: 'от 110 000 ₽',
//       description: 'Разработка современных веб-приложений с использованием React'
//     }
//   ];

//    return (
//     <div className="vacancies-page">
      
      
//       {/* Основной контент */}
//       <main className="vacancies-main">
//         <div className="vacancies-container">
//           {/* Левая колонка - фильтры */}
//           <aside className="filters-sidebar">
//             <h3>Фильтры</h3>
//             <div className="filter-section">
//               <label>Сфера</label>
//               <select className="filter-select">
//                 <option>Все сферы</option>
//                 <option>Информационные технологии</option>
//                 <option>Финансы</option>
//                 <option>Биотехнология</option>
//               </select>
//             </div>
            
//             <div className="filter-section">
//               <label>Город</label>
//               <select className="filter-select">
//                 <option>Все города</option>
//                 <option>Москва</option>
//                 <option>Санкт-Петербург</option>
//                 <option>Новосибирск</option>
//               </select>
//             </div>
            
//             <button className="apply-filters-btn">Применить</button>
//           </aside>

//           {/* Правая колонка - вакансии */}
//           <div className="vacancies-content">
//             {/* Секция поиска */}
//             <div className="search-section">
//               <div className="search-input-container">
//                 <input 
//                   type="text" 
//                   placeholder="Должность, ключевые слова..."
//                   className="search-input"
//                 />
//                 <button className="search-btn">Найти вакансии</button>
//               </div>
//             </div>

//             {/* Список вакансий */}
//             <div className="vacancies-list">
//               {vacancies.map(vacancy => (
//                 <div key={vacancy.id} className="vacancy-card">
//                   <div className="vacancy-header">
//                     <h3 className="vacancy-title">{vacancy.title}</h3>
//                     <span className="vacancy-company">{vacancy.company}</span>
//                   </div>
                  
//                   <div className="vacancy-info">
//                     <span className="vacancy-category">{vacancy.category}</span>
//                     <span className="vacancy-location">{vacancy.city}</span>
//                     <span className="vacancy-experience">{vacancy.experience}</span>
//                     <span className="vacancy-salary">{vacancy.salary}</span>
//                   </div>
                  
//                   <p className="vacancy-description">{vacancy.description}</p>
                  
//                   <button className="respond-btn">Откликнуться</button>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </main>

//       <Footer />
//     </div>
//   );
// };

// export default VacanciesPage;




import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import './VacanciesPage.css';
import { createVacancyChat } from '../../utils/chatUtils';

const VacanciesPage = () => {
  const navigate = useNavigate();
  
  // Все вакансии из всех категорий
  const allVacancies = [
    // IT вакансии
    {
      id: 1,
      title: 'Frontend Developer',
      company: 'IT Solutions Inc.',
      category: 'Информационные технологии',
      city: 'Москва',
      experience: 'Опыт от 1 года',
      salary: 'от 120 000 ₽',
      description: 'Разработка современных веб-приложений с использованием React'
    },
    {
      id: 2,
      title: 'Data Scientist',
      company: 'NeuralInsight Lab',
      category: 'Информационные технологии',
      city: 'Москва',
      experience: 'Опыт от 3 лет',
      salary: 'от 180 000 ₽',
      description: 'Построение и внедрение ML-моделей, анализ больших данных, работа с Python и SQL.'
    },
    {
      id: 3,
      title: 'DevOps Engineer',
      company: 'CloudTech Solutions',
      category: 'Информационные технологии',
      city: 'Екатеринбург',
      experience: 'Опыт от 2 лет',
      salary: 'от 160 000 ₽',
      description: 'Настройка CI/CD, управление облачной инфраструктурой, автоматизация процессов.'
    },
    // Экология вакансии
    {
      id: 4,
      title: 'Эколог-аналитик',
      company: 'GreenTech Solutions',
      category: 'Экология',
      city: 'Санкт-Петербург',
      experience: 'Опыт от 2 лет',
      salary: 'от 90 000 ₽',
      description: 'Проведение экологических исследований и анализ данных по охране окружающей среды.'
    },
    {
      id: 5,
      title: 'Эколог-проектировщик',
      company: 'ЭкоПроект Групп',
      category: 'Экология',
      city: 'Москва',
      experience: 'Опыт от 2 лет',
      salary: 'от 75 000 ₽',
      description: 'Разработка разделов проектной документации, проведение экологической экспертизы.'
    },
    {
      id: 6,
      title: 'Гидробиолог',
      company: 'АкваЭко',
      category: 'Экология',
      city: 'Сочи',
      experience: 'Опыт от 2 лет',
      salary: 'от 65 000 ₽',
      description: 'Исследование водных экосистем, проведение гидробиологического мониторинга.'
    },
    // Биоинженерия вакансии
    {
      id: 7,
      title: 'Биоинженер',
      company: 'BioLab Research',
      category: 'Биоинженерия',
      city: 'Новосибирск',
      experience: 'Опыт от 3 лет',
      salary: 'от 110 000 ₽',
      description: 'Разработка биотехнологических решений и генетическая инженерия.'
    },
    {
      id: 8,
      title: 'Инженер-биотехнолог',
      company: 'БиоТех Инновации',
      category: 'Биоинженерия',
      city: 'Москва',
      experience: 'Опыт от 2 лет',
      salary: 'от 95 000 ₽',
      description: 'Разработка и оптимизация биотехнологических процессов, работа с клеточными культурами.'
    },
    {
      id: 9,
      title: 'Биоинформатик',
      company: 'БиоДата Аналитика',
      category: 'Биоинженерия',
      city: 'Санкт-Петербург',
      experience: 'Опыт от 2 лет',
      salary: 'от 120 000 ₽',
      description: 'Анализ геномных данных, разработка алгоритмов для обработки биологической информации.'
    }
  ];

  // Состояния для фильтров
  const [selectedCategory, setSelectedCategory] = useState('Все сферы');
  const [selectedCity, setSelectedCity] = useState('Все города');
  const [searchQuery, setSearchQuery] = useState('');

  // Функция получения класса категории
  const getCategoryClass = (category) => {
    if (category === 'Информационные технологии') return 'category-it';
    if (category === 'Экология') return 'category-ecology';
    if (category === 'Биоинженерия') return 'category-bioengineering';
    return '';
  };

  // Обработчик отклика на вакансию
  const handleRespond = (vacancy) => {
    const chatId = createVacancyChat(vacancy.title, vacancy.id);
    // Сохраняем ID чата для открытия после перехода
    localStorage.setItem('pendingChatId', chatId);
    navigate('/account');
  };

  // Фильтрация вакансий
  const filteredVacancies = useMemo(() => {
    return allVacancies.filter(vacancy => {
      const matchesCategory = selectedCategory === 'Все сферы' || vacancy.category === selectedCategory;
      const matchesCity = selectedCity === 'Все города' || vacancy.city === selectedCity;
      const matchesSearch = searchQuery === '' || 
        vacancy.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        vacancy.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        vacancy.company.toLowerCase().includes(searchQuery.toLowerCase());
      
      return matchesCategory && matchesCity && matchesSearch;
    });
  }, [selectedCategory, selectedCity, searchQuery, allVacancies]);

  return (
    <div className="page-wrapper">
      {/* Основной контент */}
      <div className="vacancies-main">
        <div className="vacancies-container">
          {/* Левая колонка - фильтры */}
          <aside className="filters-sidebar">
            <h3>Фильтры</h3>
            <div className="filter-section">
              <label>Сфера</label>
              <select 
                className="filter-select"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option>Все сферы</option>
                <option>Информационные технологии</option>
                <option>Экология</option>
                <option>Биоинженерия</option>
              </select>
            </div>
            
            <div className="filter-section">
              <label>Город</label>
              <select 
                className="filter-select"
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
              >
                <option>Все города</option>
                <option>Москва</option>
                <option>Санкт-Петербург</option>
                <option>Новосибирск</option>
                <option>Екатеринбург</option>
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
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="search-btn">Найти вакансии</button>
              </div>
            </div>

            {/* Список вакансий */}
            <div className="vacancies-list">
              {filteredVacancies.map(vacancy => (
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

export default VacanciesPage;