import { FunctionComponent } from "react";
import styles from "./Name1.module.css";

const Name1: FunctionComponent = () => {
  return <input className={styles.name} placeholder="Name" type="text" />;
};

export default Name1;
