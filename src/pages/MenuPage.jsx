import { useState, useMemo, useEffect } from "react";
import { useCart } from '../context/CartContext';
import { CartProvider } from '../context/CartContext';
import ProductGrid from "../components/ProductGrid";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTopButton from '../components/ScrollToTopButton';
import '../context/style.css';

const MenuPage = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("Все");
  const [cart, setCart] = useState({});

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/products/").then(res => res.json()).then(data => setProducts(data));
  }, []);

  // фильтрация
  const filteredProducts = useMemo(() => {
    if (filter === "Все") {
      return products;
    }
    return products.filter((p) => p.category === filter);
  }, [filter, products]);
  useEffect(() => {
    console.log(products);
  }, [products]);


  return (
    <CartProvider>
      <Header />
      <main>
        <div className="bg-stone-100 px-8 py-2 min-[490px]:p-8 space-y-6">
          {/* Фильтры */}
          <div className="borderbox space-x-3 max-[490px]:space-y-2">
            {["Все", "Брускетты", "Канапе", "Тарталетки"].map((f) => (
              <button key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 sm:text-lg rounded-xl border-2 hover:bg-stone-200 ${filter === f ? "bg-stone-400 text-white hover:bg-stone-600" : ""
                  }`} >
                {f}
              </button>
            ))}
          </div>

          {/* Сетка */}
          <ProductGrid products={filteredProducts} />
        </div>
      </main>
      <Footer />
      <ScrollToTopButton />
    </CartProvider>
  );
}

export default MenuPage;