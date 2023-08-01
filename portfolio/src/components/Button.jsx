import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from './Button.module.css'

function Button({ item }) {
  return (
    <>
      <div className={styles.button}>
        <Link to={`/${item}`}>{item}</Link>
      </div>
    </>
  );
}

Button.propTypes = {
  item: PropTypes.string,
};

export default Button;
