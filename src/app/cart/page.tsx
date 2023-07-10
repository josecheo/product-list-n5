import styles from "./cart.module.scss";
import TableCart from "@/components/tableCart";
import Link from "next/link";

export default function Cart() {
  return (
    <div className={styles.wrapper}>
      <Link className={styles.buttonBack} href="/products">
        Atras
      </Link>
      <h1>Carrito !</h1>
      <TableCart />
    </div>
  );
}
