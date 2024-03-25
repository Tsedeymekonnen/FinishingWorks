import { FunctionComponent } from "react";
import styles from "./FrameComponent.module.css";

const FrameComponent: FunctionComponent = () => {
  return (
    <section className={styles.galleryInner}>
      <div className={styles.frameParent}>
        <div className={styles.imageParent}>
          <div className={styles.image}>
            <div className={styles.ceramicShowcase}>Ceramic Showcase</div>
          </div>
          <div className={styles.image1}>
            <div className={styles.ceramicSymmetry}>Ceramic Symmetry</div>
          </div>
        </div>
        <div className={styles.imageGroup}>
          <div className={styles.image2}>
            <div className={styles.expertTouch}>Expert Touch</div>
          </div>
          <div className={styles.image3}>
            <div className={styles.paintedPerfection}>Painted Perfection</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
