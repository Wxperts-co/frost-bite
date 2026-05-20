"use client";
import { motion } from "framer-motion";
import {
  FaIceCream,
  FaShoppingCart,
  FaPlay,
  FaStar,
  FaArrowRight,
} from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

type Particle = {
  id: number;
  size: number;
  left: number;
  duration: number;
  delay: number;
  xStart: number;
  xEnd: number;
};

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1;
      videoRef.current.preload = "auto";
      const playVideo = async () => {
        try {
          await videoRef.current?.play();
        } catch (e) {
          console.log("Video autoplay failed:", e);
        }
      };
      playVideo();
    }
  }, []);

  useEffect(() => {
    const generatedParticles: Particle[] = Array.from(
      { length: 15 },
      (_, i) => ({
        id: i,
        size: Math.random() * 8 + 4,
        left: Math.random() * 100,
        duration: Math.random() * 12 + 8,
        delay: Math.random() * 5,
        xStart: Math.random() * 20 - 10,
        xEnd: Math.random() * 20 - 10,
      }),
    );
    setParticles(generatedParticles);
  }, []);

  return (
    <section
      className="relative min-h-screen overflow-hidden"
      style={{
        fontFamily:
          "var(--e-global-typography-5d167aa-font-family), Sans-serif",
      }}
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute top-0 left-0 w-full h-full object-cover"
          poster="https://images.pexels.com/photos/933466/pexels-photo-933466.jpeg?auto=compress"
          style={{ willChange: "transform" }}
        >
          <source src="/images/hero-1-1.mp4" type="video/mp4" />
        </video>

        {/* Gradient Overlays with New Color #046069 */}

        {/* Animated Particles */}
        <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute rounded-full bg-white/20 backdrop-blur-sm"
              style={{
                width: particle.size,
                height: particle.size,
                left: `${particle.left}%`,
                top: "-10%",
              }}
              animate={{
                y: ["0vh", "110vh"],
                x: [`${particle.xStart}px`, `${particle.xEnd}px`],
                rotate: [0, 360],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                delay: particle.delay,
                ease: "linear",
              }}
            />
          ))}
        </div>

        {/* Decorative Blobs with New Color */}
        <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-20 left-10 w-64 h-64 rounded-full bg-[#c07f07]/20 blur-3xl"
            animate={{
              scale: [1, 1.1, 1],
              x: [0, 30, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-[#752051]/20 blur-3xl"
            animate={{
              scale: [1, 1.1, 1],
              x: [0, -30, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#046069]/20 blur-3xl"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </div>

      {/* Main Content */}
      {/* Main Content */}
      <div className="relative z-20 container mx-auto px-4 md:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="max-w-4xl">
          {/* Retro Badge */}
          {/* Badge */} <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/30" > <motion.div animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} > <FaIceCream className="text-[#c07f07]" /> </motion.div> <span className="text-sm font-medium text-white">✨ Premium Ice Cream Since 2024 ✨</span> </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="leading-[0.95] mb-6"
          >
            <span
              className="block text-6xl md:text-8xl lg:text-[120px] font-black text-[#046069]"
              style={{
                WebkitTextStroke: "4px #ffffff",
                textShadow: "6px 6px 0px #752051",
                fontFamily: "var(--font-luckiest-guy)",
              }}
            >
              Frost Bite
            </span>
          </motion.h1>

          {/* Sub Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-8"
          >
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
              The Coolest Ice Cream Experience 🍦
            </h2>

            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl">
              Indulge in handcrafted frozen delights with bold flavors, creamy
              textures, and unforgettable sweetness made fresh every day.
            </p>
          </motion.div>

         {/* Buttons */}
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.5 }}
  className="flex flex-col sm:flex-row gap-4 sm:gap-5"
>
  {/* Order Button */}
  <motion.button
    whileHover={{ scale: 1.05, y: -3 }}
    whileTap={{ scale: 0.95 }}
    className="group bg-[#c07f07] hover:bg-[#d8920b] text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-base md:text-lg shadow-[0_10px_30px_rgba(192,127,7,0.4)] transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 w-full sm:w-auto"
  >
    Order Now
    <motion.div
      animate={{ x: [0, 6, 0] }}
      transition={{ duration: 1.2, repeat: Infinity }}
    >
      <FaShoppingCart className="text-sm sm:text-base" />
    </motion.div>
  </motion.button>

  {/* Story Button */}
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="group border-4 border-[#752051] bg-white/10 backdrop-blur-md text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-base md:text-lg hover:bg-[#752051] transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 w-full sm:w-auto"
  >
    <motion.div
      animate={{ scale: [1, 1.2, 1] }}
      transition={{ duration: 1.2, repeat: Infinity }}
    >
      <FaPlay size={12} className="sm:text-sm" />
    </motion.div>
    Watch Story
    <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300 text-sm sm:text-base" />
  </motion.button>
</motion.div>
         
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 bg-white rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
