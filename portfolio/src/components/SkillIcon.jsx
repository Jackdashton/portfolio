import React from "react";
import styles from "./SkillIcon.module.css";
import PropTypes from 'prop-types'

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

SkillIcon.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default SkillIcon;
