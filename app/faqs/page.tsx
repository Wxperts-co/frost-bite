import type { Metadata } from "next";
import Breadcrumb from "@/components/common/breadcrumb";
import FaqsClient from "./FaqsClient";

export const metadata: Metadata = {
  title: "Frost Bite FAQs | Ice Cream, Shakes & Food in Avon, IN",
  description: "Find answers to popular FAQs about Frost Bite in Avon, IN. Explore our menu of handcrafted soft serve, milkshakes, signature Frosts, burgers & daily hours.",
  keywords: "Frost Bite Avon Indiana, ice cream shop Avon IN, Frost Bite FAQs, handcrafted frozen treats Avon, hand-spun milkshakes Avon, signature Frosts ice cream, Dippin Dots Avon IN, burgers and tenderloins Avon, ice cream and hot food Avon Indiana,",
  alternates: {
    canonical: "https://frostbite-avon-indiana.com/faqs",
  },
  openGraph: {
    title: "Frost Bite FAQs | Ice Cream, Shakes & Food in Avon, IN",
    description: "Find answers to popular FAQs about Frost Bite in Avon, IN. Explore our menu of handcrafted soft serve, milkshakes, signature Frosts, burgers & daily hours.",
    url: "https://frostbite-avon-indiana.com/faqs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Frost Bite FAQs | Ice Cream, Shakes & Food in Avon, IN",
    description: "Find answers to popular FAQs about Frost Bite in Avon, IN. Explore our menu of handcrafted soft serve, milkshakes, signature Frosts, burgers & daily hours.",
  }
};

const faqsData = [
  {
    question: "What makes Frost Bite a must-visit ice cream shop in Avon, Indiana?",
    answer: "Frost Bite is a go-to destination for handcrafted frozen treats, classic flavors, and a relaxed atmosphere that makes every visit feel easy and enjoyable. This family-owned Avon favorite offers soft serve, hard ice cream, shakes, sundaes, burgers, sandwiches, tenderloins, sides, drinks, and kids’ meals."
  },
  {
    question: "What should chocolate and dessert lovers try at Frost Bite?",
    answer: "Chocolate lovers can choose from chocolate soft serve, chocolate hard ice cream, chocolate chip and hot fudge shakes, chocolate sundaes, or richer specialties such as Fudge Brownie Supreme and Mocha Mudslide. For an extra indulgent treat, the Turtle and Fudge Brownie Supreme Frosts add chocolate to creamy frozen creations."
  },
  {
    question: "Do you offer milkshakes in different flavors and sizes?",
    answer: "Yes. We serve thick, hand-spun milkshakes in Jr., Small, Medium, and Large sizes. The menu includes classics such as chocolate and vanilla alongside Oreo, peanut butter, coffee, hot fudge, mint, banana, strawberry, blueberry, raspberry, black raspberry, pineapple, lemon, cherry, butterscotch, marshmallow, and chocolate chip."
  },
  {
    question: "What is a frost, and what flavors can I choose?",
    answer: "A Frost is our signature frozen treat made by blending soft serve with flavorful mix-ins. The choices include Heath, NY Cheesecake, M&M, Snickers, Butterfinger, Apple Pie, Nerds, Banana, Brownie, and Chocolate Chip. Each comes in Jr., Small, Medium, or Large, making it easy to choose your favorite combination."
  },
  {
    question: "What makes Dippin’ Dots the ‘ice cream of the future’ at Frost Bite?",
    answer: "Dippin’ Dots are a fun alternative to traditional ice cream, served as small, frozen beads with a unique texture and flavor experience. At Frost Bite, you can choose from Chocolate, Cookies & Cream, Rainbow, cookie dough, cotton candy, birthday cake, and cake and banana split flavors."
  },
  {
    question: "What can I order if I’m craving something cold but not ice cream?",
    answer: "If you’re looking for something cold beyond ice cream, we have plenty of refreshing choices. You can try a fruit-flavored slushie, a creamy freeze, or a soft-serve float made with your favorite soda. You can also enjoy Dippin’ Dots, lemonade, or other chilled drinks for a refreshing treat."
  },
  {
    question: "Can I try something more adventurous at Frost Bite?",
    answer: "Yes. Alongside our classic favorites such as vanilla and chocolate, we have some fun choices for adventurous ice cream lovers, including Blue Panda, Superman, Mint Chocolate, Coffee, Orange Sherbet, and NSA Butterpecan. For an even bigger twist, you can try a specialty frost or signature dessert."
  },
  {
    question: "What can I order when I want a full meal instead of dessert?",
    answer: "We have plenty of savory options when you’re looking for a meal. The menu includes hamburgers, cheeseburgers, bacon cheeseburgers, grilled and breaded chicken sandwiches, BBQ sandwiches, fish sandwiches, chicken wraps, pork tenderloins, hot dogs, corn dogs, and chicken tenders, plus filling sides."
  },
  {
    question: "What are some good sides to pair with a burger or sandwich?",
    answer: "You can turn your meal into a more complete combination with several side options. The choices include classic French fries, cheese fries, mozzarella cheese sticks, mac and cheese bites, spicy cheese balls, breaded zucchini, mushrooms, onion rings, tater kegs, and Wisconsin white cheddar cheese curds."
  },
  {
    question: "What are your opening hours?",
    answer: "We keep our doors open late so you don’t have to rush your ice cream plans. Stop by anytime between 11 AM and 10 PM Monday through Saturday or visit on Sunday from 12 PM to 10 PM. There’s plenty of time to fit a Frost Bite stop into your day."
  }
];

export default function FaqsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        "@id": "https://frostbite-avon-indiana.com/faqs#faqpage",
        "url": "https://frostbite-avon-indiana.com/faqs",
        "name": "Frost Bite FAQs | Ice Cream, Shakes & Food in Avon, IN",
        "description": "Find answers to popular FAQs about Frost Bite in Avon, IN.",
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "@id": "https://frostbite-avon-indiana.com/faqs#breadcrumb",
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
              "name": "FAQs",
              "item": "https://frostbite-avon-indiana.com/faqs"
            }
          ]
        },
        "mainEntity": faqsData.map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
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
        title="FAQs"
        backgroundImage="/images/inner-bg-1.jpg"
        pageName="FAQs"
      />
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-[900px]">
          <FaqsClient />
        </div>
      </section>
    </>
  );
}
