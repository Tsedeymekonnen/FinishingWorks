import { FunctionComponent } from "react";
import styles from "./FrameComponent6.module.css";

const FrameComponent6: FunctionComponent = () => {
  return (
    <section className={styles.mapsFullMapWrapper}>
      <div className={styles.mapsFullMap}>
        <img
          className={styles.mapsZoomLevels2City}
          alt=""
          src="/maps--zoom-levels--2-city1@2x.png"
        />
        <div className={styles.controlsGoogleLogoColorParent}>
          <img
            className={styles.controlsGoogleLogoColor}
            loading="lazy"
            alt=""
            src="/controls--google-logo--color1.svg"
          />
          <div className={styles.controlsGoogleMapsByline}>
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <div className={styles.mapData2019}>Map data @2019 Google</div>
            </div>
            <div className={styles.rectangleGroup}>
              <div className={styles.frameItem} />
              <div className={styles.termsOfUse}>Terms of Use</div>
            </div>
            <div className={styles.rectangleContainer}>
              <div className={styles.frameInner} />
              <div className={styles.reportAMap}>Report a map error</div>
            </div>
          </div>
        </div>
        <div className={styles.algorithmEngine}>
          <div className={styles.controlsMapType}>
            <div className={styles.linkCollector} />
            <div className={styles.mapWrapper}>
              <div className={styles.map}>Map</div>
            </div>
            <div className={styles.booleanOperator} />
            <div className={styles.satelliteWrapper}>
              <div className={styles.satellite}>Satellite</div>
            </div>
          </div>
          <div className={styles.controls}>
            <div className={styles.controlsStreetView}>
              <div className={styles.functionFactory} />
              <img
                className={styles.pegmanOffscreen2xIcon}
                loading="lazy"
                alt=""
                src="/pegmanoffscreen2x@2x.png"
              />
            </div>
            <img
              className={styles.controlsZoomControls}
              loading="lazy"
              alt=""
              src="/controls--zoom-controls@2x.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent6;
