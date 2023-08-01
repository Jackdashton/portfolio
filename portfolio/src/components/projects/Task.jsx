import React from "react";
import { projectData } from "../../projects.data.js";
import styles from "./Task.module.css";

function Task() {
  function findArrayElementByTitle(title) {
    return projectData.find((element) => element.title === title);
  }

  const project = findArrayElementByTitle("Task List");

  if (!project) {
    return "Not found";
  }

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.header}>{project.title}</div>
        <div className={styles.info}>
          <h3>Tech Stack:</h3>
          {project.tech}
          <h3>Description:</h3>
          <p>
            Creation of a Task list app to improve JavaScript fundamentals as
            well as CSS and HTML front-end capabilities.
            <br />
          </p>
          <h3>Link:</h3>
          <a
            href="https://github.com/Jackdashton/to-do-list"
            target="_blank"
            rel="noreferrer"
          >
            Task List
          </a>
        </div>
        <div className={styles.images}>
          {project.images?.map((type, index) => {
            return (
              <ul key={index}>
                <li>
                  {<img src={`/images/screenshots/${type}.JPG`} alt="" />}
                </li>
              </ul>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Task;
