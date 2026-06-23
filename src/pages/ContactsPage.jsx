import { CartProvider } from '../context/CartContext';
import Header from '../components/Header';
import Footer from "../components/Footer";
import ScrollToTopButton from '../components/ScrollToTopButton';

// Основной контент страницы
const ContactsPageContent = () => {

  return (
    <main class="p-4 bg-stone-100 lg:p-8 mx-auto sm:px-6 xl:px-12">
        <h1 class="text-3xl md:text-4xl font-bold mb-8">Контакты</h1>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A25c4c7979250a6228caded388ac35d2ca0377ba8a7af89b937468ab4eae93aa5&amp;source=constructor"
                width="100%" height="532" frameborder="0" class="rounded-xl"></iframe>

            <div class="bg-gray-50 rounded-xl p-6 lg:p-8">
                <div class="space-y-4">
                    <p class="flex items-center gap-3">
                        <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z">
                            </path>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                        <span class="text-gray-600">Москва, ул. Примерная, 123</span>
                    </p>
                    <p class="flex items-center gap-3">
                        <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z">
                            </path>
                        </svg>
                        <span class="text-gray-600">+7 (000) 000-00-00</span>
                    </p>
                    <p class="flex items-center gap-3">
                        <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z">
                            </path>
                        </svg>
                        <span class="text-gray-600">info@kter.com</span>
                    </p>
                    <a class="flex items-center gap-3">
                        <img src="contacts-img/classmates_icon.png" alt="Иконка 'Одноклассники'" class="w-5 h-5"/>
                        <span class="text-gray-600">Одноклассники</span>
                    </a>
                    <a class="flex items-center gap-3">
                        <img src="contacts-img/tg_icon.png" alt="Иконка 'Telegram'" class="w-5 h-5"/>
                        <span class="text-gray-600">Telegram</span>
                    </a>
                    <a class="flex items-center gap-3">
                        <img src="contacts-img/vk_icon.png" alt="Иконка 'VK'" class="w-5 h-5"/>
                        <span class="text-gray-600">VK</span>
                    </a>
                    <div>
                        <h3 class="text-lg font-bold">Время работы:</h3>
                        <p class="text-gray-600">Каждый день с 9:00 до 21:00:</p>
                    </div>
                    <div>
                        <h3 class="text-lg font-bold">Время доставки и выдачи заказов:</h3>
                        <p class="text-gray-600">Каждый день с 9:00 до 22:00:</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="m-auto max-w-4xl pb-8">
            <h2 class="text-center text-2xl md:text-3xl font-bold my-8">ОБРАТНАЯ СВЯЗЬ</h2>
            <form id="feedbackForm" class="space-y-4 w-full">
                <div class="space-y-2">
                    <label class="block text-lg font-medium text-gray-700">ФИО</label>
                    <div class="mt-1">
                        <input type="text" placeholder="Фамилия Имя Очество" id="fullname"
                            class="w-full px-4 py-2 border-b-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"/>
                    </div>
                </div>

                <div class="space-y-2">
                    <label class="block text-lg font-medium text-gray-700">Телефон</label>
                    <div class="mt-1">
                        <input type="tel" id="phone" placeholder="+7 (___) ___-__-__"
                            class="w-full px-4 py-2 border-b-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"/>
                    </div>
                </div>

                <div class="space-y-2">
                    <label class="block text-lg font-medium text-gray-700">Email</label>
                    <div class="mt-1">
                        <input type="email" placeholder="kter@email.com" id="email"
                            class="w-full px-4 py-2 border-b-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"/>
                    </div>
                </div>

                <div class="space-y-2">
                    <label class="block text-lg font-medium text-gray-700">Сообщение</label>
                    <div class="mt-1">
                        <textarea placeholder="Введите текст" rows="5" id="message"
                            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors resize-y"></textarea>
                    </div>
                </div>

                <div class="flex items-start">
                    <div class="flex items-center h-5">
                        <input type="checkbox" id="agreement" required
                            class="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"/>
                    </div>
                    <div class="ml-3 text-sm">
                        <label for="agreement" class="font-medium text-gray-700">
                            Соглашаюсь на обработку персональных данных
                        </label>
                    </div>
                </div>

                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <button type="submit"
                        class="px-8 py-4 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors">
                        Отправить
                    </button>

                    <button type="reset"
                        class="px-8 py-4 bg-stone-200 text-stone-800 font-medium rounded-lg hover:bg-stone-300 focus:outline-none focus:ring-2 focus:ring-stone-500 focus:ring-offset-2 transition-colors">
                        Очистить
                    </button>
                </div>
            </form>
        </div>
    </main>
  );
};

// Корневой компонент для этой страницы
const ContactsPage = () => {
  return (
    <CartProvider>
      <Header />
      <ContactsPageContent />
      <Footer />
      <ScrollToTopButton />
    </CartProvider>
  );
};

export default ContactsPage;