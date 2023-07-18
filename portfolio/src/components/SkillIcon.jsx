import React from "react";
import styles from "./SkillIcon.module.css";

function SkillIcon({ name, logo }) {


  function popUp() {
    window.alert("Working");
  }

  return (
    <>
      <button className={styles.icon} onClick={popUp}>
        <img
          src={"/public/images/icons/" + logo + ".png"}
          alt="javascript logo"
        />
      </button>
      <p>{name}</p>
    </>
  );
}

export default SkillIcon;
