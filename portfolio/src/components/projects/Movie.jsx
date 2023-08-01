import React from "react";
import { projectData } from "../../projects.data.js";
import styles from "./Movie.module.css";

function Movie() {
  function findArrayElementByTitle(title) {
    return projectData.find((element) => element.title === title);
  }

  const project = findArrayElementByTitle("Movie2Night");

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
            Took the lead in ensuring that the API data was accurately consumed
            on the front-end, focusing particularly on its responsiveness to
            deliver a seamless user experience. My efforts resulted in an
            improved, efficient, and user-friendly interface. Performed
            additional work on the frontend of the app, this allowed us to
            ensure a better user experience.
            <br />
            <br />
          </p>
          <h3>Link:</h3>
          <a
            href="https://github.com/Clotto42524/movie-2night"
            target="_blank"
            rel="noreferrer"
          >
            Movie2Night
          </a>
          <br />
          <br />
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

export default Movie;
