import { useState, useMemo } from "react";
import { ItemType } from "@/types/item-type";

const useItems = (items: ItemType[], setSearchQuery: (query: string) => void) => {
  const [searchQuery, setSearchQueryState] = useState<string>("");
  const [selectedCategories, setSelectedCategories] = useState<Set<string>>(new Set());

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQueryState(e.target.value);
    setSearchQuery(e.target.value);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategories(prev => {
      const newCategories = new Set(prev);
      if (newCategories.has(category)) {
        newCategories.delete(category);
      } else {
        newCategories.add(category);
      }
      return newCategories;
    });
  };

  const handleResetFilters = () => {
    setSearchQueryState("");
    setSearchQuery("");
    setSelectedCategories(new Set());
  };

  const categories = useMemo(() => {
    const categorySet = new Set(items.map(item => item.description));
    return Array.from(categorySet);
  }, [items]);

  const filteredItems = useMemo(() => {
    if (selectedCategories.size > 0) {
      return items.filter(item => selectedCategories.has(item.description));
    }
    return items.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()));
  }, [items, selectedCategories, searchQuery]);

  return {
    searchQuery,
    selectedCategories,
    categories,
    filteredItems,
    handleSearchChange,
    handleCategoryChange,
    handleResetFilters,
  };
};

export default useItems;