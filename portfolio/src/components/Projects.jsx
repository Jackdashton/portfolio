import React from "react";
import ProjectCard from "./ProjectCard";
import { projectData } from "../projects.data.js";
import styles from "./Projects.module.css";
import { Link, Route, Routes } from 'react-router-dom'

function Projects() {
  return (
    <>
      <h1>Projects</h1>
      <li> <Link to="/cabinn">Cabinn</Link> </li>
      <li> <Link to="/trex">Get your T-rex</Link> </li>
      <li> <Link to="/movie">Movie2Night</Link> </li>
      <li> <Link to="/owl">Escape the Owl</Link> </li>
      <li> <Link to="/drum">Drumkit</Link> </li>
      <li> <Link to="/task">Task List</Link> </li>
      <div className={styles.wrapper}>
        {projectData.map((project) => (
          <div className={styles.projectCard} key={project.id}>
            {project.images?.map((type, index) => {
              return (
                <ul key={index}>
                  <li>
                    {<img src={`/images/screenshots/${type}.JPG`} alt="" />}
                  </li>
                </ul>
              );
            })}
            {/* <div style={{ backgroundImage: `url(/${project.images?.[0]}.JPG)` }}> */}
              <h2>{project.title}</h2>
              <p>Tech Stack: {project.tech}</p>
              <p>{project.description}</p>
            </div>
          // </div>
        ))}
      </div>
    </>
  );
}

export default Projects;
