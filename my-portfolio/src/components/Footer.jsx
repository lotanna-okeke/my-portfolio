import React from "react";
import { ArrowUp } from "lucide-react"; // Importing the icon

function Footer() {
  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#141516] max-w-7xl mx-auto text-gray-400 py-10 relative">
      {/* Divider */}
      <div className="w-full h-[1px] bg-[#2c2c2d] mb-6"></div>

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-center md:text-left">
        <div className="flex gap-2">
          <p className="text-lg mb-3 md:mb-0">© 2025 Lotanna Okeke</p>
          <p className="text-lg mb-3 md:mb-0">|</p>
          <p className="text-lg">
            Designed by <span className="text-white">StyleShoot</span>.
            Distributed by <span className="text-white">ThemeWagon</span>
          </p>
        </div>

        {/* Scroll-to-top Button */}
        <button
          onClick={scrollToTop}
          className="absolute right-6 bottom-6 text-[#C8A26B] p-3 rounded-full border border-[#2c2c2d] shadow-lg hover:text-black hover:bg-[#C8A26B] transition duration-300"
        >
          <ArrowUp className="text-lg" />
        </button>
      </div>
    </footer>
  );
}

export default Footer;
