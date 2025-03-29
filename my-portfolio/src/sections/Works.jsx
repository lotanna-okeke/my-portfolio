import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";
import { assests } from "../assets/assests";

function Works() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      picture: assests.dummyPic,
      projectName: "Retro Camera",
      projectTechnology: "Website",
      projectDescription:
        "Odio soluta enim quos sit asperiores rerum rerum repudiandae cum. Vel voluptatem alias qui assumenda iure et expedita voluptatem.",
      skillsUsed: ["Branding", "Product Design"],
      projectLink: "#",
    },
    {
        id: 2,
        picture: assests.dummyPic,
        projectName: "Retro Camera",
        projectTechnology: "Website",
        projectDescription:
          "Odio soluta enim quos sit asperiores rerum rerum repudiandae cum. Vel voluptatem alias qui assumenda iure et expedita voluptatem.",
        skillsUsed: ["Branding", "Product Design"],
        projectLink: "#",
      },
      {
        id: 1,
        picture: assests.dummyPic,
        projectName: "Retro Camera",
        projectTechnology: "Website",
        projectDescription:
          "Odio soluta enim quos sit asperiores rerum rerum repudiandae cum. Vel voluptatem alias qui assumenda iure et expedita voluptatem.",
        skillsUsed: ["Branding", "Product Design"],
        projectLink: "#",
      },
      {
          id: 2,
          picture: assests.dummyPic,
          projectName: "Retro Camera",
          projectTechnology: "Website",
          projectDescription:
            "Odio soluta enim quos sit asperiores rerum rerum repudiandae cum. Vel voluptatem alias qui assumenda iure et expedita voluptatem.",
          skillsUsed: ["Branding", "Product Design"],
          projectLink: "#",
        },
        {
            id: 1,
            picture: assests.dummyPic,
            projectName: "Retro Camera",
            projectTechnology: "Website",
            projectDescription:
              "Odio soluta enim quos sit asperiores rerum rerum repudiandae cum. Vel voluptatem alias qui assumenda iure et expedita voluptatem.",
            skillsUsed: ["Branding", "Product Design"],
            projectLink: "#",
          },
          {
              id: 2,
              picture: assests.dummyPic,
              projectName: "Retro Camera",
              projectTechnology: "Website",
              projectDescription:
                "Odio soluta enim quos sit asperiores rerum rerum repudiandae cum. Vel voluptatem alias qui assumenda iure et expedita voluptatem.",
              skillsUsed: ["Branding", "Product Design"],
              projectLink: "#",
            },
    // Add more projects here
  ];

  return (
    <section id="works" className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8">Recent Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
    </section>
  );
}

export default Works;