import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";

function Navigation() {
  const navLinks = [
    { name: "INTRO", to: "intro" },
    { name: "ABOUT", to: "about" },
    { name: "WORKS", to: "works" },
    { name: "SAY HELLO", to: "contact" },
  ];

  const [activeSection, setActiveSection] = useState("intro");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let foundActive = false;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (
          rect.top >= 0 &&
          rect.top <= window.innerHeight * 0.4 &&
          !foundActive
        ) {
          setActiveSection(section.id);
          foundActive = true;
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run on initial load
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black z-50 border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo (Refresh Page) */}
        <div className="text-yellow-400 text-lg font-semibold uppercase tracking-wider cursor-pointer">
          <Link
            to="intro"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            LUTHER.
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={300}
              spy={true}
              hashSpy={true}
              isDynamic={true}
              offset={-50}
              className={`text-gray-400 text-sm uppercase tracking-wider cursor-pointer hover:text-white transition-all duration-300 ${
                activeSection === link.to
                  ? "text-yellow-400 border-b-2 border-yellow-400"
                  : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
