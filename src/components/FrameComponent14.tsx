import { FunctionComponent } from "react";
import styles from "./FrameComponent14.module.css";

const FrameComponent14: FunctionComponent = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.frameWrapper}>
        <button className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.more}>More</div>
        </button>
      </div>
      <footer className={styles.rectangleGroup}>
        <div className={styles.frameItem} />
        <div className={styles.frameInner} />
        <div className={styles.frameContainer}>
          <div className={styles.frameGroup}>
            <div className={styles.aboutUsParent}>
              <b className={styles.aboutUs}>About Us</b>
              <div className={styles.craftingExcellenceThroughContainer}>
                <p className={styles.craftingExcellenceThrough}>
                  Crafting excellence through precision and passion, we redefine
                  spaces with our expert finishing works
                </p>
              </div>
            </div>
            <div className={styles.companyLogo}>
              <div className={styles.contactInfo}>Contact Info</div>
              <div className={styles.rdFloorSomewhere}>
                3rd Floor somewhere, Addis Ababa
              </div>
              <div className={styles.fynFinishingWork}>0965325142</div>
              <div className={styles.fyngmailcom}>fyn@gmail.com</div>
            </div>
          </div>
        </div>
        <div className={styles.copyrightSymbol}>
          <div className={styles.footerContainer}>
            <div className={styles.frameDiv}>
              <div className={styles.frameParent1}>
                <div className={styles.ourCompanyWrapper}>
                  <div className={styles.ourCompany}>Our Company</div>
                </div>
                <div className={styles.frameParent2}>
                  <div className={styles.testimonialsWrapper}>
                    <div className={styles.testimonials}>Testimonials</div>
                  </div>
                  <div className={styles.contactWrapper}>
                    <div className={styles.contact}>Contact</div>
                  </div>
                  <div className={styles.gallery}>Gallery</div>
                </div>
              </div>
              <div className={styles.frameWrapper1}>
                <div className={styles.frameParent3}>
                  <div className={styles.vectorWrapper}>
                    <img
                      className={styles.vectorIcon}
                      loading="lazy"
                      alt=""
                      src="/vector-11.svg"
                    />
                  </div>
                  <div className={styles.testimonialGallery}>
                    <img className={styles.frameIcon} alt="" src="/frame.svg" />
                    <img
                      className={styles.vectorIcon1}
                      loading="lazy"
                      alt=""
                      src="/vector-21.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.copyright2024}>
            Copyright © 2024 FYN finishing work
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FrameComponent14;
