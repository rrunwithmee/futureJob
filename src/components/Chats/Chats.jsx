import React from 'react';
import './Chats.css';

const Chats = () => {
  return (
    <div className="app-chats">
      {/* Header на всю ширину */}
      <header className="header-account-chats">
        <div className="header__container-chats">
          {/* Логотип слева */}
          <div className="header__logo-chats">
            <h1 className="logo-text-chats">
              <span className="logo-future-chats">Future</span>
              <span className="logo-job-chats">Job</span>
            </h1>
          </div>

          {/* Правая часть */}
          <div className="header__actions-chats">
            <div className="action-buttons-chats">
              <h2 className='logo-avatar-chats'>
                <span className='logo-image-chats'></span>
                <span className='logo-user-chats'>User</span>
              </h2>
            </div>
          </div>
        </div>
      </header>

      {/* Main с sidebar и content в колонки */}
      <main className="main-account-chats">
        {/* Sidebar - теперь в колонке слева */}
        <aside className="sidebar-account-chats">
          <nav className="menu-account-chats">
            <a className="menu-item-account-chats">Мое резюме</a>
            <a className="menu-item-account-chats active">Сообщения</a>
            <a className="menu-item-account-chats">Настройки</a>
          </nav>
        </aside>

        {/* Content - теперь в колонке справа */}
        <div className="content-account-chats">
          <div className="chat-layout-chats">
            {/* Chat */}
            <section className="chat">
              <div className="chat-header-chats">Чат</div>

              <div className="chat-body-chats">
                <p>Выберите, кому хотели бы написать</p>
              </div>
            </section>

            {/* List */}
            <aside className="list-chats">
              <div className="list-header-chats">Список</div>

              <div className="list-item-chats">Рекрутер 1</div>
              <div className="list-item-chats">Рекрутер 2</div>
              <div className="list-item-chats">Рекрутер 3</div>
            </aside>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Chats;