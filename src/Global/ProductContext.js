import React, { createContext, useState } from "react";
import Dslr from "../images/background-brick-wall-bricks-brickwork-259915.jpg";

export const ProductsContext = createContext();

const ProductsContextProvider = () => {
  const [products] = useState([
    { id: 1, name: "Dslr", price: 300, image: Dslr, status: "hot" },
    { id: 2, name: "Dslr", price: 300, image: Dslr, status: "new" },
    { id: 3, name: "Dslr", price: 300, image: Dslr, status: "new" },
    { id: 4, name: "Dslr", price: 300, image: Dslr, status: "hot" },
    { id: 5, name: "Dslr", price: 300, image: Dslr, status: "hot" },
  ]);
  return (
    <ProductsContext.Provider
      value={{ products: [...products] }}
    ></ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
