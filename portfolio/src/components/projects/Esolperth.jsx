import React from "react";
import { projectData } from "../../projects.data.js";
import styles from "./Esolperth.module.css";
import { faShuttleSpace } from "@fortawesome/free-solid-svg-icons";

function Esolperth() {
  function findArrayElementByTitle(title) {
    return projectData.find((element) => element.title === title);
  }

  const project = findArrayElementByTitle("Esolperth");

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
            As the lead WordPress developer on this project, I build the website
            based on the clients wishes. My primary focus was building a nice UI
            and creating a good user journey as well as working on the SEO. Once
            the initial website was built, I took a list of suggested changes to
            the client and proposed some changes to improve the user experience
            as well as increase traffic to the website.
          </p>
          <h3>Link:</h3>
          <a href="http://esolperth.co.uk/" target="_blank" rel="noreferrer">
            Website
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

export default Esolperth;
