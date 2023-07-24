import React from "react";
import { projectData } from "../../projects.data.js";

function Movie() {
  function findArrayElementByTitle( title) {
    return projectData.find((element) => {
      return element.title === title;
    });
  }

  const project = findArrayElementByTitle("Movie2Night")

  if (!project) {
    return (
      <>
        <h1>Movie</h1>
        <p>Project not found!</p>
      </>
    )
  }

  return (
    <>
      <h1>Movie2Night</h1>
      {project.title}
      {project.tech}
      {project.images?.map((type, index) => {
              return (
                <ul key={index}>
                  <li>
                    {<img src={`/images/screenshots/${type}.JPG`} alt="" />}
                  </li>
                </ul>
              );
            })}
    </>
  );
}

export default Movie;
