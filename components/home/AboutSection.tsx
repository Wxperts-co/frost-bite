"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import {
  FaStar,
  FaPhone,
  FaMapMarkerAlt,
  FaClock,
  FaIceCream,
  FaTruck,
  FaStore,
  FaCookieBite,
  FaLeaf,
  FaIceCream as FaIceCreamCone,
} from "react-icons/fa";
import { GiChocolateBar, GiStrawberry } from "react-icons/gi";
import Link from "next/link";

const AboutSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const signatureFlavors = [
    {
      name: "Hot Fudge Sundae",
      icon: GiChocolateBar,
      desc: "Rich, indulgent treat with warm, gooey fudge",
      color: "#6B3E26",
    },
    {
      name: "Cookie Dough Sundae",
      icon: FaCookieBite,
      desc: "Smooth vanilla ice cream with raw cookie dough chunks",
      color: "#D4A373",
    },
    {
      name: "Mint Chocolate Chip",
      icon: FaLeaf,
      desc: "Refreshing mint with rich chocolate chips",
      color: "#2E8B57",
    },
    {
      name: "Strawberry Sundae",
      icon: GiStrawberry,
      desc: "Fresh, fruity goodness on velvety ice cream",
      color: "#FF6B6B",
    },
  ];

  const features = [
    { icon: FaStore, title: "Order Collection", color: "#c07f07" },
    { icon: FaTruck, title: "Order Delivery", color: "#046069" },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-white to-[#FFF8F0]"
    >
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c07f07' fill-opacity='0.3'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
        }}
      />

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Side - Exact Style Like Reference Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative flex justify-center items-center"
          >
            <div className="relative w-full max-w-[750px] lg:min-h-[750px]">
              {/* Large Mint Background Shape */}
              <div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
                style={{
                  width: "clamp(280px, 90vw, 720px)",
                  height: "clamp(280px, 80vw, 650px)",
                  background: "#b9dfdb",
                  borderRadius: "38% 62% 45% 55% / 45% 40% 60% 55%",
                }}
              />

              {/* Decorative Square Shape - Top Left */}
              <div
                className="absolute top-0 left-0 rotate-12"
                style={{
                  width: "180px",
                  height: "180px",
                  border: "14px solid #cfe9e5",
                  borderRadius: "40px",
                  borderRightColor: "transparent",
                  borderBottomColor: "transparent",
                }}
              />

              {/* Decorative Square Shape - Bottom Left */}
              <div
                className="absolute lg:bottom-10 bottom-0 left-6 -rotate-12 hidden md:block"
                style={{
                  width: "160px",
                  height: "160px",
                  border: "14px solid #b9dfdb",
                  borderRadius: "35px",
                  borderTopColor: "transparent",
                  borderLeftColor: "transparent",
                }}
              />

              {/* Small Rounded Square */}
              <div
                className="absolute top-8 right-12 rotate-12 hidden md:block"
                style={{
                  width: "70px",
                  height: "70px",
                  background: "#eef3dd",
                  borderRadius: "24px",
                }}
              />

              {/* Decorative Square Curve - Bottom Right */}
              <div
                className="absolute bottom-8 right-0 rotate-[25deg] opacity-50 hidden md:block"
                style={{
                  width: "220px",
                  height: "220px",
                  border: "16px solid #f3e9d7",
                  borderRadius: "50px",
                  borderLeftColor: "transparent",
                  borderTopColor: "transparent",
                }}
              />

              {/* Main Ice Cream Image */}
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4 }}
                className="relative z-10 flex justify-center items-center lg:pt-10 pt-15"
              >
                <Image
                  src="/images/img_2.png"
                  alt="Ice Cream"
                  width={620}
                  height={720}
                  priority
                  className="w-full max-w-[580px] h-auto object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.15)]"
                />
              </motion.div>

              {/* Experience Circle */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.4, type: "spring" }}
                className="absolute top-0 left-0 z-20"
              >
                <div
                  className="bg-white rounded-full shadow-2xl flex flex-col items-center justify-center text-center"
                  style={{
                    width: "180px",
                    height: "180px",
                  }}
                >
                  <h3
                    className="text-6xl font-black leading-none"
                    style={{
                      color: "#5fc3b7",
                      fontFamily: "var(--font-luckiest-guy)",
                    }}
                  >
                    15+
                  </h3>

                  <p className="text-[18px] font-semibold text-gray-800 mt-2">
                    Years of
                  </p>

                  <p className="text-[18px] font-semibold text-gray-800">
                    Experience
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
          {/* Right Side - Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {/* About Us Tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 bg-[#c07f07]/10 rounded-full px-4 py-2 mb-6"
            >
              <FaIceCream className="text-[#c07f07] text-sm" />
              <span className="text-sm font-semibold text-[#c07f07] tracking-wide">
                WELCOME TO FROST BITE
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
            >
              <span className="text-gray-800">The flavor you need,</span>
              <span className="block text-[#c07f07]">
                the consistency you want—
              </span>
              <span className="text-gray-800">ice cream!</span>
            </motion.h2>

            {/* Main Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="space-y-4 mb-6"
            >
              <p className="text-gray-600 leading-relaxed">
                If you're in the mood for a treat that'll satisfy your sweet
                tooth,{" "}
                <span className="font-semibold text-[#046069]">
                  Frost Bite in Avon, Indiana
                </span>
                , is a must-visit destination! Located at{" "}
                <span className="font-semibold">7025 Galen Dr W</span>, Frost
                Bite is the perfect spot to enjoy a variety of delicious frozen
                delights. Whether you're craving something classic or
                adventurous, this cozy ice cream shop has something for
                everyone.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Frost Bite has a laid-back vibe, making it an ideal spot for
                families, friends, or anyone looking for a little indulgence.
                It's easy to see why this place is a go-to for ice cream lovers
                in the area. Whether you're stopping by for a quick treat or
                spending some time enjoying the flavors, you'll always find
                something to satisfy your cravings at Frost Bite.
              </p>
            </motion.div>

            {/* Signature Flavors Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="mb-6"
            >
              <h3 className="text-xl font-bold text-[#046069] mb-4 flex items-center gap-2">
                <FaIceCreamCone size={20} />
                Our Signature Flavors
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {signatureFlavors.map((flavor, index) => (
                  <motion.div
                    key={flavor.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex items-start gap-3 p-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-all"
                    style={{ borderLeft: `3px solid ${flavor.color}` }}
                  >
                    <flavor.icon
                      style={{ color: flavor.color }}
                      size={24}
                      className="mt-1"
                    />
                    <div>
                      <div className="font-semibold text-gray-800">
                        {flavor.name}
                      </div>
                      <div className="text-xs text-gray-500">{flavor.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA Button and Message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.9 }}
            >
              <Link href="/about-us">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-8 py-4 rounded-full overflow-hidden shadow-lg mb-4"
                  style={{ backgroundColor: "#c07f07" }}
                >
                  <span className="relative z-10 flex items-center gap-2 text-white font-semibold">
                    Discover More
                    <svg
                      className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </span>

                  <motion.div
                    className="absolute inset-0 bg-white/30"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
