"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaShoppingBag } from "react-icons/fa";
import { useCart } from "@/context/CartContext";
import { usePathname } from "next/navigation";

const StickyCheckoutButton: React.FC = () => {
  const { cartCount, cartTotal, setIsCartOpen } = useCart();
  const pathname = usePathname();

  // Hide the sticky checkout button on the checkout page
  if (pathname === "/checkout") return null;

  return (
    <AnimatePresence>
      {cartCount > 0 && (
        <motion.button
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.9 }}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsCartOpen(true)}
          className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-40 flex items-center gap-3 px-6 py-4 rounded-full text-white font-extrabold shadow-2xl transition-all cursor-pointer select-none"
          style={{
            background:
              "linear-gradient(135deg, #c07f07 0%, #d99510 50%, #f2b632 100%)",
            boxShadow: "0 12px 30px rgba(192,127,7,0.45), inset 0 1px 0 rgba(255,255,255,0.2)",
            fontFamily: "'Nunito', sans-serif",
          }}
        >
          {/* Cart Icon & Count */}
          <div className="relative flex items-center justify-center">
            <FaShoppingBag size={18} />
            <span className="absolute -top-2.5 -right-2.5 bg-red-500 text-white font-bold text-[9px] w-4.5 h-4.5 rounded-full flex items-center justify-center border border-white shadow-sm">
              {cartCount}
            </span>
          </div>

          <span className="text-sm md:text-base tracking-wide uppercase">
            Checkout
          </span>

          <span className="h-4 w-px bg-white/25" />

          <span className="text-sm md:text-base font-black">
            ${cartTotal.toFixed(2)}
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default StickyCheckoutButton;
