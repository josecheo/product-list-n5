"use client";
import styles from "./switchTheme.module.scss";
import { useContext } from "react";
import { StyleThemeContext } from "@/app/context/styleTheme";
export default function SwitchTheme() {
  const { theme, switchTheme } = useContext(StyleThemeContext);

  return (
    <div className={styles.wrapper}>
      <p>{theme}</p>
      <label className={styles["switch"]}>
        <input type="checkbox" defaultChecked={theme} onClick={switchTheme} />
        <span className={`${styles["slider"]} ${styles["round"]}`}></span>
      </label>
    </div>
  );
}
