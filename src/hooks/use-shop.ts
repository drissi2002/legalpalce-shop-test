import { useState, useEffect } from "react";
import { ItemType } from "@/types/item-type";
import { mockFetchData } from "@/utils";

const useShop = () => {
  const [items, setItems] = useState<ItemType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
      mockFetchData().then((data) => {
        setItems(data.itemsData);
        setLoading(false);
      });
  }, []);

  return { items , loading };
};

export default useShop;