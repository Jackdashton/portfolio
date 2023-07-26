import React from "react";
import { projectData } from "../../projects.data.js";
import styles from "./Drum.module.css"

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
          <p>Tech Stack:</p>
          {project.tech}
          <p>Description:</p>
          <p>
            Took the lead in ensuring that the API data was accurately consumed
            on the front-end, focusing particularly on its responsiveness to
            deliver a seamless user experience. My efforts resulted in an
            improved, efficient, and user-friendly interface. Performed
            additional work on the frontend of the app, this allowed us to
            ensure a better user experience.
            <br />
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

export default Drum;
