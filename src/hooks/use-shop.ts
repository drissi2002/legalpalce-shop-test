import { useState, useEffect } from "react";
import { ItemType } from "@/types/item-type";
import { mockFetchData } from "@/utils";

const useShop = () => {

  const [items, setItems] = useState<ItemType[]>([]);
  const [filteredItems, setFilteredItems] = useState<ItemType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>("");



  useEffect(() => {
      mockFetchData().then((data) => {
        setItems(data.itemsData);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    setFilteredItems(
      items.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [items, searchQuery]);

  return { items , filteredItems, loading, setSearchQuery };
};

export default useShop;