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
          <p>Tech Stack:</p>
          {project.tech}
          <p>Description:</p>
          <p>
            This was the first app that I worked on in the Bootcamp. We worked
            in an interdisciplinary team of four, dividing the work between
            ourselves in order to put in to practice the fundamentals which we'd
            been learning on the course. My primary task was the backend of the
            website; creating the database using SQLite as well as creating and
            testing the user registration and login features.
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

export default Trex;
