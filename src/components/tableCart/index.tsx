"use client";
import styles from "./tableCart.module.scss";
import { Product } from "@/types/products";
import Image from "next/image";
import basura from "../../../public/assets/basura.png";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "@/app/context/cardContext";
import Button from "@/components/button";
// import { useRouter } from "next/navigation";
// import { useRouter } from 'next/router'
type Props = {
  product: Product[];
};

type SerializedState = {
  id: number;
  name: string;
  price: number;
  amount: number;
  totalPayment: number;
};

export default function TableCart({ product }: Props) {
  const { cartItems, removeFromCart, subtractAmount, cleanCart } =
    useContext(CartContext);
  const [successfulPurchase, setSuccessfulPurchase] = useState(false);
  // const router = useRouter();

  useEffect(() => {
    if (successfulPurchase) {
      cleanCart();
      setTimeout(() => {
        window.location.href = '/products'
        // router.replace("/products");
      }, 2000);
    }
  }, [successfulPurchase]);

  const serializedState: SerializedState[] = cartItems.map((item) => {
    const productDB = product.find((item) => item.id === item.id) || {
      name: "",
      price: 0,
      amount: 0,
      id: 0,
      image: "",
    };
    return {
      id: item.productId,
      name: productDB.name,
      price: productDB.price,
      amount: item.quantity,
      totalPayment: productDB.price * item.quantity,
    };
  });

  const totalPayment = serializedState.reduce(
    (total, serializedState) => total + serializedState.totalPayment,
    0
  );

  const handleDeleteItem = (id: number) => {
    removeFromCart(id);
  };

  const handleDeleteQuantity = (productId: number, amount: number) => {
    if (amount < 2) return;
    subtractAmount(productId);
  };

  const handleClick = async () => {
    var body = JSON.stringify(cartItems);

    console.log("process.env.URL_HOST",process.env.URL_HOST)
    const res = await fetch(`/api/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body,
    });
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    } else {
      setSuccessfulPurchase(true);
    }
  };

  return successfulPurchase ? (
    <h1>Compra exitosa!</h1>
  ) : (
    <div>
      <table className={styles.tabla}>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th>Total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {serializedState.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>
                <div className={styles.containerQuantity}>
                  {product.amount}
                  <div>
                    <button
                      onClick={() =>
                        handleDeleteQuantity(product.id, product.amount)
                      }
                      className={styles.active}
                    >
                      -
                    </button>
                  </div>
                </div>
              </td>
              <td>
                {product.price.toLocaleString("es-AR", {
                  style: "currency",
                  currency: "ARS",
                })}
              </td>
              <td>
                {product.totalPayment.toLocaleString("es-AR", {
                  style: "currency",
                  currency: "ARS",
                })}
              </td>

              <td>
                <div onClick={() => handleDeleteItem(product.id)}>
                  <Image
                    className={styles.trash}
                    src={basura}
                    alt={product.name.toString()}
                    width={12}
                    height={12}
                  />
                </div>
              </td>
            </tr>
          ))}

          <tr style={{ borderTop: "1px solid #000" }}>
            <td></td>
            <td></td>
            <td style={{ fontWeight: 700 }}> Total a pagar :</td>
            <td style={{ fontWeight: 700 }}>
              {totalPayment.toLocaleString("es-AR", {
                style: "currency",
                currency: "ARS",
              })}
            </td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <br />
      <Button title="Comprar ahora!" handleClick={handleClick} />
    </div>
  );
}
