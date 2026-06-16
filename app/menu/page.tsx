import type { Metadata } from "next";
import Breadcrumb from "@/components/common/breadcrumb";
import { categories, menuData } from "@/data/menu";
import MenuClient from "@/components/menu/MenuClient";

export const metadata: Metadata = {
  title: "Frost Bite | Menu | Chocolate Vanilla & Food in Avon, IN",
  description: "Explore Frost Bite's full menu in Avon, IN—soft serve, chocolate vanilla, hard ice cream, food, burger, hot dogs, etc. Fresh, delicious & family-friendly!",
  alternates: {
    canonical: "https://frostbite-avon-indiana.com/menu",
  },
  keywords: [
    "Chocolate Vanilla & Food in Avon, IN",
    "tenderloin sandwich Avon, Indiana",
    "breaded tenderloin near me Indiana",
    "burgers and ice cream Avon, IN",
    "chicken wrap Avon, Indiana",
    "fish sandwich near me Avon, IN",
    "hot dogs and burgers Avon, Indiana"
  ],
  openGraph: {
    title: "Frost Bite | Menu | Chocolate Vanilla & Food in Avon, IN",
    description: "Explore Frost Bite's full menu in Avon, IN—soft serve, chocolate vanilla, hard ice cream, food, burger, hot dogs, etc. Fresh, delicious & family-friendly!",
    url: "https://frostbite-avon-indiana.com/menu",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Frost Bite | Menu | Chocolate Vanilla & Food in Avon, IN",
    description: "Explore Frost Bite's full menu in Avon, IN—soft serve, chocolate vanilla, hard ice cream, food, burger, hot dogs, etc. Fresh, delicious & family-friendly!",
  }
};

export default function MenuPage() {
  return (
    <>
      <Breadcrumb
        title="Our Menu"
        backgroundImage="/images/inner-bg-1.jpg"
        pageName="Menu"
        showHiringBadge={true}
      />

      <section
        className="relative w-full bg-cover bg-no-repeat bg-center bg-fixed py-20 md:py-28"
        style={{ backgroundImage: "url('/images/menu-bg-1.jpg')" }}
      >
        <div className="absolute inset-0 bg-white/90"></div>

        <div className="relative z-10 container mx-auto px-4">

          <h1 className="text-3xl md:text-4xl font-bold text-[#1e1e1e] mb-3 flex items-center justify-center gap-2 text-center">Frost Bite Menu – Soft Serve, Sundaes, Shakes & More <br></br> in Avon, Indiana</h1>
          <h2 className="text-2xl md:text-3xl font-bold text-[#1e1e1e] mb-3 flex items-center justify-center gap-2 text-center">Soft-Serve Cups – Creamy Classic Soft Serve Made Fresh Daily </h2>

          <MenuClient categories={categories} menuData={menuData} />

        </div>
      </section>
    </>
  );
}