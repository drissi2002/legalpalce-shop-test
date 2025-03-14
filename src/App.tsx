import Shop from "./components/shop/shop";
import Cart from "./components/shop/cart";
import { useCart } from "./hooks/use-cart";
import { useAuth } from "./hooks/use-auth";

const App = () => {
  const { cart, addItem, removeItem, totalItems } = useCart();
  const { loggedIn, setLoggedIn } = useAuth();

  return (
    <div className="min-w-screen p-12 w-full h-screen gap-2 flex flex-col items-center justify-center">
      <div className="text-lg text-gray-600 italic"> Shop Test </div>
      <div className="flex flex-row space-x-2 w-full h-full ">
        {!loggedIn ? (
          <Login onLogin={setLoggedIn} />
        ) : (
          <>
            <Shop addToCart={addItem} />
            <Cart
              cart={cart}
              removeFromCart={removeItem}
              calculateTotal={totalItems}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default App;
