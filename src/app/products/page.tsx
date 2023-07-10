import styles from "./products.module.scss";
import ProductCard from "../../components/productCard";
import { Product } from "@/types/products";
import CartIcon from "../../components/cartIcon";

export default async function ProductsList() {
  const { data } = await getData();
  const { products } = data;

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

async function getData() {
  try {
    const res = await fetch("http://localhost:3000/api/products", {
      cache: "no-cache",
    });
    return res.json();
  } catch (error) {
    return { data: { products: [] } };
  }
}
