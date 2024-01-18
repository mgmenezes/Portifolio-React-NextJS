"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectData = [
  {
    id: 1,
    title: "Snake Game",
    description: "",
    image: "/images/project1.png",
    tag: ["All", "Web"],
    gitUrl: ["https://github"],
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Dt Money",
    description: "",
    image: "/images/project2.png",
    tag: ["All", "Web"],
    gitUrl: ["https://github"],
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Dev Feed",
    description: "",
    image: "/images/project3.png",
    tag: ["All", "Mobile"],
    gitUrl: ["https://github"],
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [activeTab, setActiveTab] = useState("All");

  const handleChangeTab = (tag) => {
    setActiveTab(tag);
  };
  const filteredProjects = projectData.filter((project) =>
    project.tag.includes(activeTab)
  );

  return (
    <div>
      <h2 className="text-center text-4xl font-bold text-white mt-4">
        My Projects
      </h2>
      <div className="flex flex-row text-white justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleChangeTab}
          isSelected={activeTab === "All"}
          tagName="All"
        />
        <ProjectTag
          onClick={handleChangeTab}
          isSelected={activeTab === "Web"}
          tagName="Web"
        />
        <ProjectTag
          onClick={handleChangeTab}
          isSelected={activeTab === "Mobile"}
          tagName="Mobile"
        />
      </div>
      <div className="grid gap-8 md:grid-cols-3 md:gap-12">
        {filteredProjects.map((projects) => (
          <ProjectCard
            key={projects.id}
            title={projects.title}
            description={projects.description}
            imgUrl={projects.image}
            gitUrl={projects.gitUrl}
            previewUrl={projects.previewUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
