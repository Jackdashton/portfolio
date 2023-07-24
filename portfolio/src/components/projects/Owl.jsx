import React from "react";
import { projectData } from "../../projects.data.js";

function Owl() {
  function findArrayElementByTitle( title) {
    return projectData.find((element) => {
      return element.title === title;
    });
  }

  const project = findArrayElementByTitle("Escape the Owl")

  if (!project) {
    return (
      <>
        <h1>Escape the Owl</h1>
        <p>Project not found!</p>
      </>
    )
  }

  return (
    <>
      <h1>Escape the Owl</h1>
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

export default Owl;
