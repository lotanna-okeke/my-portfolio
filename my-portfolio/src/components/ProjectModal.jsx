import React from "react";
import { motion } from "framer-motion";

function ProjectModal({ project, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md p-6 z-50"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-[#2c2c2d] text-white p-8 rounded-2xl max-w-lg w-full shadow-xl relative transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          className="absolute top-1 right-2 text-gray-400 hover:text-white text-2xl transition-all hover:scale-110"
          onClick={onClose}
        >
          ✕
        </button>

        {/* Project Image with Glass Effect */}
        <div className="flex justify-center">
          <img
            src={project.picture}
            alt={project.projectName}
            className="rounded-lg shadow-lg w-full max-w-64 h-32 md:h-64 object-cover"
          />
        </div>

        {/* Project Details */}
        <div className="mt-6 text-center">
          <h3 className="text-xl md:text-3xl font-bold text-[#C8A26B]">
            {project.projectName}
          </h3>
          <p className="text-gray-400 text-sm mt-1">
            {project.projectTechnology}
          </p>

          {/* Animated Divider */}
          <div className="w-16 h-[3px] bg-[#C8A26B] mx-auto my-4 animate-pulse"></div>

          {/* Project Description */}
          <p className="text-white text-sm md:text-md leading-relaxed px-2">
            {project.projectDescription}
          </p>

          {/* Skills Section */}
          <div className="mt-5 flex flex-wrap justify-center gap-1 md:gap-2">
            {project.skillsUsed.map((skill, index) => (
              <span
                key={index}
                className="text-[#C8A26B] px-2 py-1 text-xs md:text-sm rounded-full cursor-default transition hover:bg-[#C8A26B] hover:text-black"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Project Link Button */}
          <a
            href={project.projectLink}
            className="inline-block bg-white text-black font-semibold py-3 px-6 rounded-lg mt-6 transition-all duration-300 hover:bg-[#C8A26B] hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default ProjectModal;