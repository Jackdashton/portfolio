import React from "react";
import { Link, Route, Routes } from 'react-router-dom'
import styles from './NavBar.module.css'

function NavBar() {
  return (
    <>
    <nav className={styles.wrapper}>
      <ul className={styles.logolist}>
      <li> <Link to="/">J A</Link> </li>
      </ul>
      <ul className={styles.navlist}>
        <li className={styles.link}> <Link to="/about">About</Link> </li>
        <li className={styles.link}> <Link to="/skills">Skills</Link> </li>
        <li className={styles.link}> <Link to="/experience">Experience</Link> </li>
        <li className={styles.link}> <Link to="/projects">Projects</Link> </li>
        <li className={styles.link} id={styles.contact}> <Link to="/contact">Contact</Link> </li>
      </ul>
    </nav>
    </>
  );
}

export default NavBar;
