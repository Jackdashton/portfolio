import React from "react";
import ProjectCard from "./ProjectCard";
import { projectData } from "../projects.data.js";
import styles from './Projects.module.css'

function Projects() {
  return (
    <>
      <h1>Projects</h1>
      <div className={styles.wrapper}>
        {projectData.map((project) => (
          <div className={styles.projectCard} key={project.id}>
            {project.images?.map((type, index) => {
              return (
                <p key={index}>{type}</p>
              )
            })}
            <h2>{project.title}</h2>
            <p>Tech Stack: {project.tech}</p>
            <p>Projects: {project.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Projects;

{/* <img src={`/images/screenshots/t-rex screenshot2.JPG`} alt="" /> */}
