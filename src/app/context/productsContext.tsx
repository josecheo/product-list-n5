import { CartItems, Product } from "@/types/products";
import React, { createContext, useState, useEffect } from "react";

type ProductProviderProps = {
  children: React.ReactNode;
};

export const ProductContext = createContext({} as any);

export const ProductProvider = ({ children }: ProductProviderProps) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const storedProducts = localStorage.getItem("products");
    if (storedProducts) {
      setProducts(JSON.parse(storedProducts));
    } else {
      getData();
    }
  }, []);

  const getData = async () => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setProducts(data.products))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const buyProduct = (cartItem: CartItems[]) => {
      setProducts((prevProducts) =>
        prevProducts.map((product) => {
          const cartItemFind = cartItem.find(
            (item) => item.productId === product.id
          );
          if (cartItemFind) {
            return {
              ...product,
              amount: product.amount - cartItemFind.quantity,
            };
          }
          return product;
        })
      );
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        buyProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
