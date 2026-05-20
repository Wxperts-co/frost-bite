"use client";
import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight, FaStar, FaQuoteLeft } from 'react-icons/fa';

const seededRandom = (seed: number) => {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
};

const TestimonialSection = () => {
  const sectionRef = useRef(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [cardWidth, setCardWidth] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const testimonials = [
    {
      id: 1,
      name: "Brandon Fries",
      location: "Avon, IN",
      rating: 5,
      text: "I've never had anything here I didn't like! I was especially delighted with today's value basket, breaded tenderloin sandwich and fries!",
      order: "Breaded tenderloin and fries meal"
    },
    {
      id: 2,
      name: "Avery Thomas",
      location: "Avon, IN",
      rating: 5,
      text: "Love the food. So delicious. I always get ice cream and tenderloin sandwich. Young guy is always so helpful and nice. Me and my family come every weekend.",
      order: "Ice cream & Tenderloin sandwich"
    },
    {
      id: 3,
      name: "Eric Napier",
      location: "Avon, IN",
      rating: 5,
      text: "It's always a fun trip when going to Frostbite. The kids love it. They have everything from tenderloins to Banana splits. Not just an icecream shop. We try to go once a week if not more. I highly recommend.",
      order: "Banana splits & Tenderloins"
    },
    {
      id: 4,
      name: "Tylena Knop",
      location: "Avon, IN",
      rating: 5,
      text: "We love this little local owned shop!! Ice Cream is Top Notch but I've heard they are serving BREAKFAST now too!! 6-11am M-Sat I will DEF be checking it out & you should too!! Support Local!!",
      order: "Ice Cream & Breakfast"
    },
    {
      id: 5,
      name: "Steve Feckete",
      location: "Avon, IN",
      rating: 5,
      text: "We've been coming here for years and it's always been good. This is the second time we've visited with the new owners and have found them to be very polite and friendly. On top of that, the 'Frost' desserts we had tonight were the best we've ever had! They were excellent.",
      order: "Frost desserts"
    },
    {
      id: 6,
      name: "Shari Brown",
      location: "Avon, IN",
      rating: 5,
      text: "In a little corner of Avon Ave near Hwy 36 is this nostalgic little soft serve ice cream place. The portions are amazing for the price. You can bring the whole family for less than a meal at Taco Bell these days! Super friendly staff.",
      order: "Soft serve ice cream"
    },
  ];

  // Triple testimonials for infinite effect
  const infiniteTestimonials = [...testimonials, ...testimonials, ...testimonials];
  const gap = 24;
  const totalSlides = infiniteTestimonials.length;
  const middleIndex = testimonials.length;

  // Update items per view and card width
  useEffect(() => {
    const updateDimensions = () => {
      const width = window.innerWidth;
      let newItemsPerView = 3;
      
      if (width < 768) {
        newItemsPerView = 1;
      } else if (width < 1024) {
        newItemsPerView = 2;
      } else {
        newItemsPerView = 3;
      }
      
      setItemsPerView(newItemsPerView);
      
      // Calculate card width
      if (containerRef.current) {
        const containerWidth = containerRef.current.clientWidth;
        let newCardWidth = 0;
        
        if (newItemsPerView === 1) {
          newCardWidth = containerWidth;
        } else if (newItemsPerView === 2) {
          newCardWidth = (containerWidth - gap) / 2;
        } else {
          newCardWidth = (containerWidth - gap * 2) / 3;
        }
        
        setCardWidth(newCardWidth);
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // Calculate transform value
  const getTransform = (index: number) => {
    return -index * (cardWidth + gap);
  };

  const goToSlide = (index: number, smooth = true) => {
    if (!sliderRef.current) return;
    
    setCurrentIndex(index);
    sliderRef.current.style.transition = smooth ? 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)' : 'none';
    sliderRef.current.style.transform = `translateX(${getTransform(index)}px)`;
  };

  const nextSlide = () => {
    const newIndex = currentIndex + 1;
    goToSlide(newIndex, true);
    
    setTimeout(() => {
      if (newIndex >= totalSlides - itemsPerView) {
        goToSlide(middleIndex, false);
        setCurrentIndex(middleIndex);
      }
    }, 500);
  };

  const prevSlide = () => {
    const newIndex = currentIndex - 1;
    goToSlide(newIndex, true);
    
    setTimeout(() => {
      if (newIndex < 0) {
        goToSlide(totalSlides - itemsPerView - middleIndex, false);
        setCurrentIndex(totalSlides - itemsPerView - middleIndex);
      }
    }, 500);
  };

  // Auto play
  useEffect(() => {
    if (isAutoPlaying && cardWidth > 0) {
      intervalRef.current = setInterval(() => {
        nextSlide();
      }, 4000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isAutoPlaying, currentIndex, cardWidth]);

  // Initialize slider position
  useEffect(() => {
    if (cardWidth > 0) {
      setTimeout(() => {
        goToSlide(middleIndex, false);
        setCurrentIndex(middleIndex);
      }, 100);
    }
  }, [cardWidth]);

  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  // Drag handling
  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    setStartX(clientX);
    if (sliderRef.current) {
      sliderRef.current.style.transition = 'none';
    }
  };

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging || !sliderRef.current) return;
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const diff = clientX - startX;
    setTranslateX(diff);
    sliderRef.current.style.transform = `translateX(${getTransform(currentIndex) + diff}px)`;
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    
    if (Math.abs(translateX) > 50) {
      if (translateX > 0) {
        prevSlide();
      } else {
        nextSlide();
      }
    } else {
      goToSlide(currentIndex, true);
    }
    setTranslateX(0);
  };

  // Get card width style
  const getCardWidthStyle = () => {
    if (cardWidth === 0) return '100%';
    return `${cardWidth}px`;
  };

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 md:py-28 overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/testimonial-bg.jpg')",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Solid White Overlay */}
      <div className="absolute inset-0 bg-white" style={{ opacity: 0.92 }} />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c07f07' fill-opacity='0.3'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }} />
      </div>

      {/* Floating Ice Cream Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => {
          const randX = seededRandom(i * 4 + 1) * 100;
          const randY = seededRandom(i * 4 + 2) * 100;
          const randDuration = seededRandom(i * 4 + 3) * 15 + 10;
          const randDelay = seededRandom(i * 4 + 4) * 10;
          return (
            <motion.div
              key={i}
              className="absolute text-[#046069]/10 text-4xl"
              initial={{ 
                x: `${randX}%`,
                y: `${randY}%`,
              }}
              animate={{
                y: [null, -50, -100],
                rotate: [0, 360],
                opacity: [0, 0.15, 0]
              }}
              transition={{
                duration: randDuration,
                repeat: Infinity,
                delay: randDelay,
                ease: "linear"
              }}
            >
              🍦
            </motion.div>
          );
        })}
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <motion.p 
            className="text-[#c07f07] font-semibold uppercase tracking-wider mb-3 text-sm inline-block px-4 py-1 rounded-full bg-[#c07f07]/20"
            whileHover={{ scale: 1.05 }}
          >
            Testimonial
          </motion.p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            What They Say About <span className="text-[#c07f07]">Frost Bite</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#c07f07] to-[#046069] mx-auto rounded-full" />
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            See why our customers love us! Real reviews from real people who've experienced the Frost Bite difference.
          </p>
        </motion.div>

        {/* Smooth Infinite Slider */}
        <div className="relative overflow-visible" ref={containerRef}>
          {/* Slider Container */}
          <div
            ref={sliderRef}
            className="flex gap-6 cursor-grab active:cursor-grabbing"
            style={{ willChange: 'transform' }}
            onMouseDown={handleDragStart}
            onMouseMove={handleDragMove}
            onMouseUp={handleDragEnd}
            onMouseLeave={handleDragEnd}
            onTouchStart={handleDragStart}
            onTouchMove={handleDragMove}
            onTouchEnd={handleDragEnd}
          >
            {infiniteTestimonials.map((testimonial, idx) => (
              <div
                key={`${testimonial.id}-${idx}`}
                className="flex-shrink-0"
                style={{ width: getCardWidthStyle() }}
              >
                <div className="relative bg-[#046069] rounded-2xl p-6 border border-[#046069]/20 hover:border-[#c07f07]/50 transition-all duration-300 h-full flex flex-col shadow-xl group">
                  
                  {/* Quote Icon */}
                  <div className="absolute top-4 right-4 opacity-10">
                    <FaQuoteLeft className="text-white text-4xl" />
                  </div>

                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="text-[#c07f07] text-sm fill-current" />
                    ))}
                    {[...Array(5 - testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="text-white/20 text-sm" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-white/90 leading-relaxed mb-4 flex-1 text-sm md:text-base">
                    "{testimonial.text}"
                  </p>

                  {/* Order Info */}
                  {testimonial.order && (
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-[#c07f07]/20 rounded-full text-[#c07f07] text-xs font-semibold">
                        🍽️ {testimonial.order}
                      </span>
                    </div>
                  )}

                  {/* Client Name */}
                  <div className="border-t border-white/10 pt-4 mt-2">
                    <h4 className="text-white font-bold text-lg">{testimonial.name}</h4>
                    <p className="text-white/50 text-sm">{testimonial.location}</p>
                  </div>

                  {/* Decorative Line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#c07f07] to-[#046069] rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#046069] hover:bg-[#c07f07] rounded-full flex items-center justify-center transition-all duration-300 border border-white/20 hover:border-transparent z-20 shadow-lg"
            style={{ left: '-10px' }}
          >
            <FaChevronLeft className="text-white" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#046069] hover:bg-[#c07f07] rounded-full flex items-center justify-center transition-all duration-300 border border-white/20 hover:border-transparent z-20 shadow-lg"
            style={{ right: '-10px' }}
          >
            <FaChevronRight className="text-white" />
          </button>

          {/* Progress Bar */}
          <div className="flex justify-center mt-10">
            <div className="w-32 md:w-48 h-1 bg-[#046069]/20 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[#c07f07] to-[#046069] rounded-full"
                animate={{
                  width: isAutoPlaying ? "100%" : "0%"
                }}
                transition={{
                  duration: 4,
                  repeat: isAutoPlaying ? Infinity : 0,
                  ease: "linear"
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;