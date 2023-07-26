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
          <p>Tech Stack:</p>
          {project.tech}
          <p>Description:</p>
          <p>
            Creation of a Task list app to improve JavaScript fundamentals as
            well as CSS and HTML front-end capabilities.
            <br />
          </p>
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
