"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaMinus, FaPlus, FaTimes, FaCheck } from "react-icons/fa";
import Image from "next/image";
import { MenuItem } from "@/data/menu";
import { useCart } from "@/context/CartContext";

interface SizeOption {
  name: string;
  price: number;
  formattedPrice: string;
}

interface SizeSelectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: MenuItem | null;
  categoryEmoji: string;
}

export const parsePriceString = (priceStr: string): SizeOption[] => {
  const trimmed = priceStr.trim();

  // If there's no '|', it's a flat price (e.g. "$5.99")
  if (!trimmed.includes("|")) {
    const cleanPriceStr = trimmed.replace(/[^0-9.]/g, "");
    const priceNum = parseFloat(cleanPriceStr) || 0;
    return [
      { name: "Jr", price: priceNum, formattedPrice: trimmed },
      { name: "Medium", price: priceNum, formattedPrice: trimmed },
      { name: "Large", price: priceNum, formattedPrice: trimmed },
    ];
  }

  // Parse pipe-separated price strings
  const parts = trimmed.split("|");
  return parts.map((part) => {
    const subParts = part.split(":");
    if (subParts.length === 2) {
      let sizeName = subParts[0].trim();
      const rawPrice = subParts[1].trim();
      const cleanPriceStr = rawPrice.replace(/[^0-9.]/g, "");
      const priceNum = parseFloat(cleanPriceStr) || 0;

      // Normalize size names to full, user-friendly labels
      const lowerSize = sizeName.toLowerCase();
      if (lowerSize === "sm") sizeName = "Small";
      else if (lowerSize === "med") sizeName = "Medium";
      else if (lowerSize === "lg") sizeName = "Large";
      else if (lowerSize === "1 sc") sizeName = "1 Scoop";
      else if (lowerSize === "2 sc") sizeName = "2 Scoops";
      else if (lowerSize === "3 sc") sizeName = "3 Scoops";

      return {
        name: sizeName,
        price: priceNum,
        formattedPrice: rawPrice,
      };
    } else {
      const cleanPriceStr = part.replace(/[^0-9.]/g, "");
      const priceNum = parseFloat(cleanPriceStr) || 0;
      return {
        name: "Regular",
        price: priceNum,
        formattedPrice: part.trim(),
      };
    }
  });
};

const SizeSelectionModal: React.FC<SizeSelectionModalProps> = ({
  isOpen,
  onClose,
  item,
  categoryEmoji,
}) => {
  const { addToCart } = useCart();
  const [sizes, setSizes] = useState<SizeOption[]>([]);
  const [selectedSizeIndex, setSelectedSizeIndex] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(1);

  useEffect(() => {
    if (item) {
      const parsedSizes = parsePriceString(item.price);
      setSizes(parsedSizes);
      setSelectedSizeIndex(0);
      setQuantity(1);
    }
  }, [item]);

  if (!item) return null;

  const selectedSize = sizes[selectedSizeIndex];

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!selectedSize) return;
    addToCart(
      item.name,
      selectedSize.name,
      selectedSize.price,
      selectedSize.formattedPrice,
      categoryEmoji,
      item.image,
      quantity,
      { x: e.clientX, y: e.clientY }
    );
    onClose();
  };

  const incrementQty = () => setQuantity((q) => q + 1);
  const decrementQty = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 350 }}
            className="relative w-full max-w-md bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100 z-10 flex flex-col"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            {/* Top Banner (Image or Emoji Cover) */}
            <div className="relative h-44 bg-gradient-to-br from-[#046069]/20 to-[#c07f07]/10 flex items-center justify-center overflow-hidden">
              {item.image ? (
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover"
                />
              ) : (
                <span className="text-7xl drop-shadow-md select-none">{categoryEmoji}</span>
              )}
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 bg-white/80 hover:bg-white text-gray-700 hover:text-red-500 p-2.5 rounded-full transition-all duration-300 shadow-md backdrop-blur-sm cursor-pointer"
              >
                <FaTimes size={16} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 flex-1 flex flex-col">
              {/* Product Info */}
              <div className="mb-5">
                <h3 className="text-xl font-bold text-gray-800 leading-tight">
                  {item.name}
                </h3>
                {item.desc && (
                  <p className="text-gray-500 text-sm mt-1.5 line-clamp-3">
                    {item.desc}
                  </p>
                )}
              </div>

              {/* Size Selection Grid */}
              <div className="mb-6">
                <h4 className="text-sm font-bold text-gray-700 uppercase tracking-wider mb-3">
                  Select Size
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {sizes.map((size, index) => {
                    const isSelected = selectedSizeIndex === index;
                    return (
                      <button
                        key={`${size.name}-${index}`}
                        onClick={() => setSelectedSizeIndex(index)}
                        className={`flex flex-col items-center justify-center p-3 rounded-2xl border text-center transition-all duration-300 relative cursor-pointer ${
                          isSelected
                            ? "border-[#c07f07] bg-[#c07f07]/5 shadow-sm"
                            : "border-gray-200 hover:border-[#046069] bg-white hover:bg-gray-50"
                        }`}
                      >
                        <span
                          className={`font-bold text-sm ${
                            isSelected ? "text-[#c07f07]" : "text-gray-700"
                          }`}
                        >
                          {size.name}
                        </span>
                        <span className="text-xs text-gray-500 mt-1 font-semibold">
                          {size.formattedPrice}
                        </span>

                        {/* Small Checkmark Badge */}
                        {isSelected && (
                          <span className="absolute top-2 right-2 text-[10px] text-[#c07f07] bg-[#c07f07]/10 p-0.5 rounded-full">
                            <FaCheck size={8} />
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Quantity Picker & Add to Cart Area */}
              <div className="mt-auto border-t border-gray-100 pt-5">
                <div className="flex items-center justify-between mb-5">
                  <span className="text-sm font-bold text-gray-700">Quantity</span>
                  <div className="flex items-center gap-4 bg-gray-100 px-4 py-2 rounded-full border border-gray-200/50">
                    <button
                      onClick={decrementQty}
                      disabled={quantity <= 1}
                      className="text-gray-500 hover:text-red-500 disabled:opacity-40 disabled:hover:text-gray-500 p-1 cursor-pointer transition-colors duration-200"
                    >
                      <FaMinus size={12} />
                    </button>
                    <span className="font-bold text-gray-800 text-base min-w-[20px] text-center">
                      {quantity}
                    </span>
                    <button
                      onClick={incrementQty}
                      className="text-gray-500 hover:text-green-500 p-1 cursor-pointer transition-colors duration-200"
                    >
                      <FaPlus size={12} />
                    </button>
                  </div>
                </div>

                {/* Subtotal & Add Button */}
                <div className="flex items-center gap-3">
                  <div className="flex flex-col">
                    <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">
                      Subtotal
                    </span>
                    <span className="text-xl font-extrabold text-[#046069]">
                      ${(selectedSize ? selectedSize.price * quantity : 0).toFixed(2)}
                    </span>
                  </div>

                  <button
                    onClick={handleAddToCart}
                    className="flex-1 bg-gradient-to-r from-[#c07f07] to-[#d8920b] hover:from-[#d8920b] hover:to-[#f2b632] text-white font-bold py-3.5 px-6 rounded-2xl shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default SizeSelectionModal;
