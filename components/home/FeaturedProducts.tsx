"use client";
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { categories } from '@/data/menu';

const FeaturedProducts = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const menuItems = categories.map((cat) => ({
    id: cat.id,
    icon: cat.emoji,
    title: cat.name,
    description: cat.desc,
    link: `/menu#${cat.id}`,
  }));


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
            Delicious Soft Serve, Sundaes & Hard <br></br> Ice Cream Made Fresh Daily
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
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.03 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 text-center border border-gray-100 hover:border-amber-300 h-full flex flex-col items-center justify-between group"
            >
              <div className="flex flex-col items-center">
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
              <Link href={item.link} className="mt-4 block w-full sm:w-auto">
                <div className="inline-flex items-center justify-center px-5 py-2 bg-gradient-to-r from-[#c07f07] to-[#d8920b] hover:from-[#d8920b] hover:to-[#f2b632] text-white font-bold text-xs rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 cursor-pointer">
                  Order Now
                </div>
              </Link>
            </motion.div>
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
            🛵  Order on DoorDash →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProducts;