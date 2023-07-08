"use client";
import styles from "./cartIcon.module.scss";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "@/app/context/cardContext";

type ShoppingCartProps = {
  width: number;
  height: number;
  fill: string;
};

const ShoppingCart = ({ width, height, fill }: ShoppingCartProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M30.1217 5.55605C29.751 5.11108 29.2868 4.75321 28.7621 4.50785C28.2374 4.26249 27.6652 4.13566 27.086 4.13637H5.77361L5.71825 3.67369C5.60495 2.71197 5.14271 1.82524 4.41917 1.18164C3.69562 0.538027 2.76108 0.182274 1.7927 0.181824L1.50007 0.181824C1.15046 0.181824 0.815178 0.320703 0.567971 0.56791C0.320764 0.815117 0.181885 1.1504 0.181885 1.50001C0.181885 1.84961 0.320764 2.18489 0.567971 2.4321C0.815178 2.67931 1.15046 2.81819 1.50007 2.81819H1.7927C2.11557 2.81823 2.42719 2.93677 2.66847 3.15131C2.90974 3.36586 3.06388 3.66149 3.10166 3.98214L4.91548 19.4049C5.10378 21.0088 5.87442 22.4878 7.08113 23.5611C8.28783 24.6344 9.8466 25.2273 11.4616 25.2273H25.2273C25.5769 25.2273 25.9122 25.0884 26.1594 24.8412C26.4066 24.594 26.5455 24.2587 26.5455 23.9091C26.5455 23.5595 26.4066 23.2242 26.1594 22.977C25.9122 22.7298 25.5769 22.5909 25.2273 22.5909H11.4616C10.6457 22.5886 9.85048 22.334 9.18498 21.862C8.51948 21.3901 8.01625 20.7238 7.74429 19.9546H23.457C25.0023 19.9546 26.4985 19.4118 27.6842 18.4208C28.8699 17.4298 29.6697 16.0537 29.9438 14.5329L30.9786 8.79351C31.0819 8.22406 31.0586 7.63887 30.9106 7.07939C30.7625 6.51992 30.4932 5.99985 30.1217 5.55605Z"
      fill={fill}
    />
    <path
      d="M9.40907 31.8181C10.8651 31.8181 12.0454 30.6378 12.0454 29.1818C12.0454 27.7258 10.8651 26.5454 9.40907 26.5454C7.95305 26.5454 6.77271 27.7258 6.77271 29.1818C6.77271 30.6378 7.95305 31.8181 9.40907 31.8181Z"
      fill={fill}
    />
    <path
      d="M22.591 31.8181C24.047 31.8181 25.2273 30.6378 25.2273 29.1818C25.2273 27.7258 24.047 26.5454 22.591 26.5454C21.1349 26.5454 19.9546 27.7258 19.9546 29.1818C19.9546 30.6378 21.1349 31.8181 22.591 31.8181Z"
      fill={fill}
    />
  </svg>
);

export default function CartIcon() {
  const { cartItems } = useContext(CartContext);
  const [totalQuantity, setTotalQuantity] = useState(0);

  useEffect(() => {
    if (cartItems) {
      setTotalQuantity(getTotalQuantity());
    }
  }, [cartItems]);

  const getTotalQuantity = () => {
    return cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
  };

  return (
    <div className={styles.circle}>
      <ShoppingCart width={30} height={30} fill={"#000"} />
      <div className={styles.circleBag}>
        <h2>{totalQuantity}</h2>
      </div>
    </div>
  );
}
