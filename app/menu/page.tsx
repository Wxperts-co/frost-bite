import type { Metadata } from "next";
import Breadcrumb from "@/components/common/breadcrumb";
import Image from "next/image";
import { categories, menuData } from "@/data/menu";

export const metadata: Metadata = {
  title: "Frost Bite | Menu | Chocolate Vanilla & Food in Avon, IN",
  description: "Explore Frost Bite's full menu in Avon, IN—soft serve, chocolate vanilla, hard ice cream, food, burger, hot dogs, etc. Fresh, delicious & family-friendly!",
  keywords: [
    "Chocolate Vanilla & Food in Avon, IN",
    "tenderloin sandwich Avon, Indiana",
    "breaded tenderloin near me Indiana",
    "burgers and ice cream Avon, IN",
    "chicken wrap Avon, Indiana",
    "fish sandwich near me Avon, IN",
    "hot dogs and burgers Avon, Indiana"
  ],
  openGraph: {
    title: "Frost Bite | Menu | Chocolate Vanilla & Food in Avon, IN",
    description: "Explore Frost Bite's full menu in Avon, IN—soft serve, chocolate vanilla, hard ice cream, food, burger, hot dogs, etc. Fresh, delicious & family-friendly!",
    url: "https://frostbite-avon-indiana.com/menu",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Frost Bite | Menu | Chocolate Vanilla & Food in Avon, IN",
    description: "Explore Frost Bite's full menu in Avon, IN—soft serve, chocolate vanilla, hard ice cream, food, burger, hot dogs, etc. Fresh, delicious & family-friendly!",
  }
};

export default function MenuPage() {
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

          <h1 className="text-3xl md:text-4xl font-bold text-[#1e1e1e] mb-3 flex items-center justify-center gap-2 text-center">Frost Bite Menu – Soft Serve, Sundaes, Shakes & More <br></br> in Avon, Indiana</h1>
          <h2 className="text-2xl md:text-3xl font-bold text-[#1e1e1e] mb-3 flex items-center justify-center gap-2 text-center">Soft-Serve Cups – Creamy Classic Soft Serve Made Fresh Daily </h2>

          {/* Category Tabs - With Emojis (Anchor Jump Links) */}
          <div className="sticky top-[80px] z-20 pt-[40px] pb-4 bg-transparent mb-8">
            <div className="flex flex-wrap justify-center gap-3 bg-white/95 py-4 rounded-xl shadow-sm border border-gray-100">
              {categories.map((cat) => {
                return (
                  <a
                    key={cat.id}
                    href={`#${cat.id}`}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold transition-all duration-300 bg-gray-100 text-gray-700 hover:bg-[#c07f07]/10 hover:text-[#c07f07]"
                  >
                    <span className="text-lg">{cat.emoji}</span>
                    <span className="text-sm whitespace-nowrap">{cat.name}</span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Category Sections (Statically Rendered for Maximum SEO Indexability) */}
          <div className="space-y-20">
            {categories.map((cat) => {
              const items = menuData[cat.id] || [];
              return (
                <div
                  key={cat.id}
                  id={cat.id}
                  className="scroll-mt-36"
                >
                  <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#1e1e1e] mb-3 flex items-center justify-center gap-2">
                      <span className="text-3xl">{cat.emoji}</span>
                      <span>{cat.name}</span>
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">{cat.desc}</p>
                    <div className="w-24 h-1 bg-gradient-to-r from-[#c07f07] to-[#046069] mx-auto mt-4 rounded-full"></div>
                  </div>

                  {/* Menu Items Grid - 3 items per row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {items.map((item, idx) => (
                      <div
                        key={idx}
                        className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                      >
                        <div className="flex flex-row gap-4 p-4 h-full">
                          {/* Image/Emoji placeholder */}
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

                          {/* Content & Price */}
                          <div className="flex-1 flex flex-col justify-between">
                            <div>
                              <h3 className="text-gray-800 font-bold text-base group-hover:text-[#c07f07] transition-colors">
                                {item.name}
                              </h3>
                              {item.desc && (
                                <p className="text-gray-500 text-xs mt-1 line-clamp-2">{item.desc}</p>
                              )}
                            </div>

                            {/* Price at the bottom */}
                            <div className="mt-2 self-start bg-[#c07f07]/10 px-3 py-1 rounded-full">
                              <span className="text-[#c07f07] font-bold text-[10px] sm:text-[10px]">{item.price}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>
    </>
  );
}