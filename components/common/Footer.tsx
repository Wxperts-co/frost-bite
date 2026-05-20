"use client";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaClock,
} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const seededRandom = (seed: number) => {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
};

const formatPercent = (value: number) => `${Number(value.toFixed(4))}%`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#" },
    { name: "Menu", href: "#" },
    { name: "Food & Sandwiches", href: "#" },
    { name: "Gallery", href: "#" },
    { name: "Reviews", href: "#" },
    { name: "Contact Us", href: "#" },
  ];

  const openingHours = [
  { day: "Monday", hours: "11 AM - 9 PM" },
  { day: "Tuesday", hours: "11 AM - 9 PM" },
  { day: "Wednesday", hours: "11 AM - 9 PM" },
  { day: "Thursday", hours: "11 AM - 9 PM" },
  { day: "Friday", hours: "11 AM - 9 PM" },
  { day: "Saturday", hours: "11 AM - 9 PM" },
  { day: "Sunday", hours: "12 PM - 9 PM" },
];

  const socialIcons = [
    { Icon: FaFacebook, href: "#", color: "#1877f2" },
    { Icon: FaInstagram, href: "#", color: "#e4405f" },
    { Icon: FaTwitter, href: "#", color: "#1da1f2" },
    { Icon: FaYoutube, href: "#", color: "#ff0000" },
  ];

  return (
    <footer className="relative bg-[#046069] text-white pt-16 pb-0 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c07f07' fill-opacity='0.3'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
          }}
        />
      </div>

      {/* Floating Ice Cream Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => {
          const randX = formatPercent(seededRandom(i * 4 + 1) * 100);
          const randY = formatPercent(seededRandom(i * 4 + 2) * 100);
          const randDuration = seededRandom(i * 4 + 3) * 15 + 10;
          const randDelay = seededRandom(i * 4 + 4) * 10;
          return (
            <motion.div
              key={i}
              className="absolute text-white/5 text-3xl"
              initial={{
                x: randX,
                y: randY,
              }}
              animate={{
                y: [null, -30, -60],
                rotate: [0, 360],
                opacity: [0, 0.1, 0],
              }}
              transition={{
                duration: randDuration,
                repeat: Infinity,
                delay: randDelay,
                ease: "linear",
              }}
            >
              🍦
            </motion.div>
          );
        })}
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1 - About Us (Sabse Pehle - Left Side) */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-[#c07f07]">About Us</h3>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              Frost Bite is your go-to destination for delicious ice cream,
              burgers, sandwiches, and more. Family-owned and operated since
              2010.
            </p>
            
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-[#c07f07]">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-[#c07f07] transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Opening Hours */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-[#c07f07]">
              Opening Hours
            </h3>
            <ul className="space-y-3">
              {openingHours.map((item) => (
                <li key={item.day} className="flex justify-between text-sm">
                  <span className="text-white/70">{item.day}</span>
                  <span className="text-white/80 font-medium">
                    {item.hours}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-[#c07f07]">
              Contact Info
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-[#c07f07] mt-1 flex-shrink-0" />
                <p className="text-white/80 text-sm leading-relaxed">
                  7025 Galen Dr W, Avon, IN 46123, United States
                </p>
              </div>
              <div className="flex items-center gap-3">
                <FaPhone className="text-[#c07f07]" />
                <Link
                  href="tel:+13172722483"
                  className="text-white/80 hover:text-[#c07f07] transition-colors text-sm"
                >
                  (317) 272-2483
                </Link>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-[#c07f07]" />
                <Link
                  href="mailto:frostbite7025@gmail.com"
                  className="text-white/80 hover:text-[#c07f07] transition-colors text-sm"
                >
                  frostbite7025@gmail.com
                </Link>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 mt-6">
              {socialIcons.map(({ Icon, href, color }, idx) => (
                <Link
                  key={`social-${idx}`}
                  href={href}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#c07f07] transition-all duration-300 hover:scale-110"
                >
                  <Icon size={18} className="text-white" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom py-2">
        <div
          style={{ textAlign: "center", fontSize: "14px", lineHeight: "1.8" }}
          className="copyright-section py-2 order-secondary border-t border-white/20"
        >
          <p className="text-white/50 text-sm">
            © {currentYear} Frost Bite. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2 text-white/50 text-xs mt-1">
            <Link href="#" className="hover:text-[#c07f07] transition-colors">
              Website Development
            </Link>
            <span>|</span>
            <Link href="#" className="hover:text-[#c07f07] transition-colors">
              Hosting
            </Link>
            <span>|</span>
            <Link href="#" className="hover:text-[#c07f07] transition-colors">
              SEO
            </Link>
            <span>|</span>
            <Link href="#" className="hover:text-[#c07f07] transition-colors">
              Digital Marketing
            </Link>
          </div>

          <div className="mt-2">
            <Link
              href="https://www.wxperts.co/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <div className="w-[100px] h-[70px]  rounded-lg flex items-center justify-center mx-auto hover:bg-white/20 transition-colors backdrop-blur-sm">
                <Image
                  src="/images/wxperts.webp"
                  alt="WXPERTS"
                  width={150}
                  height={70}
                  className="object-contain"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
