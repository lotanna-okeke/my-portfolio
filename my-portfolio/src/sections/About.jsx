import React from "react";
import { assests } from "../assets/assests";
import { motion } from "framer-motion";
import Expertise from "../components/Expertise";

function About() {
  return (
    <section id="about" className="min-h-screen flex flex-col items-center relative pe-20 bg-[#141516]">
      {/* About Section */}
      {/* <div className="max-w-7xl flex items-center relative w-full"> */}
      <div className="max-w-[85%] flex items-center relative w-full">
        {/* Image - Takes 50% of the Screen */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
        >
          <div className="w-1/2 h-full left-0">
            <img
              src={assests.profile}
              alt="Lotanna"
              className="w-dvw h-full object-cover rounded-lg"
            />
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-white absolute left-[49%] w-1/2"
        >
          <div className="mb-10 mt-10">
            <div className="flex items-center gap-[3px]">
              <p className="w-8 md:w-10 h-[1px] bg-white opacity-70"></p>
              <p className="text-[#C8A26B] text-xl uppercase tracking-widest leading-none ps-2">
                About
              </p>
            </div>
          </div>

          <p className="text-gray-300 text-3xl leading-relaxed mb-10">
            I’m Lotanna Okeke — a creative Software Engineer and Data enthusiast
            with a strong foundation in Computer Science. I specialize in
            building user-focused web and mobile applications, blending solid
            backend engineering with modern UI/UX principles. From full-stack
            development to data-driven solutions, I’m passionate about turning
            ideas into impactful digital products.
          </p>
        </motion.div>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="absolute left-[49%] top-[85%]"
        >
          <button className="px-50 py-5 text-sm tracking-widest font-semibold bg-[#2c2c2d] text-[#C8A26B] hover:bg-[#C8A26B] hover:text-black transition duration-300 uppercase">
            Download CV
          </button>
        </motion.div>
      </div>

      {/* Divider */}
      <div className="w-[1px] h-32 bg-[#2c2c2d] my-16"></div>

      <Expertise/>
    </section>
  );
}

export default About;
