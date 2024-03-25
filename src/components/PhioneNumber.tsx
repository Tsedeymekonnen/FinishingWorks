import { FunctionComponent } from "react";
import styles from "./PhioneNumber.module.css";

const PhioneNumber: FunctionComponent = () => {
  return (
    <input
      className={styles.phioneNumber}
      placeholder="Phone Number"
      type="text"
    />
  );
};

export default PhioneNumber;
