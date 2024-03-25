import { FunctionComponent } from "react";
import styles from "./ChevronDown.module.css";

const ChevronDown: FunctionComponent = () => {
  return (
    <div className={styles.chevronDown1}>
      <img
        className={styles.vectorIcon}
        loading="lazy"
        alt=""
        src="/vector2.svg"
      />
    </div>
  );
};

export default ChevronDown;
