"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import Image from 'next/image';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Simple nav items - No dropdowns
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '#' },
    { name: 'Menu', href: '#' },
    { name: 'Food & Sandwiches', href: '#' },
    { name: 'Gallery', href: '#' },
    { name: 'Reviews', href: '#' },
    { name: 'Contact Us', href: '#' },
    
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent backdrop-blur-sm'
      }`}
      style={{ fontFamily: "'Nunito', sans-serif" }}
    >
      {/* Transparent Border Line - Like PNG */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <nav className="container mx-auto px-4 md:px-8 py-1 md:py-1">
        <div className="flex items-center justify-between">
          {/* Logo */}
<Link href="/" className="flex items-center group">
  <motion.div
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
    className="bg-white/50 backdrop-blur-md px-2 py-2 rounded-2xl border border-white/20 shadow-lg"
  >
    <Image
      src="/images/logo.png"
      alt="PopGlace Logo"
      width={280}
      height={180}
      className="h-20 md:h-26 w-auto object-contain"
      priority
    />
  </motion.div>
</Link>

          {/* Desktop Menu - Bold with Nunito Font */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`transition-all duration-300 font-bold text-base tracking-wide ${
                  scrolled 
                    ? 'text-gray-700 hover:text-[#c07f07]' 
                    : 'text-white/90 hover:text-[#c07f07]'
                }`}
                style={{ fontWeight: 700 }}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Buy Now Button - Bold */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden lg:block px-6 py-2 rounded-full font-bold text-sm transition-all duration-300 shadow-lg"
            style={{ 
              backgroundColor: '#c07f07',
              color: 'white',
              boxShadow: '0 4px 15px rgba(192, 127, 7, 0.3)',
              fontWeight: 700
            }}
          >
            Order Now!
          </motion.button>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg"
            style={{ color: scrolled ? '#056170' : '#ffffff' }}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu - Bold */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden mt-4 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden"
              style={{ fontFamily: "'Nunito', sans-serif" }}
            >
              <div className="py-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-6 py-3 text-gray-700 hover:bg-[#c07f07] hover:text-white transition-colors duration-300 font-bold"
                    style={{ fontWeight: 700 }}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                {/* Buy Now Button in Mobile */}
                <div className="px-6 pt-4 pb-2">
                  <button
                    className="w-full px-6 py-3 rounded-full font-bold text-white transition-all duration-300"
                    style={{ backgroundColor: '#c07f07', fontWeight: 700 }}
                    onClick={() => setIsOpen(false)}
                  >
                    Order Now!
                  </button>
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