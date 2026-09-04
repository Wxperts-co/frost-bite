import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "@/components/common/breadcrumb";
import { blogs } from "@/data/blogs";
import { User, Calendar, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Frost Bite | homemade ice cream in Avon, Indiana",
  description: "Enjoy homemade ice cream in Avon, Indiana, crafted with quality ingredients for rich flavor and creamy texture. Visit Frost Bite for your favorite scoop today!",
  alternates: {
    canonical: "https://frostbite-avon-indiana.com/blogs",
  },
  keywords: [
    "homemade ice cream in Avon, Indiana",
    "handcrafted ice cream in Avon, IN",
    "ice cream shop Avon, Indiana",
    "Frost Bite Avon, IN",
    "ice cream near me Avon, Indiana",
    "best ice cream Avon, IN",
    "soft serve ice cream Avon, Indiana",
  ],
  openGraph: {
    title: "Frost Bite | homemade ice cream in Avon, Indiana",
    description: "Enjoy homemade ice cream in Avon, Indiana, crafted with quality ingredients for rich flavor and creamy texture. Visit Frost Bite for your favorite scoop today!",
    url: "https://frostbite-avon-indiana.com/blogs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Frost Bite | homemade ice cream in Avon, Indiana",
    description: "Enjoy homemade ice cream in Avon, Indiana, crafted with quality ingredients for rich flavor and creamy texture. Visit Frost Bite for your favorite scoop today!",
  }
};

export default function BlogListingPage() {
  return (
    <>
      {/* Hidden headings for SEO as specified in the document */}
      <h1 className="sr-only">local ice cream shop in Avon, IN</h1>
      <h2 className="sr-only">ice cream shop near me</h2>

      <Breadcrumb
        title="Our Blogs"
        backgroundImage="/images/inner-bg-1.jpg"
        pageName="Blogs"
      />

      <section
        className="relative w-full bg-cover bg-no-repeat bg-center bg-fixed py-20 md:py-28"
        style={{ backgroundImage: "url('/images/about-page-bg.jpg ')" }}
      >
        {/* White Overlay */}
        <div className="absolute inset-0 bg-white opacity-90"></div>

        <div className="relative z-10 container mx-auto px-4 max-w-[1520px]">
          {/* Section Title */}
          <div className="text-center mb-12 animate-slideInUp">
            <p className="text-[#c07f07] text-sm md:text-base uppercase tracking-[2px] font-semibold mb-3">
              Our Stories
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-[#1e1e1e]">
              Frost Bite Stories, Traditions &amp; Sweet Inspiration
            </h1>
            <div className="w-20 h-0.5 bg-[#c07f07] mx-auto mt-4"></div>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {[...blogs]
              .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
              .map((blog) => (
              <Link
                key={blog.id}
                href={`/blogs/${blog.slug}`}
                className="group flex flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Image Wrap */}
                <div className="relative overflow-hidden aspect-[16/10]">
                  {blog.coverImage ? (
                    <Image
                      src={blog.coverImage}
                      alt={blog.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  ) : (
                    <div className="w-full h-full bg-[#f8f8f8] flex items-center justify-center">
                      <span className="text-gray-400">Frost Bite</span>
                    </div>
                  )}
                  {/* Category/Date overlay */}
                  {!(blog.slug === 'handcrafted-ice-cream-avon-in' || blog.slug === 'family-ice-cream-shop-in-avon-in') && (
                    <div className="absolute top-4 left-4 bg-[#c07f07] text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                      {new Date(blog.date).toLocaleDateString(undefined, {
                        month: "short",
                        day: "2-digit",
                      })}
                    </div>
                  )}
                </div>

                {/* Content Wrap */}
                <div className="flex flex-col flex-1 p-6 md:p-8">
                  <div className="flex flex-wrap items-center gap-3 md:gap-4 text-xs text-gray-500 mb-4 bg-gray-50/80 py-2 px-3 rounded-lg border border-gray-100 w-max max-w-full">
                    {!(blog.slug === 'handcrafted-ice-cream-avon-in' || blog.slug === 'family-ice-cream-shop-in-avon-in') && (
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-[#c07f07]" />
                        <span>
                          {new Date(blog.date).toLocaleDateString(undefined, {
                            year: "numeric",
                            month: "short",
                            day: "2-digit",
                          })}
                        </span>
                      </div>
                    )}
                    <div className="flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-[#c07f07]" />
                      <span>{blog.author || "Frost Bite"}</span>
                    </div>
                  </div>

                  <h2 className="text-xl md:text-2xl font-bold text-[#1e1e1e] group-hover:text-[#c07f07] transition-colors duration-300 line-clamp-2 leading-snug mb-3">
                    {blog.title}
                  </h2>

                  <p className="text-gray-600 line-clamp-3 mb-6 text-sm md:text-base leading-relaxed">
                    {blog.description}
                  </p>

                  <div className="mt-auto pt-4 border-t border-gray-100 flex items-center text-sm font-bold text-[#c07f07] group-hover:text-[#1e1e1e] transition-colors duration-300">
                    <span>Read More</span>
                    <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
