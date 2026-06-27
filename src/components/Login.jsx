import React, { useState, useEffect, useRef } from 'react';

const Login = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const toggleRef = useRef(null);

    const toggleMenu = () => setIsMenuOpen(prev => !prev);
    const closeMenu = () => setIsMenuOpen(false);

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

    // Закрытие по Escape
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape' && isMenuOpen) closeMenu();
        };
        document.addEventListener('keydown', handleEsc);
        return () => document.removeEventListener('keydown', handleEsc);
    }, [isMenuOpen]);

    // Блокировка скролла
    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [isMenuOpen]);

    // Закрытие при изменении размера окна (если >768px)
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768 && isMenuOpen) closeMenu();
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isMenuOpen]);

    return (
        <div className={`fixed top-0 right-0 h-full w-full sm:w-[50%] bg-stone-100 md:w-full z-[1000] transform transition-transform duration-300
              ${isMenuOpen ? "translate-x-0" : "translate-x-full md:translate-x-0 md:static md:w-auto md:h-auto"}`}
        >
            <p>zsxdrfcghjb cgvklmbn</p>

            {/* Правая часть */}
            <div className="flex items-center justify-self-end ml-auto lg:space-x-8">
                {/* Крестик */}
                <button
                    ref={toggleRef}
                    className={`menu-toggle md:hidden flex flex-col justify-between w-11 h-[44px] bg-transparent p-3  ${isMenuOpen ? 'active' : ''}`}
                    onClick={toggleMenu}
                    aria-label={'Закрыть меню'}
                    aria-expanded={isMenuOpen}  >
                    <span className="rotate-45 translate-x-1.5 translate-y-1.5 w-full h-[3px] bg-black rounded"></span>
                    <span className="-rotate-45 translate-x-1.5 -translate-y-1.5 w-full h-[3px] bg-black rounded"></span>
                </button>
            </div>

            {/* Оверлей */}
            {isMenuOpen && (
                <div className="fixed inset-0 bg-black/50 z-[999] md:hidden" onClick={closeMenu}></div>
            )}
        </div>
    );
};

export default Login;