import React from "react";
import styles from "./Experience.module.css";

function Experience() {
  return (
    <>
      <h1>Experience</h1>
      <div className={styles.wrapper}>
        <div className={styles.jobCard}>
          <h4>Job</h4>
          <p>Frontend Developer, Scottish Tech Army</p>
          <h4>Date</h4>
          <p>April 2023 - Present</p>
          <h4>Role</h4>
          <p>
            Since joining the Scottish Tech Army, I have been responsible for
            building a WordPress website for a charity. Primarily my role was to
            build a website from scratch to deployment based on visuals produced
            by the UI/UX team. This involved communication with the stakeholders
            as well as the multi-disciplinary team to conduct SEO as well as
            refine the design and UX approach.
          </p>
        </div>
        <div className={styles.jobCard}>
          <h4>Job</h4>
          <p>Structural Engineer, Etive Consulting Engineers</p>
          <h4>Date</h4>
          <p>September 2019 - October 2022</p>
          <h4>Role</h4>
          <p>
            Management of medium-scale structural projects through the detailed
            design stage and delegation of tasks to colleagues I was responsible
            for mentoring. Quality control of products to external sources under
            tight deadlines Communicating effectively within multiple
            inter-disciplinary design teams. Troubleshooting & Debugging 3D
            models using Structural Design Software
          </p>
        </div>
      </div>
    </>
  );
}

export default Experience;
