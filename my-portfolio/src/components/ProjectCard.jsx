import React, { useState } from "react";
import { motion } from "framer-motion";
// import Icon from '@mui/material/Icon';


function ProjectCard({ project, onClick }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
      className="flex flex-row justify-between p-4 rounded-2xl cursor-pointer transition-all duration-900 hover:bg-[#2c2c2d]"
      onClick={onClick}
    >
      {/* Left Section (Image + Details) */}
      <div className="flex w-full">
        <img
          src={project.picture}
          alt={project.projectName}
          className="w-[25%] h-[100%] object-cover rounded-lg shadow-lg shadow-amber-50"
        />

        <div className="ps-4 flex-grow relative">
          {/* Animated Line (One Continuous Line) */}
          <motion.div
            className="absolute top-0 left-0 w-full h-[2px] bg-[#C8A26B]"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={isHovered ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            style={{ transformOrigin: "left" }}
          />

          <p className="text-sm uppercase text-gray-400 mt-4">
            {project.projectTechnology}
          </p>
          <h3 className="text-3xl w-200 max-w-2xs font-semibold text-white">
            {project.projectName}
          </h3>
        </div>

        {/* "lol" is now part of the main structure */}
        <motion.p
          className="text-md uppercase text-gray-400 ml-4"
          initial={{ opacity: 0 }}
          animate={isHovered ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }} // Staggered effect
        >
          lol
        </motion.p>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
