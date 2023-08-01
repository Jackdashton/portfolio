import React from "react";
import { projectData } from "../../projects.data.js";
import styles from "./Trex.module.css";

function Trex() {
  function findArrayElementByTitle(title) {
    return projectData.find((element) => element.title === title);
  }

  const project = findArrayElementByTitle("Get your T-rex");

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
            This was the first app that I worked on in the Bootcamp. We worked
            in an interdisciplinary team of four, dividing the work between
            ourselves in order to put in to practice the fundamentals which we'd
            been learning on the course. My primary task was the backend of the
            website; creating the database using SQLite as well as creating and
            testing the user registration and login features.
            <br />
          </p>
          <h3>Github Link:</h3>
          <a
            href="https://github.com/Clotto42524/rails-get-your-t-rex"
            target="_blank"
            rel="noreferrer"
          >
            Get your T-rex
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

export default Trex;
