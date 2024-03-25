import { FunctionComponent } from "react";
import styles from "./Email.module.css";

const Email: FunctionComponent = () => {
  return <input className={styles.email} placeholder="Email" type="text" />;
};

export default Email;
