import React from "react";
import PropTypes from "prop-types";
import styles from './Button.module.css';

const Button = ({ onClick, isVisible }) => {
  return (
    <button
      onClick={onClick}
      className={`${styles.button} ${isVisible ? styles.visible : styles.hidden}`}
    >
      Load more
    </button>
  );
};
Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  isVisible: PropTypes.bool.isRequired,
};

export default Button;