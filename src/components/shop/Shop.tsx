import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import { ItemType } from "@/types/item-type";

interface ShopProps {
  items: ItemType[];
  addToCart: (item: ItemType) => void;
}

const Shop: React.FC<ShopProps> = ({ items, addToCart }) => {
  return (
    <div className="w-full border-2 rounded-md p-8 bg-gray-100 flex flex-col gap-8">
      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight flex flex-row gap-2 justify-center items-center">
        <ShoppingBag /> Shop
      </h4>
      <div className="flex flex-row gap-2 w-full">
        {items.map((item) => (
          <Card key={item.sku}>
            <CardHeader className="text-lg font-bold">{item.name}</CardHeader>
            <CardContent className="text-sm text-gray-600 italic">{item.description}</CardContent>
            <CardFooter>
              <Button onClick={() => addToCart(item)} className="w-full">
                Add to Cart
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Shop;