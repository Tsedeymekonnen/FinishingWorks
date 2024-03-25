import { FunctionComponent } from "react";
import styles from "./FrameComponent12.module.css";

const FrameComponent12: FunctionComponent = () => {
  return (
    <section className={styles.functionCaller}>
      <div className={styles.dataMerger}>
        <div className={styles.sequenceProcessor}>
          <div className={styles.ourService}>Our Service</div>
        </div>
        <div className={styles.hierarchyBuilder}>
          <img
            className={styles.imageIcon}
            loading="lazy"
            alt=""
            src="/image-1@2x.png"
          />
          <div className={styles.mapper}>
            <div className={styles.reducer}>
              <div className={styles.painting}>{`Painting `}</div>
              <div className={styles.precisionPaintingService}>
                Precision painting service: transforming spaces with vibrant
                colors and expertise.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent12;
