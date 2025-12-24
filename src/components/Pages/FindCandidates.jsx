import React, { useState, useMemo } from 'react';
import './Pages.css';
import ContactModal from '../Modals/ContactModal';

// Страница поиска кандидатов для работодателей
const FindCandidates = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Все сферы');
  const [selectedCity, setSelectedCity] = useState('Все города');
  const [selectedExperience, setSelectedExperience] = useState('Любой опыт');
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  // Все кандидаты
  const allCandidates = [
    {
      id: 1,
      name: 'Иван Петров',
      position: 'Frontend разработчик',
      experience: 'Опыт 3 года',
      experienceValue: 3,
      skills: ['React', 'TypeScript', 'JavaScript'],
      location: 'Москва',
      category: 'Информационные технологии',
      email: 'ivan.petrov@email.com',
      phone: '+7 (495) 123-45-67'
    },
    {
      id: 2,
      name: 'Мария Сидорова',
      position: 'UI/UX дизайнер',
      experience: 'Опыт 5 лет',
      experienceValue: 5,
      skills: ['Figma', 'Adobe XD', 'Прототипирование'],
      location: 'Санкт-Петербург',
      category: 'Информационные технологии',
      email: 'maria.sidorova@email.com',
      phone: '+7 (812) 234-56-78'
    },
    {
      id: 3,
      name: 'Алексей Иванов',
      position: 'Backend разработчик',
      experience: 'Опыт 4 года',
      experienceValue: 4,
      skills: ['Python', 'Django', 'PostgreSQL'],
      location: 'Новосибирск',
      category: 'Информационные технологии',
      email: 'alexey.ivanov@email.com',
      phone: '+7 (383) 345-67-89'
    },
    {
      id: 4,
      name: 'Елена Козлова',
      position: 'Эколог-аналитик',
      experience: 'Опыт 2 года',
      experienceValue: 2,
      skills: ['Экологический мониторинг', 'GIS', 'Анализ данных'],
      location: 'Москва',
      category: 'Экология',
      email: 'elena.kozlova@email.com',
      phone: '+7 (495) 456-78-90'
    },
    {
      id: 5,
      name: 'Дмитрий Соколов',
      position: 'Специалист по охране окружающей среды',
      experience: 'Опыт 6 лет',
      experienceValue: 6,
      skills: ['Экологическое проектирование', 'ОВОС', 'Нормативы'],
      location: 'Санкт-Петербург',
      category: 'Экология',
      email: 'dmitry.sokolov@email.com',
      phone: '+7 (812) 567-89-01'
    },
    {
      id: 6,
      name: 'Анна Волкова',
      position: 'Биоинженер',
      experience: 'Опыт 1 год',
      experienceValue: 1,
      skills: ['Биотехнологии', 'Микробиология', 'Лабораторные исследования'],
      location: 'Новосибирск',
      category: 'Биоинженерия',
      email: 'anna.volkova@email.com',
      phone: '+7 (383) 678-90-12'
    },
    {
      id: 7,
      name: 'Сергей Морозов',
      position: 'Fullstack разработчик',
      experience: 'Опыт 2 года',
      experienceValue: 2,
      skills: ['React', 'Node.js', 'MongoDB'],
      location: 'Москва',
      category: 'Информационные технологии',
      email: 'sergey.morozov@email.com',
      phone: '+7 (495) 789-01-23'
    },
    {
      id: 8,
      name: 'Ольга Новикова',
      position: 'Биоинформатик',
      experience: 'Без опыта',
      experienceValue: 0,
      skills: ['Python', 'Биоинформатика', 'Анализ геномов'],
      location: 'Санкт-Петербург',
      category: 'Биоинженерия',
      email: 'olga.novikova@email.com',
      phone: '+7 (812) 890-12-34'
    },
    {
      id: 9,
      name: 'Павел Лебедев',
      position: 'DevOps инженер',
      experience: 'Опыт 4 года',
      experienceValue: 4,
      skills: ['Docker', 'Kubernetes', 'CI/CD'],
      location: 'Новосибирск',
      category: 'Информационные технологии',
      email: 'pavel.lebedev@email.com',
      phone: '+7 (383) 901-23-45'
    },
    {
      id: 10,
      name: 'Татьяна Федорова',
      position: 'Климатолог',
      experience: 'Опыт 3 года',
      experienceValue: 3,
      skills: ['Климатическое моделирование', 'Метеорология', 'Анализ данных'],
      location: 'Москва',
      category: 'Экология',
      email: 'tatiana.fedorova@email.com',
      phone: '+7 (495) 012-34-56'
    }
  ];

  // Фильтрация кандидатов
  const filteredCandidates = useMemo(() => {
    return allCandidates.filter(candidate => {
      // Фильтр по поисковому запросу
      const matchesSearch = searchQuery === '' || 
        candidate.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        candidate.position.toLowerCase().includes(searchQuery.toLowerCase()) ||
        candidate.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));

      // Фильтр по категории
      const matchesCategory = selectedCategory === 'Все сферы' || candidate.category === selectedCategory;

      // Фильтр по городу
      const matchesCity = selectedCity === 'Все города' || candidate.location === selectedCity;

      // Фильтр по опыту
      let matchesExperience = true;
      if (selectedExperience === 'Без опыта') {
        matchesExperience = candidate.experienceValue === 0;
      } else if (selectedExperience === 'От 1 года') {
        matchesExperience = candidate.experienceValue >= 1;
      } else if (selectedExperience === 'От 3 лет') {
        matchesExperience = candidate.experienceValue >= 3;
      }

      return matchesSearch && matchesCategory && matchesCity && matchesExperience;
    });
  }, [searchQuery, selectedCategory, selectedCity, selectedExperience]);

  // Обработчик поиска
  const handleSearch = (e) => {
    e.preventDefault();
    // Фильтрация уже работает в реальном времени через useMemo
  };

  return (
    <div className="page-wrapper">
      <div className="page-content candidates-page">
          <h1 className="page-title">Поиск кандидатов</h1>
          
          {/* Поиск и фильтры */}
          <div className="page-card">
            <form className="search-section" onSubmit={handleSearch}>
              <input 
                type="text" 
                className="search-input" 
                placeholder="Должность, ключевые слова, навыки..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" className="search-btn">Найти</button>
            </form>
            
            <div className="filters-row">
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
              
              <select 
                className="filter-select"
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
              >
                <option>Все города</option>
                <option>Москва</option>
                <option>Санкт-Петербург</option>
                <option>Новосибирск</option>
              </select>
              
              <select 
                className="filter-select"
                value={selectedExperience}
                onChange={(e) => setSelectedExperience(e.target.value)}
              >
                <option>Любой опыт</option>
                <option>Без опыта</option>
                <option>От 1 года</option>
                <option>От 3 лет</option>
              </select>
            </div>
          </div>

          {/* Список кандидатов */}
          <div className="candidates-list">
            {filteredCandidates.length > 0 ? (
              filteredCandidates.map(candidate => (
              <div key={candidate.id} className="candidate-card">
                <div className="candidate-header">
                  <div>
                    <h3 className="candidate-name">{candidate.name}</h3>
                    <p className="candidate-position">{candidate.position}</p>
                  </div>
                  <button 
                    className="btn-contact"
                    onClick={() => {
                      setSelectedCandidate(candidate);
                      setIsContactModalOpen(true);
                    }}
                  >
                    Связаться
                  </button>
                </div>
                
                <div className="candidate-info">
                  <span className="info-badge">{candidate.experience}</span>
                  <span className="info-badge">{candidate.location}</span>
                </div>
                
                <div className="candidate-skills">
                  {candidate.skills.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
              ))
            ) : (
              <div style={{ textAlign: 'center', padding: '40px', color: '#666' }}>
                Кандидаты не найдены
              </div>
            )}
          </div>
      </div>

      {/* Модальное окно контактов */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => {
          setIsContactModalOpen(false);
          setSelectedCandidate(null);
        }}
        candidate={selectedCandidate}
      />
    </div>
  );
};

export default FindCandidates;

