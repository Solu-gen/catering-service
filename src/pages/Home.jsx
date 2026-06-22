//import React from 'react';
import { CartProvider } from '../context/CartContext';
import Header from '../components/Header';
import Footer from "../components/Footer";
//import { useCart } from '../context/CartContext';

// Основной контент страницы
const HomeContent = () => {
  //const { addToCart } = useCart();

  return (
    <main class="p-8 bg-stone-100">
        <section class="mb-16 lg:mb-20 flex justify-center overflow-hidden">
            <div class="w-full max-w-[1600px] mx-auto">
                <div class="carousel-container relative">
                    <button class="nav-button absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex 
                        items-center justify-center z-20 text-white touch-manipulation" onclick="prevSlide()"
                        title="Previous slide">
                        <svg class="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7">
                            </path>
                        </svg>
                    </button>

                    <button class="nav-button absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full 
                    flex items-center justify-center z-20 text-white touch-manipulation" onclick="nextSlide()"
                        title="Next slide">
                        <svg class="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7">
                            </path>
                        </svg>
                    </button>

                    <div class="carousel-track relative h-[80vh] overflow-hidden">
                        <a href="#" class="carousel-item active absolute top-0 left-0 w-full h-full">
                            <div class="w-full h-full">
                                <div class="w-full h-full rounded-xl sm:rounded-2xl overflow-hidden relative group">
                                    <img src="home-img/img1.jpg" alt="ФУРШЕТНЫЕ НАБОРЫ" class="absolute inset-0 w-full h-full object-cover 
                                    transition-transform duration-500 group-hover:scale-110" />
                                    <div
                                        class="absolute inset-0 bg-gradient-to-br from-violet-500/40 to-purple-500/40 mix-blend-overlay">
                                    </div>
                                    <div
                                        class="absolute inset-x-0 bottom-0 p-8 sm:p-16 bg-gradient-to-t from-stone-800 via-stone-450 to-transparent">
                                        <h3 class="text-white text-3xl md:text-4xl font-bold mb-2 sm:mb-3">
                                            ФУРШЕТНЫЕ НАБОРЫ</h3>
                                        <p class="text-gray-200 text-sm sm:text-lg md:text-lg max-w-2xl">Для любого
                                            вашего события с выгодой до 10%</p>
                                    </div>
                                </div>
                            </div>
                        </a>

                        <a href="#" class="carousel-item next absolute top-0 left-0 w-full h-full">
                            <div class="w-full h-full">
                                <div class="w-full h-full rounded-xl sm:rounded-2xl overflow-hidden relative group">
                                    <img src="home-img/img2.png" alt="Закуски, которые сближают"
                                        class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                    <div
                                        class="absolute inset-0 bg-gradient-to-br from-fuchsia-500/40 to-pink-500/40 mix-blend-overlay">
                                    </div>
                                    <div
                                        class="absolute inset-x-0 bottom-0 p-8 sm:p-16 bg-gradient-to-t from-stone-800 via-stone-450 to-transparent">
                                        <h3 class="text-white text-3xl md:text-4xl font-bold mb-2 sm:mb-3">
                                            ЛЮБОВЬ В КАЖДОЙ КОРОБОЧКЕ</h3>
                                        <p class="text-gray-200 text-sm sm:text-lg md:text-lg max-w-2xl">Закуски,
                                            которые сближают</p>
                                    </div>
                                </div>
                            </div>
                        </a>

                        <a href="#" class="carousel-item hidden absolute top-0 left-0 w-full h-full">
                            <div class="w-full h-full">
                                <div class="w-full h-full rounded-xl sm:rounded-2xl overflow-hidden relative group">
                                    <img src="home-img/img3.jpg" alt="ФРУКТОВЫЙ СЕТ В ПОДАРОК"
                                        class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                    <div
                                        class="absolute inset-0 bg-gradient-to-br from-pink-500/40 to-rose-500/40 mix-blend-overlay">
                                    </div>
                                    <div
                                        class="absolute inset-x-0 bottom-0 p-8 sm:p-16 bg-gradient-to-t from-stone-800 via-stone-450 to-transparent">
                                        <h3 class="text-white text-3xl md:text-4xl font-bold mb-2 sm:mb-3">
                                            ФРУКТОВЫЙ СЕТ В ПОДАРОК</h3>
                                        <p class="text-gray-200 max-w-2xl">На день
                                            рождения, смотрите другие наши акции</p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <section id="event">
            <div class="grid grid-cols-2 pb-4 sm:pb-8 space-x-6">
                <h2 class="text-black text-3xl md:text-4xl font-bold">ВЫБЕРИ СВОЙ ФОРМАТ</h2>
                <p class="self-start">Кейтеринг в Москве для корпорвтивных и домашних мероприятитй. Организуем банкет
                    под любую ситуацию.</p>
            </div>

            <div
                class="grid grid-cols-1 gap-4 sm:grid-cols-2 items-center justify-center lg:grid-cols-3 xl:grid-cols-4 ">
                <a href="#" class="group relative block rounded-lg overflow-hidden h-full w-ful bg-black">
                    <img alt="Фуршет сервиса Стандарт" src="home-img/img9.jpg"
                        class="absolute inset-0 h-full w-full rounded-lg object-cover opacity-75 transition-opacity group-hover:opacity-50" />
                    <div class="absolute inset-0 pointer-events-none">
                        <span class="absolute bottom-28 right-[10%] w-[50px] h-[50px] rotate-45 border-t border-r border-white translate-y-8 
                        opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                        </span>
                    </div>
                    <div class="relative p-4 sm:p-6 lg:p-8 h-full grid grid-rows-1fr-auto">
                        <div
                            class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100 text-base text-white">
                            <p class="">От 450 грамм на человека</p>
                            <p class="font-bold py-4">
                                <span class="block font-bold pb-4">от <span class="text-3xl">2100</span>
                                    Р/персона.</span> Обслуживание мероприятия:
                            </p>
                            <ul>
                                <li class="flex">
                                    <svg class="h-[1.1lh] w-5 shrink-0" viewBox="0 0 22 22" fill="none"
                                        stroke-linecap="square">
                                        <circle cx="11" cy="11" r="5" class="fill-sky-400/25" />
                                    </svg>
                                    <p class="ml-3">меню: еда, напитки безалкогольные;</p>
                                </li>
                                <li class="flex">
                                    <svg class="h-[1.1lh] w-5 shrink-0" viewBox="0 0 22 22" fill="none"
                                        stroke-linecap="square">
                                        <circle cx="11" cy="11" r="5" class="fill-sky-400/25" />
                                    </svg>
                                    <p class="ml-3">посуда: стекло/фарфор;</p>
                                </li>
                                <li class="flex">
                                    <svg class="h-[1.1lh] w-5 shrink-0" viewBox="0 0 22 22" fill="none"
                                        stroke-linecap="square">
                                        <circle cx="11" cy="11" r="5" class="fill-sky-400/25" />
                                    </svg>
                                    <p class="ml-3">столы фуршетные и коктейльные;</p>
                                </li>
                                <li class="flex">
                                    <svg class="h-[1.1lh] w-5 shrink-0" viewBox="0 0 22 22" fill="none"
                                        stroke-linecap="square">
                                        <circle cx="11" cy="11" r="5" class="fill-sky-400/25" />
                                    </svg>
                                    <p class="ml-3">услуги официантов.</p>
                                </li>
                            </ul>
                        </div>
                        <p class="pt-8 self-end text-xl font-bold text-white sm:text-2xl">Фуршет сервиса "Стандарт"</p>
                    </div>
                </a>

                <a href="#" class="group relative block rounded-lg overflow-hidden h-full w-ful bg-black">
                    <img alt="Фуршет с VIP-сервисом" src="home-img/img6.jpg"
                        class="absolute inset-0 h-full w-full rounded-lg object-cover opacity-75 transition-opacity group-hover:opacity-50" />
                    <div class="absolute inset-0 pointer-events-none">
                        <span class="absolute bottom-28 right-[10%] w-[50px] h-[50px] rotate-45 border-t border-r border-white translate-y-8 
                        opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                        </span>
                    </div>
                    <div class="relative p-4 sm:p-6 lg:p-8 h-full grid grid-rows-1fr-auto">
                        <div
                            class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100 text-base text-white">
                            <p class="">От 800 грамм на человека</p>
                            <p class="font-bold py-4">
                                <span class="block font-bold pb-4">от <span
                                        class="text-3xl">6000</span>Р/персона.</span>Обслуживание мероприятия:
                            </p>
                            <ul>
                                <li class="flex">
                                    <svg class="h-[1.1lh] w-5 shrink-0" viewBox="0 0 22 22" fill="none"
                                        stroke-linecap="square">
                                        <circle cx="11" cy="11" r="5" class="fill-sky-400/25" />
                                    </svg>
                                    <p class="ml-3">меню: еда, напитки безалкогольные;</p>
                                </li>
                                <li class="flex">
                                    <svg class="h-[1.1lh] w-5 shrink-0" viewBox="0 0 22 22" fill="none"
                                        stroke-linecap="square">
                                        <circle cx="11" cy="11" r="5" class="fill-sky-400/25" />
                                    </svg>
                                    <p class="ml-3">посуда: стекло/фарфор;</p>
                                </li>
                                <li class="flex">
                                    <svg class="h-[1.1lh] w-5 shrink-0" viewBox="0 0 22 22" fill="none"
                                        stroke-linecap="square">
                                        <circle cx="11" cy="11" r="5" class="fill-sky-400/25" />
                                    </svg>
                                    <p class="ml-3">столы фуршетные и коктейльные;</p>
                                </li>
                                <li class="flex">
                                    <svg class="h-[1.1lh] w-5 shrink-0" viewBox="0 0 22 22" fill="none"
                                        stroke-linecap="square">
                                        <circle cx="11" cy="11" r="5" class="fill-sky-400/25" />
                                    </svg>
                                    <p class="ml-3">индивидуальная сервировка для каждого гостя;</p>
                                </li>
                                <li class="flex">
                                    <svg class="h-[1.1lh] w-5 shrink-0" viewBox="0 0 22 22" fill="none"
                                        stroke-linecap="square">
                                        <circle cx="11" cy="11" r="5" class="fill-sky-400/25" />
                                    </svg>
                                    <p class="ml-3">услуги официантов;</p>
                                </li>
                                <li class="flex">
                                    <svg class="h-[1.1lh] w-5 shrink-0" viewBox="0 0 22 22" fill="none"
                                        stroke-linecap="square">
                                        <circle cx="11" cy="11" r="5" class="fill-sky-400/25" />
                                    </svg>
                                    <p class="ml-3">декор;</p>
                                </li>
                                <li class="flex">
                                    <svg class="h-[1.1lh] w-5 shrink-0" viewBox="0 0 22 22" fill="none"
                                        stroke-linecap="square">
                                        <circle cx="11" cy="11" r="5" class="fill-sky-400/25" />
                                    </svg>
                                    <p class="ml-3">комплимент от шефа;</p>
                                </li>
                                <li class="flex">
                                    <svg class="h-[1.1lh] w-5 shrink-0" viewBox="0 0 22 22" fill="none"
                                        stroke-linecap="square">
                                        <circle cx="11" cy="11" r="5" class="fill-sky-400/25" />
                                    </svg>
                                    <p class="ml-3">анимационные станции.</p>
                                </li>
                            </ul>
                        </div>
                        <p class="pt-8 self-end text-xl font-bold text-white sm:text-2xl">Фуршет с VIP-сервисом</p>
                    </div>
                </a>
                <a href="#" class="group relative block rounded-lg overflow-hidden h-full w-ful bg-black">
                    <img alt="Фуршет сервиса Премиум" src="home-img/img8.jpg"
                        class="absolute inset-0 h-full w-full rounded-lg object-cover opacity-75 transition-opacity group-hover:opacity-50" />
                    <div class="absolute inset-0 pointer-events-none">
                        <span class="absolute bottom-28 right-[10%] w-[50px] h-[50px] rotate-45 border-t border-r border-white translate-y-8 
                        opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                        </span>
                    </div>
                    <div class="relative p-4 sm:p-6 lg:p-8 h-full grid grid-rows-1fr-auto">
                        <div
                            class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100 text-base text-white">
                            <p class="">От 600 грамм на человека</p>
                            <p class="font-bold py-4">
                                <span class="block font-bold pb-4">от <span
                                        class="text-3xl">3500</span>Р/персона.</span>Обслуживание мероприятия:
                            </p>
                            <ul>
                                <li class="flex">
                                    <svg class="h-[1.1lh] w-5 shrink-0" viewBox="0 0 22 22" fill="none"
                                        stroke-linecap="square">
                                        <circle cx="11" cy="11" r="5" class="fill-sky-400/25" />
                                    </svg>
                                    <p class="ml-3">меню: еда, напитки безалкогольные;</p>
                                </li>
                                <li class="flex">
                                    <svg class="h-[1.1lh] w-5 shrink-0" viewBox="0 0 22 22" fill="none"
                                        stroke-linecap="square">
                                        <circle cx="11" cy="11" r="5" class="fill-sky-400/25" />
                                    </svg>
                                    <p class="ml-3">посуда: стекло/фарфор;</p>
                                </li>
                                <li class="flex">
                                    <svg class="h-[1.1lh] w-5 shrink-0" viewBox="0 0 22 22" fill="none"
                                        stroke-linecap="square">
                                        <circle cx="11" cy="11" r="5" class="fill-sky-400/25" />
                                    </svg>
                                    <p class="ml-3">столы фуршетные и коктейльные;</p>
                                </li>
                                <li class="flex">
                                    <svg class="h-[1.1lh] w-5 shrink-0" viewBox="0 0 22 22" fill="none"
                                        stroke-linecap="square">
                                        <circle cx="11" cy="11" r="5" class="fill-sky-400/25" />
                                    </svg>
                                    <p class="ml-3">индивидуальная сервировка для каждого гостя;</p>
                                </li>
                                <li class="flex">
                                    <svg class="h-[1.1lh] w-5 shrink-0" viewBox="0 0 22 22" fill="none"
                                        stroke-linecap="square">
                                        <circle cx="11" cy="11" r="5" class="fill-sky-400/25" />
                                    </svg>
                                    <p class="ml-3">услуги официантов;</p>
                                </li>
                                <li class="flex">
                                    <svg class="h-[1.1lh] w-5 shrink-0" viewBox="0 0 22 22" fill="none"
                                        stroke-linecap="square">
                                        <circle cx="11" cy="11" r="5" class="fill-sky-400/25" />
                                    </svg>
                                    <p class="ml-3">комплимент от шефа;</p>
                                </li>
                            </ul>
                        </div>
                        <p class="pt-8 self-end text-xl font-bold text-white sm:text-2xl">Фуршет сервиса "Премиум"</p>
                    </div>
                </a>
                <a href="#" class="group relative block rounded-lg overflow-hidden h-full w-ful bg-black">
                    <img alt="welcome-фуршет" src="home-img/img10.jpg"
                        class="absolute inset-0 h-full w-full rounded-lg object-cover opacity-75 transition-opacity group-hover:opacity-50" />
                    <div class="absolute inset-0 pointer-events-none">
                        <span class="absolute bottom-28 right-[10%] w-[50px] h-[50px] rotate-45 border-t border-r border-white translate-y-8 
                        opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                        </span>
                    </div>
                    <div class="relative p-4 sm:p-6 lg:p-8 h-full grid grid-rows-1fr-auto">
                        <div
                            class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100 text-base text-white">
                            <p class="">От 250 грамм на человека</p>
                            <p class="font-bold py-4">
                                <span class="block font-bold pb-4">от <span class="text-3xl">1500</span>
                                    Р/персона.</span> Обслуживание мероприятия:
                            </p>
                            <ul>
                                <li class="flex">
                                    <svg class="h-[1.1lh] w-5 shrink-0" viewBox="0 0 22 22" fill="none"
                                        stroke-linecap="square">
                                        <circle cx="11" cy="11" r="5" class="fill-sky-400/25" />
                                    </svg>
                                    <p class="ml-3">меню: еда, напитки безалкогольные;</p>
                                </li>
                                <li class="flex">
                                    <svg class="h-[1.1lh] w-5 shrink-0" viewBox="0 0 22 22" fill="none"
                                        stroke-linecap="square">
                                        <circle cx="11" cy="11" r="5" class="fill-sky-400/25" />
                                    </svg>
                                    <p class="ml-3">одноразовая посуда;</p>
                                </li>
                                <li class="flex">
                                    <svg class="h-[1.1lh] w-5 shrink-0" viewBox="0 0 22 22" fill="none"
                                        stroke-linecap="square">
                                        <circle cx="11" cy="11" r="5" class="fill-sky-400/25" />
                                    </svg>
                                    <p class="ml-3">столы под раскладку;</p>
                                </li>
                                <li class="flex">
                                    <svg class="h-[1.1lh] w-5 shrink-0" viewBox="0 0 22 22" fill="none"
                                        stroke-linecap="square">
                                        <circle cx="11" cy="11" r="5" class="fill-sky-400/25" />
                                    </svg>
                                    <p class="ml-3">услуги официантов.</p>
                                </li>
                            </ul>
                        </div>
                        <p class="pt-8 self-end text-xl font-bold text-white sm:text-2xl">Организация welcome-фуршета
                        </p>
                    </div>
                </a>
                <a href="#" class="group relative block rounded-lg overflow-hidden h-full w-ful bg-black">
                    <img alt="Легкий кофе-брейк" src="home-img/img7.jpg"
                        class="absolute inset-0 h-full w-full rounded-lg object-cover opacity-75 transition-opacity group-hover:opacity-50" />
                    <div class="absolute inset-0 pointer-events-none">
                        <span class="absolute bottom-28 right-[10%] w-[50px] h-[50px] rotate-45 border-t border-r border-white translate-y-8 
                        opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                        </span>
                    </div>
                    <div class="relative p-4 sm:p-6 lg:p-8 h-full grid grid-rows-1fr-auto">
                        <div
                            class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100 text-base text-white">
                            <p class="">От 250 грамм на человека</p>
                            <p class="font-bold py-4">
                                <span class="block font-bold pb-4">от <span class="text-3xl">1500</span>
                                    Р/персона.</span> Обслуживание мероприятия:
                            </p>
                            <ul>
                                <li class="flex">
                                    <svg class="h-[1.1lh] w-5 shrink-0" viewBox="0 0 22 22" fill="none"
                                        stroke-linecap="square">
                                        <circle cx="11" cy="11" r="5" class="fill-sky-400/25" />
                                    </svg>
                                    <p class="ml-3">меню: еда, напитки безалкогольные;</p>
                                </li>
                                <li class="flex">
                                    <svg class="h-[1.1lh] w-5 shrink-0" viewBox="0 0 22 22" fill="none"
                                        stroke-linecap="square">
                                        <circle cx="11" cy="11" r="5" class="fill-sky-400/25" />
                                    </svg>
                                    <p class="ml-3">одноразовая посуда;</p>
                                </li>
                                <li class="flex">
                                    <svg class="h-[1.1lh] w-5 shrink-0" viewBox="0 0 22 22" fill="none"
                                        stroke-linecap="square">
                                        <circle cx="11" cy="11" r="5" class="fill-sky-400/25" />
                                    </svg>
                                    <p class="ml-3">столы под раскладку;</p>
                                </li>
                                <li class="flex">
                                    <svg class="h-[1.1lh] w-5 shrink-0" viewBox="0 0 22 22" fill="none"
                                        stroke-linecap="square">
                                        <circle cx="11" cy="11" r="5" class="fill-sky-400/25" />
                                    </svg>
                                    <p class="ml-3">услуги официантов.</p>
                                </li>
                            </ul>
                        </div>
                        <p class="pt-8 self-end text-xl font-bold text-white sm:text-2xl">Формат - легкий кофе-брейк</p>
                    </div>
                </a>
                <a href="#" class="group relative block rounded-lg overflow-hidden h-full w-ful bg-black">
                    <img alt="Выездной пикник" src="home-img/img4.jpg"
                        class="absolute inset-0 h-full w-full rounded-lg object-cover opacity-75 transition-opacity group-hover:opacity-50" />
                    <div class="absolute inset-0 pointer-events-none">
                        <span class="absolute bottom-28 right-[10%] w-[50px] h-[50px] rotate-45 border-t border-r border-white translate-y-8 
                        opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                        </span>
                    </div>
                    <div class="relative p-4 sm:p-6 lg:p-8 h-full grid grid-rows-1fr-auto">
                        <div
                            class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100 text-base text-white">
                            <p class="">От 450 грамм на человека</p>
                            <p class="font-bold py-4">
                                <span class="block font-bold pb-4">от <span class="text-3xl">2100</span>
                                    Р/персона.</span> Обслуживание мероприятия:
                            </p>
                            <ul>
                                <li class="flex">
                                    <svg class="h-[1.1lh] w-5 shrink-0" viewBox="0 0 22 22" fill="none"
                                        stroke-linecap="square">
                                        <circle cx="11" cy="11" r="5" class="fill-sky-400/25" />
                                    </svg>
                                    <p class="ml-3">меню: еда, напитки безалкогольные;</p>
                                </li>
                                <li class="flex">
                                    <svg class="h-[1.1lh] w-5 shrink-0" viewBox="0 0 22 22" fill="none"
                                        stroke-linecap="square">
                                        <circle cx="11" cy="11" r="5" class="fill-sky-400/25" />
                                    </svg>
                                    <p class="ml-3">посуда: стекло/фарфор;</p>
                                </li>
                                <li class="flex">
                                    <svg class="h-[1.1lh] w-5 shrink-0" viewBox="0 0 22 22" fill="none"
                                        stroke-linecap="square">
                                        <circle cx="11" cy="11" r="5" class="fill-sky-400/25" />
                                    </svg>
                                    <p class="ml-3">столы фуршетные и коктейльные;</p>
                                </li>
                                <li class="flex">
                                    <svg class="h-[1.1lh] w-5 shrink-0" viewBox="0 0 22 22" fill="none"
                                        stroke-linecap="square">
                                        <circle cx="11" cy="11" r="5" class="fill-sky-400/25" />
                                    </svg>
                                    <p class="ml-3">услуги официантов.</p>
                                </li>
                            </ul>
                        </div>
                        <p class="pt-8 self-end text-xl font-bold text-white sm:text-2xl">Выездной пикник с
                            обслуживанием</p>
                    </div>
                </a>
                <a href="#" class="group relative block rounded-lg overflow-hidden h-full w-ful bg-black">
                    <img alt="Организация барбекю" src="home-img/img11.jpg"
                        class="absolute inset-0 h-full w-full rounded-lg object-cover opacity-75 transition-opacity group-hover:opacity-50" />
                    <div class="absolute inset-0 pointer-events-none">
                        <span class="absolute bottom-28 right-[10%] w-[50px] h-[50px] rotate-45 border-t border-r border-white translate-y-8 
                        opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                        </span>
                    </div>
                    <div class="relative p-4 sm:p-6 lg:p-8 h-full grid grid-rows-1fr-auto">
                        <div
                            class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100 text-base text-white">
                            <p class="">От 600 грамм на человека</p>
                            <p class="font-bold py-4">
                                <span class="block font-bold pb-4">от <span class="text-3xl">3500</span>
                                    Р/персона.</span> Обслуживание мероприятия:
                            </p>
                            <ul>
                                <li class="flex">
                                    <svg class="h-[1.1lh] w-5 shrink-0" viewBox="0 0 22 22" fill="none"
                                        stroke-linecap="square">
                                        <circle cx="11" cy="11" r="5" class="fill-sky-400/25" />
                                    </svg>
                                    <p class="ml-3">меню: готовые блюда и продукты для bbq, напитки безалкогольные;</p>
                                </li>
                                <li class="flex">
                                    <svg class="h-[1.1lh] w-5 shrink-0" viewBox="0 0 22 22" fill="none"
                                        stroke-linecap="square">
                                        <circle cx="11" cy="11" r="5" class="fill-sky-400/25" />
                                    </svg>
                                    <p class="ml-3">посуда: стекло/фарфор;</p>
                                </li>
                                <li class="flex">
                                    <svg class="h-[1.1lh] w-5 shrink-0" viewBox="0 0 22 22" fill="none"
                                        stroke-linecap="square">
                                        <circle cx="11" cy="11" r="5" class="fill-sky-400/25" />
                                    </svg>
                                    <p class="ml-3">столы фуршетные и коктейльные;</p>
                                </li>
                                <li class="flex">
                                    <svg class="h-[1.1lh] w-5 shrink-0" viewBox="0 0 22 22" fill="none"
                                        stroke-linecap="square">
                                        <circle cx="11" cy="11" r="5" class="fill-sky-400/25" />
                                    </svg>
                                    <p class="ml-3">индивидуальная сервировка для каждого гостя;</p>
                                </li>
                                <li class="flex">
                                    <svg class="h-[1.1lh] w-5 shrink-0" viewBox="0 0 22 22" fill="none"
                                        stroke-linecap="square">
                                        <circle cx="11" cy="11" r="5" class="fill-sky-400/25" />
                                    </svg>
                                    <p class="ml-3">услуги официантов;</p>
                                </li>
                                <li class="flex">
                                    <svg class="h-[1.1lh] w-5 shrink-0" viewBox="0 0 22 22" fill="none"
                                        stroke-linecap="square">
                                        <circle cx="11" cy="11" r="5" class="fill-sky-400/25" />
                                    </svg>
                                    <p class="ml-3">комплимент от шефа.</p>
                                </li>
                            </ul>
                        </div>
                        <p class="pt-8 self-end text-xl font-bold text-white sm:text-2xl">Организация барбекю с
                            обслуживанием</p>
                    </div>
                </a>
                <a href="#" class="group relative block rounded-lg overflow-hidden h-full w-ful bg-black">
                    <img alt="" src="home-img/img5.jpg"
                        class="absolute inset-0 h-full w-full rounded-lg object-cover opacity-75 transition-opacity group-hover:opacity-50" />
                    <div class="absolute inset-0 pointer-events-none">
                        <span class="absolute bottom-28 right-[10%] w-[50px] h-[50px] rotate-45 border-t border-r border-white translate-y-8 
                        opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                        </span>
                    </div>
                    <div class="relative p-4 sm:p-6 lg:p-8 h-full grid grid-rows-1fr-auto">
                        <div
                            class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100 text-base text-white">
                            <p class="">От 450 грамм на человека</p>
                            <p class="font-bold py-4">
                                <span class="block font-bold pb-4">от <span class="text-3xl">3000</span>
                                    Р/персона.</span> Обслуживание мероприятия:
                            </p>
                            <ul>
                                <li class="flex">
                                    <svg class="h-[1.1lh] w-5 shrink-0" viewBox="0 0 22 22" fill="none"
                                        stroke-linecap="square">
                                        <circle cx="11" cy="11" r="5" class="fill-sky-400/25" />
                                    </svg>
                                    <p class="ml-3">меню: еда, напитки безалкогольные;</p>
                                </li>
                                <li class="flex">
                                    <svg class="h-[1.1lh] w-5 shrink-0" viewBox="0 0 22 22" fill="none"
                                        stroke-linecap="square">
                                        <circle cx="11" cy="11" r="5" class="fill-sky-400/25" />
                                    </svg>
                                    <p class="ml-3">посуда: стекло/фарфор;</p>
                                </li>
                                <li class="flex">
                                    <svg class="h-[1.1lh] w-5 shrink-0" viewBox="0 0 22 22" fill="none"
                                        stroke-linecap="square">
                                        <circle cx="11" cy="11" r="5" class="fill-sky-400/25" />
                                    </svg>
                                    <p class="ml-3">столы фуршетные и коктейльные;</p>
                                </li>
                                <li class="flex">
                                    <svg class="h-[1.1lh] w-5 shrink-0" viewBox="0 0 22 22" fill="none"
                                        stroke-linecap="square">
                                        <circle cx="11" cy="11" r="5" class="fill-sky-400/25" />
                                    </svg>
                                    <p class="ml-3">услуги официантов.</p>
                                </li>
                            </ul>
                        </div>
                        <p class="pt-8 self-end text-xl font-bold text-white sm:text-2xl">Организация фуршета на день
                            рождения</p>
                    </div>
                </a>
                <div
                    class="hidden lg:block xl:hidden rounded-lg overflow-hidden h-full w-ful bg-stone-500 p-4 sm:p-6 lg:p-8">
                    <div class="text-white space-y-6 h-full grid grid-rows-1fr-auto">
                        <p class="font-bold text-xl sm:text-2xl">Нужна более подробная информация? Или Вы уже
                            определились с форматом и готовы заказать? </p>
                        <p class="">Оставьте заявку, мы свяжемся с Вами в ближайшее время!</p>
                        <div class="flex justify-end self-center">
                            <button
                                class="font-semibold rounded-full py-4 px-4 bg-stone-400 hover:bg-stone-600">Оставить
                                заявку</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section
            class="relative overflow-hidden grid grid-cols-1 lg:grid-cols-2 items-center justify-center lg:h-[80vh] mt-16 lg:mt-20 rounded-xl sm:rounded-2xl  bg-stone-500">
            <div class="p-4 min-[561px]-px-6 min-[561px]-py-12 lg:px-8">
                <div class="text-center lg:text-left tracking-tight text-white">
                    <h2 class="text-2xl min-[1068px]:text-3xl font-bold mb-4"> Подберем идеальное решение для вашего
                        события
                    </h2>
                    <p class="text-lg lg:text-xl">Заполните форму, и мы ответим на все ваши вопросы</p>
                </div>
                <div class="min-[561px]-pt-8 pt-4">
                    <form class="space-y-4">
                        <div class="space-y-2">
                            <label for="name" class="block text-base lg:text-lg font-medium text-white">Ваше имя</label>
                            <div class="mt-1">
                                <input type="text" placeholder="Фамилия Имя Очество" id="fullname" 
                                    class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-lg lg:text-xl text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-stone-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                            </div>
                        </div>
                        <div class="space-y-2">
                            <label class="block text-base lg:text-lg font-medium text-white">Номер телефона</label>
                            <div class="mt-1">
                                <input type="tel" id="phone" placeholder="+7 (___) ___-__-__"
                                    class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-lg lg:text-xl text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-stone-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                            </div>
                        </div>

                        <div class="flex items-start">
                            <div class="flex items-center h-5">
                                <input type="checkbox" id="agreement" required
                                    class="w-4 h-4 text-indigo-600 border-stone-300 rounded focus:ring-indigo-500" />
                            </div>
                            
                            <div class="ml-3 text-sm">
                                <label for="agreement" class="font-medium text-white">
                                    Соглашаюсь на обработку персональных данных
                                </label>
                            </div>
                        </div>

                        <button type="submit"
                            class="mt-6 flex w-full justify-center rounded-md bg-stone-400 p-3 text-lg font-semibold text-white 
                            hover:bg-stone-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:bg-stone-400">
                            ОСТАВИТЬ ЗАЯВКУ</button>
                    </form>
                </div>
                {/*
                <div class="relative overflow-hidden h-full w-full">
                    <img src="" alt="report" class="absolute bg-white">
                </div>
                */}
                
            </div>
            <div class="lg:w-full min-h-[30vh] lg:h-full relative">
                <img src="home-img/img12.jpg" alt="ОСТАВИТЬ ЗАЯВКУ"
                    class="absolute inset-0 w-full h-full object-cover" />
                <div class="absolute inset-0 bg-gradient-to-br from-fuchsia-500/40 to-pink-500/40 mix-blend-overlay">
                </div>
            </div>
        </section>

        <section id="aboutus" class="mt-16 lg:mt-20 mb-8 lg:mb-12">
            <div class="mb-[10vh] flex flex-col justify-center space-y-4">
                <h2 class="text-black text-2xl sm:text-3xl md:text-4xl font-bold text-center">О НАС И НАШИХ РАБОТАХ</h2>
                <p class="w-full lf:max-w[60vw] text-center text-lg text-black">Наша команда стремится создавать
                    уникальные банкеты, отвечающие вашим требованиям и способствующие достижению ваших целей.
                    <span class="xl:block">
                        Мы внедряем новые возможности, модернизируем устаревшее и совершенствуем существующия
                        решения для кейтеринга.
                    </span>
                </p>
                <button
                    class="self-center font-semibold rounded-full py-4 px-4 bg-stone-400 text-white mb-8 hover:bg-stone-600">Узнать
                    больше</button>
            </div>
            <div class="relative flex items-center justify-center">
                <div class="relative grid grid-cols-1 lg:grid-cols-3 gap-4 sm:px-12 md:px-24 lg:px-0 h-[100vh] lg:h-[50vh] w-full">
                    <div
                        class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-0 h-[110vh] lg:h-[65vh] w-[50vw] bg-red-200 rounded-2xl">
                    </div>
                    <div class="relative block rounded-lg overflow-hidden h-full w-full bg-black">
                        <img alt="Наша работа на свадьбе" src="home-img/img14.jpg"
                            class="absolute inset-0 h-full w-full rounded-lg object-cover opacity-75 transition-opacity group-hover:opacity-50"/>
                    </div>
                    <div class="relative block rounded-lg overflow-hidden h-full w-full bg-black">
                        <img alt="Наша работа на барбекю" src="home-img/img13.jpg"
                            class="absolute inset-0 h-full w-full rounded-lg object-cover opacity-75 transition-opacity group-hover:opacity-50"/>
                    </div>
                    <div class="relative block rounded-lg overflow-hidden h-full w-full bg-black">
                        <img alt="Наша работа на кофе-брейке" src="home-img/img15.jpg"
                            class="absolute inset-0 h-full w-full rounded-lg object-cover opacity-75 transition-opacity group-hover:opacity-50"/>
                    </div>
                </div>
            </div>
        </section>
    </main>
  );
};

// Корневой компонент для этой страницы
const Home = () => {
  return (
    <CartProvider>
      <Header />
      <HomeContent />
      <Footer />
    </CartProvider>
  );
};

export default Home;