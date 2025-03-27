import React, { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";

function Navigation() {
  const navLinks = [
    { name: "LOTANNA.", to: "intro", refresh: true },
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
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-1/2 transform -translate-x-1/2 w-[90%] md:w-[80%] bg-[#141516] z-50 border border-gray-700 flex flex-col md:flex-row md:justify-center">
      {navLinks.map((link, index) => (
        <div
          key={index}
          className={`flex-1 py-4 text-gray-400 text-xs md:text-sm uppercase tracking-wider cursor-pointer transition-all duration-300 border-b md:border-b-0 md:border-r border-gray-700 
            ${
              activeSection === link.to && !link.refresh
                ? "bg-[#2c2c2d] text-yellow-500 opacity-70"
                : "hover:text-white"
            } 
            ${index === navLinks.length - 1 ? "md:border-r-0" : ""}`}
          onClick={
            link.refresh
              ? () => {
                  window.scrollTo(0, 0);
                  setTimeout(() => window.location.reload(), 50);
                }
              : undefined
          }
        >
          {link.refresh ? (
            <span className="pl-6">{link.name}</span> //Making each navigation stay towards the left
          ) : (
            <div
              onClick={() =>
                document
                  .getElementById(link.to)
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="pl-6"
            >
              {link.name}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Navigation;