import React from 'react';
import styles from './Footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

function Footer() {

  const element = <FontAwesomeIcon icon={faCoffee} />

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.links}>
          {element};
          <p>© 2023 Jack Ashton </p>
          <a href="https://github.com/Jackdashton">Github</a>
          <a href="https://linkedin.com/in/jack-david-ashton">LinkedIn</a>
        </div>
      </div>
    </>
  )
}

export default Footer;
