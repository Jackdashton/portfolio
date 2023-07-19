import React from "react";
import SkillIcon from "./SkillIcon";
import SkillCard from "./SkillCard";
import styles from "./Skills.module.css";
import { skillData } from "../skills.data.js";

function Skills() {
  const [toggle, setToggle] = React.useState(true);

  return (
    <>
      <h1>Skills</h1>
      <div className={styles.wrapper}>
        <div className={styles.column}>
          <h2>Front End</h2>
          <div className={styles.icons}>
            <SkillIcon
              name={"JavaScript"}
              logo={"JavaScript"}
              toggle={toggle}
              setToggle={setToggle}
            />
            <SkillIcon
              name={"HTML"}
              logo={"HTML"}
              toggle={toggle}
              setToggle={setToggle}
            />
            <SkillIcon
              name={"CSS"}
              logo={"CSS"}
              toggle={toggle}
              setToggle={setToggle}
            />
            <SkillIcon
              name={"React"}
              logo={"React"}
              toggle={toggle}
              setToggle={setToggle}
            />
            <SkillIcon
              name={"Stimulus"}
              logo={"Stimulus"}
              toggle={toggle}
              setToggle={setToggle}
            />
            <SkillIcon
              name={"WordPress"}
              logo={"WordPress"}
              toggle={toggle}
              setToggle={setToggle}
            />
          </div>
        </div>
        <div className={styles.column}>
          <h2>Back End</h2>
          <div className={styles.icons}>
            <SkillIcon
              name={"Ruby"}
              logo={"Ruby"}
              toggle={toggle}
              setToggle={setToggle}
            />
            <SkillIcon
              name={"Ruby on Rails"}
              logo={"RubyOnRails"}
              toggle={toggle}
              setToggle={setToggle}
            />
            <SkillIcon
              name={"Python"}
              logo={"Python"}
              toggle={toggle}
              setToggle={setToggle}
            />
            <SkillIcon
              name={"SQL"}
              logo={"SQL"}
              toggle={toggle}
              setToggle={setToggle}
            />
          </div>
        </div>
        <div className={styles.column}>
          <h2>Other Tech</h2>
          <div className={styles.icons}>
            <SkillIcon
              name={"Figma"}
              logo={"Figma"}
              toggle={toggle}
              setToggle={setToggle}
            />
            <SkillIcon
              name={"Heroku"}
              logo={"Heroku"}
              toggle={toggle}
              setToggle={setToggle}
            />
            <SkillIcon
              name={"Terminal"}
              logo={"Terminal"}
              toggle={toggle}
              setToggle={setToggle}
            />
            <SkillIcon
              name={"GitHub"}
              logo={"GitHub"}
              toggle={toggle}
              setToggle={setToggle}
            />
            <SkillIcon
              name={"Bluebeam"}
              logo={"Bluebeam"}
              toggle={toggle}
              setToggle={setToggle}
            />
            <SkillIcon
              name={"Autocad"}
              logo={"Autocad"}
              toggle={toggle}
              setToggle={setToggle}
            />
            <SkillIcon
              name={"Tekla Design Suite"}
              logo={"Tekla"}
              toggle={toggle}
              setToggle={setToggle}
            />
          </div>
        </div>
        <div className={styles.column}>{toggle && <SkillCard />}</div>
      </div>
    </>
  );
}

export default Skills;
