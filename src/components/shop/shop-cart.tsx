import Cart from "./cart";
import Shop from "./shop";
import { useCartContext } from "@/contexts/CartContext";
import { useShopContext } from "@/contexts/ShopContext";

const ShopCart = () => {
  const { items, loading, setSearchQuery} = useShopContext();
  const { cart, removeFromCart, calculateTotal,addToCart } = useCartContext();

  // Convert the number to string if Cart component requires it
  const calculateTotalString = () => calculateTotal().toString();

  return (
    <div className="flex flex-row space-x-2 w-full h-full">
      <Shop
        items={items}
        loading={loading}
        setSearchQuery={setSearchQuery} addToCart={addToCart} />
      <Cart
        cart={cart}
        removeFromCart={removeFromCart}
        calculateTotal={calculateTotalString} // Pass the converted function
      />
    </div>
  );
};

export default ShopCart;
