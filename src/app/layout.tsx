"use client";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import { CartProvider } from "./context/cardContext";
import { ProductProvider } from "./context/productsContext";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ProductProvider>
        <CartProvider>
          <body className={inter.className}>{children}</body>
        </CartProvider>
      </ProductProvider>
    </html>
  );
}
