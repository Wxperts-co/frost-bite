// app/contact-us/page.tsx (Alternative with pure Tailwind)
import Link from "next/link";
import Breadcrumb from "@/components/common/breadcrumb";
import Image from "next/image";

export const metadata = {
  title: "Contact Us | Frost Bite",
  description:
    "Get in touch with Frost Bite. Find our location, opening hours, and send us a message.",
};

export default function ContactUsPage() {
  return (
    <>
      <Breadcrumb
        title="Contact Us"
        backgroundImage="/images/inner-bg-1.jpg"
        pageName="Contact Us"
        showHiringBadge={true}
      />

      {/* Contact Section */}
      <section
        className="relative w-full bg-cover bg-no-repeat bg-center bg-fixed py-20 md:py-28 before:absolute before:inset-0 before:bg-white before:opacity-80"
        style={{ backgroundImage: "url('/images/contact-bg.jpg')" }}
      >
        <div className="relative z-10 container mx-auto px-4 ">
          <div className="flex flex-wrap -mx-4">
            {/* Left Column */}
            <div className="w-full lg:w-1/3 md:w-1/2 px-4 mb-8 lg:mb-0">
              <div className="bg-transparent">
                {/* Opening Hours */}
                <div className="mb-10">
                  <h3 className="text-2xl font-bold text-[#1e1e1e] mb-4">
                    Opening Hours
                  </h3>
                  <ul className="space-y-1">
                    <li className="text-[#000]">
                      Monday - Saturday: 11 AM - 9 PM
                    </li>
                    <li className="text-[#000]">Sunday: 12 PM - 8 PM</li>
                  </ul>
                </div>

                {/* Contact Info */}
                <div className="mb-10">
                  <h3 className="text-2xl font-bold text-[#1e1e1e] mb-4">
                    Contact Info
                  </h3>
                  <ul className="space-y-3">
                    {/* Address - External Google Maps Link */}
                    <li className="text-[#000]">
                      <Link
                        href="https://maps.app.goo.gl/3fXb8V17mC1E5rec9"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#c07f07] transition-colors duration-300"
                      >
                        7025 Galen Dr W, Avon, IN 46123, United States
                      </Link>
                    </li>

                    {/* Email - Mailto link (use <a> tag for mailto: and tel:) */}
                    <li>
                      <a
                        href="mailto:frostbite7025@gmail.com"
                        className="text-[#000] hover:text-[#c07f07] transition-colors duration-300"
                      >
                        frostbite7025@gmail.com
                      </a>
                    </li>

                    {/* Phone - Tel link (use <a> tag for mailto: and tel:) */}
                    <li>
                      <a
                        href="tel:+13172722483"
                        className="text-[#000] hover:text-[#c07f07] transition-colors duration-300"
                      >
                        (317) 272-2483
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Social Contact */}
                <div>
                  <h3 className="text-2xl font-bold text-[#1e1e1e] mb-4">
                    Social Contact
                  </h3>
                  <div className="flex gap-2">
                    <a
                      href="#"
                      className="w-11 h-11 rounded-full border border-gray-300 flex items-center justify-center  hover:border-[#c07f07] transition-all duration-300"
                    >
                      <Image
                        src="/images/social/facebook.png"
                        alt="Facebook"
                        width={20}
                        height={20}
                        className="object-contain"
                      />
                    </a>
                    <a
                      href="#"
                      className="w-11 h-11 rounded-full border border-gray-300 flex items-center justify-center  hover:border-[#c07f07] transition-all duration-300"
                    >
                      <Image
                        src="/images/social/youtube.png"
                        alt="YouTube"
                        width={20}
                        height={20}
                        className="object-contain"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="w-full lg:w-2/3 md:w-1/2 px-4">
              <div className="bg-transparent">
                <h3 className="text-2xl font-bold text-[#1e1e1e] mb-6">
                  Drop us a line
                </h3>

                <form action="#" method="POST">
                  <div className="flex flex-wrap -mx-3">
                    <div className="w-full md:w-1/2 px-3 mb-6">
                      <input
                        type="text"
                        name="username"
                        placeholder="Your Name *"
                        required
                        className="w-full h-12 border border-gray-600 rounded-lg px-4 text-[#000] italic focus:border-[#c07f07] focus:outline-none"
                      />
                    </div>
                    <div className="w-full md:w-1/2 px-3 mb-6">
                      <input
                        type="email"
                        name="email"
                        placeholder="Your Email *"
                        required
                        className="w-full h-12 border border-gray-600 rounded-lg px-4 text-[#000] italic focus:border-[#c07f07] focus:outline-none"
                      />
                    </div>
                    <div className="w-full md:w-1/2 px-3 mb-6">
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Your Phone"
                        className="w-full h-12 border border-gray-600 rounded-lg px-4 text-[#000] italic focus:border-[#c07f07] focus:outline-none"
                      />
                    </div>
                    <div className="w-full md:w-1/2 px-3 mb-6">
                      <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        className="w-full h-12 border border-gray-600 rounded-lg px-4 text-[#000] italic focus:border-[#c07f07] focus:outline-none"
                      />
                    </div>
                    <div className="w-full px-3 mb-6">
                      <textarea
                        name="message"
                        placeholder="Your Message ..."
                        rows={5}
                        className="w-full border border-gray-600 rounded-lg px-4 py-2 text-[#000] italic focus:border-[#c07f07] focus:outline-none resize-none"
                      ></textarea>
                    </div>
                    <div className="w-full px-3">
                      <button
                        type="submit"
                        className="bg-[#c07f07] text-white px-8 py-3 rounded-full font-semibold uppercase text-sm hover:bg-[#1e1e1e] transition-all"
                      >
                        Submit Now
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="w-full h-[400px] md:h-[570px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3065.847171270115!2d-86.38991568461908!3d39.77504597945578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886cb0c5c7d5e5e5%3A0x8e2e5e5e5e5e5e5e!2s7025%20Galen%20Dr%20W%2C%20Avon%2C%20IN%2046123!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          className="w-full h-full"
        ></iframe>
      </section>
    </>
  );
}
