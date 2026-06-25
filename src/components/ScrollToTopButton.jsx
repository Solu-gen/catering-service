// src/components/ScrollToTopButton.jsx
import { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      class={`fixed bottom-[30px] right-[30px] w-14 h-14 bg-[rgba(146,141,141,0.5)] backdrop-blur-md text-white border-none rounded-full text-2xl cursor-pointer shadow-[0_4px_12px_rgba(0,0,0,0.3)] opacity-0 transition-all duration-300 ease-in-out z-[999] flex items-center justify-center max-md:w-[52px] max-md:h-[52px] max-md:bottom-5 max-md:right-5 max-md:text-[22px] hover:bg-[rgba(146,141,141,0.9)] hover:scale-110 active:scale-95
        ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      aria-label="Наверх"
    >
      <svg class="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path>
      </svg>
    </button>
  );
};

export default ScrollToTopButton;