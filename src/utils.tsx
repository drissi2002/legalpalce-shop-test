import { ItemType } from "@/types/item-type";
import { CartItemType } from "@/types/cart-item-type";
import { mockItemsData } from "./constants/mock-item-data";


export const mockFetchData = (): Promise<{ itemsData: ItemType[] }> =>
  new Promise((resolve) =>
    setTimeout(
      () =>
        resolve({
          itemsData: mockItemsData,
        }),
      4000
    )
  );

export const addToCart = (prevCart: CartItemType[], item: ItemType): CartItemType[] => {
  const existingItem = prevCart.find((cartItem) => cartItem.sku === item.sku);
  if (existingItem) {
    return prevCart.map((cartItem) =>
      cartItem.sku === item.sku
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  } else {
    return [...prevCart, { ...item, quantity: 1 }];
  }
};

export const removeFromCart = (prevCart: CartItemType[], sku: string): CartItemType[] => {
  const existingItem = prevCart.find((cartItem) => cartItem.sku === sku);
  if (existingItem && existingItem.quantity > 1) {
    return prevCart.map((cartItem) =>
      cartItem.sku === sku
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  } else {
    return prevCart.filter((cartItem) => cartItem.sku !== sku);
  }
};

export const calculateTotal = (cart: CartItemType[]): string => {
  return cart.reduce((total, item) => total + parseFloat(item.price) * item.quantity, 0).toFixed(2);
};