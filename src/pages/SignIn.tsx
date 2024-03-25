import { FunctionComponent } from "react";
import FrameComponent4 from "../components/FrameComponent41";
import GroupComponent2 from "../components/GroupComponent2";
import styles from "./SignIn.module.css";

const SignIn: FunctionComponent = () => {
  return (
    <div className={styles.signIn}>
      <h1 className={styles.galleryWeHaveContainer}>
        <p className={styles.gallery}> Gallery</p>
        <p className={styles.weHaveSolutions}>
          We Have Solutions for All Your Space Related Issues!
        </p>
      </h1>
      <FrameComponent4
        frameDivWidth="1213px"
        welcomeBackWidth="893px"
        frameDivWidth1="unset"
        frameDivDisplay="inline-block"
      />
      <GroupComponent2 />
    </div>
  );
};

export default SignIn;
