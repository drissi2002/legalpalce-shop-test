import { useState, useCallback } from "react";
import { ItemType } from "@/types/item-type";
import { CartItemType } from "@/types/cart-item-type";
import { addToCart as addToCartUtil, removeFromCart as removeFromCartUtil, calculateTotal as calculateTotalUtil } from "@/utils";

const useCart = () => {
  const [cart, setCart] = useState<CartItemType[]>([]);

  const addToCart = useCallback((item: ItemType) => {
    setCart((prevCart) => addToCartUtil(prevCart, item));
  }, []);

  const removeFromCart = useCallback((sku: string) => {
    setCart((prevCart) => removeFromCartUtil(prevCart, sku));
  }, []);

  const calculateTotal = useCallback(() => {
    return calculateTotalUtil(cart);
  }, [cart]);

  return { cart, addToCart, removeFromCart, calculateTotal };
};

export default useCart;