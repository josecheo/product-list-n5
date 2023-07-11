"use client";
import styles from "./product.module.scss";
import { Product } from "@/types/products";
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "@/app/context/productsContext";
import AddToCard from "@/components/addToCard";
import Image from "next/image";
import Button from "@/components/button";
import { useRouter } from "next/navigation";
import { StyleThemeContext } from "@/app/context/styleTheme";

type ProductProps = {
  params: {
    id: string;
  };
};

export default function Product({ params }: ProductProps) {
  const { products } = useContext(ProductContext);
  const [product, setProduct] = useState<Product>();
  const router = useRouter();
  const { theme } = useContext(StyleThemeContext);

  useEffect(() => {
    if (products) {
      const productFind = products.find(
        (elemt: Product) => Number(params.id) === elemt.id
      );
      setProduct(productFind);
    }
  }, [products]);

  return (
    product && (
      <div className={styles.wrapper}>
        <h1>Product {params.id}!</h1>
        <div className={styles.container}>
          <Image
            className={styles.image}
            src={product.image}
            alt={product.name}
            width={200}
            height={200}
          />
          <div className={styles.infoProduct}>
            <h3>{product.name}</h3>
            <p>
              {product.price.toLocaleString("es-AR", {
                style: "currency",
                currency: "ARS",
              })}
            </p>
            <div className={styles.stock}>
              <p>stock:</p>
              <div className={`${styles.stockCircle} ${styles[theme]}`}>
                <p>{product.amount}</p>
              </div>
            </div>
            <br />
            <AddToCard productId={product.id} stock={product.amount} />
            <br />
            <Button
              title={"Volver"}
              handleClick={() => router.back()}
              outlined
            />
          </div>
        </div>
      </div>
    )
  );
}
