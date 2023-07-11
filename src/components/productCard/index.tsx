import styles from "./productCard.module.scss";
import { Product } from "@/types/products";
import Image from "next/image";
import AddToCard from "../addToCard";
import { useContext } from "react";
import { useRouter } from "next/navigation";
import { StyleThemeContext } from "@/app/context/styleTheme";
type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  const { theme } = useContext(StyleThemeContext);
  const router = useRouter();
  return (
    <div
      className={`${styles.wrapper} ${styles[theme]}`}
      onClick={() => router.push(`/product/${product.id}`)}
    >
      <Image
        className={styles.image}
        src={product.image}
        alt={product.name}
        width={200}
        height={200}
      />
      <div className={`${styles.infoProduct} ${styles[theme]}`}>
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
      </div>
    </div>
  );
}
