"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BrandSlider = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.2,
  });

  const galleryItems = [
    { id: 1, image: "/images/gallery/1.jpg" },
    { id: 2, image: "/images/gallery/2.jpg" },
    { id: 3, image: "/images/gallery/3.jpg" },
    { id: 4, image: "/images/gallery/4.jpg" },
    { id: 5, image: "/images/gallery/5.jpg" },
    { id: 6, image: "/images/gallery/6.jpg" },
    { id: 7, image: "/images/gallery/7.jpg" },
    { id: 8, image: "/images/gallery/8.jpg" },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: true,
    cssEase: "ease-in-out",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: false,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          centerPadding: "0px",
          autoplay: true,
          autoplaySpeed: 2500,
          arrows: false,
        },
      },
    ],
  };

  return (
    <section
      ref={sectionRef}
      className="relative  overflow-hidden bg-white"
    >
      
       
       
      {/* Slider */}
      <div className="px-4 md:px-8">
        <Slider {...settings}>
          {galleryItems.map((item) => (
            <div key={item.id} className="px-2">
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="relative overflow-hidden rounded-[22px] group"
              >
                <div className="relative h-[240px] md:h-[280px] overflow-hidden rounded-[22px]">
                  <Image
                    src={item.image}
                    alt={`Gallery ${item.id}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover rounded-[22px] transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition duration-300" />
                </div>
              </motion.div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default BrandSlider;