import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";
import { assests } from "../assets/assests";
import { motion } from "framer-motion";


function Works() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      picture: assests.dummyPic,
      projectName: "Retro Camera",
      projectTechnology: "Website",
      projectDescription:
        "A modern and minimalist website showcasing vintage camera collections.",
      skillsUsed: ["Branding", "Product Design"],
      projectLink: "#",
    },
    {
      id: 2,
      picture: assests.dummyPic,
      projectName: "The White Lamp",
      projectTechnology: "Product Design",
      projectDescription:
        "A sleek and stylish lamp design emphasizing simplicity and elegance.",
      skillsUsed: ["Branding", "Minimalism"],
      projectLink: "#",
    },
  ];

  return (
    <section id="works" className="min-h-screen py-20">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1 }}
        className="max-w-7xl mx-auto w-full px-4"
      >
        {/* Expertise Header */}
        <div className="flex items-center gap-[3px] mb-10">
          <p className="w-8 md:w-10 h-[1px] bg-white opacity-70"></p>
          <p className="text-[#C8A26B] text-xl uppercase tracking-widest leading-none ps-2">
            Recent Works
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-5xl font-bold mb-8 text-white">
            Here are some of my favorite projects I have done lately. Feel free
            to check them out.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </div>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </motion.div>
    </section>
  );
}

export default Works;
