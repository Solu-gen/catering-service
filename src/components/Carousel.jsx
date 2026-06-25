import { useState, useEffect, useRef } from 'react';

const Carousel = ({ slides, autoPlayInterval = 5000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const totalSlides = slides.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Автопрокрутка
  useEffect(() => {
    const timer = setInterval(nextSlide, autoPlayInterval);
    return () => clearInterval(timer); // очистка при размонтировании
  }, [autoPlayInterval, totalSlides]);

  // Свайпы (мобильные)
  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].screenX;
    handleSwipe();
  };

  const handleSwipe = () => {
    const threshold = 50;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > threshold) {
      diff > 0 ? nextSlide() : prevSlide();
    }
  };

  return (
    <div
      className="relative w-full h-[80vh] touch-pan-y touch-pinch-zoom overflow-hidden rounded-xl sm:rounded-2xl"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd} >
      {/* Слайды */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-500
            ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
        >
          <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
          <div class="absolute inset-0 bg-gradient-to-br from-violet-500/40 to-purple-500/40 mix-blend-overlay"></div>
          <div className="absolute inset-x-0 bottom-0 p-8 sm:p-16 bg-gradient-to-t from-stone-800 via-stone-450 to-transparent">
            <h3 className="text-white text-3xl md:text-4xl font-bold mb-2 sm:mb-3">{slide.title}</h3>
            <p className="text-gray-200 text-sm sm:text-lg md:text-lg max-w-2xl">{slide.description}</p>
          </div>
        </div>
      ))}

      {/* Кнопки навигации */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-[rgba(146,141,141,0.5)] backdrop-blur-md rounded-full flex items-center justify-center z-20 text-white touch-manipulation duration-300"
        aria-label="Предыдущий">
        <svg class="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7">
          </path>
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white rounded-full w-10 h-10 flex items-center justify-center"
        aria-label="Следующий"
      >
        ›
      </button>

      {/* Индикаторы */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all
              ${index === currentSlide ? 'bg-white w-6' : 'bg-white/50'}`}
            aria-label={`Слайд ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;