"use client";
import React from "react";
import styles from "./header.module.scss";
import CartIcon from "@/components/cartIcon";
import { usePathname } from "next/navigation";
import SwitchTheme from "../switchTheme";
import { useContext } from "react";
import { StyleThemeContext } from "@/app/context/styleTheme";

export default function Header() {
  const pathname = usePathname();
  const { theme } = useContext(StyleThemeContext);

  return pathname === "/" ? (
    <></>
  ) : (
    <header className={styles.header}>
      <div className={`${styles["header_fixed"]} ${styles[theme]}`}>
        <h1>N5-{pathname}</h1>
        <CartIcon />
        <SwitchTheme />
      </div>
    </header>
  );
}
