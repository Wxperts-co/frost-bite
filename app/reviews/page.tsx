// app/reviews/page.tsx
import { FaStar, FaQuoteLeft, FaGoogle, FaPencilAlt, FaExternalLinkAlt, FaHeart, FaUsers, FaCalendarAlt } from 'react-icons/fa';
import Breadcrumb from '@/components/common/breadcrumb';
import Link from 'next/link';
import Image from 'next/image';

export const dynamic = 'force-dynamic';

const testimonials = [
  {
    id: 1,
    name: "Brandon Fries",
    location: "Avon, IN",
    rating: 5,
    text: "I've never had anything here I didn't like! I was especially delighted with today's value basket, breaded tenderloin sandwich and fries!",
    order: "Breaded tenderloin and fries meal",
    date: "2 weeks ago"
  },
  {
    id: 2,
    name: "Avery Thomas",
    location: "Avon, IN",
    rating: 5,
    text: "Love the food. So delicious. I always get ice cream and tenderloin sandwich. Young guy is always so helpful and nice. Me and my family come every weekend.",
    order: "Ice cream & Tenderloin sandwich",
    date: "1 month ago"
  },
  {
    id: 3,
    name: "Eric Napier",
    location: "Avon, IN",
    rating: 5,
    text: "It's always a fun trip when going to Frostbite. The kids love it. They have everything from tenderloins to Banana splits. Not just an icecream shop. We try to go once a week if not more. I highly recommend.",
    order: "Banana splits & Tenderloins",
    date: "3 weeks ago"
  },
  {
    id: 4,
    name: "Tylena Knop",
    location: "Avon, IN",
    rating: 5,
    text: "We love this little local owned shop!! Ice Cream is Top Notch but I've heard they are serving BREAKFAST now too!! 6-11am M-Sat I will DEF be checking it out & you should too!! Support Local!!",
    order: "Ice Cream & Breakfast",
    date: "2 months ago"
  },
  {
    id: 5,
    name: "Steve Feckete",
    location: "Avon, IN",
    rating: 5,
    text: "We've been coming here for years and it's always been good. This is the second time we've visited with the new owners and have found them to be very polite and friendly. On top of that, the 'Frost' desserts we had tonight were the best we've ever had! They were excellent.",
    order: "Frost desserts",
    date: "1 week ago"
  },
  {
    id: 6,
    name: "Shari Brown",
    location: "Avon, IN",
    rating: 5,
    text: "In a little corner of Avon Ave near Hwy 36 is this nostalgic little soft serve ice cream place. The portions are amazing for the price. You can bring the whole family for less than a meal at Taco Bell these days! Super friendly staff.",
    order: "Soft serve ice cream",
    date: "3 days ago"
  },
];

const stats = [
  { number: "4.9", label: "Average Rating", icon: FaStar, color: "text-[#c07f07]" },
  { number: "500+", label: "Happy Customers", icon: FaUsers, color: "text-[#046069]" },
  { number: "150+", label: "5-Star Reviews", icon: FaHeart, color: "text-red-500" },
];

// This is a Server Component - no useState, useEffect
export default async function ReviewsPage() {
  return (
    <>
      <Breadcrumb 
        title="Customer Reviews" 
        backgroundImage="/images/inner-bg-1.jpg"
        pageName="Reviews"
        showHiringBadge={true}
      />

      {/* Main Reviews Section */}
      <section className="relative w-full bg-cover bg-no-repeat bg-center bg-fixed py-20 md:py-28"
        style={{ backgroundImage: "url('/images/menu-bg-item.jpg')" }}
      >
        <div className="absolute inset-0 bg-white/92"></div>
        
        <div className="relative z-10 container mx-auto px-4 ">
          
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#c07f07]/10 px-4 py-2 rounded-full mb-4">
              <FaStar className="text-[#c07f07]" size={18} />
              <span className="text-[#c07f07] font-semibold text-sm uppercase tracking-wide">What People Say</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1e1e1e] mb-4">
              Customer <span className="text-[#c07f07]">Reviews</span>
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Real reviews from real customers who love Frost Bite. See why we're the favorite ice cream spot in Avon!
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-[#c07f07] to-[#046069] mx-auto rounded-full mt-6" />
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className="bg-gradient-to-r from-[#046069] to-[#046069]/90 rounded-2xl p-6 text-center shadow-xl">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-4">
                    <Icon size={32} className="text-white" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-white/80">{stat.label}</div>
                </div>
              );
            })}
          </div>

         

          {/* Reviews Grid - 2 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((review) => (
              <div
                key={review.id}
                className="group relative bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden"
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5 pointer-events-none">
                  <FaQuoteLeft className="absolute bottom-4 right-4 text-6xl text-[#046069]" />
                </div>

                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <FaStar key={i} className="text-[#c07f07] text-base fill-current" />
                  ))}
                  {[...Array(5 - review.rating)].map((_, i) => (
                    <FaStar key={i} className="text-gray-300 text-base" />
                  ))}
                  <span className="ml-2 text-xs text-gray-400">Verified</span>
                </div>

                {/* Review Text */}
                <p className="text-gray-700 leading-relaxed mb-4">
                  "{review.text}"
                </p>

                {/* Order Info */}
                {review.order && (
                  <div className="mb-4">
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-[#c07f07]/10 rounded-full text-[#c07f07] text-xs font-semibold">
                      🍽️ Ordered: {review.order}
                    </span>
                  </div>
                )}

                {/* Customer Info */}
                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                  <div>
                    <h4 className="font-bold text-[#1e1e1e] text-lg">{review.name}</h4>
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                      <span>{review.location}</span>
                      <span>•</span>
                      <span>{review.date}</span>
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#c07f07] to-[#046069] flex items-center justify-center text-white font-bold text-sm">
                    {review.name.charAt(0)}
                  </div>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#c07f07] to-[#046069] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            ))}
          </div>
   <div className="mt-10">
     {/* Action Buttons - Using <a> for external links */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="https://www.google.com/search?q=%2B1(317)+272-2483&oq=%2B1(317)+272-2483#lrd=0x886caff55a21c0ef:0x7ae32c7ebdc8b7d8,1,,,,"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-3 rounded-full overflow-hidden shadow-lg bg-gradient-to-r from-[#c07f07] to-[#046069] text-white font-semibold flex items-center justify-center gap-2 hover:shadow-xl transition-all duration-300"
            >
              <FaGoogle size={18} />
              <span>Read Google Reviews</span>
              <FaExternalLinkAlt size={14} className="opacity-70" />
              <div className="absolute inset-0 bg-white/20 translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
            </a>
            <a
              href="https://www.google.com/search?q=%2B1(317)+272-2483&oq=%2B1(317)+272-2483#lrd=0x886caff55a21c0ef:0x7ae32c7ebdc8b7d8,3,,,,"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-3 rounded-full overflow-hidden shadow-lg bg-white border-2 border-[#c07f07] text-[#c07f07] font-semibold flex items-center justify-center gap-2 hover:bg-[#c07f07] hover:text-white transition-all duration-300"
            >
              <FaPencilAlt size={16} />
              <span>Write a Review</span>
            </a>
          </div>
   </div>
         
        </div>
      </section>

      
    </>
  );
}