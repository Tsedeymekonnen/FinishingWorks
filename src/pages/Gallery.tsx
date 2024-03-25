import { FunctionComponent } from "react";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import GroupComponent from "../components/GroupComponent";
import styles from "./Gallery.module.css";

const Gallery: FunctionComponent = () => {
  return (
    <div className={styles.gallery}>
      <header className={styles.galleryInner}>
        <nav className={styles.fynParent}>
          <div className={styles.fyn}>FYN</div>
          <nav className={styles.frameParent}>
            <div className={styles.homeWrapper}>
              <div className={styles.home}>HOME</div>
            </div>
            <div className={styles.galleryWrapper}>
              <div className={styles.gallery1}>GALLERY</div>
            </div>
            <div className={styles.service}>SERVICE</div>
            <div className={styles.testimonials}>TESTIMONIALS</div>
          </nav>
        </nav>
      </header>
      <div className={styles.galleryChild}>
        <div className={styles.rectangleParent}>
          <img
            className={styles.frameChild}
            loading="lazy"
            alt=""
            src="/rectangle-6@2x.png"
          />
          <h2 className={styles.galleryWeHaveContainer}>
            <p className={styles.gallery2}> Gallery</p>
            <p className={styles.weHaveSolutions}>
              We Have Solutions for All Your Space Related Issues!
            </p>
          </h2>
        </div>
      </div>
      <FrameComponent1 />
      <FrameComponent />
      <GroupComponent />
    </div>
  );
};

export default Gallery;
