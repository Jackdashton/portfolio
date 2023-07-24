import React from "react";
import { projectData } from "../../projects.data.js";

function Task() {
  function findArrayElementByTitle( title) {
    return projectData.find((element) => {
      return element.title === title;
    });
  }

  const project = findArrayElementByTitle("Task List")

  if (!project) {
    return (
      <>
        <h1>Task List</h1>
        <p>Project not found!</p>
      </>
    )
  }

  return (
    <>
      <h1>Task List</h1>
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

export default Task;
