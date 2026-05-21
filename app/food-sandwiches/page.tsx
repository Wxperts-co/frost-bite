// app/food-sandwiches/page.tsx
import { FaHamburger, FaCheese, FaUtensils, FaDrumstickBite, FaFish, FaBacon } from 'react-icons/fa';
import Breadcrumb from '@/components/common/breadcrumb';
import Link from 'next/link';
import Image from 'next/image';

export const dynamic = 'force-dynamic';

const foodCategories = [
  { id: "burgers", name: "Burgers", icon: FaHamburger, desc: "Juicy, flame-grilled burgers" },
  { id: "chicken", name: "Chicken", icon: FaDrumstickBite, desc: "Crispy, tender chicken" },
  { id: "sandwiches", name: "Sandwiches", icon: FaBacon, desc: "Hearty, stacked sandwiches" },
  { id: "sides", name: "Sides", icon: FaCheese, desc: "Perfect complements" },
  { id: "combos", name: "Combos", icon: FaUtensils, desc: "Best value meals" },
];

const menuData = {
  burgers: [
    { name: "Double Cheeseburger", price: "$11.45", popular: true, image: "/images/menu/double-cheeseburger.jpg" },
    { name: "Hot Dog", price: "$5.75", image: "/images/menu/hot-dog.jpg" },
    { name: "Double Hamburger", price: "$10.00", image: "/images/menu/double-hamburger.jpg" },
    { name: "Cheeseburger", price: "$9.10", popular: true, image: "/images/menu/cheeseburger.jpg" },
    { name: "Hamburger", price: "$8.00", image: "/images/menu/hamburger.jpg" },
    { name: "Bacon Cheeseburger", price: "$10.99", popular: true, image: "/images/menu/bacon-cheeseburger.jpg" },
  ],
  chicken: [
    { name: "Chicken Tenders", price: "$8.60", popular: true, image: "/images/menu/chicken-tenders.jpg" },
    { name: "Breaded Chicken Sandwich", price: "$8.60", image: "/images/menu/breaded-chicken.jpg" },
    { name: "Grilled Chicken Sandwich", price: "$8.60", image: "/images/menu/grilled-chicken.jpg" },
    { name: "Spicy Chicken Sandwich", price: "$8.60", popular: true, image: "/images/menu/spicy-chicken.jpg" },
    { name: "Chicken Wrap", price: "$10.00", image: "/images/menu/chicken-wrap.jpg" },
  ],
  sandwiches: [
    { name: "Fish Sandwich", price: "$10.00", popular: true, image: "/images/menu/fish-sandwich.jpg" },
    { name: "BBQ Sandwich", price: "$8.60", image: "/images/menu/bbq-sandwich.jpg" },
    { name: "Tenderloins", price: "$9.30", popular: true, image: "/images/menu/tenderloins.jpg" },
  ],
  sides: [
    { name: "Cheese Curds", price: "$7.85", popular: true, image: "/images/menu/cheese-curds.jpg" },
    { name: "Tater Kegs", price: "$7.85", image: "/images/menu/tater-kegs.jpg" },
    { name: "Cheese Fries", price: "$5.35", image: "/images/menu/cheese-fries.jpg" },
    { name: "Spicy Cheese Balls", price: "$7.85", image: "/images/menu/spicy-cheese-balls.jpg" },
    { name: "Onion Rings", price: "$7.45", popular: true, image: "/images/menu/onion-rings.jpg" },
    { name: "Fried Mushrooms", price: "$7.45", image: "/images/menu/fried-mushrooms.jpg" },
    { name: "Mac & Cheese Bites", price: "$7.85", image: "/images/menu/mac-cheese-bites.jpg" },
    { name: "French Fries", price: "$4.30", popular: true, image: "/images/menu/french-fries.jpg" },
  ],
  combos: [
    { name: "Double Cheeseburger Combo", price: "$10.99", popular: true, image: "/images/menu/double-cheeseburger-combo.jpg" },
    { name: "Tenderloins Combo", price: "$10.49", image: "/images/menu/tenderloins-combo.jpg" },
  ],
};

interface Props {
  searchParams?: Promise<{ category?: string }>;
}

export default async function FoodSandwichesPage({ searchParams }: Props) {
  const params = await searchParams || {};
  const category = params?.category || "burgers";
  const currentMenu = menuData[category as keyof typeof menuData] || menuData.burgers;
  const currentCategory = foodCategories.find(c => c.id === category);

  return (
    <>
      <Breadcrumb 
        title="Food & Sandwiches" 
        backgroundImage="/images/inner-bg-1.jpg"
        pageName="Food & Sandwiches"
        showHiringBadge={true}
      />

      <section 
        className="relative w-full bg-cover bg-no-repeat bg-center bg-fixed py-20 md:py-28"
        style={{ backgroundImage: "url('/images/menu-bg-item.jpg')" }}
      >
        <div className="absolute inset-0 bg-white/90"></div>
        
        <div className="relative z-10 container mx-auto px-4">
          
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#c07f07]/10 px-4 py-2 rounded-full mb-4">
              <FaHamburger className="text-[#c07f07]" size={18} />
              <span className="text-[#c07f07] font-semibold text-sm uppercase tracking-wide">Food & Sandwiches</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1e1e1e] mb-4">
              Food & <span className="text-[#c07f07]">Sandwiches</span>
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Delicious burgers, crispy chicken, hearty sandwiches, and satisfying combo meals.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-[#c07f07] to-[#046069] mx-auto rounded-full mt-6" />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {foodCategories.map((cat) => {
              const Icon = cat.icon;
              const isActive = category === cat.id;
              return (
                <Link
                  key={cat.id}
                  href={`/food-sandwiches?category=${cat.id}`}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r from-[#c07f07] to-[#046069] text-white shadow-lg shadow-[#c07f07]/20'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <Icon size={16} />
                  <span className="text-sm whitespace-nowrap">{cat.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Category Info */}
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1e1e1e] mb-2">
              {currentCategory?.name}
            </h2>
            <p className="text-gray-500">{currentCategory?.desc}</p>
          </div>

          {/* Menu Items Grid - 2 items per row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {currentMenu.map((item, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div className="flex items-center gap-4 p-4">
                  {/* Left Side - Image */}
                  <div className="flex-shrink-0 w-24 h-24 md:w-28 md:h-28 rounded-xl overflow-hidden bg-gray-100">
                    {item.image ? (
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={112}
                        height={112}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-[#c07f07]/10">
                        <FaHamburger className="text-[#c07f07]/40 text-4xl" />
                      </div>
                    )}
                  </div>
                  
                  {/* Right Side - Name & Price */}
                  <div className="flex-1">
                    <div className="flex justify-between items-start gap-2">
                      <div>
                        <h3 className="text-gray-800 font-bold text-lg group-hover:text-[#c07f07] transition-colors">
                          {item.name}
                        </h3>
                        {item.popular && (
                          <span className="inline-block text-[10px] text-[#c07f07] font-semibold bg-[#c07f07]/10 px-2 py-0.5 rounded-full mt-1">
                            Popular
                          </span>
                        )}
                      </div>
                      <div className="bg-[#c07f07]/10 px-3 py-1.5 rounded-full">
                        <span className="text-[#c07f07] font-bold text-sm md:text-base">{item.price}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          
        </div>
      </section>
    </>
  );
}