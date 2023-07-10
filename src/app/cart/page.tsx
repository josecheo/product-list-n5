import styles from "./cart.module.scss";
import TableCart from "@/components/tableCart";
import Link from "next/link";

export default async function Cart() {
  const { products } = await getData();

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
  const res = await fetch("http://localhost:3000/api/products", {
    cache: "no-cache",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
