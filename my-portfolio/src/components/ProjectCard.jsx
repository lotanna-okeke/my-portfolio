import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react"; // Importing the icon

function ProjectCard({ project, onClick }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.1 }}
      className="flex flex-row justify-between p-4 rounded-2xl cursor-pointer text-white transition-all duration-900 hover:text-[#C8A26B]"
      onClick={onClick}
    >
      {/* Left Section (Image + Details) */}
      <div className="flex w-full">
        <img
          src={project.picture}
          alt={project.projectName}
          className="w-[30%] h-[100%] object-cover rounded-lg shadow-md shadow-[#C8A26B]"
        />

        <div className="ps-6 flex-grow relative">
          {/* Animated Line (One Continuous Line) */}
          <motion.div
            className="absolute top-0 left-6 w-[93%] h-[2px] bg-[#C8A26B]"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={isHovered ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            style={{ transformOrigin: "left" }}
          />

          <p className="text-sm uppercase text-gray-400 mt-6">
            {project.projectTechnology}
          </p>
          <h3 className="text-3xl w-200 max-w-2xs font-semibold mt-1">
            {project.projectName}
          </h3>
        </div>

        {/* Icon replacing "lol" */}
        <motion.div
          className="ml-4 text-gray-400"
          initial={{ opacity: 0, x: -10 }}
          animate={isHovered ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }} // Staggered effect
        >
          <ArrowUpRight size={24} />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
