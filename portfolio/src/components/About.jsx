import React from "react";
import styles from './About.module.css'

function About() {
  return (
    <>
    <div className={styles.wrapper}>
      <div className={styles.profile}>
      <h1>Jack Ashton</h1>
      <h2>Web Developer</h2>
      {/* Public files are available with /, no need for . or .. */}
      <img src="/public/images/profile2.JPG" alt="" />
      </div>

      <div className={styles.information}>
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
    </div>
    </>
  )

}

export default About;
