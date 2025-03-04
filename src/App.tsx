import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingBag, ShoppingCart } from "lucide-react";

type ItemType = {
  name: string;
  description: string;
  sku: string;
  price: string;
};

// ? Feel free to add more items to the mock data
const mockItemsData: ItemType[] = [
  {
    name: "Yaourt",
    description: "Yaourt nature",
    sku: "yaourt-1",
    price: "1.5",
  },
];

const mockFetchData = (): Promise<{ itemsData: ItemType[] }> =>
  new Promise((resolve) =>
    setTimeout(
      () =>
        resolve({
          itemsData: mockItemsData,
        }),
      1000
    )
  );

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  
  useEffect(() => {
    if (loggedIn) {
      mockFetchData().then((data) => {
        console.log(data);
      });
    }
  }, [loggedIn]);

  const handleLogin = () => setLoggedIn(true);

  return (
    <div className="min-w-screen p-12 w-full h-screen gap-2 flex flex-col items-center justify-center">
      <div> Shop Test </div>
      <div className="flex flex-row space-x-2 w-full h-full ">
        <div className="w-full border-2 rounded-md p-8 bg-gray-100 flex flex-col gap-8">
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight flex flex-row gap-2 justify-center items-center">
        <ShoppingBag/> Shop
          </h4>
          {!loggedIn ? (
            <Button onClick={handleLogin}>Login</Button>
          ) : (
            <div className="flex flex-row gap-2 w-full">
              <Card>
                <CardHeader>Yaourt</CardHeader>
                <CardContent>Item description goes here</CardContent>
                <CardFooter>
                  <Button type="submit" className="w-full">Purchase</Button>
                </CardFooter>
              </Card>
              {/* List of items  */}
            </div>
          )}
        </div>
        <div className="w-1/3 border-2 rounded-md p-8 bg-gray-100 flex flex-col gap-8">
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight flex flex-row gap-2 justify-center items-center">
            <ShoppingCart/> Cart
          </h4>
        </div>
      </div>
    </div>
  );
};

export default App;
