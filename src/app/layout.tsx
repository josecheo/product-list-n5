"use client";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import { CartProvider } from "@/app/context/cardContext";
import { ProductProvider } from "@/app/context/productsContext";
import { StyleTheme } from "@/app/context/styleTheme";
import App from "./App";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <StyleTheme>
        <ProductProvider>
          <CartProvider>
            <body
              className={`${inter.className}`}
              style={{ margin: 0 }}
            >
              <App>{children}</App>
            </body>
          </CartProvider>
        </ProductProvider>
      </StyleTheme>
    </html>
  );
}
