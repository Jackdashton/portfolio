import React from 'react'
import styles from './SkillIcon.module.css'

function SkillIcon( {name, logo} ) {
  return (
    <>
      <p>{name}</p>
      <button className={styles.icon}>
        <img src={"/public/images/icons/" + logo +".png"} alt="javascript logo" />
      </button>
    </>
  )
}

export default SkillIcon
