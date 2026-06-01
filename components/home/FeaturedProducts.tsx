"use client";
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const FeaturedProducts = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const menuItems = [
    { id: 1, icon: "🍦", title: "Soft-Serve Cups", description: "Creamy classic soft serve", link: "https://www.doordash.com/store/frost-bite-avon-34838511/72840348/" },
    { id: 2, icon: "🍧", title: "Hard Ice Cream", description: "Scooped to order", link: "https://www.doordash.com/store/frost-bite-avon-34838511/72840348/" },
    { id: 3, icon: "🥤", title: "Shakes", description: "Thick & hand-spun", link: "https://www.doordash.com/store/frost-bite-avon-34838511/72840348/" },
    { id: 4, icon: "❄️", title: "Frost", description: "Signature frozen treats", link: "https://www.doordash.com/store/frost-bite-avon-34838511/72840348/" },
    { id: 5, icon: "✨", title: "Specialty Frost", description: "Unique frost creations", link: "https://www.doordash.com/store/frost-bite-avon-34838511/72840348/" },
    { id: 6, icon: "🧊", title: "Slushies", description: "Icy & refreshing", link: "https://www.doordash.com/store/frost-bite-avon-34838511/72840348/" },
    { id: 7, icon: "🥤", title: "Freezes", description: "Cool & satisfying", link: "https://www.doordash.com/store/frost-bite-avon-34838511/72840348/" },
    { id: 8, icon: "🥤", title: "Beverages", description: "Drinks & more", link: "https://www.doordash.com/store/frost-bite-avon-34838511/72840348/" },
    { id: 9, icon: "🥩", title: "Tenderloins", description: "Breaded & crispy", link: "https://www.doordash.com/store/frost-bite-avon-34838511/72840348/" },
    { id: 10, icon: "🍔", title: "Burgers", description: "Classic beef burgers", link: "https://www.doordash.com/store/frost-bite-avon-34838511/72840348/" },
    { id: 11, icon: "🌭", title: "Hot Dogs", description: "Juicy grilled dogs", link: "https://www.doordash.com/store/frost-bite-avon-34838511/72840348/" },
    { id: 12, icon: "🐟", title: "Fish Sandwich", description: "Freshly battered fish", link: "https://www.doordash.com/store/frost-bite-avon-34838511/72840348/" },
    { id: 13, icon: "🌯", title: "Chicken Wrap", description: "Fresh & zesty", link: "https://www.doordash.com/store/frost-bite-avon-34838511/72840348/" },
    { id: 14, icon: "🍟", title: "Sides", description: "Perfect add-ons", link: "https://www.doordash.com/store/frost-bite-avon-34838511/72840348/" },
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative py-10 px-4 bg-white overflow-hidden"
      style={{
        paddingTop: '2em',
        paddingBottom: '1em',
        paddingLeft: '1em',
        paddingRight: '1em'
      }}
    >
      {/* Left Side - Ice Cream Effect PNG */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute left-0 top-1/2 -translate-y-1/2 pointer-events-none z-0 hidden lg:block"
      >
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, -5, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Image
            src="/images/sape-1.png"
            alt="Ice Cream Left"
            width={200}
            height={200}
            className="opacity-15"
            style={{ opacity: 0.30, width: 'auto', height: 'auto' }}
          />
        </motion.div>
      </motion.div>

      {/* Bottom Right - Ice Cream Effect PNG */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="absolute bottom-0 right-0 pointer-events-none z-0 hidden lg:block"
      >
        <motion.div
          animate={{
            y: [0, -30, 0],
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Image
            src="/images/bottom-sape.png"
            alt="Ice Cream Right"
            width={200}
            height={200}
            className="opacity-15"
            style={{ opacity: 0.15, width: 'auto', height: 'auto' }}
          />
        </motion.div>
      </motion.div>

      {/* Top Right - Small Ice Cream */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="absolute top-10 right-10 pointer-events-none z-0 hidden lg:block"
      >
        <motion.div
          animate={{
            y: [0, -15, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <Image
            src="/images/bottom-sape.png"
            alt="Ice Cream Top"
            width={80}
            height={80}
            style={{ opacity: 0.1, width: 'auto', height: 'auto' }}
          />
        </motion.div>
      </motion.div>

      {/* Bottom Left - Small Ice Cream */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute bottom-20 left-10 pointer-events-none z-0 hidden lg:block"
      >
        <motion.div
          animate={{
            y: [0, -25, 0],
            rotate: [0, -360],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <Image
            src="/images/bottom-sape.png"
            alt="Ice Cream Bottom"
            width={60}
            height={60}
            style={{ opacity: 0.12, width: 'auto', height: 'auto' }}
          />
        </motion.div>
      </motion.div>

      <div className="container mx-auto relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center py-8"
          style={{ paddingTop: '2em', paddingBottom: '2em' }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            What We Serve
          </h2>
          <p className="text-gray-500 mt-2">Made fresh, served with a smile</p>
        </motion.div>

        {/* Menu Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
          style={{
            paddingTop: '1em',
            paddingBottom: '2em',
            paddingLeft: '0em',
            paddingRight: '0em'
          }}
        >
          {menuItems.map((item, index) => (
            <motion.a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.03 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 text-center border border-gray-100 hover:border-amber-300">
                <div className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-gray-800 text-lg mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm">
                  {item.description}
                </p>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center pb-8"
        >
          <a
            href="https://www.doordash.com/store/frost-bite-avon-34838511/72840348/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
          >
            🛵 See Full Menu & Order on DoorDash →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProducts;