"use client";
import { useState, useContext } from "react";
import styles from "./addToCard.module.scss";
import Buttton from "@/components/button";
import { CartContext } from "@/app/context/cardContext";
import { StyleThemeContext } from "@/app/context/styleTheme";

type AddToCardProps = {
  productId: number;
  stock: number;
};

export default function AddToCard({ stock, productId }: AddToCardProps) {
  const [count, setCount] = useState(1);
  const { addToCart, cartItems } = useContext(CartContext);
  const { theme } = useContext(StyleThemeContext);

  const existingItem = cartItems?.find(
    (element) => element.productId === productId
  );

  const isMaximun = existingItem ? existingItem.quantity >= stock : false;

  const handleClick = (event: { stopPropagation: () => void }) => {
    event.stopPropagation();
    addToCart({ productId, quantity: count });
    setCount(1);
  };

  const handleSubtract = (event: { stopPropagation: () => void }) => {
    event.stopPropagation();
    if (isMaximun) return;
    if (count > 1) {
      setCount((prev) => prev - 1);
    }
  };

  const handleAdd = (event: { stopPropagation: () => void }) => {
    event.stopPropagation();
    if (isMaximun) return;
    if (count < stock - (existingItem ? existingItem.quantity : 0)) {
      setCount((prev) => prev + 1);
    }
  };

  return (
    <div>
      <div className={styles.wrapper}>
        <button
          onClick={handleSubtract}
          className={`
          ${
            isMaximun
              ? styles.disable
              : count > 1
              ? styles.active
              : styles.disable
          } ${styles[theme]}`}
        >
          -
        </button>
        <p>{count}</p>
        <button
          onClick={handleAdd}
          className={`
          ${
            isMaximun
              ? styles.disable
              : count > 0 && count < stock
              ? styles.active
              : styles.disable
          } ${styles[theme]}`}
        >
          +
        </button>
      </div>
      <br />

      <Buttton
        disabled={isMaximun}
        title={existingItem ? "Agregar más" : "Agregar a carro"}
        handleClick={(event) => handleClick(event)}
      />
    </div>
  );
}
