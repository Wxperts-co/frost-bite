import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "@/components/common/breadcrumb";
import { blogs } from "@/data/blogs";

export const metadata: Metadata = {
  title: "Blogs | Frost Bite | Ice Cream Shop Avon, IN",
  description: "Read the Frost Bite blog for delicious stories, ice cream traditions, and handcrafted dessert inspiration in Avon, IN. Visit us at 7025 Galen Dr W!",
  alternates: {
    canonical: "https://frostbite-avon-indiana.com/blogs",
  },
  keywords: [
    "ice cream blog Avon IN",
    "Frost Bite stories Avon Indiana",
    "best dessert blog Hendricks County",
    "locally owned ice cream shop Avon",
    "sundae and burger shop Avon",
  ],
  openGraph: {
    title: "Blogs | Frost Bite | Ice Cream Shop Avon, IN",
    description: "Read the Frost Bite blog for delicious stories, ice cream traditions, and handcrafted dessert inspiration in Avon, IN. Visit us at 7025 Galen Dr W!",
    url: "https://frostbite-avon-indiana.com/blogs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blogs | Frost Bite | Ice Cream Shop Avon, IN",
    description: "Read the Frost Bite blog for delicious stories, ice cream traditions, and handcrafted dessert inspiration in Avon, IN. Visit us at 7025 Galen Dr W!",
  }
};

export default function BlogListingPage() {
  return (
    <>
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

        <div className="relative z-10 container mx-auto px-4 max-w-[1820px]">
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
            {blogs.map((blog) => (
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
                  <div className="absolute top-4 left-4 bg-[#c07f07] text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                    {new Date(blog.date).toLocaleDateString(undefined, {
                      month: "short",
                      day: "2-digit",
                    })}
                  </div>
                </div>

                {/* Content Wrap */}
                <div className="flex flex-col flex-1 p-6 md:p-8">
                  <div className="flex items-center gap-2 mb-3 text-sm text-gray-500">
                    <span>By Frost Bite</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
                    <span>
                      {new Date(blog.date).toLocaleDateString(undefined, {
                        year: "numeric",
                        month: "long",
                        day: "2-digit",
                      })}
                    </span>
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
