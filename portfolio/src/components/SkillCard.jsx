import React from "react";
import { skillData } from "../skills.data.js";
import styles from "./SkillCard.module.css";

function SkillCard() {
  return (
    <div>
      <ul>
        {skillData.map((element) => (
          <div className={styles.skillCard} key={element.id}>
            <h2>{element.title}</h2>
            <p>Experience: {element.experience}</p>
            <p>Projects: {element.projects}</p>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default SkillCard;
