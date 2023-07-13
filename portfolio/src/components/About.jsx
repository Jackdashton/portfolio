import React from "react";
import styles from './About.module.css'

function About() {
  return (
    <>
    <div className={styles.wrapper}>
      <h1>Hi, my name is Jack Ashton.</h1>

      <img className={styles.image} src='/public/images/profile1.jpg' alt="Image of Jack Ashton" />

      <p>
        I'm a former structural engineer who has recently finished a
        Fullstack Web Development Course. I am now actively seeking a role where I can
        leverage my technical background, transferable skills, and passion for coding to make a
        meaningful impact as a full-stack developer. As a former structural engineer,
        I gained valuable technical expertise and developed transferable skills. Throughout my engineering career,
        I refined my ability to approach challenges in a methodical and analytical manner.
        Recently I have completed the Le Wagon Web Development Bootcamp which covered the core concepts of Object-orientated
        programming through both front and backend development.
        My skills include Ruby/Ruby on Rails, JavaScript, HTML, CSS and SQL.
      </p>
    </div>
    </>
  )

}

export default About;
