import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface SearchAndFiltersProps {
  searchQuery: string;
  selectedCategories: Set<string>;
  categories: string[];
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCategoryChange: (category: string) => void;
  handleResetFilters: () => void;
}

const SearchAndFilters: React.FC<SearchAndFiltersProps> = ({
  searchQuery,
  selectedCategories,
  categories,
  handleSearchChange,
  handleCategoryChange,
  handleResetFilters,
}) => {
  return (
    <Card className="w-1/4 p-4">
      <CardHeader className="text-md text-center italic text-gray-400">Search and Filters</CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4">
        <div>
            <label className="text-lg font-bold flex items-center gap-2">
            <span className="text-xl">🔍</span>Search Item:
            </label>
            <div className="flex items-center gap-2 mt-2">
              <input
                type="text"
                placeholder="Search..."
                className="p-2 border rounded-lg flex-1"
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </div>
          </div>
          <div>
            <label className="text-lg font-bold flex items-center gap-2">
              <span className="text-xl">📦</span>Categories:
            </label>
            <div className="flex flex-col gap-2 mt-2">
              {categories.map((category) => (
                <label key={category} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    value={category}
                    checked={selectedCategories.has(category)}
                    onChange={() => handleCategoryChange(category)}
                  />
                  <span className="italic text-gray-600">{category}</span>
                </label>
              ))}
            </div>
          </div>
          <Button onClick={handleResetFilters} className="mt-4">
             Reset Filters
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default SearchAndFilters;