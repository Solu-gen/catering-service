// src/components/Footer.jsx
//import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-stone-100 p-8 border-t-2 border-gray-200">
      <div className="grid grid-cols-1 gap-y-8 lg:gap-x-4 lg:grid-cols-3 xl:gap-8 pb-8">
        {/* Левая колонка – логотип, реквизиты, соцсети */}
        <div className="col-span-1 block w-full lg:max-w-full max-lg:mx-auto">
          <div className="flex flex-col justify-between h-full w-full lg:max-w-xs space-y-6">
            <a href="index.html" className="text-2xl md:text-3xl font-bold flex justify-start">
              <img src="Sprout.png"
                alt="Логотип"
                className="h-8 mr-4" />
              KTER
            </a>
            <p className="text-gray-600 max-[470px]:text-center">
              ИП Боуски А.А.<br />
              ИНН 000000000000<br />
              ОГРНИП 000000000
            </p>
            <ul className="flex flex-col max-[470px]:items-center gap-6 content-end">
              <li>
                <a href="#"
                  className="text-lg font-base max-lg:text-center text-black whitespace-nowrap hover:text-indigo-600">
                  МЫ В VK
                </a>
              </li>
              <li>
                <a href="#"
                  className="text-lg font-base max-lg:text-center text-black whitespace-nowrap hover:text-indigo-600" >
                  МЫ В TELEGRAM
                </a>
              </li>
              <li>
                <a href="#"
                  className="text-lg font-base max-lg:text-center text-black hover:text-indigo-600" >
                  МЫ В ДРУГИХ СОЦИАЛЬНЫХ СЕТЯХ
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-span-2 w-full mx-auto flex flex-col min-[470px]:flex-row max-[470px]:items-center min-[470px]:justify-between gap-4 sm:gap-8 xl:gap-24">
          {/* Меню */}
          <div>
            <h6 className="text-lg font-medium text-gray-900 mb-7 max-[470px]:text-center">МЕНЮ</h6>
            <ul className="flex flex-col max-[470px]:items-center gap-3 sm:gap-6">
              <li>
                <a href="menu.html" className="max-lg:text-center text-gray-600 whitespace-nowrap hover:text-indigo-600">
                  Общее меню
                </a>
              </li>
              <li>
                <a href="#" className="max-lg:text-center text-gray-600 whitespace-nowrap hover:text-indigo-600">
                  Сеты
                </a>
              </li>
              <li>
                <a href="#" className="max-lg:text-center text-gray-600 whitespace-nowrap hover:text-indigo-600">
                  Фуршеты
                </a>
              </li>
              <li>
                <a href="#" className="max-lg:text-center text-gray-600 whitespace-nowrap hover:text-indigo-600">
                  Десерты
                </a>
              </li>
              <li>
                <a href="#" className="max-lg:text-center text-gray-600 whitespace-nowrap hover:text-indigo-600">
                  Напитки
                </a>
              </li>
              <li>
                <a href="#" className="max-lg:text-center text-gray-600 whitespace-nowrap hover:text-indigo-600">
                  Посуда
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h6 className="text-lg font-medium text-gray-900 max-[470px]:text-center mb-7">СОБЫТИЯ</h6>
            <ul className="flex flex-col max-[470px]:items-center gap-3 sm:gap-6">
              <li>
                <a href="#" className="max-lg:text-center text-gray-600 whitespace-nowrap hover:text-indigo-600">
                  Сезонные праздники
                </a>
              </li>
              <li>
                <a href="#" className="max-lg:text-center text-gray-600 whitespace-nowrap hover:text-indigo-600">
                  День рождения
                </a>
              </li>
              <li>
                <a href="#" className="max-lg:text-center text-gray-600 whitespace-nowrap hover:text-indigo-600">
                  Детский праздник
                </a>
              </li>
              <li>
                <a href="#" className="max-lg:text-center text-gray-600 whitespace-nowrap hover:text-indigo-600">
                  В офис
                </a>
              </li>
              <li>
                <a href="#" className="max-lg:text-center text-gray-600 whitespace-nowrap hover:text-indigo-600">
                  Кофе-брейк
                </a>
              </li>
              <li>
                <a href="#" className="max-lg:text-center text-gray-600 whitespace-nowrap hover:text-indigo-600">
                  Вечеринка
                </a>
              </li>
              <li>
                <a href="#" className="max-lg:text-center text-gray-600 whitespace-nowrap hover:text-indigo-600">
                  Свадьба
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h6 className="text-lg font-medium text-gray-900 max-[470px]:text-center mb-7">Информация</h6>
            <ul className="flex flex-col max-[470px]:items-center gap-3 sm:gap-6">
              <li>
                <a href="#" className="max-lg:text-center text-gray-600 whitespace-nowrap hover:text-indigo-600">
                  Пользовательское соглашение
                </a>
              </li>
              <li>
                <a href="#" className="max-lg:text-center text-gray-600 whitespace-nowrap hover:text-indigo-600">
                  Политика конфиденциальности
                </a>
              </li>
              <li>
                <a href="#" className="max-lg:text-center text-gray-600 whitespace-nowrap hover:text-indigo-600">
                  Публичная оферта
                </a>
              </li>
              <li>
                <a href="#" className="max-lg:text-center text-gray-600 whitespace-nowrap hover:text-indigo-600">
                  Оплата и доставка
                </a>
              </li>
              <li>
                <a href="contacts.html" className="max-lg:text-center text-gray-600 whitespace-nowrap hover:text-indigo-600">
                  Контакты
                </a>
              </li>
              <li>
                <a href="#" className="max-lg:text-center text-gray-600 whitespace-nowrap hover:text-indigo-600">
                  Отзывы
                </a>
              </li>
              <li>
                <a href="index.html#aboutus" className="max-lg:text-center text-gray-600 whitespace-nowrap hover:text-indigo-600">
                  О нас
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <p className="mx-auto flex justify-center font-normal text-sm text-gray-500">
        &copy; 2026 Сайт. Все права защищены.
      </p>
    </footer>
  );
};

export default Footer;