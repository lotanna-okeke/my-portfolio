import React from "react";
import { assests } from "../assets/assests";

function About() {
  return (
    <section id="about" className="min-h-screen flex items-center relative px-10 bg-[#141516]">
      <div className="max-w-7xl mx-auto flex items-center relative">
        
        {/* Image - Takes 50% of the Screen */}
        <div className="w-1/2 h-full left-0">
          <img
            src={assests.dummyPic}
            alt="Luther"
            className="w-dvw h-full object-cover rounded-lg"
          />
        </div>

        {/* Text - Overlapping the Image Slightly */}
        <div className="absolute left-[49%] w-1/2 text-white">
          <h3 className="text-[#C8A26B] text-sm uppercase tracking-widest mb-2">
            ─── About
          </h3>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
            ex ea commodo consequat.
          </p>
          <button className="px-8 py-3 text-sm tracking-widest font-semibold text-[#C8A26B] border border-[#C8A26B] hover:bg-[#C8A26B] hover:text-black transition duration-300 uppercase">
            Download CV
          </button>
        </div>
      </div>
    </section>
  );
}

export default About;
