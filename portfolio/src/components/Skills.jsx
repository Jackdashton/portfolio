import React from "react";
import SkillIcon from "./SkillIcon";
import SkillCard from "./SkillCard";
import styles from "./Skills.module.css";
import { skillData } from "../skills.data.js";

// const skillInfo = Object.entries(skillData);

function Skills(logo) {
  const [toggle, setToggle] = React.useState(false);
  // set the skill on the Skills page, pass to SkillCard as prop
  const [selectedSkill, setSelectedSkill] = React.useState(null);

  function handleSkillClick(skill) {
    setSelectedSkill(skillData.find((item) => item.id === skill.id));
    console.log(skill)
  }

  return (
    <>
      <h1>Skills</h1>
      <div className={styles.wrapper}>
        <div className={styles.column}>
          <h2>Front End</h2>
          <div className={styles.icons}>
            <SkillIcon
              id={"js"}
              name={"JavaScript"}
              logo={"JavaScript"}
              onClick={handleSkillClick}
            />
            <SkillIcon
              id={"html"}
              name={"HTML"}
              logo={"HTML"}
              onClick={handleSkillClick}
            />
            <SkillIcon
              id={"css"}
              name={"CSS"}
              logo={"CSS"}
              onClick={handleSkillClick}
            />
            <SkillIcon
              id={"react"}
              name={"React"}
              logo={"React"}
              onClick={handleSkillClick}
            />
            <SkillIcon
              id={"stimulus"}
              name={"Stimulus"}
              logo={"Stimulus"}
              onClick={handleSkillClick}
            />
            <SkillIcon
              id={"wordpress"}
              name={"WordPress"}
              logo={"WordPress"}
              onClick={handleSkillClick}
            />
          </div>
        </div>
        <div className={styles.column}>
          <h2>Back End</h2>
          <div className={styles.icons}>
            <SkillIcon
              id={"ruby"}
              name={"Ruby"}
              logo={"Ruby"}
              onClick={handleSkillClick}
            />
            <SkillIcon
              id={"ror"}
              name={"Ruby on Rails"}
              logo={"RubyOnRails"}
              onClick={handleSkillClick}
            />
            <SkillIcon
              id={"python"}
              name={"Python"}
              logo={"Python"}
              onClick={handleSkillClick}
            />
            <SkillIcon
              id={"sql"}
              name={"SQL"}
              logo={"SQL"}
              onClick={handleSkillClick}
            />
          </div>
        </div>
        <div className={styles.column}>
          <h2>Other Tech</h2>
          <div className={styles.icons}>
            <SkillIcon
              id={"figma"}
              name={"Figma"}
              logo={"Figma"}
              onClick={handleSkillClick}
            />
            <SkillIcon
              id={"hero"}
              name={"Heroku"}
              logo={"Heroku"}
              onClick={handleSkillClick}
            />
            <SkillIcon
              id={"term"}
              name={"Terminal"}
              logo={"Terminal"}
              onClick={handleSkillClick}
            />
            <SkillIcon
              id={"gh"}
              name={"GitHub"}
              logo={"GitHub"}
              onClick={handleSkillClick}
            />
            <SkillIcon
              id={"blue"}
              name={"Bluebeam"}
              logo={"Bluebeam"}
              onClick={handleSkillClick}
            />
            <SkillIcon
              id={"auto"}
              name={"Autocad"}
              logo={"Autocad"}
              onClick={handleSkillClick}
            />
            <SkillIcon
              id={"tds"}
              name={"Tekla Design Suite"}
              logo={"Tekla"}
              onClick={handleSkillClick}
            />
          </div>
        </div>
        <div className={styles.column} id={styles.skillColumn}>
        {selectedSkill ? (
            <div className={styles.skillCard}>
              <h2>{selectedSkill.title}</h2>
              <p>Experience: {selectedSkill.experience}</p>
              <p>Projects: {selectedSkill.projects}</p>
            </div>
          ) : (
            <p>Select a skill</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Skills;
