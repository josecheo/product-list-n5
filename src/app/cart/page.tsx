import styles from "./cart.module.scss";
import TableCart from "@/components/tableCart";
import Link from "next/link";

export default async function Cart() {
  const { data } = await getData();
  const { products } = data;

  return (
    <div className={styles.wrapper}>
      <Link className={styles.buttonBack} href="/products">
        Atras
      </Link>
      <h1>Carrito !</h1>
      <TableCart product={products} />
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
