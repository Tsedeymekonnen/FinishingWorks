import { FunctionComponent } from "react";
import styles from "./Button.module.css";

const Button: FunctionComponent = () => {
  return (
    <button className={styles.button}>
      <b className={styles.submit}>Submit</b>
    </button>
  );
};

export default Button;
