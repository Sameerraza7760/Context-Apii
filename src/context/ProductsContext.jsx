import { createContext, useState } from "react";

export const ApiProductContext = createContext();
export const ProductsProvider = (props) => {
  const [products, setProducts] = useState([]);
  return (
    <ApiProductContext.Provider value={{ products, setProducts }}>
      {props.children}
    </ApiProductContext.Provider>
  );
};
