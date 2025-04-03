import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

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
      let newActiveSection = activeSection;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.4 && rect.bottom >= 100) {
          newActiveSection = section.id;
        }
      });

      setActiveSection(newActiveSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 1.3,
        delay: 0.3,
      }}
      className="fixed top-0 left-1/2 transform -translate-x-1/2 w-[90%] md:w-[80%] bg-[#141516] z-50 border border-gray-700 flex flex-col md:flex-row md:justify-center"
    >
      {navLinks.map((link, index) => (
        <div
          key={index}
          className={`flex-1 py-4 text-gray-400 text-xs md:text-sm uppercase tracking-wider cursor-pointer transition-all duration-300 border-b md:border-b-0 md:border-r border-gray-700 
            ${
              activeSection === link.to && !link.refresh
                ? "bg-[#2c2c2d] text-yellow-300 opacity-60"
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
            <span className="pl-6">{link.name}</span>
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
    </motion.div>
  );
}

export default Navigation;
