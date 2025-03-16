import Login from "./components/auth/login";
import Shop from "./components/shop/shop";
import Cart from "./components/shop/cart";
import useAuth from "./hooks/use-auth";
import useShop from "./hooks/use-shop";
import useCart from "./hooks/use-cart";


// ? Feel free to add more items to the mock data

const App = () => {
  const { loggedIn, setLoggedIn } = useAuth();
  const { items  ,loading , setSearchQuery} = useShop();
  const { cart, addToCart, removeFromCart, calculateTotal } = useCart();

  return (
    <div className="min-w-screen p-12 w-full h-screen gap-2 flex flex-col items-center justify-center">
      <div className="text-lg text-gray-600 italic"> Shop Test ✍🏻 </div>
      <div className="flex flex-row space-x-2 w-full h-full ">
        {!loggedIn ? (
          <Login onLogin={setLoggedIn} />
        ) : (
          <>
            <Shop items={items} addToCart={addToCart} loading={loading} setSearchQuery={setSearchQuery} />
            <Cart cart={cart} removeFromCart={removeFromCart} calculateTotal={calculateTotal} />
          </>
        )}
      </div>
    </div>
  );
};

export default App;