"use client";
import styles from "./products.module.scss";
import ProductCard from "../../components/productCard";
import { Product } from "@/types/products";
import CartIcon from "../../components/cartIcon";
import { useContext } from "react";
import { ProductContext } from "../context/productsContext";

export default function ProductsList() {
  const { products } = useContext(ProductContext);

  return (
    <div className={styles.wrapper}>
      <h1>Productos !</h1>
      <div className={styles.containerProducts}>
        {products &&
          products.map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
      <CartIcon />
    </div>
  );
}
