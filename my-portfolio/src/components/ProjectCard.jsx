import React from "react";
import { motion } from "framer-motion";

function ProjectCard({ project, onClick }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="cursor-pointer"
      onClick={onClick}
    >
      <img
        src={project.picture}
        alt={project.projectName}
        className="w-full rounded-lg mb-4"
      />
      <p className="text-yellow-400 text-sm uppercase">
        {project.projectTechnology}
      </p>
      <h3 className="text-xl font-serif">{project.projectName}</h3>
    </motion.div>
  );
}

export default ProjectCard;