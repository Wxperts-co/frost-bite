import type { Metadata } from "next";
import Breadcrumb from "@/components/common/breadcrumb";
import FaqsClient from "./FaqsClient";

export const metadata: Metadata = {
  title: "Frost Bite FAQs | Ice Cream, Shakes & Food in Avon, IN",
  description: "Find answers to popular FAQs about Frost Bite in Avon, IN. Explore our menu of handcrafted soft serve, milkshakes, signature Frosts, burgers & daily hours.",
  keywords: "Frost Bite Avon Indiana, ice cream shop Avon IN, Frost Bite FAQs, handcrafted frozen treats Avon, hand-spun milkshakes Avon, signature Frosts ice cream, Dippin Dots Avon IN, burgers and tenderloins Avon, ice cream and hot food Avon Indiana,",
  alternates: {
    canonical: "https://frostbite-avon-indiana.com/faqs",
  },
  openGraph: {
    title: "Frost Bite FAQs | Ice Cream, Shakes & Food in Avon, IN",
    description: "Find answers to popular FAQs about Frost Bite in Avon, IN. Explore our menu of handcrafted soft serve, milkshakes, signature Frosts, burgers & daily hours.",
    url: "https://frostbite-avon-indiana.com/faqs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Frost Bite FAQs | Ice Cream, Shakes & Food in Avon, IN",
    description: "Find answers to popular FAQs about Frost Bite in Avon, IN. Explore our menu of handcrafted soft serve, milkshakes, signature Frosts, burgers & daily hours.",
  }
};

export default function FaqsPage() {
  return (
    <>
      <Breadcrumb
        title="FAQs"
        backgroundImage="/images/inner-bg-1.jpg"
        pageName="FAQs"
      />
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-[900px]">
          <FaqsClient />
        </div>
      </section>
    </>
  );
}
