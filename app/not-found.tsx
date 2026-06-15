import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <title>404 - Page Melted Away | Frost Bite Avon, IN</title>
      <meta name="description" content="The page you are looking for at Frost Bite cannot be found. Visit our menu for handcrafted ice cream, tenderloins, and burgers." />
      <meta name="robots" content="noindex" />

      <section
        className="relative w-full min-h-[100vh] flex items-center justify-center bg-cover bg-no-repeat bg-center bg-fixed py-20 px-4 sm:px-6 lg:px-8"
        style={{ backgroundImage: "url('/images/menu-bg-item.jpg')" }}
      >
        {/* Semi-transparent Overlay */}
        <div className="absolute inset-0 bg-[#046069]/10 backdrop-blur-xs"></div>

        <div className="relative z-10 max-w-2xl w-full space-y-8 text-center">
          {/* Error Number - Animated */}
          <div className="relative">
            <div className="text-[150px] sm:text-[180px] md:text-[220px] font-black text-[#c07f07]/10 tracking-tighter leading-none select-none">
              404
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-[150px] sm:text-[180px] md:text-[220px] font-black text-transparent bg-clip-text bg-gradient-to-r from-[#c07f07] to-[#046069] animate-pulse select-none">
                404
              </div>
            </div>
          </div>

          {/* Content Card */}
          <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl shadow-[#046069]/10 p-8 md:p-12 border border-white/20 transform transition-all duration-300 hover:shadow-3xl">
            {/* Location Badge */}
            

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
               Oops! Page Not Found
            </h1>

            {/* Description */}
            <p className="text-base md:text-lg text-gray-600 mb-8 max-w-md mx-auto leading-relaxed">
              Sorry, the page you're looking for doesn't exist or has been moved.
              Let's get you back to exploring our ice cream and food.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/"
                className="group relative w-full sm:w-auto min-w-[200px] px-8 py-4 rounded-xl bg-gradient-to-r from-[#c07f07] to-[#046069] text-white font-semibold text-base shadow-lg shadow-[#c07f07]/30 hover:shadow-xl hover:shadow-[#c07f07]/40 transform hover:-translate-y-0.5 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative flex items-center justify-center gap-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  Return to Homepage
                </span>
              </Link>
              <Link
                href="/menu"
                className="group relative w-full sm:w-auto min-w-[200px] px-8 py-4 rounded-xl bg-white border-2 border-[#c07f07] text-[#c07f07] font-semibold text-base hover:bg-[#c07f07] hover:text-white shadow-lg shadow-gray-100 hover:shadow-xl hover:shadow-[#c07f07]/20 transform hover:-translate-y-0.5 transition-all duration-300 overflow-hidden"
              >
                <span className="relative flex items-center justify-center gap-3">
                  <span>Explore Our Menu</span>
                </span>
              </Link>
            </div>

            {/* Help Text */}
            <p className="mt-8 text-sm text-gray-500">
              Need assistance? Call us at{" "}
              <a href="tel:+13172722483" className="text-[#c07f07] hover:underline font-bold">
                (317) 272-2483
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
