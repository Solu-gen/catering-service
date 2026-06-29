import { CartProvider } from '../context/CartContext';
import Header from '../components/Header';
import Footer from "../components/Footer";
import ScrollToTopButton from '../components/ScrollToTopButton';
import Accordion from '../components/Accordion';
import '../context/style.css';

// Основной контент страницы
const FAQContent = () => {
  const faqItems = [
    { title: 'Как начать пользоваться сервисом?', content: 'Зарегистрируйтесь на сайте, подтвердите email и начните пользоваться бесплатным тарифом. Все функции доступны сразу после регистрации.' },
    { title: 'Есть ли мобильное приложение?', content: 'Да, наше приложение доступно в App Store и Google Play. Все функции синхронизируются между веб-версией и приложением.' },
    { title: 'Когда я могу оформить заказ?', content: 'Заказы принимаются КАЖДЫЙ ДЕНЬ на нашем сайте или оператором по телефону +7(000)-000-00-00 с 9:00 до 22:00.' },
    { title: 'Когда приедет заказ?', content: 'Доставка осуществляется с 9:00 до 23:00 ежедневно. Заказы, требующие доставки на следующий день , необходимо оформить и подтвердить у оператора с 9:00 до 20:00. Также возможна срочная доставка и в день заказа, ее необходимо согласовать по телефону с операторм.' },
    { title: 'Как оплатить заказ?', content: 'Вы можете осуществить оплату любым удобным способом:' +
                                '<br>● наличными курьеру в момент доставки;' +
                                '<br>● беналичными расчетам по реквизитам для юр. лиц;' +
                                '<br>● оплатой картой на сайте.' },
    { title: 'За какое время до события нужно оформлять заказ на кейтеринг?', 
        content: 'Лучше всего − сразу после того как Вы приняли решение о проведении мероприятия. Чем' +
                                'раньше начннется подготовка, тем больше возможностей подобрать выгодную стоимость и' +
                                'спокойно продумать все детали. Минимальный срок оформления заказа − за 2 дня до события.' +
                                'Однако чаще всего клиенты обращаются за 1-2 месяца.' },
    { title: 'Какие дополнительные услуги доступны при заказе?', 
        content: 'Помимо организации фуршета и кейтеринга, мы предлагаем опции для комплексного проведения' +
                                'мероприятия. В их числе — работа профессиональных официантов, аренда мебели, посуды и' +
                                'нужного оборудования. При необходимости организуем декоративное оформление фуршетной зоны.' },
  ];

  return (
    <main class="p-4 bg-stone-100 lg:p-8 sm:px-6 xl:px-12">
        <h1 class="text-3xl font-bold mb-8">FAQ - ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ</h1>
        <div class="grid grid-cols-1 gap-y-8 lg:gap-x-4 lg:grid-cols-3 xl:gap-8 pb-8 ">
            <div class="col-span-2 space-y-4" id="faqAccordion">
                <Accordion items={faqItems} />
            </div>
            <div class="col-span-1 block w-full lg:max-w-full max-lg:mx-auto">
                <div
                    class="relative overflow-hidden grid grid-cols-1 items-center justify-center lg:h-[80vh] rounded-xl sm:rounded-2xl  bg-stone-500">
                    <div class="px-6 py-10 lg:px-6 lg:py-8">
                        <div class="text-center lg:text-left tracking-tight text-white">
                            <h2 class="text-2xl  font-bold"> Подберем идеальное решение для вашего события</h2>
                            <p class="text-lg py-4">Заполните форму, и мы ответим на все ваши вопросы</p>
                        </div>
                        <div class="min-[561px]-pt-8">
                            <form class="space-y-4">
                                <div class="space-y-2">
                                    <label for="name" class="block text-base font-medium text-white">Ваше имя</label>
                                    <div class="mt-2">
                                        <input id="name" type="text" name="name" placeholder="Фамилия имя"
                                            class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-lg text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-stone-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                                    </div>
                                </div>
                                <div class="space-y-2">
                                    <label for="phone" class="block text-base font-medium text-white">Номер телефона</label>
                                    <div class="mt-2">
                                        <input id="phone" type="text" name="phone" placeholder="+7 (000) 000-00-00"
                                            class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-lg text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-stone-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                                    </div>
                                </div>

                                <button type="submit"
                                    class="flex w-full justify-center rounded-md bg-stone-400 p-3 text-sm/6 font-semibold text-white 
                        hover:bg-stone-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:bg-stone-400">
                                    ОСТАВИТЬ ЗАЯВКУ</button>
                            </form>
                        </div>
                    </div>
                    <div class="lg:w-full min-h-[30vh] lg:h-full relative">
                        <img src="home-img/img12.jpg" alt="ОСТАВИТЬ ЗАЯВКУ"
                            class="absolute inset-0 w-full h-full object-cover" />
                        <div class="absolute inset-0 bg-purple-400/40 mix-blend-overlay">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
  );
};

// Корневой компонент для этой страницы
const FAQ = () => {
  return (
    <CartProvider>
      <Header />
      <FAQContent />
      <Footer />
      <ScrollToTopButton />
    </CartProvider>
  );
};

export default FAQ;