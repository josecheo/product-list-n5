"use client";
// import "./styles.scss";
import styles from "./app.module.scss";

import Image from "next/image";
import productImg from "../../public/assets/productos-lacteos.png";
import Button from "../components/button";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { StyleThemeContext } from "@/app/context/styleTheme";
import SwitchTheme from "@/components/switchTheme";
export default function Home() {
  const router = useRouter();
  const { theme } = useContext(StyleThemeContext);

  const handleClick = () => {
    router.push("/products");
  };

  return (
    <div className={`${styles.home} ${styles[theme]}`}>
         <SwitchTheme />
      <br />
      <h1>Test Products N5</h1>
      <br />
      <Image src={productImg} alt="lacteos" width={200} height={200} />
      <br />
   
      <Button title="Empecemos!" handleClick={handleClick} />
    </div>
  );
}
