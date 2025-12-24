import React, { useState } from 'react';
import './Pages.css';
import AddExperienceModal from '../Modals/AddExperienceModal';
import AddEducationModal from '../Modals/AddEducationModal';
import SuccessModal from '../Modals/SuccessModal';

// Страница создания/редактирования резюме
const Resume = () => {
  const [isExperienceModalOpen, setIsExperienceModalOpen] = useState(false);
  const [isEducationModalOpen, setIsEducationModalOpen] = useState(false);
  const [isPublishModalOpen, setIsPublishModalOpen] = useState(false);
  const [isDraftModalOpen, setIsDraftModalOpen] = useState(false);
  const [experienceText, setExperienceText] = useState('Frontend разработчик в ООО "ТехноСофт"\nИюнь 2020 – настоящее время\n\nРазработка пользовательских интерфейсов для веб-приложений с использованием React, TypeScript и Bootstrap.');
  const [educationText, setEducationText] = useState('Бакалавр информатики и вычислительной техники\nСанкт-Петербургский политехнический университет\n2016–2020');

  // Обработчик добавления опыта работы
  const handleAddExperience = (text) => {
    setExperienceText(text);
  };

  // Обработчик добавления образования
  const handleAddEducation = (text) => {
    setEducationText(text);
  };

  // Обработчик публикации резюме
  const handlePublish = (e) => {
    e.preventDefault();
    setIsPublishModalOpen(true);
  };

  // Обработчик сохранения черновика
  const handleSaveDraft = (e) => {
    e.preventDefault();
    setIsDraftModalOpen(true);
  };

  return (
    <div className="page-wrapper">
      <div className="page-content">
          <h1 className="page-title">Создать резюме</h1>
          
          <div className="page-card">
            <h2 className="section-title">Личная информация</h2>
            <div className="divider"></div>
            
            <form className="resume-form">
              <div className="form-row">
                <div className="form-group">
                  <label>Имя</label>
                  <input type="text" placeholder="Введите имя" />
                </div>
                <div className="form-group">
                  <label>Фамилия</label>
                  <input type="text" placeholder="Введите фамилию" />
                </div>
              </div>
              
              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="example@mail.com" />
              </div>
              
              <div className="form-group">
                <label>Телефон</label>
                <input type="tel" placeholder="+7 (999) 999-99-99" />
              </div>
              
              <div className="form-group">
                <label>Город</label>
                <select className="form-select">
                  <option>Выберите город</option>
                  <option>Москва</option>
                  <option>Санкт-Петербург</option>
                  <option>Новосибирск</option>
                </select>
              </div>
            </form>
          </div>

          <div className="page-card">
            <h2 className="section-title">Опыт работы</h2>
            <div className="divider"></div>
            
            <div className="form-group">
              <textarea
                className="experience-textarea"
                value={experienceText}
                onChange={(e) => setExperienceText(e.target.value)}
                rows="8"
                placeholder="Добавить опыт..."
              />
            </div>
            
            <button 
              className="btn-add" 
              onClick={() => setIsExperienceModalOpen(true)}
            >
              + Добавить опыт работы
            </button>
          </div>

          <div className="page-card">
            <h2 className="section-title">Образование</h2>
            <div className="divider"></div>
            
            <div className="form-group">
              <textarea
                className="education-textarea"
                value={educationText}
                onChange={(e) => setEducationText(e.target.value)}
                rows="6"
                placeholder="Добавить образование ..."
              />
            </div>
            
            <button 
              className="btn-add" 
              onClick={() => setIsEducationModalOpen(true)}
            >
              + Добавить образование
            </button>
          </div>
          
          {/* Модальные окна */}
          <AddExperienceModal
            isOpen={isExperienceModalOpen}
            onClose={() => setIsExperienceModalOpen(false)}
            onAdd={handleAddExperience}
          />
          <AddEducationModal
            isOpen={isEducationModalOpen}
            onClose={() => setIsEducationModalOpen(false)}
            onAdd={handleAddEducation}
          />

          <div className="page-actions">
            <button className="btn-secondary" onClick={handleSaveDraft}>
              Сохранить черновик
            </button>
            <button className="btn-primary" onClick={handlePublish}>
              Опубликовать резюме
            </button>
          </div>

          {/* Модальные окна для успешных действий */}
          <SuccessModal
            isOpen={isPublishModalOpen}
            onClose={() => setIsPublishModalOpen(false)}
            title="Резюме опубликовано!"
            message="Ваше резюме успешно опубликовано. Работодатели смогут увидеть его и связаться с вами."
          />
          <SuccessModal
            isOpen={isDraftModalOpen}
            onClose={() => setIsDraftModalOpen(false)}
            title="Черновик сохранён"
            message="Ваш черновик резюме успешно сохранён. Вы можете вернуться к нему позже и опубликовать."
          />
      </div>
    </div>
  );
};

export default Resume;

