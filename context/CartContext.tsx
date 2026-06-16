"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface CartItem {
  id: string; 
  name: string;
  price: number; 
  formattedPrice: string; 
  size: string; 
  quantity: number;
  image?: string;
  categoryEmoji: string;
}

interface CartContextType {
  cart: CartItem[];
  isCartOpen: boolean;
  setIsCartOpen: (isOpen: boolean) => void;
  addToCart: (      
    name: string,
    size: string,
    price: number,
    formattedPrice: string,
    categoryEmoji: string,
    image?: string,
    quantity?: number,
    coordinates?: { x: number; y: number }
  ) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  cartTotal: number;
  cartCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  interface FlyingItem {
    id: string;
    startX: number;
    startY: number;
    emoji: string;
    image?: string;
  }

  const [flyingItems, setFlyingItems] = useState<FlyingItem[]>([]);

  const getCartButtonCoordinates = () => {
    if (typeof window === "undefined") return { x: 0, y: 0 };
    
    const desktopBtn = document.getElementById("cart-btn-desktop");
    if (desktopBtn) {
      const rect = desktopBtn.getBoundingClientRect();
      if (rect.width > 0 && rect.height > 0) {
        return {
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2,
        };
      }
    }

    const mobileBtn = document.getElementById("cart-btn-mobile");
    if (mobileBtn) {
      const rect = mobileBtn.getBoundingClientRect();
      if (rect.width > 0 && rect.height > 0) {
        return {
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2,
        };
      }
    }

    return {
      x: window.innerWidth - 50,
      y: 50,
    };
  };

  const removeFlyingItem = (id: string) => {
    setFlyingItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Load cart from localStorage on mount
  useEffect(() => {
    try {
      const storedCart = localStorage.getItem("frostbite_cart");
      if (storedCart) {
        setCart(JSON.parse(storedCart));
      }
    } catch (error) {
      console.error("Failed to load cart from localStorage:", error);
    }
    setIsInitialized(true);
  }, []);

  // Save cart 
  useEffect(() => {
    if (isInitialized) {
      try {
        localStorage.setItem("frostbite_cart", JSON.stringify(cart));
      } catch (error) {
        console.error("Failed to save cart to localStorage:", error);
      }
    }
  }, [cart, isInitialized]);

  const addToCart = (
    name: string,
    size: string,
    price: number,
    formattedPrice: string,
    categoryEmoji: string,
    image?: string,
    quantity = 1,
    coordinates?: { x: number; y: number }
  ) => {
    // Unique ID combining name and size
    const id = `${name}-${size}`.toLowerCase().replace(/\s+/g, "-");

    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex((item) => item.id === id);

      if (existingItemIndex > -1) {
        // Increment quantity of existing item
        const newCart = [...prevCart];
        newCart[existingItemIndex] = {
          ...newCart[existingItemIndex],
          quantity: newCart[existingItemIndex].quantity + quantity,
        };
        return newCart;
      } else {
        // Add new item
        return [
          ...prevCart,
          {
            id,
            name,
            size,
            price,
            formattedPrice,
            categoryEmoji,
            image,
            quantity,
          },
        ];
      }
    });

    // Handle flying animation
    if (coordinates) {
      const animId = `${Date.now()}-${Math.random()}`;
      setFlyingItems((prev) => [
        ...prev,
        {
          id: animId,
          startX: coordinates.x,
          startY: coordinates.y,
          emoji: categoryEmoji,
          image,
        },
      ]);
    }

    // Auto open cart drawer when item is added is disabled to allow smooth visual addition
  };

  const removeFromCart = (id: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const cartCount = cart.reduce((count, item) => count + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        isCartOpen,
        setIsCartOpen,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartTotal,
        cartCount,
      }}
    >
      {children}

      {/* Visual Flying-to-Cart Animation overlay */}
      <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
        <AnimatePresence>
          {flyingItems.map((item) => {
            const coords = getCartButtonCoordinates();
            return (
              <motion.div
                key={item.id}
                initial={{
                  x: item.startX - 20,
                  y: item.startY - 20,
                  scale: 0.8,
                  opacity: 0.3,
                }}
                animate={{
                  x: coords.x - 20,
                  y: coords.y - 20,
                  scale: [1, 1.25, 0.35],
                  opacity: [0.8, 1, 0.5],
                }}
                exit={{
                  scale: 0,
                  opacity: 0,
                }}
                transition={{
                  duration: 0.85,
                  ease: [0.25, 1, 0.5, 1],
                }}
                onAnimationComplete={() => removeFlyingItem(item.id)}
                className="fixed w-10 h-10 rounded-full bg-white border-2 border-[#c07f07] shadow-xl flex items-center justify-center overflow-hidden z-[9999] pointer-events-none ring-4 ring-[#c07f07]/10"
              >
                {item.image ? (
                  <div className="w-full h-full relative">
                    <img
                      src={item.image}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <span className="text-xl select-none">{item.emoji}</span>
                )}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
