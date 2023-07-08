import styles from "./productCard.module.scss";
import { Product } from "@/types/products";
import Image from "next/image";
import AddToCard from "../addToCard";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  return (
    <div className={styles.wrapper}>
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
          <div className={styles.stockCircle}>
            <p>{product.amount}</p>
          </div>
        </div>
        <br />
        <AddToCard
          amount={product.amount}
          productId={product.id}
          stock={product.amount}
        />
      </div>
    </div>
  );
}
