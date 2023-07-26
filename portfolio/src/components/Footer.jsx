import React from "react";
import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGithub } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
// faCoffee is icon name, import from solid svg icons

function Footer() {

  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className={styles.wrapper}>
      <p>© {currentYear} Jack Ashton </p>
        <div className={styles.links}>
          <a href="https://github.com/Jackdashton" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} size="2xl" />
          </a>
          <a href="https://linkedin.com/in/jack-david-ashton" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="2xl" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Footer;
