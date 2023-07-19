import React from "react";
import styles from "./SkillIcon.module.css";

function SkillIcon({ name, logo }) {
  const [toggle, setToggle] = React.useState(false);

  return (
    <>
      <div className={styles.icon}>
        <button className={styles.icon}
        onClick={() => setToggle(!toggle) }>
          <img src={"images/icons/" + logo + ".png"} alt={name + "logo"} />
        </button>
        <p>{name}</p>
        <p>Toggle status:{toggle}</p>
        {toggle && (
        <ul>
          <li >An item</li>
          <li >A second item</li>
          <li >A third item</li>
          <li >A fourth item</li>
          <li >And a fifth one</li>
        </ul>
      )}
      </div>
    </>
  );
}

export default SkillIcon;
