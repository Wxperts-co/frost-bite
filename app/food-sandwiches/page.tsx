// app/food-sandwiches/page.tsx
import type { Metadata } from 'next';
import Breadcrumb from '@/components/common/breadcrumb';
import FoodSandwichesClient from './FoodSandwichesClient';

export const metadata: Metadata = {
  title: "Frost Bite | Food & Sandwiches Avon, IN",
  description: "Enjoy juicy burgers, crispy chicken, hot dogs, sandwiches & combo meals at Frost Bite in Avon, IN. Dine in or order online. Visit us today at 7025 Galen Dr W!",
  alternates: {
    canonical: "https://frostbite-avon-indiana.com/food-sandwiches",
  },
  keywords: [
    "food & sandwiches Avon, IN",
    "tenderloin sandwich Avon, Indiana",
    "breaded tenderloin near me Indiana",
    "burgers and ice cream Avon, IN",
    "chicken wrap Avon, Indiana",
    "fish sandwich near me Avon, IN",
    "hot dogs and burgers Avon, Indiana"
  ],
  openGraph: {
    title: "Frost Bite | Food & Sandwiches Avon, IN",
    description: "Enjoy juicy burgers, crispy chicken, hot dogs, sandwiches & combo meals at Frost Bite in Avon, IN. Dine in or order online. Visit us today at 7025 Galen Dr W!",
    url: "https://frostbite-avon-indiana.com/food-sandwiches",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Frost Bite | Food & Sandwiches Avon, IN",
    description: "Enjoy juicy burgers, crispy chicken, hot dogs, sandwiches & combo meals at Frost Bite in Avon, IN. Dine in or order online. Visit us today at 7025 Galen Dr W!",
  }
};

export const dynamic = 'force-dynamic';

export default function FoodSandwichesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Menu",
        "@id": "https://frostbite-avon-indiana.com/food-sandwiches#menu",
        "url": "https://frostbite-avon-indiana.com/food-sandwiches",
        "name": "Frost Bite Food & Sandwiches Menu",
        "description": "Enjoy juicy burgers, crispy chicken, hot dogs, sandwiches & combo meals at Frost Bite in Avon, IN.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://frostbite-avon-indiana.com/#website",
          "name": "Frost Bite",
          "url": "https://frostbite-avon-indiana.com/"
        },
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "@id": "https://frostbite-avon-indiana.com/food-sandwiches#breadcrumb",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://frostbite-avon-indiana.com"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Food & Sandwiches",
              "item": "https://frostbite-avon-indiana.com/food-sandwiches"
            }
          ]
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
        }}
      />
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
        <FoodSandwichesClient />
      </section>
    </>
  );
}