import { FunctionComponent } from "react";
import FrameComponent4 from "../components/FrameComponent4";
import GroupComponent2 from "../components/GroupComponent2";
import styles from "./SignUp.module.css";

const SignUp: FunctionComponent = () => {
  return (
    <div className={styles.signUp}>
      <h1 className={styles.galleryWeHaveContainer}>
        <p className={styles.gallery}> Gallery</p>
        <p className={styles.weHaveSolutions}>
          We Have Solutions for All Your Space Related Issues!
        </p>
      </h1>
      <FrameComponent4 />
      <GroupComponent2 />
    </div>
  );
};

export default SignUp;
