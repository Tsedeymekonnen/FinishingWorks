import { FunctionComponent } from "react";
import styles from "./SecondImage.module.css";

const SecondImage: FunctionComponent = () => {
  return (
    <div className={styles.secondImage}>
      <div className={styles.frameParent}>
        <div className={styles.designShowcaseOneWrapper}>
          <b className={styles.designShowcaseOneContainer}>
            <span>{` Design `}</span>
            <span className={styles.showcaseOne}>Showcase one</span>
          </b>
        </div>
        <div className={styles.image}>
          <div className={styles.ceramicShowcase}>Ceramic Showcase</div>
        </div>
        <div className={styles.image1}>
          <div className={styles.expertTouch}>Expert Touch</div>
        </div>
      </div>
    </div>
  );
};

export default SecondImage;
