import type { Metadata } from "next";
import Breadcrumb from "@/components/common/breadcrumb";
import CheckoutClient from "@/components/checkout/CheckoutClient";

export const metadata: Metadata = {
  title: "Checkout | Frost Bite Avon, Indiana",
  description: "Complete your pickup order at Frost Bite in Avon, Indiana. Fresh handcrafted treats ready for pickup!",
  alternates: {
    canonical: "https://frostbite-avon-indiana.com/checkout",
  },
  openGraph: {
    title: "Checkout | Frost Bite Avon, Indiana",
    description: "Complete your pickup order at Frost Bite in Avon, Indiana. Fresh handcrafted treats ready for pickup!",
    url: "https://frostbite-avon-indiana.com/checkout",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Checkout | Frost Bite Avon, Indiana",
    description: "Complete your pickup order at Frost Bite in Avon, Indiana. Fresh handcrafted treats ready for pickup!",
  }
};

export default function CheckoutPage() {
  return (
    <>
      <Breadcrumb
        title="Checkout"
        backgroundImage="/images/inner-bg-1.jpg"
        pageName="Checkout"
        showHiringBadge={false}
      />

      <section
        className="relative w-full bg-cover bg-no-repeat bg-center bg-fixed py-16 md:py-24"
        style={{ backgroundImage: "url('/images/menu-bg-1.jpg')" }}
      >
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-white/90"></div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-[1200px] mx-auto text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-[#1e1e1e] mb-3">
              Order Checkout
            </h1>
            <p className="text-gray-500 max-w-xl mx-auto">
              Please enter your details below to place your pickup order with us.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-[#c07f07] to-[#046069] mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="max-w-[1200px] mx-auto">
            <CheckoutClient />
          </div>
        </div>
      </section>
    </>
  );
}
