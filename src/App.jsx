import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Mainpage/Header/Header';
import MainContent from './components/Mainpage/MainContent/MainContent';
import Footer from './components/Mainpage/Footer/Footer';
import './App.css';
import VacanciesPage from './components/Vacancy/VacanciesPage';
import Account from './components/Account/Account';
import Chats from './components/Chats/Chats';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Mailing from './components/Auth/Mailing';
import Resume from './components/Pages/Resume';
import PostVacancy from './components/Pages/PostVacancy';
import FindCandidates from './components/Pages/FindCandidates';
import Tariffs from './components/Pages/Tariffs';
import Recommendations from './components/Pages/Recommendations';
import ITVacancies from './components/Categories/ITVacancies';
import EcologyVacancies from './components/Categories/EcologyVacancies';
import BioengineeringVacancies from './components/Categories/BioengineeringVacancies';

// Главный компонент приложения с роутингом
function App() {
  const location = useLocation();
  const isAccountPage = location.pathname === '/account';

  return (
    <div className="App">
      {/* Хедер на всех страницах, кроме личного кабинета */}
      {!isAccountPage && <Header />}
      
      {/* Основной контент с роутингом */}
      {isAccountPage ? (
        <div className="account-wrapper">
          <Routes>
            <Route path="/account" element={<Account />} />
          </Routes>
      </div>
      ) : (
        <Routes>
          {/* Главная страница */}
          <Route path="/" element={<MainContent />} />
          
          {/* Страница вакансий */}
          <Route path="/vacancies" element={<VacanciesPage />} />
          
          {/* Чаты */}
          <Route path="/chats" element={<Chats />} />
          
          {/* Авторизация и регистрация */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/mailing" element={<Mailing />} />
          
          {/* Новые страницы */}
          <Route path="/resumes" element={<Resume />} />
          <Route path="/post-vacancy" element={<PostVacancy />} />
          <Route path="/candidates" element={<FindCandidates />} />
          <Route path="/tariffs" element={<Tariffs />} />
          <Route path="/recommendations" element={<Recommendations />} />
          
          {/* Страницы категорий */}
          <Route path="/category/it" element={<ITVacancies />} />
          <Route path="/category/ecology" element={<EcologyVacancies />} />
          <Route path="/category/bioengineering" element={<BioengineeringVacancies />} />
        </Routes>
      )}

      {/* Футер на всех страницах, кроме личного кабинета */}
      {!isAccountPage && <Footer />}
    </div>
  );
}

export default App;
