import React from 'react';
import styles from './Footer.module.css'

function Footer() {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.links}>
          <a href="https://github.com/Jackdashton">Github</a>
          <a href="https://linkedin.com/in/jack-david-ashton">LinkedIn</a>
        </div>
      </div>
    </>
  )
}

export default Footer;
