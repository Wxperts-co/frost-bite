"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaArrowRight, FaPhoneAlt, FaShoppingCart } from "react-icons/fa";
import Image from "next/image";
import { useCart } from "@/context/CartContext";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();
  const [isPulsing, setIsPulsing] = useState(false);

  useEffect(() => {
    if (cartCount > 0) {
      setIsPulsing(true);
      const timer = setTimeout(() => setIsPulsing(false), 500);
      return () => clearTimeout(timer);
    }
  }, [cartCount]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Simple nav items - No dropdowns
  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "Menu", href: "/menu" },
    { name: "Food & Sandwiches", href: "/food-sandwiches" },
    { name: "Gallery", href: "/gallery" },
    { name: "Reviews", href: "/reviews" },
    { name: "Contact Us", href: "/contact-us" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-transparent backdrop-blur-sm"
      }`}
      style={{ fontFamily: "'Nunito', sans-serif" }}
    >
      {/* Transparent Border Line - Like PNG */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <nav className="container mx-auto px-4 md:px-6 py-1 md:py-1">
        <div className="flex items-center justify-between gap-2 md:gap-4">
          {/* Logo - Responsive Sizes */}
          <Link href="/" className="flex items-center group flex-shrink-0">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="bg-white/90 backdrop-blur-md px-2 py-2 rounded-2xl border border-white/20 shadow-lg"
            >
              <Image
                src="/images/logo.png"
                alt="PopGlace Logo"
                width={280}
                height={180}
                className="h-14 sm:h-16 md:h-20 lg:h-24 w-auto object-contain"
                priority
              />
            </motion.div>
          </Link>

          {/* Desktop Menu - Responsive gap */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-8">
            {navItems.map((item, idx) => (
              <Link
                key={`${item.name}-${item.href}-${idx}`}
                href={item.href}
                className={`transition-all duration-300 font-bold text-sm xl:text-base tracking-wide whitespace-nowrap ${
                  scrolled
                    ? "text-gray-700 hover:text-[#c07f07]"
                    : "text-white/90 hover:text-[#c07f07]"
                }`}
                style={{ fontWeight: 700 }}
              >
                {item.name}
              </Link>
            ))}

            {/* Cart Button */}
            <motion.button
              key={`desktop-cart-${cartCount}`}
              animate={cartCount > 0 ? {
                scale: [1, 1.25, 0.9, 1.15, 0.95, 1],
                rotate: [0, -12, 12, -8, 8, 0],
              } : {}}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              onClick={() => setIsCartOpen(true)}
              className={`relative flex items-center justify-center p-2.5 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer ${
                scrolled
                  ? "text-gray-700 hover:text-[#c07f07] hover:bg-gray-100/50"
                  : "text-white/90 hover:text-[#c07f07] hover:bg-white/10"
              }`}
              title="View Cart"
            >
              {isPulsing && (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0.8 }}
                  animate={{ scale: 2, opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="absolute inset-0 rounded-full bg-[#c07f07]/40 pointer-events-none"
                />
              )}
              <FaShoppingCart size={20} />
              <AnimatePresence>
                {cartCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="absolute -top-1 -right-1 bg-red-500 text-white font-extrabold text-[10px] w-5 h-5 rounded-full flex items-center justify-center border border-white shadow-sm"
                  >
                    {cartCount}
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </div>

          {/* Call Now Button - Responsive Desktop */}
          <motion.a
            href="tel:+13172722483"
            whileHover={{ y: -2, scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="hidden lg:flex items-center gap-2 xl:gap-4 px-4 xl:px-7 py-3 xl:py-4 rounded-full relative overflow-hidden group flex-shrink-0"
            style={{
              background:
                "linear-gradient(135deg, #b97800 0%, #d99510 50%, #f2b632 100%)",
              boxShadow: "0 12px 35px rgba(192,127,7,0.35)",
            }}
          >
            {/* Animated Shine */}
            <motion.div
              className="absolute top-0 left-[-120%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
              animate={{ left: ["-120%", "120%"] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Glow Hover */}
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition duration-500" />

            {/* Phone Icon - Responsive Size */}
            <motion.div
              animate={{
                rotate: [0, -10, 10, -10, 0],
                scale: [1, 1.08, 1],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
              }}
              className="relative z-10 flex items-center justify-center w-8 h-8 xl:w-11 xl:h-11 rounded-full bg-white/20 backdrop-blur-md border border-white/20"
            >
              <FaPhoneAlt className="text-white text-xs xl:text-sm" />
            </motion.div>

            {/* Text Content - Responsive */}
            <div className="relative z-10 flex flex-col leading-tight">
              <span className="text-white font-bold text-[10px] xl:text-sm tracking-wide uppercase whitespace-nowrap">
                Call Us Now
              </span>
              <span className="text-white/90 text-[11px] xl:text-[13px] font-medium whitespace-nowrap">
                (317) 272-2483
              </span>
            </div>

            {/* Arrow - Responsive Size */}
            <motion.div
              animate={{ x: [0, 4, 0] }}
              transition={{
                duration: 1,
                repeat: Infinity,
              }}
              className="relative z-10 flex items-center justify-center w-7 h-7 xl:w-9 xl:h-9 rounded-full bg-white text-[#c07f07]"
            >
              <FaArrowRight className="text-[10px] xl:text-xs" />
            </motion.div>

            {/* Border */}
            <div className="absolute inset-0 rounded-full border border-white/20" />
          </motion.a>

          {/* Mobile Cart Button */}
          <motion.button
            key={`mobile-cart-${cartCount}`}
            animate={cartCount > 0 ? {
              scale: [1, 1.25, 0.9, 1.15, 0.95, 1],
              rotate: [0, -12, 12, -8, 8, 0],
            } : {}}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            onClick={() => setIsCartOpen(true)}
            className={`lg:hidden relative p-2.5 rounded-full flex-shrink-0 transition-all cursor-pointer ${
              scrolled ? "text-[#056170]" : "text-white"
            }`}
            title="View Cart"
          >
            {isPulsing && (
              <motion.div
                initial={{ scale: 0.8, opacity: 0.8 }}
                animate={{ scale: 2, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="absolute inset-0 rounded-full bg-[#c07f07]/40 pointer-events-none"
              />
            )}
            <FaShoppingCart size={22} />
            <AnimatePresence>
              {cartCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="absolute top-0 right-0 bg-red-500 text-white font-extrabold text-[9px] w-4.5 h-4.5 rounded-full flex items-center justify-center border border-white shadow-sm"
                >
                  {cartCount}
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg flex-shrink-0"
            style={{ color: scrolled ? "#056170" : "#ffffff" }}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu - Full responsive */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden mt-4 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden max-h-[80vh] overflow-y-auto"
              style={{ fontFamily: "'Nunito', sans-serif" }}
            >
              <div className="py-2 sm:py-4">
                {navItems.map((item, idx) => (
                  <Link
                    key={`${item.name}-${item.href}-${idx}`}
                    href={item.href}
                    className="block px-4 sm:px-6 py-3 text-gray-700 hover:bg-[#c07f07] hover:text-white transition-colors duration-300 font-bold text-sm sm:text-base"
                    style={{ fontWeight: 700 }}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                
                {/* Mobile Call Button - Fully Responsive */}
                <div className="px-4 sm:px-6 pt-4 pb-2">
                  <motion.a
                    href="tel:+13172722483"
                    whileHover={{ y: -3, scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setIsOpen(false)}
                    className="relative flex items-center justify-between overflow-hidden rounded-2xl px-4 sm:px-6 py-4 sm:py-5 group"
                    style={{
                      background:
                        "linear-gradient(135deg, #c07f07 0%, #d99510 50%, #f2b632 100%)",
                      boxShadow: "0 15px 40px rgba(192,127,7,0.35)",
                    }}
                  >
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition duration-500" />

                    {/* Animated Shine */}
                    <motion.div
                      className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      animate={{ left: ["-100%", "120%"] }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />

                    {/* Left Content */}
                    <div className="relative z-10 flex items-center gap-3 sm:gap-4 flex-1">
                      {/* Icon - Responsive */}
                      <motion.div
                        animate={{ rotate: [0, -10, 10, -10, 0] }}
                        transition={{
                          duration: 1.8,
                          repeat: Infinity,
                        }}
                        className="flex items-center justify-center w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/20 flex-shrink-0"
                      >
                        <FaPhoneAlt className="text-white text-sm sm:text-lg" />
                      </motion.div>

                      {/* Text - Responsive */}
                      <div className="flex-1 min-w-0">
                        <p className="text-white text-base sm:text-lg font-bold leading-none">
                          Call Us Today
                        </p>
                        <p className="text-white/80 text-xs sm:text-sm mt-1 font-medium">
                          Fast Response • Free Consultation
                        </p>
                        <p className="text-white text-sm sm:text-base font-semibold mt-1 sm:mt-2 tracking-wide">
                          (317) 272-2483
                        </p>
                      </div>
                    </div>

                    {/* Border Glow */}
                    <div className="absolute inset-0 rounded-2xl border border-white/20" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Header;