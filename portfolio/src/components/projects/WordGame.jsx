import React from "react";
import { projectData } from "../../projects.data.js";
import styles from "./WordGame.module.css";
import { faShuttleSpace } from "@fortawesome/free-solid-svg-icons";

function WordGame() {
  function findArrayElementByTitle(title) {
    return projectData.find((element) => element.title === title);
  }

  const project = findArrayElementByTitle("Word Game");

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
            The project was built as part of the Joy of React Course and was
            completed in order to practice the fundmentals of React.js.
            <br />
          </p>
          <h3>Link:</h3>
          <a
            href="https://github.com/Jackdashton/Wordle"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
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

export default WordGame;
