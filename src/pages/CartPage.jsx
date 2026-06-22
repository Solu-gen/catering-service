//import React from 'react';
import { CartProvider } from '../context/CartContext';
import Header from '../components/Header';
import { useCart } from '../context/CartContext';

// Основной контент страницы
const CatalogContent = () => {
  const { addToCart } = useCart();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Каталог</h1>
      <button onClick={() => addToCart('product-1')} className="bg-indigo-600 text-white px-4 py-2 rounded">
        Добавить товар
      </button>
    </div>
  );
};

// Корневой компонент для этой страницы
const CatalogPage = () => {
  return (
    <CartProvider>
      <Header />
      <CatalogContent />
    </CartProvider>
  );
};

export default CatalogPage;