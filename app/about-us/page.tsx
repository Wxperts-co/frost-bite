import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/common/breadcrumb";
import { CheckCircle, Heart, Users, Award, Coffee } from "lucide-react";

export const metadata = {
  title: "About Frost Bite | Best Ice Cream in Avon, Indiana",
  description: "Traditional & Modern Service Since 2010. Learn about our story, signature creations, and why Frost Bite is the go-to destination for ice cream lovers in Avon, Indiana.",
};

export default function AboutUsPage() {
  return (
    <>
      {/* Breadcrumb Section */}
      <Breadcrumb 
        title="About Frost Bite" 
        backgroundImage="/images/inner-bg-1.jpg"
        pageName="About Us"
      />

      {/* Our Story Section */}
      <section 
        className="relative overflow-hidden w-full bg-cover bg-no-repeat bg-center bg-fixed py-20 md:py-28"
        style={{ backgroundImage: "url('/images/about-page-bg.jpg ')" }}
      >
        {/* White Overlay */}
        <div className="absolute inset-0 bg-white opacity-90"></div>
        
        <div className="relative z-10 container mx-auto px-4 max-w-[1320px]">
          
          {/* Section Title */}
          <div className="text-center mb-12 animate-slideInUp">
            <p className="text-[#c07f07] text-sm md:text-base uppercase tracking-[2px] font-semibold mb-3">
              Our Story
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-[#1e1e1e]">
              Traditional &amp; Modern Service <br />Since 2010
            </h2>
          </div>

          {/* Row Content */}
          <div className="flex flex-wrap items-center -mx-4">
            
            {/* Left Content Column */}
            <div className="w-full lg:w-1/3 md:w-1/2 px-4 mb-8 lg:mb-0 animate-slideInUp animation-delay-100">
              <div className="mr-0 lg:mr-5">
                <h3 className="text-2xl md:text-3xl font-bold text-[#1e1e1e] mb-6">
                  About Frost Bite
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  If you're in the mood for a treat that'll satisfy your sweet tooth, 
                  <strong className="text-[#c07f07]"> Frost Bite</strong> in Avon, Indiana, is a must-visit destination! 
                  Located at <strong className="text-[#c07f07]">7025 Galen Dr W</strong>, Frost Bite is the perfect spot to enjoy a 
                  variety of delicious frozen delights.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Whether you're craving something classic or adventurous, this cozy ice cream shop has 
                  something for everyone. Frost Bite has a laid-back vibe, making it an ideal spot for 
                  families, friends, or anyone looking for a little indulgence.
                </p>
                
              </div>
            </div>

            {/* Center Image Column */}
            <div className="w-full lg:w-1/3 md:w-1/2 px-4 mb-8 lg:mb-0 animate-slideInUp animation-delay-200">
              <figure className="relative block rounded-2xl overflow-hidden ">
                <Image 
                  src="/images/ice-cream-1.png" 
                  alt="Frost Bite Ice Cream" 
                  width={400} 
                  height={400}
                  className="w-full h-auto "
                />
              </figure>
            </div>

            {/* Right Content Column */}
            <div className="w-full lg:w-1/3 px-4 animate-slideInUp animation-delay-300">
              <div className="ml-0 lg:ml-5">
                <h3 className="text-2xl md:text-3xl font-bold text-[#1e1e1e] mb-6">
                  Why You'll Love Us
                </h3>
                <p className="text-gray-600 leading-relaxed mb-5">
                  Whether you're stopping by for a quick treat or spending some time enjoying the flavors, 
                  you'll always find something to satisfy your cravings at Frost Bite.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-gray-700 hover:translate-x-2 transition-transform duration-300">
                    <CheckCircle size={16} className="text-[#c07f07]" />
                    <span>Family-friendly atmosphere</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-700 hover:translate-x-2 transition-transform duration-300">
                    <CheckCircle size={16} className="text-[#c07f07]" />
                    <span>Premium quality ingredients</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-700 hover:translate-x-2 transition-transform duration-300">
                    <CheckCircle size={16} className="text-[#c07f07]" />
                    <span>Fresh made daily</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Button */}
          <div className="text-center mt-16 animate-slideInUp animation-delay-400">
            <Link href="/contact-us">
              <button className="btn-slide bg-[#c07f07] text-white px-8 md:px-10 py-3 md:py-4 rounded-full font-semibold uppercase tracking-wide text-sm hover:shadow-lg">
                <span className="relative z-10">Contact Us</span>
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Signature Creations Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="text-center mb-12">
            <p className="text-[#c07f07] text-sm uppercase tracking-[2px] font-semibold mb-3">
              Taste The Difference
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e1e1e] mb-4">
              Our Signature Creations
            </h2>
            <div className="w-20 h-0.5 bg-[#c07f07] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Hot Fudge Sundae */}
            <div className="bg-[#f8f8f8] rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">🍫</div>
              <h3 className="text-xl font-bold text-[#1e1e1e] mb-2">Hot Fudge Sundae</h3>
              <p className="text-gray-500 text-sm">
                Rich, indulgent treat with warm, gooey fudge
              </p>
            </div>

            {/* Cookie Dough Sundae */}
            <div className="bg-[#f8f8f8] rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">🍪</div>
              <h3 className="text-xl font-bold text-[#1e1e1e] mb-2">Cookie Dough Sundae</h3>
              <p className="text-gray-500 text-sm">
                Smooth vanilla ice cream with cookie dough chunks
              </p>
            </div>

            {/* Mint Chocolate Chip */}
            <div className="bg-[#f8f8f8] rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">🍃</div>
              <h3 className="text-xl font-bold text-[#1e1e1e] mb-2">Mint Chocolate Chip</h3>
              <p className="text-gray-500 text-sm">
                Refreshing mint with chocolate chips
              </p>
            </div>

            {/* Strawberry Sundae */}
            <div className="bg-[#f8f8f8] rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">🍓</div>
              <h3 className="text-xl font-bold text-[#1e1e1e] mb-2">Strawberry Sundae</h3>
              <p className="text-gray-500 text-sm">
                Fresh fruity goodness on velvety ice cream
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-[#f8f8f8]">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="text-center mb-12">
            <span className="text-[#c07f07] text-sm uppercase tracking-[2px] font-semibold">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e1e1e] mt-2 mb-4">
              The Perfect Treat Awaits You
            </h2>
            <div className="w-20 h-0.5 bg-[#c07f07] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Award size={40} />, title: "Since 2010", desc: "Family-owned and operated" },
              { icon: <Users size={40} />, title: "Family Friendly", desc: "Perfect for all ages" },
              { icon: <Coffee size={40} />, title: "Premium Quality", desc: "Finest ingredients" },
              { icon: <Heart size={40} />, title: "Loved by All", desc: "Happy customers" },
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="text-[#c07f07] mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-[#1e1e1e] mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

   
    </>
  );
}