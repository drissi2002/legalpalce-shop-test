import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LoaderCircle} from "lucide-react";
import { ItemType } from "@/types/item-type";
import useItems from "@/hooks/use-item";
import SearchAndFilters from "../ui/search-filter";

interface ShopProps {
  items: ItemType[];
  addToCart: (item: ItemType) => void;
  loading: boolean;
  setSearchQuery: (query: string) => void;
}

const Shop: React.FC<ShopProps> = ({ items, addToCart, loading, setSearchQuery}) => {
  
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
    <div className="w-full border-2 rounded-md p-8 bg-gray-100 flex flex-row gap-8">
      <SearchAndFilters
        searchQuery={searchQuery}
        selectedCategories={selectedCategories}
        categories={categories}
        handleSearchChange={handleSearchChange}
        handleCategoryChange={handleCategoryChange}
        handleResetFilters={handleResetFilters}
      />
      <div className="w-3/4 flex flex-col gap-8">
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight flex flex-row gap-2 justify-center items-center">
        <span className="text-xl">👜</span> Shop
        </h4>
        <div className="flex flex-row gap-2 w-full">
          {loading ? (
            <div className="flex justify-center items-center w-full">
              <LoaderCircle className="w-6 h-6 animate-spin" />
            </div>
          ) : (
            filteredItems.map((item) => (
              <Card key={item.sku}>
                <CardHeader className="text-lg font-bold">
                  {item.name}<span className="text-xl">🛒</span> {/* Add your emoji here */}
                </CardHeader>
                <CardContent className="text-sm text-gray-600 italic">{item.description}</CardContent>
                <CardFooter>
                  <Button onClick={() => addToCart(item)} className="w-full">
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;