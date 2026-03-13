import type { Metadata } from "next";
import { Baloo_2, Poppins } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/components/store/CartContext";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const baloo = Baloo_2({
  variable: "--font-baloo",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "PizzaMago — Pizzas artesanales recién horneadas",
  description:
    "PizzaMago sirve pizzas frescas, calientes y llenas de sabor directo a tu puerta. Armá tu propia pizza y pedí online.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${baloo.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <CartProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
