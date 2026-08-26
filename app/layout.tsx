import type { Metadata } from "next";
import { Luckiest_Guy } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { CartProvider } from "@/context/CartContext";
import dynamic from "next/dynamic";

const luckiestGuy = Luckiest_Guy({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-luckiest-guy",
  display: "swap",
});

const CartDrawer = dynamic(() => import("@/components/cart/CartDrawer"));
const StickyCheckoutButton = dynamic(() => import("@/components/cart/StickyCheckoutButton"));

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
      className={`h-full antialiased ${luckiestGuy.variable}`}
    >
      <head>
        <link rel="preload" href="/images/about-page-bg.jpg" as="image" />
      </head>
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

