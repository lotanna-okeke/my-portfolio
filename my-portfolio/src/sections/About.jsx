import React from "react";
import { assests } from "../assets/assests";
import { motion } from "framer-motion";
import Expertise from "../components/Expertise";

function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center bg-[#141516] px-4 md:px-10"
    >
      {/* About Section */}
      <div className="w-full max-w-7xl flex flex-col md:flex-row items-center md:items-center gap-10 relative">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2"
        >
          <img
            src={assests.profile}
            alt="Lotanna"
            className="w-full h-full object-cover rounded-lg"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="w-full md:w-[52%] lg:w-[55%] md:ml-[-1%] lg:ml-[-4%] text-white"
        >
          <div className="mb-6">
            <div className="flex items-center gap-[3px]">
              <p className="w-8 md:w-10 h-[1px] bg-white opacity-70"></p>
              <p className="text-[#C8A26B] text-xl uppercase tracking-widest leading-none ps-2">
                About
              </p>
            </div>
          </div>

          <p className="text-gray-300 text-lg md:text-2xl leading-relaxed mb-10">
            I’m Lotanna Okeke — a creative Software Engineer and Data enthusiast
            with a strong foundation in Computer Science. I specialize in
            building user-focused web and mobile applications, blending solid
            backend engineering with modern UI/UX principles. From full-stack
            development to data-driven solutions, I’m passionate about turning
            ideas into impactful digital products.
          </p>

          {/* Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <button className="w-full py-3 text-xs md:px-8 md:py-3 md:text-sm tracking-widest font-semibold bg-[#2c2c2d] text-[#C8A26B] hover:bg-[#C8A26B] hover:text-black transition duration-300 uppercase">
              Download CV
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Divider */}
      <div className="w-[1px] h-12 md:h-32 bg-[#2c2c2d] my-10 md:my-16"></div>

      <Expertise />
      {/* Divider */}
      <div className="w-full h-[1px] bg-[#2c2c2d] my-10 md:my-16"></div>
    </section>
  );
}

export default About;