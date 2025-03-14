import { CartItemType } from "@/types/cart-item-type";
import { ItemType } from "@/types/item-type";
import { useCallback, useState } from "react";
import { addToCart,calculateTotal,removeFromCart } from "@/utils";

export const useCart = () => {
    const [cart, setCart] = useState<CartItemType[]>([]);

    const addItem = useCallback((item: ItemType) => {
        setCart((prevCart) => addToCart(prevCart, item));
      }, []);
      
    const removeItem = useCallback((sku: string) => {
        setCart((prevCart) => removeFromCart(prevCart, sku));
    }, []);

    const totalItems = useCallback(() => {
        return calculateTotal(cart);
    }, [cart]);

    return { cart, addItem, removeItem, totalItems }
}