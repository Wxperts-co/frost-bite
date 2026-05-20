import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import MenuSection from '@/components/home/MenuSection';
import TestimonialSection from '@/components/home/TestimonialSection';
import GallerySection from '@/components/home/GallerySection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <FeaturedProducts />
      <MenuSection />
      <TestimonialSection />
      <GallerySection />
    </main>
  );
}