// app/menu/page.tsx
import { FaIceCream, FaCoffee, FaHamburger, FaMugHot, FaGlassWhiskey, FaCandyCane, FaAppleAlt, FaStar, FaUtensils, FaIceCream as FaIceCreamLogo } from 'react-icons/fa';
import Breadcrumb from '@/components/common/breadcrumb';
import Link from 'next/link';

// Force dynamic rendering to handle searchParams
export const dynamic = 'force-dynamic';

const categories = [
  { id: "sundaes", name: "Sundaes", icon: FaIceCream, color: "#c07f07", desc: "Delicious sundae creations" },
  { id: "specialty-frost", name: "Specialty Frost", icon: FaCoffee, color: "#046069", desc: "Signature frost specialties" },
  { id: "kids-meal", name: "Kids' Meal", icon: FaHamburger, color: "#c07f07", desc: "Perfect for little ones" },
  { id: "beverages", name: "Beverages", icon: FaMugHot, color: "#046069", desc: "Refreshing drinks" },
  { id: "frost-specialties", name: "Frost Specialties", icon: FaIceCream, color: "#c07f07", desc: "Our signature frost" },
  { id: "burgers", name: "Burgers & More", icon: FaHamburger, color: "#046069", desc: "Savory selections" },
  { id: "hard-ice-cream", name: "Hard Ice Cream", icon: FaIceCream, color: "#c07f07", desc: "Premium ice cream" },
  { id: "floats", name: "Floats", icon: FaGlassWhiskey, color: "#046069", desc: "Classic float favorites" },
  { id: "frost", name: "Frost", icon: FaIceCream, color: "#c07f07", desc: "Creamy frost drinks" },
  { id: "dipping-dots", name: "Dippin Dots", icon: FaCandyCane, color: "#046069", desc: "Fun dot ice cream" },
  { id: "slushies", name: "Slushies", icon: FaGlassWhiskey, color: "#c07f07", desc: "Frozen slush treats" },
  { id: "sides", name: "Sides", icon: FaAppleAlt, color: "#046069", desc: "Tasty sides" },
  { id: "freezes", name: "Freezes", icon: FaGlassWhiskey, color: "#c07f07", desc: "Frozen delights" },
  { id: "combos", name: "Combos", icon: FaHamburger, color: "#046069", desc: "Best value combos" },
  { id: "soft-serve", name: "Soft-Serve", icon: FaIceCream, color: "#c07f07", desc: "Classic soft serve" },
  { id: "shakes", name: "Shakes", icon: FaGlassWhiskey, color: "#046069", desc: "Thick & creamy shakes" },
];

const menuData = {
  sundaes: [
    { name: "Chocolate Chip Sundae", price: "$5.10", popular: true },
    { name: "Pineapple Sundae", price: "$5.10" },
    { name: "Strawberry Sundae", price: "$5.10", popular: true },
    { name: "Butterscotch Sundae", price: "$5.10" },
    { name: "Raspberry Sundae", price: "$5.10" },
    { name: "Blueberry Sundae", price: "$5.10" },
    { name: "Lemon Sundae", price: "$5.10" },
    { name: "Cherry Sundae", price: "$5.10" },
    { name: "Oreo Sundae", price: "$5.10", popular: true },
    { name: "Peanut Butter Sundae", price: "$5.10" },
    { name: "Mint Sundae", price: "$5.10" },
    { name: "Vanilla Sundae", price: "$5.10" },
    { name: "Hot Fudge Sundae", price: "$5.10", popular: true },
    { name: "Chocolate Sundae", price: "$5.10" },
    { name: "Marshmallow Sundae", price: "$5.10" },
    { name: "Black Raspberry Sundae", price: "$5.10" },
    { name: "Banana Sundae", price: "$5.10" },
  ],
  "specialty-frost": [
    { name: "Banana Split Frost", price: "$10.00", desc: "Creamy vanilla ice cream with banana, strawberries, and chocolate syrup.", popular: true },
    { name: "Fudge Brownie Supreme Frost", price: "$10.00", desc: "Rich chocolate brownie pieces blended with fudge." },
    { name: "Turtle Frost", price: "$10.00", desc: "Pecans, caramel, and chocolate fudge swirled together.", popular: true },
    { name: "Pumpkin Pie Frost", price: "$9.10", desc: "Seasonal pumpkin pie flavor." },
  ],
  "kids-meal": [
    { name: "Hot Dog", price: "$6.99" },
    { name: "Burger", price: "$6.99", popular: true },
    { name: "Corn Dog", price: "$6.99" },
    { name: "Chicken Tenders", price: "$6.99", popular: true },
  ],
  beverages: [
    { name: "Coke", price: "$3.00", desc: "The cold, refreshing, sparkling classic." },
    { name: "Sweet Tea", price: "$3.00", popular: true },
    { name: "Pibb Xtra", price: "$3.00", desc: "Spicy cherry alternative." },
    { name: "Diet Coke", price: "$3.00" },
    { name: "Lemonade", price: "$3.00", popular: true },
    { name: "Root Beer", price: "$3.00" },
    { name: "Mellow Yellow", price: "$3.00" },
    { name: "Unsweetened Tea", price: "$3.00" },
  ],
  "frost-specialties": [
    { name: "Turtle Frost", price: "$7.80", popular: true },
    { name: "Strawberry Shortcake", price: "$7.80", popular: true },
    { name: "Nut Parfait", price: "$7.80" },
    { name: "Fudge Brownie Supreme", price: "$7.80" },
    { name: "Banana Split", price: "$7.80" },
    { name: "Mocha Mudslide", price: "$7.80" },
  ],
  burgers: [
    { name: "Double Cheeseburger", price: "$11.45", popular: true },
    { name: "Hot Dog", price: "$5.75" },
    { name: "Double Hamburger", price: "$10.00" },
    { name: "Chicken Wrap", price: "$10.00" },
    { name: "BBQ Sandwich", price: "$8.60" },
    { name: "Chicken Tenders", price: "$8.60", popular: true },
    { name: "Corn Dog", price: "$4.85" },
    { name: "Breaded Chicken", price: "$8.60" },
    { name: "Cheeseburger", price: "$9.10" },
    { name: "Hamburger", price: "$8.00" },
    { name: "Chicken Salad", price: "$8.60" },
    { name: "Tenderloins", price: "$9.30" },
    { name: "Spicy Chicken Sandwich", price: "$8.60", popular: true },
    { name: "Grilled Chicken", price: "$8.60" },
    { name: "Fish Sandwich", price: "$10.00" },
  ],
  "hard-ice-cream": [
    { name: "Strawberry", price: "$4.60", popular: true },
    { name: "Chocolate", price: "$4.60", popular: true },
    { name: "Superman", price: "$4.60" },
    { name: "Blue Panda", price: "$4.60" },
    { name: "Orange Sherbet", price: "$4.60" },
    { name: "Vanilla", price: "$4.85", popular: true },
    { name: "NSA Butterpecan", price: "$4.60" },
    { name: "Mint Chocolate", price: "$4.60" },
    { name: "Coffee", price: "$4.60" },
  ],
  floats: [
    { name: "Coke Float", price: "$5.45", desc: "Refreshing classic.", popular: true },
    { name: "Diet Coke Float", price: "$5.45" },
    { name: "Mellow Yellow Float", price: "$5.45" },
    { name: "Sprite Float", price: "$5.45", desc: "Lemon and lime flavors." },
    { name: "Pibb Float", price: "$5.45" },
    { name: "Root Beer Float", price: "$5.45", popular: true },
  ],
  frost: [
    { name: "Cookie Dough Frost", price: "$6.15", popular: true },
    { name: "Mint Frost", price: "$6.15" },
    { name: "Snickers Frost", price: "$6.15", popular: true },
    { name: "Heath Frost", price: "$6.15" },
    { name: "Chocolate Chip Frost", price: "$6.15" },
    { name: "Whoppers Frost", price: "$6.15" },
    { name: "NY Cheesecake Frost", price: "$6.15" },
    { name: "Strawberry Frost", price: "$6.15" },
    { name: "M&M Frost", price: "$6.15", popular: true },
    { name: "Oreo Frost", price: "$6.15", popular: true },
    { name: "Banana Frost", price: "$6.15" },
    { name: "Butterfinger Frost", price: "$6.15" },
    { name: "Reese's Frost", price: "$6.15", popular: true },
    { name: "Apple Pie Frost", price: "$6.15" },
    { name: "Nerds Frost", price: "$6.15" },
  ],
  "dipping-dots": [
    { name: "Banana Split Dippin Dots", price: "$6.85" },
    { name: "Chocolate Dippin Dots", price: "$6.85", popular: true },
    { name: "Cookies & Cream Dippin Dots", price: "$6.85", popular: true },
    { name: "Cotton Candy Dippin Dots", price: "$6.85" },
    { name: "Cookie Dough Dippin Dots", price: "$6.85" },
    { name: "Rainbow Dippin Dots", price: "$6.85", popular: true },
    { name: "Birthday Cake Dippin Dots", price: "$6.85" },
  ],
  slushies: [
    { name: "Blue Raspberry Slushy", price: "$3.00", popular: true },
    { name: "Grape Slushy", price: "$3.00" },
    { name: "Rainbow Slushy", price: "$3.00", popular: true },
    { name: "Orange Slushy", price: "$3.00" },
    { name: "Cherry Slushy", price: "$3.00" },
    { name: "Lemon Lime Slushy", price: "$3.00" },
  ],
  sides: [
    { name: "Cheese Curds", price: "$7.85", popular: true },
    { name: "Tater Kegs", price: "$7.85" },
    { name: "Cheese Fries", price: "$5.35" },
    { name: "Spicy Cheese Balls", price: "$7.85" },
    { name: "Onion Rings", price: "$7.45", popular: true },
    { name: "Fried Mushrooms", price: "$7.45" },
    { name: "Mac & Cheese Bites", price: "$7.85" },
    { name: "Zucchini", price: "$7.45" },
    { name: "French Fries", price: "$4.30", popular: true },
    { name: "Mozzarella Cheese Sticks", price: "$7.45" },
  ],
  freezes: [
    { name: "Lemon Lime Freeze", price: "$6.00" },
    { name: "Lemonade Freeze", price: "$6.00", popular: true },
    { name: "Grape Freeze", price: "$6.00" },
    { name: "Orange Freeze", price: "$6.00" },
    { name: "Blue Raspberry Freeze", price: "$6.00", popular: true },
    { name: "Cherry Freeze", price: "$6.00" },
  ],
  combos: [
    { name: "Double Cheeseburger Combo", price: "$10.99", popular: true },
    { name: "Tenderloins Combo", price: "$10.49" },
  ],
  "soft-serve": [
    { name: "Chocolate Vanilla Twist", price: "$2.85", popular: true },
    { name: "Vanilla", price: "$2.85", popular: true },
    { name: "Chocolate", price: "$2.85", popular: true },
  ],
  shakes: [
    { name: "Banana Shake", price: "$5.30" },
    { name: "Vanilla Shake", price: "$5.30", popular: true },
    { name: "Coffee Shake", price: "$5.30" },
    { name: "Peanut Butter Shake", price: "$5.30", popular: true },
    { name: "Raspberry Shake", price: "$5.30" },
    { name: "Strawberry Shake", price: "$5.30", popular: true },
    { name: "Lemon Shake", price: "$5.30" },
    { name: "Blueberry Shake", price: "$5.30" },
    { name: "Chocolate Chip Shake", price: "$5.30", popular: true },
    { name: "Chocolate Shake", price: "$5.30", popular: true },
    { name: "Pineapple Shake", price: "$5.30" },
    { name: "Oreo Shake", price: "$5.30", popular: true },
    { name: "Marshmallow Shake", price: "$5.30" },
    { name: "Cherry Shake", price: "$5.30" },
    { name: "Black Raspberry Shake", price: "$5.30" },
    { name: "Butterscotch Shake", price: "$5.30" },
    { name: "Mint Shake", price: "$5.30" },
    { name: "Hot Fudge Shake", price: "$5.30", popular: true },
  ],
};

interface Props {
  searchParams?: Promise<{ category?: string }>;
}

export default async function MenuPage({ searchParams }: Props) {
  const params = await searchParams || {};
  const category = params?.category || "sundaes";
  const currentMenu = menuData[category as keyof typeof menuData] || menuData.sundaes;
  const currentCategory = categories.find(c => c.id === category);

  return (
    <>
      <Breadcrumb 
        title="Our Menu" 
        backgroundImage="/images/inner-bg-1.jpg"
        pageName="Menu"
        showHiringBadge={true}
      />

      {/* Menu Section with Background Image */}
      <section 
        className="relative w-full bg-cover bg-no-repeat bg-center bg-fixed py-20 md:py-28"
        style={{ backgroundImage: "url('/images/menu-bg-1.jpg')" }}
      >
        <div className="absolute inset-0 bg-white/90"></div>
        
        <div className="relative z-10 container mx-auto px-4 ">
          
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#c07f07]/10 px-4 py-2 rounded-full mb-4">
              <FaIceCreamLogo className="text-[#c07f07]" size={18} />
              <span className="text-[#c07f07] font-semibold text-sm uppercase tracking-wide">Delicious Treats</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1e1e1e] mb-4">
              Our <span className="text-[#c07f07]">Menu</span>
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our wide variety of delicious ice cream treats, sundaes, shakes, and more. 
              Made fresh daily with premium ingredients.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-[#c07f07] to-[#046069] mx-auto rounded-full mt-6" />
          </div>

          {/* Category Tabs - Working with Next.js Links */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = category === cat.id;
              return (
                <Link
                  key={cat.id}
                  href={`/menu?category=${cat.id}`}
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

          {/* Menu Items Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {currentMenu.map((item, idx) => (
              <div
                key={idx}
                className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-5 border border-gray-100 hover:border-[#c07f07]/30 transition-all duration-300 h-full shadow-sm hover:shadow-xl hover:-translate-y-1"
              >
                
                
                <div className="relative z-10">
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-1">
                      <h3 className="text-gray-800 font-bold lg:text-[16px] group-hover:text-[#c07f07] transition-colors">
                        {item.name}
                      </h3>
                     
                    </div>
                    <div className="bg-[#c07f07]/10 px-3 py-1.5 rounded-full">
                      <span className="text-[#c07f07] font-bold text-[14px]">{item.price}</span>
                    </div>
                  </div>
                  
                  {/* Decorative Line */}
                  <div className="mt-3 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
                </div>
              </div>
            ))}
          </div>

        
        </div>
      </section>

     
    </>
  );
}