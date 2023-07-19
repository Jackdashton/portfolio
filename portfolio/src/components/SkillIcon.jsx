import React from "react";
import styles from "./SkillIcon.module.css";
// import SkillCard from "./SkillCard";

function SkillIcon({ name, logo, toggle, setToggle }) {
  // const [toggle, setToggle] = React.useState(false);

  return (
    <>
      <div className={styles.icon}>
        <button className={styles.icon}
        onClick={() => setToggle(!toggle) }>
          <img src={"images/icons/" + logo + ".png"} alt={name + "logo"} />
        </button>
        <p>{name}</p>
      </div>
    </>
  );
}

export default SkillIcon;
