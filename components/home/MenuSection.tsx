"use client";
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight, FaCoffee, FaIceCream, FaHamburger, FaMugHot, FaGlassWhiskey, FaCandyCane, FaAppleAlt, FaEye } from 'react-icons/fa';

const MenuSection = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [activeCategory, setActiveCategory] = useState("sundaes");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleItems, setVisibleItems] = useState(8);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);

  const categories = [
    { id: "sundaes", name: "Sundaes", icon: FaIceCream, color: "#c07f07" },
    { id: "specialty-frost", name: "Specialty Frost", icon: FaCoffee, color: "#046069" },
    { id: "kids-meal", name: "Kids' Meal", icon: FaHamburger, color: "#c07f07" },
    { id: "beverages", name: "Beverages", icon: FaMugHot, color: "#046069" },
    { id: "frost-specialties", name: "Frost Specialties", icon: FaIceCream, color: "#c07f07" },
    { id: "burgers", name: "Burgers & More", icon: FaHamburger, color: "#046069" },
    { id: "hard-ice-cream", name: "Hard Ice Cream", icon: FaIceCream, color: "#c07f07" },
    { id: "floats", name: "Floats", icon: FaGlassWhiskey, color: "#046069" },
    { id: "frost", name: "Frost", icon: FaIceCream, color: "#c07f07" },
    { id: "dipping-dots", name: "Dippin Dots", icon: FaCandyCane, color: "#046069" },
    { id: "slushies", name: "Slushies", icon: FaGlassWhiskey, color: "#c07f07" },
    { id: "sides", name: "Sides", icon: FaAppleAlt, color: "#046069" },
    { id: "freezes", name: "Freezes", icon: FaGlassWhiskey, color: "#c07f07" },
    { id: "combos", name: "Combos", icon: FaHamburger, color: "#046069" },
    { id: "soft-serve", name: "Soft-Serve", icon: FaIceCream, color: "#c07f07" },
    { id: "shakes", name: "Shakes", icon: FaGlassWhiskey, color: "#046069" },
  ];

  const menuData = {
    sundaes: [
      { name: "Chocolate Chip Sd", price: "$5.10" }, { name: "Pineapple Sd", price: "$5.10" },
      { name: "Strawberry Sd", price: "$5.10" }, { name: "Butterscotch Sd", price: "$5.10" },
      { name: "Raspberry Sd", price: "$5.10" }, { name: "Blueberry Sd", price: "$5.10" },
      { name: "Lemon Sd", price: "$5.10" }, { name: "Cherry Sd", price: "$5.10" },
      { name: "Oreo Sd", price: "$5.10" }, { name: "Peanut Butter Sd", price: "$5.10" },
      { name: "Mint Sd", price: "$5.10" }, { name: "Vanilla Sd", price: "$5.10" },
      { name: "Hot Fudge Sd", price: "$5.10" }, { name: "Chocolate Sd", price: "$5.10" },
      { name: "Marshmallow Sd", price: "$5.10" }, { name: "Black Raspberry Sd", price: "$5.10" },
      { name: "Banana Sd", price: "$5.10" },
    ],
    "specialty-frost": [
      { name: "Banana Split Frost", price: "$10.00", desc: "Creamy vanilla ice cream topped with fresh banana slices, strawberries, and a drizzle of chocolate syrup." },
      { name: "Fudge Brownie Supreme Frost", price: "$10.00", desc: "Rich chocolate brownie pieces blended with fudge." },
      { name: "Turtle Frost", price: "$10.00", desc: "Pecans, caramel, and chocolate fudge swirled." },
      { name: "Pumpkin Pie Frost", price: "$9.10", desc: "Seasonal pumpkin pie flavor." },
    ],
    "kids-meal": [
      { name: "Hot Dog", price: "$6.99" }, { name: "Burger", price: "$6.99" },
      { name: "Corn Dog", price: "$6.99" }, { name: "Chicken Tenders", price: "$6.99" },
    ],
    beverages: [
      { name: "Coke", price: "$3.00", desc: "The cold, refreshing, sparkling classic." },
      { name: "Sweet Tea", price: "$3.00" }, { name: "Pibb Xtra", price: "$3.00", desc: "Spicy cherry alternative." },
      { name: "Diet Coke", price: "$3.00" }, { name: "Lemonade", price: "$3.00" },
      { name: "Root Beer", price: "$3.00" }, { name: "Mellow Yellow", price: "$3.00" },
      { name: "Unsweetened Tea", price: "$3.00" },
    ],
    "frost-specialties": [
      { name: "Turtle", price: "$7.80" }, { name: "Strawberry Shortcake", price: "$7.80" },
      { name: "Nut Parfait", price: "$7.80" }, { name: "Fudge Brownie Supreme", price: "$7.80" },
      { name: "Banana Split", price: "$7.80" }, { name: "Mocha Mudslide", price: "$7.80" },
    ],
    burgers: [
      { name: "Double Cheeseburger", price: "$11.45" }, { name: "Hot Dog", price: "$5.75" },
      { name: "Double Hamburger", price: "$10.00" }, { name: "Chicken Wrap", price: "$10.00" },
      { name: "BBQ Sandwich", price: "$8.60" }, { name: "Chicken Tenders", price: "$8.60" },
      { name: "Corn Dog", price: "$4.85" }, { name: "Breaded Chicken", price: "$8.60" },
      { name: "Cheeseburger", price: "$9.10" }, { name: "Hamburger", price: "$8.00" },
      { name: "Chicken Salad", price: "$8.60" }, { name: "Tenderloins", price: "$9.30" },
      { name: "Spicy Chicken Sandwich", price: "$8.60" }, { name: "Grilled Chicken", price: "$8.60" },
      { name: "Fish Sandwich", price: "$10.00" },
    ],
    "hard-ice-cream": [
      { name: "Strawberry", price: "$4.60" }, { name: "Chocolate", price: "$4.60" },
      { name: "Superman", price: "$4.60" }, { name: "Blue Panda", price: "$4.60" },
      { name: "Orange Sherbet", price: "$4.60" }, { name: "Vanilla", price: "$4.85" },
      { name: "NSA Butterpecan", price: "$4.60" }, { name: "Mint Chocolate", price: "$4.60" },
      { name: "Coffee", price: "$4.60" },
    ],
    floats: [
      { name: "Coke F", price: "$5.45", desc: "Refreshing classic." },
      { name: "Diet Coke F", price: "$5.45" }, { name: "Mellow Yellow F", price: "$5.45" },
      { name: "Sprite F", price: "$5.45", desc: "Lemon and lime flavors." },
      { name: "Pibb F", price: "$5.45" }, { name: "Root Beer F", price: "$5.45" },
    ],
    frost: [
      { name: "Cookie Dough", price: "$6.15" }, { name: "Mint", price: "$6.15" },
      { name: "Snickers", price: "$6.15" }, { name: "Heath", price: "$6.15" },
      { name: "Chocolate Chip", price: "$6.15" }, { name: "Whoppers", price: "$6.15" },
      { name: "NY Cheesecake", price: "$6.15" }, { name: "Strawberry", price: "$6.15" },
      { name: "M&M", price: "$6.15" }, { name: "Oreo", price: "$6.15" },
      { name: "Banana", price: "$6.15" }, { name: "Butterfinger", price: "$6.15" },
      { name: "Reese's", price: "$6.15" }, { name: "Apple Pie", price: "$6.15" },
      { name: "Nerds", price: "$6.15" },
    ],
    "dipping-dots": [
      { name: "Banana Split Dippin Dots", price: "$6.85" }, { name: "Chocolate Dippin Dots", price: "$6.85" },
      { name: "Cookies & Cream Dippin Dots", price: "$6.85" }, { name: "Cotton Candy Dippin Dots", price: "$6.85" },
      { name: "Cookie Dough Dippin Dots", price: "$6.85" }, { name: "Rainbow Dippin Dots", price: "$6.85" },
      { name: "Birthday Cake Dippin Dots", price: "$6.85" },
    ],
    slushies: [
      { name: "Blue Raspberry", price: "$3.00" }, { name: "Grape", price: "$3.00" },
      { name: "Rainbow", price: "$3.00" }, { name: "Orange", price: "$3.00" },
      { name: "Cherry", price: "$3.00" }, { name: "Lemon Lime", price: "$3.00" },
    ],
    sides: [
      { name: "Cheese Curds", price: "$7.85" }, { name: "Tater Kegs", price: "$7.85" },
      { name: "Cheese Fries", price: "$5.35" }, { name: "Spicy Cheese Balls", price: "$7.85" },
      { name: "Onion Rings", price: "$7.45" }, { name: "Fried Mushrooms", price: "$7.45" },
      { name: "Mac & Cheese Bites", price: "$7.85" }, { name: "Zucchini", price: "$7.45" },
      { name: "French Fries", price: "$4.30" }, { name: "Mozzarella Cheese Sticks", price: "$7.45" },
    ],
    freezes: [
      { name: "Lemon Lime", price: "$6.00" }, { name: "Lemonade", price: "$6.00" },
      { name: "Grape", price: "$6.00" }, { name: "Orange", price: "$6.00" },
      { name: "Blue Raspberry", price: "$6.00" }, { name: "Cherry", price: "$6.00" },
    ],
    combos: [
      { name: "Double Cheeseburger C", price: "$10.99" },
      { name: "Tenderloins C", price: "$10.49" },
    ],
    "soft-serve": [
      { name: "Chocolate Vanilla Twist", price: "$2.85" },
      { name: "Vanilla", price: "$2.85" }, { name: "Chocolate", price: "$2.85" },
    ],
    shakes: [
      { name: "Banana", price: "$5.30" }, { name: "Vanilla", price: "$5.30" },
      { name: "Coffee", price: "$5.30" }, { name: "Peanut Butter", price: "$5.30" },
      { name: "Raspberry", price: "$5.30" }, { name: "Strawberry", price: "$5.30" },
      { name: "Lemon", price: "$5.30" }, { name: "Blueberry", price: "$5.30" },
      { name: "Chocolate Chip", price: "$5.30" }, { name: "Chocolate", price: "$5.30" },
      { name: "Pineapple", price: "$5.30" }, { name: "Oreo", price: "$5.30" },
      { name: "Marshmallow", price: "$5.30" }, { name: "Cherry", price: "$5.30" },
      { name: "Black Raspberry", price: "$5.30" }, { name: "Butterscotch", price: "$5.30" },
      { name: "Mint", price: "$5.30" }, { name: "Hot Fudge", price: "$5.30" },
    ],
  };

  const currentMenu = menuData[activeCategory as keyof typeof menuData] || [];
  const hasMore = visibleItems < currentMenu.length;
  const displayedItems = currentMenu.slice(0, visibleItems);

  useEffect(() => {
    setVisibleItems(8);
    setCurrentSlide(0);
  }, [activeCategory]);

  const loadMore = () => {
    setVisibleItems(prev => Math.min(prev + 8, currentMenu.length));
  };

  const showLess = () => {
    setVisibleItems(8);
  };

  return (
    <div ref={containerRef} className="relative overflow-hidden">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/menu-bg.jpg')",
        }}
      >
        <motion.div 
          className="absolute inset-0"
          style={{ y: parallaxY }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#046069]/55 via-black/60 to-black/65" />
        </motion.div>
      </div>

      {/* Floating Ice Cream Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-white/5 text-4xl"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              rotate: 0
            }}
            animate={{
              y: [null, -100, -200],
              rotate: [0, 360],
              opacity: [0, 0.1, 0]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 10,
              ease: "linear"
            }}
          >
            🍦
          </motion.div>
        ))}
      </div>

      <section 
        ref={sectionRef}
        className="relative py-20 md:py-28 z-10"
        style={{
          fontFamily: "var(--e-global-typography-5d167aa-font-family), Sans-serif",
        }}
      >
        <div className="container mx-auto px-4 md:px-6">
          {/* Section Header with Parallax */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
            style={{ opacity }}
          >
            <motion.p 
              className="text-[#c07f07] font-semibold uppercase tracking-wider mb-3 text-sm inline-block px-4 py-1 rounded-full bg-[#c07f07]/10"
              whileHover={{ scale: 1.05 }}
            >
              🍨 Explore Our Menu 🍦
            </motion.p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Delicious <span className="text-[#c07f07] relative inline-block">
                Treats
                <motion.span 
                  className="absolute -bottom-2 left-0 w-full h-1 bg-[#c07f07] rounded-full"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: "100%" } : {}}
                  transition={{ delay: 0.5, duration: 0.5 }}
                />
              </span> For Everyone
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#c07f07] to-[#046069] mx-auto rounded-full" />
          </motion.div>

          {/* Category Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((cat, idx) => (
              <motion.button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: idx * 0.02 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === cat.id
                    ? 'bg-gradient-to-r from-[#c07f07] to-[#046069] text-white shadow-lg shadow-[#c07f07]/20'
                    : 'bg-white/10 text-white/80 hover:bg-white/20 backdrop-blur-sm'
                }`}
              >
                <cat.icon size={16} />
                <span className="text-sm">{cat.name}</span>
              </motion.button>
            ))}
          </motion.div>

          {/* Menu Items Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {displayedItems.map((item, idx) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: idx * 0.03 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group"
              >
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-5 border border-white/10 hover:border-[#c07f07]/50 transition-all duration-300 h-full overflow-hidden">
                  {/* Animated Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#c07f07]/0 via-[#c07f07]/0 to-[#c07f07]/0 group-hover:from-[#c07f07]/5 group-hover:via-[#c07f07]/10 group-hover:to-transparent transition-all duration-500" />
                  
                  <div className="relative z-10">
                    <div className="flex justify-between items-start gap-4">
                      <div className="flex-1">
                        <h3 className="text-white font-bold text-lg group-hover:text-[#c07f07] transition-colors">
                          {item.name}
                        </h3>
                        
                      </div>
                      <motion.div 
                        className="bg-[#c07f07]/20 px-3 py-1.5 rounded-full"
                        whileHover={{ scale: 1.05 }}
                      >
                        <span className="text-[#c07f07] font-bold">{item.price}</span>
                      </motion.div>
                    </div>
                    
                    {/* Decorative Line */}
                    <div className="mt-3 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* View More / Show Less Button */}
          {currentMenu.length > 8 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-center mt-12"
            >
              {hasMore ? (
                <motion.button
                  onClick={loadMore}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-8 py-3 rounded-full overflow-hidden shadow-lg bg-gradient-to-r from-[#c07f07] to-[#046069] text-white font-semibold"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <FaEye />
                    View More Items ({currentMenu.length - visibleItems} left)
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-white/30"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              ) : (
                <motion.button
                  onClick={showLess}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-8 py-3 rounded-full overflow-hidden shadow-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold hover:bg-white/20 transition-all duration-300"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Show Less Items
                  </span>
                </motion.button>
              )}
            </motion.div>
          )}

          {/* Category Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="text-center mt-8"
          >
            <p className="text-white/40 text-sm">
              Showing {displayedItems.length} of {currentMenu.length} items in {categories.find(c => c.id === activeCategory)?.name}
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default MenuSection;