"use client";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import { CartProvider } from "@/app/context/cardContext";
import { ProductProvider } from "@/app/context/productsContext";
import Header from "@/components/header";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ProductProvider>
        <CartProvider>
          <body className={inter.className}>
            <Header />
            {children}
          </body>
        </CartProvider>
      </ProductProvider>
    </html>
  );
}
