import React from "react";
import styles from "./Home.module.css";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Home() {
  const [toggle, setToggle] = React.useState(false);

  function toggleMenu() {
    console.log("Connected");
    setToggle(!toggle);
  }

  return (
    <>
      <div className={styles.container}>
        <ul className={styles.menu}>
          <div className={`${styles.toggle} ${toggle ? styles.active : ""}`} onClick={toggleMenu} >
            <FontAwesomeIcon icon={faBars} />
          </div>
        </ul>
      </div>
    </>
  );
}

export default Home;

{
  /* <div className={styles.menu}>
          <Button item="About" />
          <Button item="Skills" />
          <Button item="Experience" />
          <Button />
          <Button item="Projects" />
          <Button item="Contact" />
        </div> */
}
