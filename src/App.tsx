import { useState, useEffect, useCallback } from "react";
import Shop from "@/components/shop/Shop";
import Cart from "@/components/shop/Cart";
import Login from "@/components/auth/Login";
import { ItemType } from "@/types/item-type";
import { CartItemType } from "./types/cart-item-type";
import { mockFetchData, addToCart as addToCartUtil, removeFromCart as removeFromCartUtil, calculateTotal as calculateTotalUtil } from "@/utils";


// ? Feel free to add more items to the mock data

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [items, setItems] = useState<ItemType[]>([]);
  const [cart, setCart] = useState<CartItemType[]>([]);

  useEffect(() => {
    if (loggedIn) {
      mockFetchData().then((data) => {
        setItems(data.itemsData);
      });
    }
  }, [loggedIn]);

  const handleLogin = () => setLoggedIn(true);

  const addToCart = useCallback((item: ItemType) => {
    setCart((prevCart) => addToCartUtil(prevCart, item));
  }, []);

  const removeFromCart = useCallback((sku: string) => {
    setCart((prevCart) => removeFromCartUtil(prevCart, sku));
  }, []);

  const calculateTotal = useCallback(() => {
    return calculateTotalUtil(cart);
  }, [cart]);


  return (
    <div className="min-w-screen p-12 w-full h-screen gap-2 flex flex-col items-center justify-center">
      <div className="text-lg text-gray-600 italic"> Shop Test </div>
      <div className="flex flex-row space-x-2 w-full h-full ">
        {!loggedIn ? (
          <Login onLogin={handleLogin} />
        ) : (
          <>
            <Shop items={items} addToCart={addToCart} />
            <Cart cart={cart} removeFromCart={removeFromCart} calculateTotal={calculateTotal} />
          </>
        )}
      </div>
    </div>
  );
};

export default App;