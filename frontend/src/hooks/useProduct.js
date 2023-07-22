import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function useProduct() {
  const { id: productId } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/products/${productId}`);
      setProduct(data);
    };
    fetchProduct();
  }, []);

  return product;
}
