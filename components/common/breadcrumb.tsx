import Link from "next/link";
import Image from "next/image";

interface BreadcrumbProps {
  title: string;
  backgroundImage?: string;
  pageName?: string;
  currentPath?: string;
  showHiringBadge?: boolean;
}

export default function Breadcrumb({ 
  title, 
  backgroundImage = "/images/inner-bg-1.jpg",
  pageName,
  currentPath,
  showHiringBadge = true
}: BreadcrumbProps) {
  const currentPageName = pageName || currentPath?.replace(/-/g, " ") || title;

  return (
    <div className="relative z-10 pt-[180px] pb-[100px] md:pt-[235px] md:pb-[125px] overflow-hidden">
      {/* Background Image */}
      <Image
        src={backgroundImage}
        alt="Background"
        fill
        className="object-cover object-center -z-20"
        priority
        sizes="100vw"
        quality={100}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 z-[-10] bg-[#1e1e1e] opacity-75"></div>
      
      
      
      <div className="container mx-auto px-4 max-w-[1320px] relative z-10">
        <div className="flex flex-wrap">
          <div className="w-full px-4">
            <div className="text-center">
              {/* Breadcrumb Navigation */}
              <div className="mb-4">
                <ul className="p-0 m-0 flex items-center justify-center gap-2 flex-wrap">
                  <li className="inline-block font-['Playfair_Display'] text-[#c19d68] font-semibold text-sm leading-6">
                    <Link href="/" className="text-white/80 hover:text-[#c19d68] transition-all duration-300">
                      Home
                    </Link>
                  </li>
                  <li className="text-white/50 text-sm">/</li>
                  <li className="inline-block font-['Playfair_Display'] text-[#c19d68] font-semibold text-sm leading-6">
                    {currentPageName.charAt(0).toUpperCase() + currentPageName.slice(1)}
                  </li>
                </ul>
              </div>
              
              {/* Title */}
              <h1 className="text-white font-bold text-3xl md:text-5xl lg:text-6xl mb-4 font-['Playfair_Display']">
                {title}
              </h1>
              
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}