import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button({ item }) {
  return (
    <>
      <Link to={`/${item}`} className={styles.button}>
        {item}
      </Link>
    </>
  );
}

Button.propTypes = {
  item: PropTypes.string,
};

export default Button;
