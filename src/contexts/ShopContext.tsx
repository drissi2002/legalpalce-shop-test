import{ createContext, useContext, ReactNode } from 'react';
import useShop from '../hooks/use-shop';

// Define the shape of your context value
interface ShopContextValue {
  items: any[]; // Replace 'any' with your actual item type
  loading: boolean;
  setSearchQuery: (query: string) => void;
}

// Create context with explicit type
const ShopContext = createContext<ShopContextValue | undefined>(undefined);

// Define props type for the provider
interface ShopProviderProps {
  children: ReactNode;
}

export const useShopContext = () => {
  const context = useContext(ShopContext);
  if (context === undefined) {
    throw new Error('useShopContext must be used within a ShopProvider');
  }
  return context;
};

export const ShopProvider = ({ children }: ShopProviderProps) => {
  const { items, loading, setSearchQuery } = useShop();
  
  return (
    <ShopContext.Provider value={{ items, loading, setSearchQuery }}>
      {children}
    </ShopContext.Provider>
  );
};