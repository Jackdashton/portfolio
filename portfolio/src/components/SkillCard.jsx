import React from "react";
import styles from "./SkillCard.module.css";
import { skillData } from "../skills.data.js";

const skillsInfo = Object.entries(skillData);

function SkillCard({ skill, setSkill }) {
  // const [skill, setSkill] = React.useState();

  // const found = skillsInfo.find((element) => {
  //   return element.id === "js";
  // });

  return (
    <ul>
      {skillData.map((element) => (
        <div className={styles.skillCard} key={element.id}>
          <h2>{element.title}</h2>
          <p>Experience: {element.experience}</p>
          <p>Projects: {element.projects}</p>
        </div>
      ))}
    </ul>
  );
}

export default SkillCard;
