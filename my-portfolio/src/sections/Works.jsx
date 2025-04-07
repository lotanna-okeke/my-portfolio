import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";
import { motion } from "framer-motion";
import { allProjects } from "../assets/assests";

function Works() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = allProjects;

  // Framer Motion Variants for Staggered Animation
  const containerVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <section id="works" className="min-h-screen py-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        className="max-w-7xl mx-auto w-full px-4"
      >
        {/* Header */}
        <div className="flex items-center gap-[3px] mb-6 sm:mb-10">
          <p className="w-8 md:w-10 h-[1px] bg-white opacity-70"></p>
          <p className="text-[#C8A26B] text-lg sm:text-xl uppercase tracking-widest leading-none ps-2">
            Recent Works
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-10 text-white">
            Here are some of my favorite projects I have done lately. Feel free
            to check them out.
          </h2>

          {/* Staggered Grid Animation */}
          <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <motion.div key={project.id} variants={itemVariants}>
                <ProjectCard
                  project={project}
                  onClick={() => setSelectedProject(project)}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {selectedProject && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center p-4">
            <div className="w-full max-w-xl sm:max-w-2xl">
              <ProjectModal
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
              />
            </div>
          </div>
        )}
      </motion.div>
      {/* Divider */}
      <div className="w-full h-[1px] bg-[#2c2c2d] my-10 md:my-16"></div>
    </section>
  );
}

export default Works;