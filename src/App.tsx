import { CartProvider } from "@/contexts/CartContext";
import { ShopProvider } from "@/contexts/ShopContext";
import useAuth from "./hooks/use-auth";
import Login from "./components/auth/login";
import ShopCart from "./components/shop/shop-cart";

const App = () => {
  const { loggedIn, setLoggedIn } = useAuth();

  return (
    <>
      <ShopProvider>
        <CartProvider>
          <div className="min-w-screen p-12 w-full h-screen gap-2 flex flex-col items-center justify-center">
            <div className="text-lg text-gray-600 italic">Shop Test</div>
            <div className="flex flex-row space-x-2 w-full h-full">
              {!loggedIn ? (
                <Login onLogin={setLoggedIn} />
              ) : (
                <ShopCart />
              )}
            </div>
          </div>
        </CartProvider>
      </ShopProvider>
    </>
  );
};

export default App;