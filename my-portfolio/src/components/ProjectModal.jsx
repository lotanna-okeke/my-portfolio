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
        className="bg-[#1b1b1d] text-white p-8 rounded-2xl max-w-lg w-full shadow-xl relative transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-2 text-gray-400 hover:text-white text-2xl transition-all hover:scale-110"
          onClick={onClose}
        >
          ✕
        </button>

        {/* Project Image with Glass Effect */}
        <img
          src={project.picture}
          alt={project.projectName}
          className="w-full h-64 object-cover rounded-lg shadow-lg"
        />

        {/* Project Details */}
        <div className="mt-6 text-center">
          <h3 className="text-3xl font-bold text-yellow-400">
            {project.projectName}
          </h3>
          <p className="text-gray-400 text-sm mt-1">
            {project.projectTechnology}
          </p>

          {/* Animated Divider */}
          <div className="w-16 h-[3px] bg-yellow-500 mx-auto my-4 animate-pulse"></div>

          {/* Project Description */}
          <p className="text-gray-300 text-md leading-relaxed px-2">
            {project.projectDescription}
          </p>

          {/* Skills Section */}
          <div className="mt-5 flex flex-wrap justify-center gap-2">
            {project.skillsUsed.map((skill, index) => (
              <span
                key={index}
                className="bg-gray-800 text-gray-300 px-3 py-1 text-xs rounded-full transition hover:bg-yellow-500 hover:text-black"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Project Link Button */}
          <a
            href={project.projectLink}
            className="inline-block bg-yellow-500 text-black font-semibold py-3 px-6 rounded-lg mt-6 transition-all duration-300 hover:bg-yellow-600 hover:scale-105"
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
