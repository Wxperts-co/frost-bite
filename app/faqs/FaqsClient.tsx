"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
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

export default function FaqsClient() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First question active by default

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-[#1e1e1e] mb-4">
          Frequently Asked Questions About Frost Bite
        </h1>
        <div className="w-20 h-0.5 bg-[#c07f07] mx-auto"></div>
      </div>
      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div 
              key={index} 
              className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 shadow-sm"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className={`w-full flex justify-between items-center p-5 text-left transition-colors duration-300 ${
                  isOpen ? "bg-[#c07f07] text-white" : "bg-gray-50 text-[#1e1e1e] hover:bg-gray-100"
                }`}
              >
                <h2 className="font-semibold text-lg pr-4">{faq.question}</h2>
                <div className="flex-shrink-0">
                  {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                </div>
              </button>
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-5 bg-white text-gray-600 leading-relaxed">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
