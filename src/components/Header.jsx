import React, { useState, useEffect, useRef } from 'react';
import { useCart } from '../context/CartContext';

const Header = () => {
  const { totalCount } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const menuRef = useRef(null);
  const toggleRef = useRef(null);
  const loginRef = useRef(null);

  // Определяем активную ссылку по текущему пути
  const isActive = (path) => {
    return window.location.pathname === path;
  };

  const toggleMenu = () => setIsMenuOpen(prev => !prev);
  const closeMenu = () => setIsMenuOpen(false);

 const toggleLogin = () => {
    setIsLoginOpen(prev => !prev);
    if (isMenuOpen) closeMenu();
  };
  const closeLogin = () => setIsLoginOpen(false);

  // Закрытие по клику вне меню
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isMenuOpen && menuRef.current && !menuRef.current.contains(e.target) && !toggleRef.current.contains(e.target)) {
        closeMenu();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  // Блокировка скролла при открытом меню или форме
  useEffect(() => {
    const isOpen = isMenuOpen || isLoginOpen;
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen, isLoginOpen]);

  // Закрытие по Escape
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        if (isLoginOpen) closeLogin();
        if (isMenuOpen) closeMenu();
      }
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [isMenuOpen, isLoginOpen]);

  // Закрытие меню при изменении размера окна (>768px)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMenuOpen) closeMenu();
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 bg-stone-100 z-[1000]">
      <div className="flex items-center px-4 mx-auto sm:px-6 lg:px-8 xl:px-12">
        <div className="flex items-center justify-between h-16 lg:h-[72px] w-full">
          {/* Логотип */}
          <div className="flex items-center flex-shrink-0">
            <a href="index.html" className="inline-flex" title="KTER">
              <span className="sr-only">KTER</span>
              <span className="font-bold text-3xl">KTER</span>
            </a>
          </div>

          {/* Навигация */}
          <nav
              className={`fixed top-0 right-0 h-full w-full sm:w-[50%] bg-stone-100 md:w-full z-[1000] transform transition-transform duration-300
              ${isMenuOpen ? "translate-x-0" : "translate-x-full md:translate-x-0 md:static md:w-auto md:h-auto"}`}
          >
            <ul className="text-lg flex flex-col md:text-center max-[768px]:pl-[12%] text-gray-900 mt-16 md:mt-0 md:flex-row md:space-x-8 xl:ml-6 xl:space-x-10">
            {/*<ul className="flex flex-col text-center pt-20 px-6 gap-0 md:flex md:justify-start md:ml-8 md:space-x-8 xl:ml-16 xl:space-x-10 md:pt-0 md:px-0">*/}
              <li className="md:hidden">
                <button
                  onClick={() => { toggleLogin(); closeMenu(); }}
                  className="flex justify-start items-center border-y border-gray-200 py-4 font-medium transition-all duration-200 hover:text-indigo-600 hover:pl-2.5 focus:outline-none w-full"
                >
                  ВОЙТИ
                  <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </button>
              </li>
              <li>
                <a href="menu.html"
                  className={`block w-full py-4 text-lg font-medium transition-all duration-200 rounded hover:text-indigo-600 hover:pl-2.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 md:border-0 md:py-0 md:hover:pl-0 ${isActive('/menu.html') ? 'active text-indigo-600' : ''}`}
                  onClick={closeMenu} >
                  МЕНЮ
                </a>
              </li>
              <li>
                <a href="index.html#event"
                  className={`block w-full py-4 text-lg font-medium transition-all duration-200 rounded hover:text-indigo-600 hover:pl-2.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 md:border-0 md:py-0 md:hover:pl-0 ${isActive('/event.html') ? 'active text-indigo-600' : ''}`}
                  onClick={closeMenu} >
                  СОБЫТИЕ
                </a>
              </li>
              <li>
                <a href="contacts.html"
                  className={`  block w-full py-4 text-lg font-medium transition-all duration-200 rounded hover:text-indigo-600 hover:pl-2.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 md:border-0 md:py-0 md:hover:pl-0 ${isActive('/contacts.html') ? 'active text-indigo-600' : ''}`}
                  onClick={closeMenu} >
                  КОНТАКТЫ
                </a>
              </li>
              <li className="max-[824px]:hidden lg:block">
                <a href="404.html"
                  className={`  block w-full py-4 text-lg font-medium transition-all duration-200 rounded hover:text-indigo-600 hover:pl-2.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 md:border-0 md:py-0 md:hover:pl-0 ${isActive('/delivery.html') ? 'active text-indigo-600' : ''}`}
                  onClick={closeMenu} >
                  ДОСТАВКА И ОПЛАТА
                </a>
              </li>
              <li className="md:hidden lg:block">
                <a href="index.html#aboutus"
                  className={`  block w-full py-4 text-lg font-medium transition-all duration-200 rounded hover:text-indigo-600 hover:pl-2.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 md:border-0 md:py-0 md:hover:pl-0 ${isActive('/about.html') ? 'active text-indigo-600' : ''}`}
                  onClick={closeMenu} >
                  О НАС
                </a>
              </li>
              <li className="md:hidden lg:block">
                <a href="faq.html"
                  className={`  block w-full py-4 text-lg font-medium transition-all duration-200 rounded hover:text-indigo-600 hover:pl-2.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 md:border-0 md:py-0 md:hover:pl-0 ${isActive('/faq.html') ? 'active text-indigo-600' : ''}`}
                  onClick={closeMenu} >
                  FAQ
                </a>
              </li>
            </ul>
          </nav>

          {/* Правая часть */}
          <div className="flex items-center justify-self-end ml-auto space-x-8">
            <div className="hidden md:flex lg:items-center lg:space-x-8">
              <p className="hidden xl:block text-lg font-medium text-gray-900 whitespace-nowrap transition-all duration-200 rounded hover:text-indigo-600">
                +7 (000)-000-00-00
              </p>
              <button
                onClick={toggleLogin}
                className="text-lg font-medium text-gray-900 transition-all duration-200 rounded hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              >
                ВОЙТИ
              </button>
            </div>

            <div className="flex items-center justify-end space-x-5 z-[1001]">
              {/* Корзина */}
              <button type="button" className="relative p-2 -m-2 text-gray-900 transition-all duration-200 hover:text-indigo-600">
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                {totalCount > 0 && (
                  <span className="absolute top-0 right-0 flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-indigo-600 rounded-full">
                    {totalCount}
                  </span>
                )}
              </button>

              {/* Бургер */}
              <button
                ref={toggleRef}
                className={`menu-toggle md:hidden flex flex-col justify-between w-11 h-[44px] bg-transparent p-3  ${isMenuOpen ? 'active' : ''}`}
                onClick={toggleMenu}
                aria-label={isMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
                aria-expanded={isMenuOpen}
              >
                <span className="menu-toggle__line w-full h-[3px] bg-black rounded transition-all duration-300"></span>
                <span className="menu-toggle__line w-full h-[3px] bg-black rounded transition-all duration-300"></span>
                <span className="menu-toggle__line w-full h-[3px] bg-black rounded transition-all duration-300"></span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Оверлей 
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-[999] md:hidden" onClick={closeMenu}></div>
      )}*/}
      {/* Окно входа */}
      {isLoginOpen && (
        <div className="fixed top-0 right-0 h-full w-full sm:w-[50%] bg-stone-100 md:w-full z-[1002] transform transition-transform duration-300" onClick={closeLogin}>
          <div
            ref={loginRef}
            className="p-8 w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Крестик закрытия */}
            <button
              onClick={closeLogin}
              className="absolute top-4 right-4 text-gray-900 hover:text-gray-600"
              aria-label="Закрыть форму входа"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Заголовок */}
            <h2 className="text-2xl font-bold text-center mb-6">Вход или регистрация</h2>

            {/* Поле телефона */}
            <div className="mb-4">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Телефон
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="+7 (___) ___-__-__"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
              />
            </div>

            {/* Кнопка "Продолжить" */}
            <button
              className="w-full py-3 bg-indigo-600 text-white font-medium rounded-xl hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={() => {
                // Здесь будет логика отправки
                alert('Форма отправлена (имитация)');
                closeLogin();
              }}
            >
              Продолжить
            </button>
          </div>
        </div>
      )}
      {/* Оверлей */}
      {(isMenuOpen || isLoginOpen) && (
        <div className="fixed inset-0 bg-black/50 z-[999] md:hidden" onClick={closeMenu}></div>
      )}
    </header>
  );
};

export default Header;