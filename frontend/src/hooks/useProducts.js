import axios from "axios";
import { useEffect, useState } from "react";

export default function useProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("api/products");
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return products;
}
