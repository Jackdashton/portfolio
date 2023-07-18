import React from "react";
import styles from "./SkillIcon.module.css";

function SkillIcon({ name, logo }) {


  function popUp() {
    window.alert("Working");
  }

  return (
    <>
    <div className={styles.icon}>
        <button className={styles.icon} onClick={popUp}>
          <img
            src={"/public/images/icons/" + logo + ".png"}
            alt="javascript logo"
          />
        </button>
        <p>{name}</p>
      </div>
    </>
  );
}

export default SkillIcon;
