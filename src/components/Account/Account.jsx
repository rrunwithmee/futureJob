import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Account.css';
import userLogo from '../../assets/user_logo.webp';
import AddExperienceModal from '../Modals/AddExperienceModal';
import AddEducationModal from '../Modals/AddEducationModal';
import { createVacancyChat } from '../../utils/chatUtils';

const Account = () => {
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState('resume'); // 'resume', 'messages', 'settings'
  const [isExperienceModalOpen, setIsExperienceModalOpen] = useState(false);
  const [isEducationModalOpen, setIsEducationModalOpen] = useState(false);
  const [selectedChat, setSelectedChat] = useState(null); // ID чата или null
  const [messageInput, setMessageInput] = useState('');
  const [messages, setMessages] = useState({});
  const [chatList, setChatList] = useState([]); // Список чатов с названиями

  // Функция загрузки данных из localStorage
  const loadChatData = () => {
    const savedMessages = localStorage.getItem('accountChatMessages');
    const savedChatList = localStorage.getItem('accountChatList');
    
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    } else {
      // Начальные данные: одно сообщение от Соискателя 1
      const initialMessages = {
        candidate1: [
          {
            id: 1,
            text: 'Здравствуйте! Меня заинтересовала ваша вакансия Frontend разработчика.',
            sender: 'candidate',
            timestamp: new Date().toISOString()
          }
        ],
        candidate2: [],
        candidate3: []
      };
      setMessages(initialMessages);
      localStorage.setItem('accountChatMessages', JSON.stringify(initialMessages));
    }

    if (savedChatList) {
      setChatList(JSON.parse(savedChatList));
    } else {
      // Начальный список чатов
      const initialChatList = [
        { id: 'candidate1', name: 'Соискатель 1' },
        { id: 'candidate2', name: 'Соискатель 2' },
        { id: 'candidate3', name: 'Соискатель 3' }
      ];
      setChatList(initialChatList);
      localStorage.setItem('accountChatList', JSON.stringify(initialChatList));
    }
  };

  // Инициализация сообщений и списка чатов из LocalStorage
  useEffect(() => {
    loadChatData();
    
    // Проверяем, нужно ли открыть конкретный чат после перехода
    const pendingChatId = localStorage.getItem('pendingChatId');
    if (pendingChatId) {
      setActiveMenu('messages');
      setSelectedChat(pendingChatId);
      localStorage.removeItem('pendingChatId');
    }
  }, []);

  // Обновление списка чатов при переключении на вкладку сообщений
  useEffect(() => {
    if (activeMenu === 'messages') {
      loadChatData();
    }
  }, [activeMenu]);

  // Сохранение сообщений в LocalStorage при изменении
  useEffect(() => {
    if (Object.keys(messages).length > 0) {
      localStorage.setItem('accountChatMessages', JSON.stringify(messages));
    }
  }, [messages]);

  // Сохранение списка чатов в LocalStorage при изменении
  useEffect(() => {
    if (chatList.length > 0) {
      localStorage.setItem('accountChatList', JSON.stringify(chatList));
    }
  }, [chatList]);

  // Обработчик добавления опыта работы
  const handleAddExperience = (text) => {
    // Здесь можно добавить логику сохранения опыта работы
    console.log('Добавлен опыт:', text);
  };

  // Обработчик добавления образования
  const handleAddEducation = (text) => {
    // Здесь можно добавить логику сохранения образования
    console.log('Добавлено образование:', text);
  };

  // Обработчик отправки сообщения
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (messageInput.trim()) {
      const newMessage = {
        id: Date.now(),
        text: messageInput.trim(),
        sender: 'me',
        timestamp: new Date().toISOString()
      };

      setMessages(prev => ({
        ...prev,
        [selectedChat]: [...(prev[selectedChat] || []), newMessage]
      }));

      setMessageInput('');
    }
  };

  // Обработчик выхода
  const handleLogout = () => {
    navigate('/');
  };

  // Получение текущих сообщений для выбранного чата
  const currentMessages = selectedChat ? (messages[selectedChat] || []) : [];

  return (
    <div className="app">
      {/* Header на всю ширину страницы */}
      <header className="header-account">
        <div className="header__container">
          {/* Логотип слева */}
          <Link to="/" className="header__logo" style={{ textDecoration: 'none' }}>
            <h1 className="logo-text">
              <span className="logo-future">Future</span>
              <span className="logo-job">Job</span>
            </h1>
          </Link>

          {/* Правая часть */}
          <div className="header__actions">
            <div className="action-buttons">
              <h2 className='logo-avatar'>
                <img src={userLogo} alt="User" className='header-user-image' />
                <span className='logo-user'>User</span>
              </h2>
            </div>
          </div>
        </div>
      </header>

      {/* Main с sidebar и content */}
      <main className="main-account">
        {/* Sidebar - на всю высоту до хедера */}
        <aside className="sidebar-account">
            <nav className="menu-account">
                <a 
                  className={`menu-item-account ${activeMenu === 'resume' ? 'active' : ''}`}
                  onClick={() => setActiveMenu('resume')}
                >
                  Мое резюме
                </a>
                <a 
                  className={`menu-item-account ${activeMenu === 'messages' ? 'active' : ''}`}
                  onClick={() => setActiveMenu('messages')}
                >
                  Сообщения
                </a>
                <a 
                  className={`menu-item-account ${activeMenu === 'settings' ? 'active' : ''}`}
                  onClick={() => setActiveMenu('settings')}
                >
                  Настройки
                </a>
            </nav>
        </aside>

        <div className="content-wrapper">
          {/* Карточка "Личный кабинет" с изображением */}
          <div className="card account-header-card">
            <div className="account-header-content">
              <h2 className="account-title">Личный кабинет</h2>
              <div className="user-info">
                <img src={userLogo} alt="User" className="user-logo-image" />
                <span className="user-text">User</span>
              </div>
            </div>
          </div>

          {activeMenu === 'settings' ? (
            /* Карточка настроек с кнопкой "Выйти" */
            <div className="card account-header-card">
              <div className="account-header-content">
                <h2 className="account-title">Настройки</h2>
                <button className="btn-account" onClick={handleLogout}>Выйти</button>
              </div>
            </div>
          ) : activeMenu === 'messages' ? (
            /* Интерфейс чата */
            <div className="messages-layout">
              {/* Левая часть: чат и ввод сообщения */}
              <div className="chat-section">
                {/* Карточка чата */}
                <div className="card chat-card">
                  {selectedChat ? (
                    <div className="chat-messages">
                      {currentMessages.map((message) => (
                        <div
                          key={message.id}
                          className={`chat-message ${message.sender === 'me' ? 'chat-message-me' : 'chat-message-candidate'}`}
                        >
                          <p>{message.text}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="chat-empty">
                      <p>Выберете, кому хотели бы написать</p>
                    </div>
                  )}
                </div>

                {/* Карточка ввода сообщения - показывается только если выбран чат */}
                {selectedChat && (
                  <div className="card chat-input-card">
                    <form onSubmit={handleSendMessage} className="chat-input-form">
                      <input
                        type="text"
                        value={messageInput}
                        onChange={(e) => setMessageInput(e.target.value)}
                        placeholder="Введите сообщение..."
                        className="chat-input"
                      />
                      <button type="submit" className="chat-send-btn">Отправить</button>
                    </form>
                  </div>
                )}
              </div>

              {/* Правая часть: список чатов */}
              <aside className="card chat-list-card">
                <h2 className="chat-list-title">Список</h2>
                <div className="chat-list">
                  {chatList.map((chat) => (
                    <div
                      key={chat.id}
                      className={`chat-list-item ${selectedChat === chat.id ? 'active' : ''}`}
                      onClick={() => setSelectedChat(chat.id)}
                    >
                      {chat.name}
                    </div>
                  ))}
                </div>
              </aside>
            </div>
          ) : (
            <div className="content-account">
              {/* Resume */}
              <section className="card resume">
                <h3>Мое резюме</h3>

                <div className="block">
                  <h3>Опыт работы</h3>
                  <p className="title">Frontend разработчик в ООО "ТехноСофт"</p>
                  <p className="sub">
                    Июнь 2020 – настоящее время
                  </p>
                  <p className="text">
                    Разработка пользовательских интерфейсов для веб-приложений
                    с использованием React, TypeScript и Bootstrap.
                  </p>
                  <button 
                    className="btn-account"
                    onClick={() => setIsExperienceModalOpen(true)}
                  >
                    Добавить опыт
                  </button>
                </div>

                <div className="block">
                  <h3>Образование</h3>
                  <p className="title">
                    Санкт-Петербургский политехнический университет
                  </p>
                  <p className="sub">
                    Бакалавр информатики и вычислительной техники, 2016–2020
                  </p>
                  <button 
                    className="btn-account"
                    onClick={() => setIsEducationModalOpen(true)}
                  >
                    Добавить образование
                  </button>
                </div>

                <div className="block">
                  <h3>Навыки</h3>
                  <div className="skills">
                    <span>JavaScript</span>
                    <span>React</span>
                    <span>TypeScript</span>
                    <span>HTML/CSS</span>
                    <span>Bootstrap</span>
                    <span>Git</span>
                  </div>
                </div>
              </section>

              {/* Favorites */}
              <aside className="card favorites">
                <h2>Избранные</h2>

                <div className="job">
                  <p className="title">Senior Frontend Developer</p>
                  <p className="sub">ООО "ТехноСофт" · Санкт-Петербург</p>
                  <p className="salary">180000 – 220000</p>
                  <button 
                    className="btn-outline"
                    onClick={() => {
                      const chatId = createVacancyChat('Senior Frontend Developer', 100);
                      loadChatData();
                      setActiveMenu('messages');
                      setSelectedChat(chatId);
                    }}
                  >
                    Откликнуться
                  </button>
                </div>

                <div className="job">
                  <p className="title">React Developer</p>
                  <p className="sub">ООО "ВебСтар" · Москва</p>
                  <p className="salary">150000 – 190000</p>
                  <button 
                    className="btn-outline"
                    onClick={() => {
                      const chatId = createVacancyChat('React Developer', 101);
                      loadChatData();
                      setActiveMenu('messages');
                      setSelectedChat(chatId);
                    }}
                  >
                    Откликнуться
                  </button>
                </div>
              </aside>
            </div>
          )}
        </div>
      </main>

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
    </div>
  );
}

export default Account;
