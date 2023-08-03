import React from "react";
import styles from "./About.module.css";

function About() {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.profile}>
          <h1>Jack Ashton</h1>
          <h2>Full Stack Developer</h2>
          {/* Public files are available with /, no need for . or .. */}
          <img src="/images/profile2.JPG" alt="Photo of Jack" />
        </div>

        <div className={styles.information}>
          <dl>
            <h4>Name</h4>
            <p>Jack Ashton</p>
            <h4>Location</h4>
            <p>Edinburgh, Scotland / Remote</p>
            <h4>Current Position</h4>
            <p>Frontend Developer - Scottish Tech Army</p>
            <h4>Profile</h4>
            <p>
              {" "}
              I'm a former structural engineer who has recently finished a
              Fullstack Web Development Course. I am now actively seeking a role
              where I can leverage my technical background, transferable skills,
              and passion for coding to make a meaningful impact as a full-stack
              developer. As a former structural engineer, I gained valuable
              technical expertise and developed transferable skills. Throughout
              my engineering career, I refined my ability to approach challenges
              in a methodical and analytical manner. Recently I have completed
              the Le Wagon Web Development Bootcamp which covered the core
              concepts of Object-orientated programming through both front and
              backend development. My skills include Ruby/Ruby on Rails,
              JavaScript, HTML, CSS and SQL.
            </p>
            <h4>Testimonials</h4>
            <p>
              {" "}
              Jack spent part of his employment at Etive Consulting working
              directly for me on numerous large scale commercial projects.
              Jack's eagerness to learn, coupled with his conscientious nature
              and professional manner saw Jack become a very capable and rounded
              Engineer throughout this period. The Covid-19 pandemic added a
              degree of complexity to general business operations, however this
              did not hamper Jacks involvement in general and technical
              discussions and perhaps allowed Jack's already good interpersonal
              skills and communication to be developed further. Jack would be an
              asset to any business, where he will bring professionalism, a hard
              working ethic and a willingness to strive to be better.{" "}
              <span className={styles.quote}>
                - Alastair Manson, Associate Director , Etive Consulting
                Engineers Ltd
              </span>
            </p>
            <br />
            <p>
              {" "}
              Today's appreciation post is for Jack Ashton and the great work he
              is doing with Esolperth! The new website is looking fantastic and
              Jack's organisation skills and attention to detail are superb.
              It's a joy to leave the charity with a good website and the
              ability to maintain the site going forward!{" "}
              <span className={styles.quote}>
                - Joanna Allen, Head of Projects & Programmes, Scottish Tech
                Army
              </span>
            </p>
          </dl>
        </div>
      </div>
    </>
  );
}

export default About;
