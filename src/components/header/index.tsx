"use client";
import React from "react";
import styles from "./header.module.scss";
import CartIcon from "@/components/cartIcon";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return pathname === "/" ? (
    <React.Fragment></React.Fragment>
  ) : (
    <header className={styles.header}>
      <div className={styles.header_fixed}>
      <h1>N5-{pathname}</h1>
      <CartIcon />
      </div>
    </header>
  );
}
