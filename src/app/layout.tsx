"use client";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import { CartProvider } from "./context/cardContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <CartProvider>
        <body className={inter.className}>{children}</body>
      </CartProvider>
    </html>
  );
}
