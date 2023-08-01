import React from "react";
import { projectData } from "../../projects.data.js";
import styles from "./Cabinn.module.css";
import { faShuttleSpace } from "@fortawesome/free-solid-svg-icons";

function Cabinn() {
  function findArrayElementByTitle(title) {
    return projectData.find((element) => element.title === title);
  }

  const project = findArrayElementByTitle("CabInn");

  if (!project) {
    return "Not found";
  }

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.header}>{project.title}</div>
        <div className={styles.info}>
          <h3>Tech Stack:</h3>{project.tech}
          <h3>Description:</h3>
          <p>
            Cabinn is a marketplace app for finding a rental cabin at a holiday
            destination of your choosing. The application allows a user to see
            all of the available cabins for rental, as well as see further
            details of an individual property. The user can then book a cabin,
            or leave a review for a cabin they have already booked. As a user
            you can also add a cabin to the database. The project was undertaken
            to improve and add to the fundamentals of Ruby on Rails and general
            web development.
            <br />
            <br />
            The project included Ruby gems such as Mapbox geolocation as well as
            unit testing.
          </p>
          <h3>Link:</h3>
          <a
            href="https://github.com/Jackdashton/CabInn"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
          <br />
          <a
            href="https://cabinn.herokuapp.com/flats"
            target="_blank"
            rel="noreferrer"
          >
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

export default Cabinn;
