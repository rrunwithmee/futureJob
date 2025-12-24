import React, { useState } from 'react';
import './Auth.css';

// Компонент страницы подписки на рассылку
const Mailing = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь будет логика подписки
    alert(`Подписка оформлена на email: ${email}`);
    setEmail('');
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1 className="auth-title">Подписка на рассылку</h1>
        <p style={{ textAlign: 'center', color: '#666', marginBottom: '30px' }}>
          Получайте самые актуальные вакансии на свою почту
        </p>
        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              placeholder="Введите ваш email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <button type="submit" className="auth-button">Подписаться</button>
        </form>
      </div>
    </div>
  );
};

export default Mailing;

