import { FunctionComponent } from "react";
import styles from "./FrameComponent3.module.css";

const FrameComponent3: FunctionComponent = () => {
  return (
    <header className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <div className={styles.frameWrapper}>
        <div className={styles.subTreeParent}>
          <img
            className={styles.subTreeIcon}
            loading="lazy"
            alt=""
            src="/vector.svg"
          />
          <div className={styles.connectedComponents}>
            <div className={styles.div}>0956342521</div>
          </div>
          <div className={styles.treeTrunkWrapper}>
            <img
              className={styles.treeTrunkIcon}
              loading="lazy"
              alt=""
              src="/vector-1.svg"
            />
          </div>
          <div className={styles.branchingOut}>
            <div className={styles.frameParent}>
              <img
                className={styles.frameIcon}
                loading="lazy"
                alt=""
                src="/frame.svg"
              />
              <div className={styles.vectorWrapper}>
                <img
                  className={styles.vectorIcon}
                  loading="lazy"
                  alt=""
                  src="/vector-2.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.bookYourFreeConsultationWrapper}>
          <div className={styles.bookYourFree}>BOOK YOUR FREE CONSULTATION</div>
        </div>
        <img
          className={styles.vectorIcon1}
          loading="lazy"
          alt=""
          src="/vector-3.svg"
        />
      </div>
    </header>
  );
};

export default FrameComponent3;
