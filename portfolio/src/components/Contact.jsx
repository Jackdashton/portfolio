import React from "react";
import styles from "./Contact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Contact() {
  return (
    <>
      <h1>
        GET IN <span className={styles.specialWord}>TOUCH</span>
      </h1>
      <div className={styles.wrapper}>
        <div className={styles.linkedin}>
          <h2>LinkedIn</h2>
          <FontAwesomeIcon icon={faLinkedin} size="2xl" />
          <br />
          <br />
          LinkedIn:
          <br />
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/jack-david-ashton/"
          >
            https://www.linkedin.com/in/jack-david-ashton/
          </a>
        </div>
        <div className={styles.email}>
          <h2>Email</h2>
          <FontAwesomeIcon icon={faEnvelope} size="2xl" />
          <br />
          <br />
          Email:
          <br />
          Jackdashton@outlook.com
        </div>
        <div className={styles.phone}>
          <h2>Phone</h2>
          <FontAwesomeIcon icon={faPhone} size="2xl" />
          <br />
          <br />
          Please use email or LinkedIn for initial contact. A telphone number
          will then be provided.
        </div>
      </div>
    </>
  );
}

export default Contact;
