import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/common/breadcrumb";
import { blogs } from "@/data/blogs";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);
  if (!blog) {
    return {
      title: "Blog Not Found | Frost Bite",
    };
  }
  const canonical =
    blog.canonicalUrl || `https://frostbite-avon-indiana.com/blogs/${slug}`;
  return {
    title: blog.metaTitle || blog.title,
    description: blog.description,
    keywords: blog.keywords,
    alternates: {
      canonical,
    },
    openGraph: {
      title: blog.metaTitle || blog.title,
      description: blog.description,
      url: canonical,
      type: "article",
      images: [
        {
          url: `https://frostbite-avon-indiana.com${blog.coverImage || "/images/default-blog.png"}`,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.metaTitle || blog.title,
      description: blog.description,
      images: [
        `https://frostbite-avon-indiana.com${blog.coverImage || "/images/default-blog.png"}`,
      ],
    },
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    notFound();
  }

  // Filter other blogs to display in sidebar
  const otherBlogs = blogs;

  return (
    <>
      <Breadcrumb
        title="Blogs"
        backgroundImage="/images/inner-bg-1.jpg"
        pageName="Blog Details"
      />

      <section
        className="relative w-full bg-cover bg-no-repeat bg-center bg-fixed py-20 md:py-28"
        style={{ backgroundImage: "url('/images/about-page-bg.jpg ')" }}
      >
        {/* White Overlay */}
        <div className="absolute inset-0 bg-white opacity-90"></div>

        <div className="relative z-10 container mx-auto px-4 max-w-[1420px]">
          <div className="flex flex-wrap lg:flex-nowrap gap-10">
            {/* Left Content Area: Main Article */}
            <div className="w-full lg:w-2/3 xl:w-3/4">
              <article className="overflow-hidden rounded-3xl border border-gray-100 bg-white p-6 md:p-10 shadow-lg">
                {blog.coverImage && (
                  <div className="relative overflow-hidden rounded-2xl aspect-[16/7] mb-8">
                    <Image
                      src={blog.coverImage}
                      alt={blog.title}
                      fill
                      className="object-contain"
                      priority
                      sizes="(max-width: 924px) 100vw, 75vw"
                    />
                  </div>
                )}

                <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
                  <span className="font-semibold text-[#c07f07]">
                    Author: Frost Bite
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
                  <span>
                    {blog.date}
                  </span>
                </div>

                <h1 className="text-2xl md:text-4xl font-bold text-[#1e1e1e] mb-6 font-['Playfair_Display'] leading-tight">
                  {blog.title}
                </h1>

                {/* Render styled HTML content */}
                <div
                  className="blog-content mt-6 text-gray-700 text-sm md:text-base leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: blog.content }}
                />

                {/* Back to Blogs Button at the bottom of the article content */}
                <div className="mt-12 pt-8 border-t border-gray-100 flex justify-center">
                  <Link href="/blogs">
                    <button className="btn-slide bg-[#c07f07] text-white px-8 py-3 rounded-full font-semibold uppercase tracking-wide text-sm hover:shadow-lg">
                      <span className="relative z-10 flex items-center gap-2">
                        ← Back to Blogs
                      </span>
                    </button>
                  </Link>
                </div>
              </article>
            </div>

            {/* Right Content Area: Sidebar */}
            <aside className="w-full lg:w-1/3 xl:w-1/4 flex flex-col gap-8">
              {/* Other Articles widget */}
              <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-md sticky top-28">
                <h3 className="text-xl font-bold text-[#1e1e1e] mb-4 pb-2 border-b-2 border-[#c07f07]">
                  Other Articles
                </h3>

                {otherBlogs.length > 0 ? (
                  <div className="flex flex-col gap-5">
                    {otherBlogs.map((item) => {
                      const isCurrent = item.slug === slug;

                      return (
                        <Link
                          key={item.id}
                          href={isCurrent ? "#" : `/blogs/${item.slug}`}
                          className={`group flex gap-4 items-center ${
                            isCurrent ? "pointer-events-none" : ""
                          }`}
                        >
                          <div className="relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-gray-100">
                            {item.coverImage ? (
                              <Image
                                src={item.coverImage}
                                alt={item.title}
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                                sizes="64px"
                              />
                            ) : (
                              <div className="w-full h-full bg-gray-200" />
                            )}
                          </div>

                          <div className="flex flex-col">
                            <span className="text-xs text-gray-400">
                              {item.date}
                            </span>

                            <h4
                              className={`text-sm font-bold line-clamp-2 leading-snug transition-colors duration-300 ${
                                isCurrent
                                  ? "text-[#c07f07]"
                                  : "text-[#1e1e1e] group-hover:text-[#c07f07]"
                              }`}
                            >
                              {item.title}
                            </h4>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                ) : (
                  <p className="text-sm text-gray-500">
                    No other articles available.
                  </p>
                )}
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
