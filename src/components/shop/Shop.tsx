import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LoaderCircle } from "lucide-react";
import { ItemType } from "@/types/item-type";
import useItems from "@/hooks/use-item";
import SearchAndFilters from "../ui/search-filter";

interface ShopProps {
  items: ItemType[];
  addToCart: (item: ItemType) => void;
  loading: boolean;
  setSearchQuery: (query: string) => void;
}

const Shop: React.FC<ShopProps> = ({ items, addToCart, loading, setSearchQuery }) => {
  const {
    searchQuery,
    selectedCategories,
    categories,
    filteredItems,
    handleSearchChange,
    handleCategoryChange,
    handleResetFilters,
  } = useItems(items, setSearchQuery);

  return (
    <div className="w-full border-2 rounded-md p-8 bg-gray-100 flex flex-col gap-8 relative">
      {loading ? (
        <div className="absolute inset-0 flex justify-center items-center bg-gray-100 bg-opacity-75">
          <LoaderCircle className="w-12 h-12 animate-spin" />
        </div>
      ) : (
        <>
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight flex flex-row gap-2 justify-center items-center">
            <span className="text-xl">👜</span> Shop
          </h4>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex flex-col gap-8 w-full md:w-1/4">
              <SearchAndFilters
                searchQuery={searchQuery}
                selectedCategories={selectedCategories}
                categories={categories}
                handleSearchChange={handleSearchChange}
                handleCategoryChange={handleCategoryChange}
                handleResetFilters={handleResetFilters}
              />
            </div>
            <div className="flex flex-col gap-8 w-full md:w-3/4">
            <div className="flex flex-row gap-2 w-full">
            {filteredItems.map((item) => (
                  <Card key={item.sku} className="w-1/3">
                    <CardHeader className="scroll-m-20 text-lg font-bold tracking-tight flex flex-row gap-2 justify-center items-center">
                      <span className="text-md">{item.name}  {item.icon}</span>
                    </CardHeader>
                    <CardContent className="text-sm flex justify-between items-center text-gray-600 italic">{item.description}</CardContent>
                    <CardFooter>
                      <Button onClick={() => addToCart(item)} className="w-full">
                        Add to Cart
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Shop;