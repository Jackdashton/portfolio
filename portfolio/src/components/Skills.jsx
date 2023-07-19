import React from "react";
import SkillIcon from "./SkillIcon";
import styles from "./Skills.module.css";
import { skillData } from "../skills.data.js";

function Skills() {
  return (
    <>
      <h1>Skills</h1>
      <div className={styles.wrapper}>
        <div className={styles.column}>
          <h2>Front End</h2>
          <div className={styles.icons}>
            <SkillIcon name={"JavaScript"} logo={"JavaScript"} />
            <SkillIcon name={"HTML"} logo={"HTML"} />
            <SkillIcon name={"CSS"} logo={"CSS"} />
            <SkillIcon name={"React"} logo={"React"} />
            <SkillIcon name={"Stimulus"} logo={"Stimulus"} />
            <SkillIcon name={"WordPress"} logo={"WordPress"} />
          </div>
        </div>
        <div className={styles.column}>
          <h2>Back End</h2>
          <div className={styles.icons}>
            <SkillIcon name={"Ruby"} logo={"Ruby"} />
            <SkillIcon name={"Ruby on Rails"} logo={"RubyOnRails"} />
            <SkillIcon name={"Python"} logo={"Python"} />
            <SkillIcon name={"SQL"} logo={"SQL"} />
          </div>
        </div>
        <div className={styles.column}>
          <h2>Other Tech</h2>
          <div className={styles.icons}>
            <SkillIcon name={"Figma"} logo={"Figma"} />
            <SkillIcon name={"Heroku"} logo={"Heroku"} />
            <SkillIcon name={"Terminal"} logo={"Terminal"} />
            <SkillIcon name={"GitHub"} logo={"GitHub"} />
            <SkillIcon name={"Bluebeam"} logo={"Bluebeam"} />
            <SkillIcon name={"Autocad"} logo={"Autocad"} />
            <SkillIcon name={"Tekla Design Suite"} logo={"Tekla"} />
          </div>
        </div>
        <div className={styles.column}>
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
      </div>
    </>
  );
}

export default Skills;
