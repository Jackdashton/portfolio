import React from "react";
import { projectData } from "../../projects.data.js";

function Trex() {
  function findArrayElementByTitle( title) {
    return projectData.find((element) => {
      return element.title === title;
    });
  }

  const project = findArrayElementByTitle("Get your T-rex")

  if (!project) {
    return"Not found"
  }

  return (
    <>
      <h1>Get your T-rex</h1>
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

export default Trex;
