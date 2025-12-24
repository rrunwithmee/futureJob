import React, { useState } from 'react';
import './Pages.css';
import SuccessModal from '../Modals/SuccessModal';
import PublishVacancyModal from '../Modals/PublishVacancyModal';

// Страница размещения вакансии
const PostVacancy = () => {
  const [isPublishModalOpen, setIsPublishModalOpen] = useState(false);
  const [isDraftModalOpen, setIsDraftModalOpen] = useState(false);
  
  // Состояния для полей формы
  const [formData, setFormData] = useState({
    position: '',
    category: 'Выберите сферу',
    city: 'Выберите город',
    experience: 'Не требуется',
    salary: '',
    description: '',
    requirements: '',
    companyName: '',
    companyDescription: ''
  });

  // Обработчик изменения полей формы
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Проверка заполнения обязательных полей
  const isFormValid = () => {
    return formData.position.trim() !== '' &&
           formData.category !== 'Выберите сферу' &&
           formData.city !== 'Выберите город' &&
           formData.description.trim() !== '' &&
           formData.companyName.trim() !== '';
  };

  // Обработчик публикации вакансии
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
          <h1 className="page-title">Разместить вакансию</h1>
          
          <div className="page-card">
            <h2 className="section-title">Информация о вакансии</h2>
            <div className="divider"></div>
            
            <form className="vacancy-form">
              <div className="form-group">
                <label>Название должности</label>
                <input 
                  type="text" 
                  name="position"
                  value={formData.position}
                  onChange={handleInputChange}
                  placeholder="Например: Frontend разработчик" 
                />
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label>Сфера</label>
                  <select 
                    className="form-select"
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                  >
                    <option>Выберите сферу</option>
                    <option>Информационные технологии</option>
                    <option>Экология</option>
                    <option>Биоинженерия</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Город</label>
                  <select 
                    className="form-select"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                  >
                    <option>Выберите город</option>
                    <option>Москва</option>
                    <option>Санкт-Петербург</option>
                    <option>Новосибирск</option>
                  </select>
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label>Опыт работы</label>
                  <select 
                    className="form-select"
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                  >
                    <option>Не требуется</option>
                    <option>От 1 года</option>
                    <option>От 2 лет</option>
                    <option>От 3 лет</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Зарплата</label>
                  <input 
                    type="text" 
                    name="salary"
                    value={formData.salary}
                    onChange={handleInputChange}
                    placeholder="от 120 000 ₽" 
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label>Описание вакансии</label>
                <textarea 
                  rows="6" 
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Опишите требования к кандидату, обязанности, условия работы..."
                ></textarea>
              </div>
              
              <div className="form-group">
                <label>Требования</label>
                <textarea 
                  rows="4" 
                  name="requirements"
                  value={formData.requirements}
                  onChange={handleInputChange}
                  placeholder="Укажите необходимые навыки и компетенции..."
                ></textarea>
              </div>
            </form>
          </div>

          <div className="page-card">
            <h2 className="section-title">Информация о компании</h2>
            <div className="divider"></div>
            
            <form className="company-form">
              <div className="form-group">
                <label>Название компании</label>
                <input 
                  type="text" 
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  placeholder='ООО "ТехноСофт"' 
                />
              </div>
              
              <div className="form-group">
                <label>Описание компании</label>
                <textarea 
                  rows="4" 
                  name="companyDescription"
                  value={formData.companyDescription}
                  onChange={handleInputChange}
                  placeholder="Расскажите о вашей компании..."
                ></textarea>
              </div>
            </form>
          </div>

          <div className="page-actions">
            <button className="btn-secondary" onClick={handleSaveDraft}>
              Сохранить черновик
            </button>
            <button className="btn-primary" onClick={handlePublish}>
              Опубликовать вакансию
            </button>
          </div>

          {/* Модальные окна */}
          <PublishVacancyModal
            isOpen={isPublishModalOpen}
            onClose={() => setIsPublishModalOpen(false)}
          />
          <SuccessModal
            isOpen={isDraftModalOpen}
            onClose={() => setIsDraftModalOpen(false)}
            title="Черновик сохранён"
            message="Ваш черновик успешно сохранён. Вы можете вернуться к нему позже и опубликовать вакансию."
          />
      </div>
    </div>
  );
};

export default PostVacancy;

