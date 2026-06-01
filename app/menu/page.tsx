// app/menu/page.tsx
"use client";

import { FaIceCream } from 'react-icons/fa';
import Breadcrumb from '@/components/common/breadcrumb';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { categories, getMenuByCategory, getCategoryById, MenuItem } from '@/data/menu';

export default function MenuPage() {
  const [activeTab, setActiveTab] = useState("soft-serve");
  const [currentMenu, setCurrentMenu] = useState<MenuItem[]>([]);
  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  
  // Refs for smooth scroll
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  // Initialize refs for each category (optional, but keeps TS happy)
  useEffect(() => {
    categories.forEach((cat) => {
      if (!(cat.id in sectionRefs.current)) {
        sectionRefs.current[cat.id] = null;
      }
    });
  }, []);

  // Update menu when active tab changes
  useEffect(() => {
    const menu = getMenuByCategory(activeTab);
    const category = getCategoryById(activeTab);
    setCurrentMenu(menu);
    if (category) setCurrentCategory(category);
  }, [activeTab]);

  const scrollToSection = (sectionId: string) => {
    setActiveTab(sectionId);
    const el = sectionRefs.current[sectionId];
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Handle hash on load
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash && sectionRefs.current[hash]) {
      setTimeout(() => {
        scrollToSection(hash);
      }, 100);
    }
  }, []);

  return (
    <>
      <Breadcrumb 
        title="Our Menu" 
        backgroundImage="/images/inner-bg-1.jpg"
        pageName="Menu"
        showHiringBadge={true}
      />

      <section 
        className="relative w-full bg-cover bg-no-repeat bg-center bg-fixed py-20 md:py-28"
        style={{ backgroundImage: "url('/images/menu-bg-1.jpg')" }}
      >
        <div className="absolute inset-0 bg-white/90"></div>
        
        <div className="relative z-10 container mx-auto px-4">
          
         

          {/* Category Tabs - With Emojis */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 sticky top-0 bg-white/95 py-4 z-20 rounded-xl shadow-sm">
            {categories.map((cat) => {
              const isActive = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => scrollToSection(cat.id)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r from-[#c07f07] to-[#046069] text-white shadow-lg shadow-[#c07f07]/20'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <span className="text-lg">{cat.emoji}</span>
                  <span className="text-sm whitespace-nowrap">{cat.name}</span>
                </button>
              );
            })}
          </div>

          {/* Category Sections */}
          {categories.map((cat) => (
            <div 
              key={cat.id}
              ref={(el) => {
                sectionRefs.current[cat.id] = el;
              }}
              id={cat.id} 
              className="scroll-mt-24"
            >
              {activeTab === cat.id && (

                <>
                  <div className="text-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#1e1e1e] mb-2">
                      {cat.name}
                    </h2>
                    <p className="text-gray-500">{cat.desc}</p>
                  </div>

                  {/* Menu Items Grid - 3 items per row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {currentMenu.map((item, idx) => (
                      <div
                        key={idx}
                        className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                      >
                        <div className="flex items-center gap-4 p-4">
                          {/* Left Side - Image */}
                          <div className="flex-shrink-0 w-24 h-24 rounded-xl overflow-hidden bg-gray-100">
                            {item.image ? (
                              <Image
                                src={item.image}
                                alt={item.name}
                                width={96}
                                height={96}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center bg-[#c07f07]/10">
                                <span className="text-3xl">{cat.emoji}</span>
                              </div>
                            )}
                          </div>
                          
                          {/* Right Side - Content */}
                          <div className="flex-1">
                            <div className="flex justify-between items-start gap-2">
                              <div>
                                <h3 className="text-gray-800 font-bold text-base group-hover:text-[#c07f07] transition-colors">
                                  {item.name}
                                </h3>
                                
                              </div>
                              <div className="bg-[#c07f07]/10 px-3 py-1.5 rounded-full">
                                <span className="text-[#c07f07] font-bold text-sm">{item.price}</span>
                              </div>
                            </div>
                            {item.desc && (
                              <p className="text-gray-500 text-xs mt-2 line-clamp-3">{item.desc}</p>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          ))}

        </div>
      </section>
    </>
  );
}