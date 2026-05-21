"use client";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";
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
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "Menu", href: "/menu" },
    { name: "Food & Sandwiches", href: "/food-sandwiches" },
    { name: "Gallery", href: "/gallery" },
    { name: "Reviews", href: "/reviews" },
    { name: "Contact Us", href: "/contact-us" },
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
    { name: "Facebook", href: "#", image: "/images/social/facebook.png" },
    // { name: "Instagram", href: "#", image: "/images/social/instagram.png" },
    { name: "YouTube", href: "#", image: "/images/social/youtube.png" },
  ];

  return (
    <footer
      className="relative bg-cover bg-center bg-no-repeat text-white pt-16 pb-0 overflow-hidden"
      style={{ backgroundImage: "url('/images/footer-bg.jpg')" }}
    >
      {/* Dark Overlay for readability */}
      <div className="absolute inset-0 bg-[#046069]/70 pointer-events-none"></div>

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
          {/* Column 1 - About Us */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-[#fca90e]">About Us</h3>
            <p className="text-white text-sm leading-relaxed mb-4">
              Frost Bite is your go-to destination for delicious ice cream,
              burgers, sandwiches, and more. Family-owned and operated since
              2010.
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-[#fca90e]">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white hover:text-[#fca90e] transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Opening Hours */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-[#fca90e]">
              Opening Hours
            </h3>
            <ul className="space-y-3">
              {openingHours.map((item) => (
                <li key={item.day} className="flex justify-between text-sm">
                  <span className="text-white">{item.day}</span>
                  <span className="text-white font-medium">{item.hours}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-[#fca90e]">
              Contact Info
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-[#fca90e] mt-1 flex-shrink-0" />
                <Link
                  href="https://maps.app.goo.gl/3fXb8V17mC1E5rec9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline transition-all duration-300 group"
                >
                  <p className="text-white text-sm leading-relaxed group-hover:text-[#fca90e] transition-colors">
                    7025 Galen Dr W, Avon, IN 46123, United States
                  </p>
                </Link>
              </div>
              <div className="flex items-center gap-3">
                <FaPhone className="text-[#fca90e]" />
                <Link
                  href="tel:+13172722483"
                  className="text-white hover:text-[#fca90e] transition-colors text-sm"
                >
                  (317) 272-2483
                </Link>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-[#fca90e]" />
                <Link
                  href="mailto:frostbite7025@gmail.com"
                  className="text-white hover:text-[#fca90e] transition-colors text-sm"
                >
                  frostbite7025@gmail.com
                </Link>
              </div>
            </div>

            {/* Social Icons with PNG Images */}
            <div className="flex gap-3 mt-6">
              {socialIcons.map(({ name, href, image }, idx) => (
                <Link
                  key={`social-${idx}`}
                  href={href}
                  className="w-10 h-10 flex items-center justify-center transition-all duration-300 overflow-hidden"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={image}
                    alt={name}
                    width={20}
                    height={20}
                    className=" w-8 h-8"
                  />
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
          <p className="text-white text-sm z-10 relative">
            © {currentYear} Frost Bite. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2 text-white text-xs mt-1 z-10 relative">
            <Link href="#" className="hover:text-[#fca90e] transition-colors">
              Website Development
            </Link>
            <span>|</span>
            <Link href="#" className="hover:text-[#fca90e] transition-colors">
              Hosting
            </Link>
            <span>|</span>
            <Link href="#" className="hover:text-[#fca90e] transition-colors">
              SEO
            </Link>
            <span>|</span>
            <Link href="#" className="hover:text-[#fca90e] transition-colors">
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
              <div className="w-[100px] h-[70px] rounded-lg flex items-center justify-center mx-auto  transition-colors backdrop-blur-sm">
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
