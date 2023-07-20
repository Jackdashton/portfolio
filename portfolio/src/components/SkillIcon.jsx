import React from "react";
import styles from "./SkillIcon.module.css";
// import SkillCard from "./SkillCard";

function SkillIcon({ name, logo, id, onClick }) {
  // const [toggle, setToggle] = React.useState(false);
  const handleClick = () => {
    const skill = {
      id,
      name,
      logo,
    };
    onClick(skill);
  };

  return (
    <>
      <div className={styles.icon}>
        <button className={styles.icon} onClick={handleClick}>
          <img src={"images/icons/" + logo + ".png"} alt={name + "logo"} />
        </button>
        <p>{name}</p>
      </div>
    </>
  );
}

export default SkillIcon;
