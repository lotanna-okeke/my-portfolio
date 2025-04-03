import React from "react";
import { motion } from "framer-motion";
import Experience from "./Experience";
import { experiences } from "../assets/assests";

function Expertise() {
  // Group experiences by type
  const workExperience = experiences.filter((exp) => exp.type === 1);
  const educationExperience = experiences.filter((exp) => exp.type === 2);

  return (
    <div>
      {/* Expertise Section */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto w-full px-4"
      >
        {/* Expertise Header */}
        <div className="flex items-center gap-[3px] mb-10">
          <p className="w-8 md:w-10 h-[1px] bg-white opacity-70"></p>
          <p className="text-[#C8A26B] text-xl uppercase tracking-widest leading-none ps-2">
            Expertise
          </p>
        </div>

        {/* Expertise Content */}
        <h2 className="text-white text-4xl md:text-5xl font-semibold leading-relaxed mb-15">
          Visual Design, Branding Identity, UI Design, Product Design,
          Prototyping, Illustration
        </h2>

        {/* Experience & Education Timeline */}
        <div className="flex flex-col md:flex-row justify-between gap-20">
          {/* Work Experience Section */}
          <div className="w-full md:w-1/2">
            <h3 className="text-white text-xl mb-5 ms-6 uppercase tracking-widest">
              Experience
            </h3>
            <div className="relative pl-6 border-l border-gray-700">
              {workExperience.map((exp, index) => (
                <Experience key={index} experience={exp} />
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div className="w-full md:w-1/2">
            <h3 className="text-white text-xl mb-5 ms-6 uppercase tracking-widest">
              Education
            </h3>
            <div className="relative pl-6 border-l border-gray-700">
              {educationExperience.map((exp, index) => (
                <Experience key={index} experience={exp} />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Expertise;
