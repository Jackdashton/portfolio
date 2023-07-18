import React from 'react';
import SkillIcon from './SkillIcon';
import styles from './Skills.module.css'

function Skills() {
  return (
    <>
    <h1>Skills</h1>
    <div className={styles.wrapper}>
      <div className={styles.column}>
        <h2>Front End</h2>
        <div className={styles.icons}>
          <SkillIcon name={"Ruby"} logo={"Ruby"}/>
          <SkillIcon name={"Ruby"} logo={"Ruby"}/>
          <SkillIcon name={"Ruby"} logo={"Ruby"}/>
        </div>
      </div>
      <div className={styles.column}>
        <h2>Back End</h2>
        <div className={styles.icons}>
          <SkillIcon name={"Ruby"} logo={"Ruby"}/>
          <SkillIcon name={"Ruby"} logo={"Ruby"}/>
          <SkillIcon name={"Ruby"} logo={"Ruby"}/>
        </div>
      </div>
      <div className={styles.column}>
        <h2>Soft Skills</h2>
      </div>
      <div className={styles.column}>
        <h2>Other Tech</h2>
      </div>
    </div>
    </>
  )
}

export default Skills;
