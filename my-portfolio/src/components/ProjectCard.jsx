import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

function ProjectCard({ project, onClick }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.03 }}
      className="flex flex-col sm:flex-row justify-between bg-[#2c2c2d] md:bg-[#2c2c2d00] p-4 rounded-2xl cursor-pointer text-white transition-all duration-500 hover:text-[#C8A26B]"
      onClick={onClick}
    >
      {/* Left Section (Image + Details) */}
      <div className="flex w-full flex-col sm:flex-row">
        <img
          src={project.picture}
          alt={project.projectName}
          className="w-full md:w-32 sm:w-1/3 h-auto md:h-32 object-cover rounded-lg shadow-md shadow-[#5b4f3e] mb-4 sm:mb-0"
        />

        {/* Text + Arrow Group */}
        <div className="ps-0 sm:ps-6 flex flex-col  relative w-full">
          {/* Animated Line */}
          <motion.div
            className="hidden sm:block absolute top-0 left-6 w-[93%] h-[2px] bg-[#C8A26B]"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={isHovered ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            style={{ transformOrigin: "left" }}
          />

          <p className="text-sm uppercase text-gray-400 mt-2 sm:mt-6">
            {project.projectTechnology}
          </p>

          <div className="flex items-center justify-between">
            <h3 className="text-xl sm:text-2xl font-semibold">
              {project.projectName}
            </h3>

            {/* Arrow Icon (positioned inline on small screens) */}
            <motion.div
              className="text-gray-400 sm:ml-4"
              initial={{ opacity: 0, x: -10 }}
              animate={isHovered ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
            >
              <ArrowUpRight size={24} />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
