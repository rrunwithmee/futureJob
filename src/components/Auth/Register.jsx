import React from 'react';
import './Auth.css';

// Компонент страницы регистрации
const Register = () => {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1 className="auth-title">Регистрация</h1>
        <form className="auth-form">
          <div className="form-group">
            <label htmlFor="name">Имя</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              placeholder="Введите ваше имя"
              required
            />
          </div>
          
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
          
          <div className="form-group">
            <label htmlFor="confirmPassword">Подтвердите пароль</label>
            <input 
              type="password" 
              id="confirmPassword" 
              name="confirmPassword" 
              placeholder="Подтвердите пароль"
              required
            />
          </div>
          
          <button type="submit" className="auth-button">Зарегистрироваться</button>
        </form>
      </div>
    </div>
  );
};

export default Register;

