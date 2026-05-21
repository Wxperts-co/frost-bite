// app/gallery/page.tsx
import Image from "next/image";
import Breadcrumb from "@/components/common/breadcrumb";
import Link from "next/link";

export const metadata = {
  title: "Gallery | Frost Bite - Ice Cream Shop in Avon, Indiana",
  description: "View our delicious ice cream creations, sundaes, and the Frost Bite experience.",
};

const galleryImages = [
  { id: 1, src: "/images/gallery/1.jpg" },
  { id: 2, src: "/images/gallery/2.jpg" },
  { id: 3, src: "/images/gallery/3.jpg" },
  { id: 4, src: "/images/gallery/4.jpg" },
  { id: 5, src: "/images/gallery/5.jpg" },
  { id: 6, src: "/images/gallery/6.jpg" },
  { id: 7, src: "/images/gallery/7.jpg" },
  { id: 8, src: "/images/gallery/8.jpg" },
];

export default function GalleryPage() {
  return (
    <>
      <Breadcrumb 
        title="Gallery" 
        backgroundImage="/images/inner-bg-1.jpg"
        pageName="Gallery"
        showHiringBadge={true}
      />

      <section 
        className="relative w-full bg-cover bg-no-repeat bg-center bg-fixed py-20 md:py-28"
        style={{ backgroundImage: "url('/images/gallery-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-white opacity-70"></div>
        
        <div className="relative z-10 container mx-auto px-4 ">
          
          <div className="text-center mb-12 animate-slideInUp">
            <p className="text-[#c07f07] text-sm md:text-base uppercase tracking-[2px] font-semibold mb-3">
              Our Memories
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-[#1e1e1e]">
              Photo Gallery
            </h2>
            <div className="w-20 h-0.5 bg-[#c07f07] mx-auto mt-4"></div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {galleryImages.map((image) => (
              <div key={image.id} className="gallery-item">
                <a href={`#img-${image.id}`} className="cursor-pointer block">
                  <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={image.src}
                        alt={`Frost Bite Gallery ${image.id}`}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw h-[200px]"
                      />
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <span className="text-white text-sm font-semibold bg-black/50 px-3 py-1 rounded-full">Click to view</span>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CSS Lightbox Modals */}
      {galleryImages.map((image) => (
        <div key={`lightbox-${image.id}`} id={`img-${image.id}`} className="lightbox">
          <div className="lightbox-content">
            <a href="#" className="close-btn">&times;</a>
            <div className="relative w-full h-full">
              <Image
                src={image.src}
                alt={`Frost Bite Gallery ${image.id}`}
                fill
                className="object-contain"
                sizes="90vw"
              />
            </div>
            <div className="lightbox-nav">
              <a href={`#img-${image.id === 1 ? galleryImages.length : image.id - 1}`} className="prev">&#10094;</a>
              <a href={`#img-${image.id === galleryImages.length ? 1 : image.id + 1}`} className="next">&#10095;</a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}