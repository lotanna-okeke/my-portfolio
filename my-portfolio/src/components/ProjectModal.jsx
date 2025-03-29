import React from "react";
import { motion } from "framer-motion";

function ProjectModal({ project, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="bg-white text-gray-900 p-6 rounded-lg max-w-md mx-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
          onClick={onClose}
        >
          ✕
        </button>
        <img
          src={project.picture}
          alt={project.projectName}
          className="w-full rounded-lg mb-4"
        />
        <h3 className="text-xl font-serif mb-2">{project.projectName}</h3>
        <p className="text-sm text-gray-600 mb-2">
          {project.projectDescription}
        </p>
        <p className="text-sm text-gray-600 mb-2">
          <strong>Skills:</strong> {project.skillsUsed.join(", ")}
        </p>
        <a
          href={project.projectLink}
          className="text-blue-500 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Project Link
        </a>
      </motion.div>
    </motion.div>
  );
}

export default ProjectModal;