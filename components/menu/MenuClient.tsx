"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Category, MenuItem } from "@/data/menu";
import SizeSelectionModal from "./SizeSelectionModal";
import { useCart } from "@/context/CartContext";

interface MenuClientProps {
  categories: Category[];
  menuData: Record<string, MenuItem[]>;
}

const MenuClient: React.FC<MenuClientProps> = ({ categories, menuData }) => {
  const { addToCart } = useCart();
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [selectedEmoji, setSelectedEmoji] = useState<string>("🍦");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddClick = (item: MenuItem, emoji: string, e: React.MouseEvent<HTMLButtonElement>) => {
    // If the price string does not contain '|', it is a single-priced item
    if (!item.price.includes("|")) {
      const cleanPrice = item.price.replace(/[^0-9.]/g, "");
      const priceNum = parseFloat(cleanPrice) || 0;
      addToCart(item.name, "Regular", priceNum, item.price, emoji, item.image, 1, { x: e.clientX, y: e.clientY });
      return;
    }

    setSelectedItem(item);
    setSelectedEmoji(emoji);
    setIsModalOpen(true);
  };

  return (
    <>
      {/* Category Tabs - With Emojis (Anchor Jump Links) */}
      <div className="relative md:sticky md:top-[80px] z-20 pt-[40px] pb-4 bg-transparent mb-8">
        <div className="flex flex-wrap justify-center gap-3 bg-white/95 py-4 rounded-xl shadow-sm border border-gray-100 px-4">
          {categories.map((cat) => (
            <a
              key={cat.id}
              href={`#${cat.id}`}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold transition-all duration-300 bg-gray-100 text-gray-700 hover:bg-[#c07f07]/10 hover:text-[#c07f07] cursor-pointer shadow-sm hover:scale-[1.02]"
            >
              <span className="text-lg">{cat.emoji}</span>
              <span className="text-sm whitespace-nowrap">{cat.name}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Category Sections */}
      <div className="space-y-20">
        {categories.map((cat) => {
          const items = menuData[cat.id] || [];
          return (
            <div key={cat.id} id={cat.id} className="scroll-mt-36">
              {/* Category Header */}
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-[#1e1e1e] mb-3 flex items-center justify-center gap-2">
                  <span className="text-3xl">{cat.emoji}</span>
                  <span>{cat.name}</span>
                </h2>
                <p className="text-gray-500 max-w-2xl mx-auto">{cat.desc}</p>
                <div className="w-24 h-1 bg-gradient-to-r from-[#c07f07] to-[#046069] mx-auto mt-4 rounded-full"></div>
              </div>

              {/* Menu Items Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((item, idx) => (
                  <div
                    key={idx}
                    className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 flex flex-col justify-between"
                  >
                    <div className="flex flex-row gap-4 p-4 h-full">
                      {/* Image/Emoji placeholder */}
                      <div className="flex-shrink-0 w-24 h-24 rounded-xl overflow-hidden bg-gray-100 relative">
                        {item.image ? (
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            sizes="96px"
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-[#c07f07]/10">
                            <span className="text-3xl">{cat.emoji}</span>
                          </div>
                        )}
                      </div>

                      {/* Content & Price */}
                      <div className="flex-1 flex flex-col justify-between min-w-0">
                        <div>
                          <h3 className="text-gray-800 font-bold text-base group-hover:text-[#c07f07] transition-colors truncate">
                            {item.name}
                          </h3>
                          {item.desc && (
                            <p className="text-gray-500 text-xs mt-1 line-clamp-2">
                              {item.desc}
                            </p>
                          )}
                        </div>

                        {/* Price at the bottom */}
                        <div className="mt-3 flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-gray-100">
                          <div className="bg-[#c07f07]/10 px-2.5 py-1 rounded-full max-w-full">
                            <span className="text-[#c07f07] font-bold text-[10px] whitespace-normal block">
                              {item.price}
                            </span>
                          </div>
                          <button
                            onClick={(e) => handleAddClick(item, cat.emoji, e)}
                            className="bg-[#046069] hover:bg-[#056170] text-white font-bold text-xs px-3.5 py-2 rounded-full shadow-sm hover:shadow transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-1 flex-shrink-0"
                          >
                            + Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal for selecting item size */}
      <SizeSelectionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        item={selectedItem}
        categoryEmoji={selectedEmoji}
      />
    </>
  );
};

export default MenuClient;
