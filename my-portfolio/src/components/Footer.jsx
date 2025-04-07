import React from "react";
import { ArrowUp } from "lucide-react"; // Importing the icon

function Footer() {
  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#141516] w-full text-gray-400 py-10 relative">
      {/* Divider */}
      <div className="w-full h-[1px] bg-[#2c2c2d] mb-6"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col items-center justify-between gap-4 sm:gap-6 text-center md:text-left">
        {/* Text block */}
        <div className="flex flex-col items-center md:items-start md:flex-row md:gap-3 text-sm sm:text-base md:text-lg">
          <p className="mb-2 md:mb-0">© 2025 Lotanna Okeke</p>
          <p className="hidden md:inline">|</p>
          <p className="text-center md:text-left">
            Designed by <span className="text-white">Lotanna</span>. Distributed by 
            <span className="text-white"> Lotanna</span>
          </p>
        </div>

        {/* Scroll-to-top Button */}
        <button
          onClick={scrollToTop}
          className="absolute right-4 sm:right-6 bottom-4 sm:bottom-6 text-[#C8A26B] p-3 sm:p-4 rounded-full border border-[#2c2c2d] shadow-lg hover:text-black hover:bg-[#C8A26B] transition duration-300"
        >
          <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>
    </footer>
  );
}

export default Footer;
