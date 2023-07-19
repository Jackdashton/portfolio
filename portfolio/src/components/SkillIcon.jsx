import React from "react";
import styles from "./SkillIcon.module.css";

function SkillIcon({ name, logo }) {
  // const [toggle, setToggle] = React.useState(false);

  function popUp() {
    window.alert("Working");
  }

  return (
    <>
      <div className={styles.icon}>
        <button className={styles.icon} onClick={popUp}>
          <img src={"images/icons/" + logo + ".png"} alt={name + "logo"} />
        </button>
        <p>{name}</p>
      </div>
    </>
  );
}

export default SkillIcon;
