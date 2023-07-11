"use client";
import Header from "@/components/header";
import styles from "./app.module.scss";
import { useContext } from "react";
import { StyleThemeContext } from "@/app/context/styleTheme";

export default function App({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme } = useContext(StyleThemeContext);
  return (
    <div className={`${styles['app']} ${styles[theme]}`}>
      <Header />
      {children}
    </div>
  );
}
