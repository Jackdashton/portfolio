import React from "react";
import { projectData } from "../../projects.data.js";

function Cabinn() {

  function findArrayElementByTitle( title) {
    return projectData.find((element) => {
      return element.title === title;
    });
  }

  const project = findArrayElementByTitle("CabInn")

  if (!project) {
    return"Not found"
  }

  return (
    <>
      <h1>CabInn</h1>
      {project.title}
      {project.tech}
      {project.description}
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

export default Cabinn;
