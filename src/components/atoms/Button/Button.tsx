import React from "react";
import styles from "./button.module.css"

type ButtonProps = {

  text: string;
  onClick: () => void;
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({ text, onClick, disabled }) => {
  return (
    <button
    className={styles.button}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;