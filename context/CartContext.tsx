"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

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
    quantity?: number
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
    quantity = 1
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

    // Auto open cart drawer when item is added
    setIsCartOpen(true);
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
