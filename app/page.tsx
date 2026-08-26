import type { Metadata } from 'next';
import Script from 'next/script';
import dynamic from 'next/dynamic';
import HeroSection from '@/components/home/HeroSection';

const AboutSection = dynamic(() => import('@/components/home/AboutSection'));
const FeaturedProducts = dynamic(() => import('@/components/home/FeaturedProducts'));
import { TestimonialSection, GallerySection } from '@/components/home/ClientSections';

export const metadata: Metadata = {
  title: 'Frost Bite | Best Ice Cream Avon, Indiana',
  description: 'Visit Frost Bite in Avon, IN, for handcrafted ice cream, soft serve, sundaes, shakes, tenderloins & burgers. Family-friendly fun at 7025 Galen Dr W!',
  alternates: {
    canonical: 'https://frostbite-avon-indiana.com/',
  },
  keywords: [
    'handcrafted ice cream & treats in Avon, IN',
    'ice cream shop Avon, Indiana',
    'Frost Bite Avon, IN',
    'ice cream near me Avon, Indiana',
    'best ice cream Avon, IN',
    'soft serve ice cream Avon, Indiana',
    'ice cream shop Hendricks County, Indiana',
    'dessert places near Avon, IN',
    'ice cream near Highway 36 Avon',
    'ice cream shop near 46123',
    'family restaurant Avon, Indiana',
    'Best Ice Cream in Avon, Indiana'
  ],
  verification: {
    google: 'AqNzGSqIic0l3qVzPYHUVUY7ukzP-Eu2bUjeVL_VTgc',
    other: {
      'msvalidate.01': ['1BB129FEAAF6199B1343CAA6C26A920F'],
    },
  },
  openGraph: {
    type: 'website',
    title: 'Frost Bite | Best Ice Cream Avon, Indiana',
    description: 'Visit Frost Bite in Avon, IN, for handcrafted ice cream, soft serve, sundaes, shakes, tenderloins & burgers. Family-friendly fun at 7025 Galen Dr W!',
    url: 'https://frostbite-avon-indiana.com/',
    siteName: 'Frost Bite Avon Indiana',
    images: [
      {
        url: 'https://frostbite-avon-indiana.com/images/logo.png',
        alt: 'Frost Bite Avon Indiana Logo',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Frost Bite | Best Ice Cream Avon, Indiana',
    description: 'Visit Frost Bite in Avon, IN, for handcrafted ice cream, soft serve, sundaes, shakes, tenderloins & burgers. Family-friendly fun at 7025 Galen Dr W!',
    images: ['https://frostbite-avon-indiana.com/images/logo.png'],
    site: '@FrostBiteAvon',
    creator: '@FrostBiteAvon',
  },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Frost Bite",
    "description": "Visit Frost Bite in Avon, IN, for handcrafted ice cream, soft serve, sundaes, shakes, tenderloins & burgers. Family-friendly fun at 7025 Galen Dr W!",
    "url": "https://frostbite-avon-indiana.com/",
    "logo": "https://frostbite-avon-indiana.com/images/logo.png",
    "telephone": "+1-317-272-2483",
    "email": "frostbite7025@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "7025 Galen Dr W",
      "addressLocality": "Avon",
      "addressRegion": "IN",
      "postalCode": "46123",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "39.7628",
      "longitude": "-86.3970"
    },
    "servesCuisine": [
      "American",
      "Ice Cream",
      "Desserts",
      "Frozen Yogurt"
    ],
    "areaServed": {
      "@type": "City",
      "name": "Avon"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.5",
      "reviewCount": "807"
    },
    "sameAs": [
      "https://www.doordash.com/store/frost-bite-avon-34838511/72840348/",
      "https://maps.app.goo.gl/3fXb8V17mC1E5rec9"
    ]
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
        }}
      />
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-XKRLZH2M0R"
        strategy="lazyOnload"
      />
      <Script id="google-analytics" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-XKRLZH2M0R');
        `}
      </Script>
      <HeroSection />
      <AboutSection />
      <FeaturedProducts />
      <TestimonialSection />
      <GallerySection />
    </main>
  );
}