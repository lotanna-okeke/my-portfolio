import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { socials } from "../assets/assests";

const careers = [
  "Mobile Developer",
  "Data Scientist",
  "Web Developer",
  "UI/UX Designer",
];

function Intro() {
  const [careerIndex, setCareerIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [darkenedCircles, setDarkenedCircles] = useState(
    new Array(6).fill(false)
  );

  useEffect(() => {
    let timeout;
    const currentCareer = careers[careerIndex];

    if (isDeleting) {
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1));
        if (displayedText === "") {
          setIsDeleting(false);
          setCareerIndex((prev) => (prev + 1) % careers.length);
        }
      }, 100);
    } else {
      timeout = setTimeout(() => {
        setDisplayedText(currentCareer.slice(0, displayedText.length + 1));
        if (displayedText === currentCareer) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      }, 150);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, careerIndex]);

  const baseSizes = [100, 200, 300, 400, 500, 800];

  const getResponsiveSize = (baseSize) => {
    if (window.innerWidth < 640) return baseSize * 0.4;
    if (window.innerWidth < 768) return baseSize * 0.6;
    if (window.innerWidth < 1024) return baseSize * 0.8;
    return baseSize;
  };

  const [circleSizes, setCircleSizes] = useState(
    baseSizes.map(getResponsiveSize)
  );

  useEffect(() => {
    const handleResize = () => {
      setCircleSizes(baseSizes.map(getResponsiveSize));
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="intro"
      className="min-h-screen flex flex-col items-start justify-center relative px-5 sm:px-10 overflow-hidden"
    >
      {/* Intro Text */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="max-w-4xl"
      >
        <div className="ps-5 sm:ps-20">
          <div className="flex items-center gap-[3px]">
            <p className="w-8 md:w-10 h-[1px] bg-[#C8A26B] opacity-70"></p>
            <p className="text-[#C8A26B] text-sm sm:text-xl uppercase tracking-widest leading-none ps-2">
              Hello World,
            </p>
            <p className="text-sm sm:text-xl uppercase tracking-widest leading-none ps-2">
              I am
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="max-w-4xl ps-5 sm:ps-20 mt-5"
      >
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-serif leading-tight">
          Lotanna Okeke.
          <br />
          <span className="text-2xl sm:text-5xl">
            A <span className="text-[#C8A26B]">{displayedText}</span>
            <span className="blinking-cursor">|.</span>
          </span>
        </h1>
      </motion.div>

      {/* Animated Semicircles */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 flex flex-col items-end">
        {circleSizes.map((size, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.3, duration: 0.6 }}
            onAnimationComplete={() => {
              setTimeout(() => {
                setDarkenedCircles((prev) => {
                  const updatedCircles = [...prev];
                  updatedCircles[index] = true;
                  return updatedCircles;
                });
              }, 600);
            }}
            className="rounded-full"
            style={{
              width: `${size * 2}px`,
              height: `${size * 2}px`,
              borderBottom: "none",
              position: "absolute",
              right: "-10%",
              top: `calc(50% - ${size}px)`,
              border: `2px solid ${
                darkenedCircles[index] ? "#2A2620" : "#C8A26B"
              }`,
              transition: "border-color 0.5s ease-in-out",
            }}
          ></motion.div>
        ))}
      </div>

      {/* Social Media Links */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2.5, duration: 0.5 }}
        className="absolute right-5 sm:right-10 top-1/2 transform -translate-y-1/2 flex mt-70 space-y-4 text-gray-500 text-xs tracking-widest rotate-90 origin-right uppercase"
      >
        {socials.map((site, index) => (
          <a
            key={index}
            href={site[1]}
            className="ms-10 sm:ms-20 uppercase hover:text-[#C8A26B] transition"
          >
            {site[0]}
          </a>
        ))}
      </motion.div>
    </section>
  );
}

export default Intro;
