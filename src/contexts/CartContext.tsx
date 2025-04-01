import { createContext, useContext, ReactNode } from 'react';
import useCart from '../hooks/use-cart';
import { CartItemType } from '@/types/cart-item-type';

// Define the shape of your context value
interface CartContextValue {
  cart: CartItemType[]; // Replace 'any' with your actual cart type
  addToCart: (item: any) => void;
  removeFromCart: (itemId: string) => void;
  calculateTotal: () => number; // Explicitly type this as returning number
}

// Create context with explicit type
const CartContext = createContext<CartContextValue | undefined>(undefined);

// Define props type for the provider
interface CartProviderProps {
  children: ReactNode;
}

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCartContext must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }: CartProviderProps) => {
  const { cart, addToCart, removeFromCart, calculateTotal } = useCart();

  // Ensure calculateTotal returns a number
  const calculateTotalNumber = () => {
    const total = calculateTotal();
    // Convert string to number if necessary
    return typeof total === 'string' ? parseFloat(total) : total;
  };

  return (
    <CartContext.Provider 
      value={{ 
        cart, 
        addToCart, 
        removeFromCart, 
        calculateTotal: calculateTotalNumber 
      }}
    >
      {children}
    </CartContext.Provider>
  );
};