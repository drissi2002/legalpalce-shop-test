import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";
import { CartItemType } from "@/types/cart-item-type";

const Cart = ({ cart, removeFromCart, calculateTotal }: { cart: CartItemType[], removeFromCart: (sku: string) => void, calculateTotal: () => string }) => (
  <div className="w-1/3 border-2 rounded-md p-8 bg-gray-100 flex flex-col gap-2">
    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight flex flex-row gap-2 justify-center items-center">
      <ShoppingCart /> Cart
    </h4>
    {cart.length === 0 ? (
      <div className="text-lg text-gray-600 italic"> Your cart is empty </div>
    ) : (
      <div className="flex flex-col gap-2">
        {cart.map((item) => (
          <Card key={item.sku}>
            <CardHeader className="text-lg font-bold">{item.name} (x{item.quantity})</CardHeader>
            <CardContent className="text-sm text-gray-600 italic">{item.description}</CardContent>
            <CardFooter>
              <Button onClick={() => removeFromCart(item.sku)} className="w-full">
                Remove
              </Button>
            </CardFooter>
          </Card>
        ))}
        <div className="mt-4">
          <strong>Total: ${calculateTotal()}</strong>
        </div>
      </div>
    )}
  </div>
);

export default Cart;