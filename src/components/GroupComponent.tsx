import { FunctionComponent } from "react";
import styles from "./GroupComponent.module.css";

const GroupComponent: FunctionComponent = () => {
  return (
    <footer className={styles.rectangleParent}>
      <div className={styles.rectangle} />
      <div className={styles.rectangle1} />
      <div className={styles.rectangleGroup}>
        <div className={styles.rectangle2} />
        <div className={styles.frameWrapper}>
          <div className={styles.frameParent}>
            <div className={styles.frameContainer}>
              <div className={styles.frameGroup}>
                <div className={styles.frameDiv}>
                  <div className={styles.aboutUsParent}>
                    <div className={styles.aboutUs}>About Us</div>
                    <div className={styles.craftingExcellenceThroughContainer}>
                      <p className={styles.craftingExcellenceThrough}>
                        Crafting excellence through precision and passion, we
                        redefine spaces with our expert finishing works
                      </p>
                    </div>
                  </div>
                  <div className={styles.contactInfoParent}>
                    <div className={styles.contactInfo}>Contact Info</div>
                    <div className={styles.rdFloorSomewhereAddisAbabParent}>
                      <div className={styles.rdFloorSomewhere}>
                        3rd Floor somewhere, Addis Ababa
                      </div>
                      <div className={styles.div}>0965325142</div>
                      <div className={styles.fyngmailcom}>fyn@gmail.com</div>
                    </div>
                  </div>
                </div>
                <div className={styles.ourCompanyParent}>
                  <div className={styles.ourCompany}>Our Company</div>
                  <div className={styles.testimonialsParent}>
                    <div className={styles.testimonials}>Testimonials</div>
                    <div className={styles.contactParent}>
                      <div className={styles.contact}>{`Contact     `}</div>
                      <div className={styles.gallery}>Gallery</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameParent1}>
              <img
                className={styles.frameIcon}
                loading="lazy"
                alt=""
                src="/frame-1.svg"
              />
              <img
                className={styles.frameIcon1}
                loading="lazy"
                alt=""
                src="/frame-2.svg"
              />
              <img
                className={styles.frameIcon2}
                loading="lazy"
                alt=""
                src="/frame-3.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.rectangle3} />
      </div>
      <div className={styles.subheaderParent}>
        <div className={styles.subheader} />
        <div className={styles.copyright2024}>
          Copyright © 2024 FYN finishing work
        </div>
      </div>
    </footer>
  );
};

export default GroupComponent;
