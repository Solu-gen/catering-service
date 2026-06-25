import { createContext, useState, useContext, useMemo, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('cart');
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const totalCount = useMemo(() => {
    return Object.values(cart).reduce((sum, n) => sum + n, 0);
  }, [cart]);

  const addToCart = (id) => {
    setCart((prev) => ({
      ...prev,
      [id]: prev[id] ? prev[id] + 1 : 1,
    }));
  };

  const updateCount = (id, newCount) => {
    setCart((prev) => {
      const updated = { ...prev };
      if (newCount <= 0) {
        delete updated[id];
      } else {
        updated[id] = newCount;
      }
      return updated;
    });
  };

  return (
    <CartContext.Provider value={{ cart, totalCount, addToCart, updateCount }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within a CartProvider');
  return context;
};