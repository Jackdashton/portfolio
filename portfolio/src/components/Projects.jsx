import React from "react";
import { projectData } from "../projects.data.js";
import styles from "./Projects.module.css";

function Projects() {
  return (
    <>
      <h1>Projects</h1>
      <div className={styles.gridContainer}>
        {projectData.map((project) => (
          <>
            <div className={styles.gridCard}>
              <h3>{project.title}</h3>
              <div
                className={styles.gridItem}
                key={project.id}
                style={{
                  backgroundImage: `url(/images/screenshots/${project.images[0]}.JPG)`,
                }}
              >
                {project.images?.length > 0 && (
                  <a href={`/${project.link}`}></a>
                )}
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
}

export default Projects;
