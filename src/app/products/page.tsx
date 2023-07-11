"use client";
import styles from "./products.module.scss";
import ProductCard from "@/components/productCard";
import { Product } from "@/types/products";
import { useContext } from "react";
import { ProductContext } from "@/app/context/productsContext";
import { StyleThemeContext } from "@/app/context/styleTheme";
export default function ProductsList() {
  const { products } = useContext(ProductContext);
  const { theme } = useContext(StyleThemeContext);

  return (
    <div  className={`${styles.wrapper} ${styles[theme]}`}>
      <div className={styles.containerProducts}>
        {products &&
          products.map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
}
