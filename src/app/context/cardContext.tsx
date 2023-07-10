import React, { createContext, useState, useEffect } from "react";
import { CartItems, CartContextType } from "@/types/products";

type CartProviderProps = {
  children: React.ReactNode;
};

export const CartContext = createContext({} as CartContextType);

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItems[]>([]);

  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item: CartItems) => {
    const existingItem = cartItems.find(
      (cartItem) => cartItem.productId === item.productId
    );

    if (existingItem) {
      const updatedItems = cartItems.map((cartItem) => {
        if (cartItem.productId === item.productId) {
          return {
            ...cartItem,
            quantity: cartItem.quantity + item.quantity,
          };
        }
        return cartItem;
      });

      setCartItems(updatedItems);
    } else {
      setCartItems((prevItems) => [...prevItems, item]);
    }
  };
  const cleanCart = () => {
    localStorage.removeItem("cartItems");
    setCartItems([]);
  };
  const subtractAmount = (item: number) => {
    const existingItem = cartItems.find(
      (cartItem) => cartItem.productId === item
    );

    if (existingItem) {
      const updatedItems = cartItems.map((cartItem) => {
        if (cartItem.productId === item) {
          return {
            ...cartItem,
            quantity: cartItem.quantity - 1,
          };
        }
        return cartItem;
      });
      setCartItems(updatedItems);
    }
  };

  const removeFromCart = (itemId: number) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.productId !== itemId)
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        subtractAmount,
        cleanCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
