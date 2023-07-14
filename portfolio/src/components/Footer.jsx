import React from 'react';
import styles from './Footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faGithub } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
// faCoffee is icon name, import from solid svg icons


function Footer() {

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.links}>
          <p>© 2023 Jack Ashton </p>
          <FontAwesomeIcon icon={faGithub} />
          <a href="https://github.com/Jackdashton">Github</a>
          <a href="https://linkedin.com/in/jack-david-ashton">LinkedIn</a>
        </div>
      </div>
    </>
  )
}

export default Footer;
