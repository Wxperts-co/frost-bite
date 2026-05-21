"use client";
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const FeaturedProducts = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const products = [
    {
      id: 1,
      image: "/images/spacial-1.jpg",
      badgeColor: "#c07f07"
    },
    {
      id: 2,
      image: "/images/spacial-2.jpg",
      badgeColor: "#046069"
    },
    {
      id: 3,
      image: "/images/spacial-3.jpg",
      badgeColor: "#c07f07"
    },
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative py-10  px-4 bg-white overflow-hidden"
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
            Ice Cream Specials
          </h2>
        </motion.div>

        {/* Products Grid - 3 columns  */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          style={{
            paddingTop: '1em',
            paddingBottom: '0em',
            paddingLeft: '0em',
            paddingRight: '0em'
          }}
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ">
                <Image
                  src={product.image}
                  alt={`Product ${product.id}`}
                  width={640}
                  height={640}
                  className="w-full h-auto rounded-2xl transition-transform duration-500 group-hover:scale-105"
                  style={{ borderRadius: '16px' }}
                />
                
                {/* Hover Overlay */}
                {/* <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl flex items-center justify-center">
                  <button 
                    className="px-6 py-2 bg-white text-gray-800 rounded-full font-semibold hover:bg-[#c07f07] hover:text-white transition-all duration-300"
                  >
                    Order Now
                  </button>
                </div> */}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProducts;