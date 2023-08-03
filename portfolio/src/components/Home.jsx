import React from "react";
import styles from "./Home.module.css";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Home() {
  const [toggle, setToggle] = React.useState(false);

  function toggleMenu() {
    const audio = new Audio("/menusound.mp3");
    audio.play();
    setToggle(!toggle);
  }

  return (
    <>
      <div className={styles.container}>
        <ul className={styles.menu}>
          <div
            className={`${styles.toggle} ${toggle ? styles.active : ""}`}
            onClick={toggleMenu}
          >
            <FontAwesomeIcon icon={faBars} />
            <li><Button item="Skills" /></li>
            <li><Button item="Experience" /></li>
            <li><Button item="Projects" /></li>
            <li><Button item="Contact" /></li>
            <li><Button item="About" /></li>
          </div>
        </ul>
      </div>
    </>
  );
}

export default Home;
