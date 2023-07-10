"use client";
import "./styles.scss";
import styles from "./home.module.scss";

import Image from "next/image";
import productImg from "../../public/assets/productos-lacteos.png";
import Button from "../components/button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/products");
  };
  
  return (
    <div className={styles.wrapper}>
      <h1>Test Products N5</h1>
      <br />
      <Image src={productImg} alt="lacteos" width={200} height={200} />
      <br />
      <Button title="Empecemos!" handleClick={handleClick} />
    </div>
  );
}
