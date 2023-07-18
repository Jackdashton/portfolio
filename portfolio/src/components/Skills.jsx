import React from 'react';
import SkillIcon from './SkillIcon';
import styles from './Skills.module.css'

function Skills() {
  return (
    <>
    <h1>Skills</h1>
    <SkillIcon name={"Ruby"} logo={"Ruby"}/>
    <SkillIcon name={"JavaScript"} logo={"JavaScript"}/>
    <div>
      <div className={styles.frontend}>
      <h2>Front End</h2>
      </div>
      <div className={styles.backend}>
      <h2>Back End</h2>
      </div>
      <div className={styles.softskills}>
      <h2>Soft Skills</h2>
      </div>
      <div className={styles.other}>
      <h2>Other Tech</h2>
      </div>
    </div>
    </>
  )
}

export default Skills;
