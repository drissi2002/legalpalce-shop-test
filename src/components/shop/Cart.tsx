import React, { useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Bell} from "lucide-react";
import { CartItemType } from "@/types/cart-item-type";

interface CartProps {
  cart: CartItemType[];
  removeFromCart: (sku: string) => void;
  calculateTotal: () => string;
}

const Cart: React.FC<CartProps> = ({ cart, removeFromCart, calculateTotal }) => {
  const total = useMemo(() => calculateTotal(), [cart]);
  const itemCount = useMemo(() => cart.reduce((count, item) => count + item.quantity, 0), [cart]);

  return (
    <div className="w-full md:w-1/3 border-2 rounded-md p-8 bg-gray-100 flex flex-col gap-2 relative">
      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight flex flex-row gap-2 justify-center items-center">
        <span className="text-xl">🛒</span> Cart
      </h4>
      <div className="absolute top-4 right-4">
        <div className="relative">
          <Bell className="w-6 h-6" />
          {itemCount > 0 && (
            <span className="absolute bottom-3 right-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-gray-100 bg-red-500 rounded-full">
              {itemCount}
            </span>
          )}
        </div>
      </div>
      {cart.length === 0 ? (
        <div className="text-lg text-gray-600 italic"> Your cart is empty </div>
      ) : (
        <div className="flex flex-col gap-2">
          {cart.map((item) => (
            <Card key={item.sku}>
              <CardHeader className="text-md font-bold">{item.name} (x{item.quantity})   {item.icon}</CardHeader>
              <CardContent className="text-sm text-gray-600 italic">{item.description}</CardContent>
              <CardFooter>
                <Button onClick={() => removeFromCart(item.sku)} className="w-full">
                  Remove
                </Button>
              </CardFooter>
            </Card>
          ))}
          <Card className="mt-4 p-4 bg-white border-t border-gray-200 flex justify-end items-center rounded-md ml-auto">
            <strong className="text-sm">Total: ${total}</strong>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Cart;