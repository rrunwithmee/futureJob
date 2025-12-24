import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Auth.css';

// Компонент страницы входа/авторизации
const Login = () => {
  const navigate = useNavigate();

  // Обработчик отправки формы
  const handleSubmit = (e) => {
    e.preventDefault();
    // Переход в личный кабинет при нажатии "Войти"
    navigate('/account');
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1 className="auth-title">Вход</h1>
        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              placeholder="Введите ваш email"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Пароль</label>
            <input 
              type="password" 
              id="password" 
              name="password" 
              placeholder="Введите пароль"
              required
            />
          </div>
          
          <button type="submit" className="auth-button">Войти</button>
        </form>
      </div>
    </div>
  );
};

export default Login;

