import { CartProvider } from '../context/CartContext';
import Header from '../components/Header';
import Footer from "../components/Footer";
import ScrollToTopButton from '../components/ScrollToTopButton';
import '../context/style.css';

// Основной контент страницы
const FOFContent = () => {
  
  return (
    <main class="flex items-center justify-center min-h-screen bg-stone-100">
        <div class="text-center px-4">
            <h1 class="text-9xl font-bold text-stone-800">404</h1>
            <h2 class="text-3xl font-semibold text-stone-700 mt-4">Хмм. Страница не найдена</h2>
            <p class="text-stone-600 mt-2 max-w-md mx-auto">
                Возможно, эта страница была удалена или перемещена. Попробуйте
                вернуться на главную.
            </p>
            <div class="mt-8 space-x-4">
                <a href="index.html"
                    class="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition">
                    На главную
                </a>
                <a href="contacts.html"
                    class="inline-block bg-stone-200 text-stone-800 px-6 py-3 rounded-lg hover:bg-stone-300 transition">
                    Связаться с нами
                </a>
            </div>
            <div class="mt-12">
                <p class="text-stone-500">Или воспользуйтесь навигацией:</p>
                <nav class="mt-4">
                    <a href="index.html" class="text-indigo-600 hover:underline mx-3">Главная</a>
                    <a href="faq.html" class="text-indigo-600 hover:underline mx-3">FAQ</a>
                    <a href="contacts.html" class="text-indigo-600 hover:underline mx-3">Контакты</a>
                </nav>
            </div>
        </div>
    </main>
  );
};

// Корневой компонент для этой страницы
const FOF = () => {
  return (
    <CartProvider>
      <Header />
      <FOFContent />
      <Footer />
      <ScrollToTopButton />
    </CartProvider>
  );
};

export default FOF;