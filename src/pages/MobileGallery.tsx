import { FunctionComponent } from "react";
import SecondImage from "../components/SecondImage";
import FrameComponent14 from "../components/FrameComponent14";
import styles from "./MobileGallery.module.css";

const MobileGallery: FunctionComponent = () => {
  return (
    <div className={styles.mobileGallery}>
      <header className={styles.mobileGalleryInner}>
        <div className={styles.fynParent}>
          <div className={styles.fyn}>FYN</div>
          <img
            className={styles.galleryWithSolutions}
            loading="lazy"
            alt=""
            src="/frame3.svg"
          />
        </div>
      </header>
      <main className={styles.designShowcaseParent}>
        <div className={styles.designShowcase}>
          <div className={styles.galleryTitleParent}>
            <img
              className={styles.galleryTitleIcon}
              loading="lazy"
              alt=""
              src="/rectangle-61@2x.png"
            />
            <div className={styles.galleryWeHaveContainer}>
              <p className={styles.gallery}> Gallery</p>
              <p
                className={styles.weHaveSolutions}
              >{`We Have Solutions for All Your Space Related `}</p>
            </div>
          </div>
        </div>
        <section className={styles.firstImage}>
          <SecondImage />
          <div className={styles.addisAbabaContact}>
            <div className={styles.image}>
              <div className={styles.paintedPerfection}>Painted Perfection</div>
              <input
                className={styles.imageChild}
                placeholder="Painted Perfection"
                type="text"
              />
            </div>
          </div>
          <div className={styles.imageWrapper}>
            <img
              className={styles.imageIcon}
              loading="lazy"
              alt=""
              src="/image9@2x.png"
            />
          </div>
          <FrameComponent14 />
        </section>
      </main>
    </div>
  );
};

export default MobileGallery;
