import React from "react";
import LifeChanger from "../assets/lifechangerLogo.png";
import Superior from "../assets/superiorLogo.png";
import Buggy from "../assets/buggyLogo.png";
import Image from "next/image";
import ProjectCard from "./ProjectCard";
import ScrollContainer from "react-indiana-drag-scroll";
const Projects = () => {
  return (
    <div
      id="projects"
      className="py-28 h-screen overflow-hidden bg-black/70 text-white "
    >
      <h1 className="section-title">Projects</h1>
      <ScrollContainer className="project-container cursor-pointer">
        <ProjectCard logo={LifeChanger} name="LifeChanger" />
        <ProjectCard logo={Superior} name="Superior" />
        <ProjectCard logo={Buggy} name="Buggy" />
        <ProjectCard logo={Buggy} name="Buggy" />
        <ProjectCard logo={Buggy} name="Buggy" />
      </ScrollContainer>
    </div>
  );
};

export default Projects;
