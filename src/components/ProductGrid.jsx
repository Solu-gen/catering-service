import ProductCard from "./ProductCard";
import { useCart } from '../context/CartContext';
import { CartProvider } from '../context/CartContext';

function ProductGrid({
  products,
  cart
}) {
  const { addToCart } = useCart();
  const { updateCount } = useCart();
  
  return (
    <CartProvider>
      <div className="grid grid-cols-1 overflow-hidden sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            count={cart[product.id] || 0}
          />
        ))}
      </div>
    </CartProvider>
  );
}

export default ProductGrid;