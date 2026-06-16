"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaMinus, FaPlus, FaTrash, FaShoppingBag } from "react-icons/fa";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";

const CartDrawer: React.FC = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    cartTotal,
  } = useCart();

  const router = useRouter();

  const handleClose = () => {
    setIsCartOpen(false);
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
    router.push("/checkout");
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <div className="fixed inset-0 z-[100] flex justify-end">
          {/* Backdrop Blur Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Sliding Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col z-10"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            {/* Drawer Header */}
            <div className="p-5 border-b border-gray-100 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-[#046069] text-xl">🛒</span>
                <h2 className="text-xl font-bold text-gray-800">Your Order</h2>
              </div>
              <button
                onClick={handleClose}
                className="text-gray-400 hover:text-red-500 p-2 rounded-full hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
              >
                <FaTimes size={18} />
              </button>
            </div>

            {/* Cart Items List */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-6">
                  <div className="w-24 h-24 bg-gray-50 border border-gray-100 rounded-full flex items-center justify-center text-4xl mb-4">
                    🍦
                  </div>
                  <h3 className="text-lg font-bold text-gray-800">Your cart is empty</h3>
                  <p className="text-gray-500 text-sm mt-1 max-w-[240px]">
                    Add some delicious handcrafted ice cream or fresh burgers from our menu!
                  </p>
                  <button
                    onClick={handleClose}
                    className="mt-6 px-6 py-2.5 bg-[#046069] hover:bg-[#056170] text-white font-bold rounded-full transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer text-sm"
                  >
                    Explore Menu
                  </button>
                </div>
              ) : (
                cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-4 bg-white border border-gray-100 rounded-2xl p-3 shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    {/* Item Thumbnail */}
                    <div className="w-16 h-16 rounded-xl overflow-hidden bg-gray-50 border border-gray-100 flex-shrink-0 flex items-center justify-center relative">
                      {item.image ? (
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          sizes="64px"
                          className="object-cover"
                        />
                      ) : (
                        <span className="text-3xl select-none">{item.categoryEmoji}</span>
                      )}
                    </div>

                    {/* Item Details */}
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-gray-800 text-sm truncate leading-snug">
                        {item.name}
                      </h4>
                      <p className="text-xs text-[#c07f07] font-semibold mt-0.5">
                        Size: {item.size}
                      </p>
                      <p className="text-xs text-gray-500 mt-1 font-semibold">
                        {item.formattedPrice} each
                      </p>
                    </div>

                    {/* Actions: Qty Control & Delete */}
                    <div className="flex flex-col items-end justify-between h-full gap-2">
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-gray-400 hover:text-red-500 p-1 transition-colors cursor-pointer"
                      >
                        <FaTrash size={12} />
                      </button>

                      <div className="flex items-center gap-2.5 bg-gray-50 border border-gray-100 px-2 py-1 rounded-full">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="text-gray-500 hover:text-red-500 p-0.5 cursor-pointer"
                        >
                          <FaMinus size={9} />
                        </button>
                        <span className="text-xs font-bold text-gray-800 min-w-[12px] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="text-gray-500 hover:text-green-500 p-0.5 cursor-pointer"
                        >
                          <FaPlus size={9} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer Section */}
            {cart.length > 0 && (
              <div className="border-t border-gray-100 p-5 bg-gray-50/50">
                <div className="space-y-3 mb-5">
                  <div className="flex justify-between items-center text-sm font-semibold text-gray-600">
                    <span>Items Subtotal</span>
                    <span>${cartTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs text-gray-400">
                    <span>Taxes & Fees</span>
                    <span>Calculated at checkout</span>
                  </div>
                  <div className="border-t border-gray-100 pt-3 flex justify-between items-center">
                    <span className="text-base font-bold text-gray-800">Total Order</span>
                    <span className="text-xl font-extrabold text-[#046069]">
                      ${cartTotal.toFixed(2)}
                    </span>
                  </div>
                </div>

                <button
                  onClick={handleCheckout}
                  className="w-full bg-gradient-to-r from-[#c07f07] to-[#d8920b] hover:from-[#d8920b] hover:to-[#f2b632] text-white font-bold py-4 px-6 rounded-2xl shadow-lg hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer text-base"
                >
                  <FaShoppingBag size={16} />
                  Checkout Now
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
