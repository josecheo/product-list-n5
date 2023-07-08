import styles from "./products.module.scss";
import ProductCard from "../../components/productCard";
import { Product } from "@/types/products";
import CartIcon from "../../components/cartIcon";

export default async function ProductsList() {
  const { products } = await getData();

  return (
    <div className={styles.wrapper}>
      <h1>Productos !</h1>
      <div className={styles.containerProducts}>
        {products.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <CartIcon />
    </div>
  );
}

async function getData() {
  const res = await fetch("http://localhost:3000/api/products");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
