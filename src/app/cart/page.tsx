import styles from "./cart.module.scss";
import TableCart from "@/components/tableCart";
import Link from "next/link";

export default function Cart() {
  return (
    <div className={styles.wrapper}>
      <TableCart />
    </div>
  );
}
