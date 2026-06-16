import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { CartProvider } from "@/context/CartContext";
import CartDrawer from "@/components/cart/CartDrawer";
import StickyCheckoutButton from "@/components/cart/StickyCheckoutButton";

export const metadata: Metadata = {
  title: "Frost Bite",
  description: "Frost Bite - Your Ultimate Ice Cream Destination",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">
        <CartProvider>
          <Header />
          {children}
          <Footer />
          <CartDrawer />
          <StickyCheckoutButton />
        </CartProvider>
      </body>
    </html>
  );
}

