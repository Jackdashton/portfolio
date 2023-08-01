import React from "react";
import { projectData } from "../../projects.data.js";
import styles from "./Drum.module.css";

function Drum() {
  function findArrayElementByTitle(title) {
    return projectData.find((element) => element.title === title);
  }

  const project = findArrayElementByTitle("Drumkit");

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
            Created a web-based app which would play sounds linked to their
            associated button or keystroke. This was a useful project for
            learning DOM manipulation.
            <br />
          </p>
          <h3>Link:</h3>
          <a
            href="https://github.com/Jackdashton/drumkit"
            target="_blank"
            rel="noreferrer"
          >
            Drumkit
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

export default Drum;
