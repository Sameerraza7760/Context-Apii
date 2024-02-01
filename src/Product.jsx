import React, { useContext, useEffect } from "react";
import { ApiProductContext } from "./context/ProductsContext";

function Product() {
  const { products, setProducts } = useContext(ApiProductContext);

  const getProducts = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      setProducts(data.products);
      console.log(data.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  },[] );

  return <div>Product</div>;
}

export default Product;
