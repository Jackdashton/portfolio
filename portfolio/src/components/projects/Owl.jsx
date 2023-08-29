import React from "react";
import { projectData } from "../../projects.data.js";
import styles from "./Owl.module.css";

function Owl() {
  function findArrayElementByTitle(title) {
    return projectData.find((element) => element.title === title);
  }

  const project = findArrayElementByTitle("Escape the Owl");

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
            Developed a web-based vocabulary quiz game using JavaScript, HTML
            and CSS. The app allows users to play a vocabulary quiz game by
            answering from a series of multiple-choice questions. The app also
            includes a visual representation of the user’s progress in order to
            gamify the quiz; moving either the user or the owl depending on
            whether the answer is correct, with the aim to escape the owl. The
            app was a great opportunity to practice DOM manipulation and the
            fundamentals of JavaScript as well as work on frontend design using
            CSS and HTML.
            <br />
          </p>
          <h3>Link:</h3>
          <a
            href="https://escape-the-owl.jackashton.dev/"
            target="_blank"
            rel="noreferrer"
          >
            Escape the Owl
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

export default Owl;
