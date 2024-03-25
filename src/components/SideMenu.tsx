import { FunctionComponent } from "react";
import styles from "./SideMenu.module.css";

const SideMenu: FunctionComponent = () => {
  return (
    <div className={styles.sideMenu}>
      <div className={styles.sideMenuChild} />
      <div className={styles.sideMenuItem} />
      <div className={styles.sideMenuInner} />
      <div className={styles.frameParent}>
        <div className={styles.setting1Wrapper}>
          <img
            className={styles.setting1Icon}
            loading="lazy"
            alt=""
            src="/setting-11.svg"
          />
        </div>
        <h2 className={styles.dashboard}>Dashboard</h2>
        <div className={styles.v01Wrapper}>
          <div className={styles.v01}>v.01</div>
        </div>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.frameWrapper}>
          <div className={styles.icon24OutlineKeySquaParent}>
            <img
              className={styles.icon24OutlineKeySqua}
              loading="lazy"
              alt=""
              src="/icon--24--outline--keysquare1.svg"
            />
            <div className={styles.dashboard1}>Dashboard</div>
          </div>
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.galleryWrapper}>
            <div className={styles.gallery}>Gallery</div>
          </div>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <img
              className={styles.userSquare1Icon}
              alt=""
              src="/usersquare-1.svg"
            />
            <div className={styles.customersWrapper}>
              <div className={styles.customers}>Customers</div>
            </div>
            <div className={styles.chevronRight2Wrapper}>
              <img
                className={styles.chevronRight2Icon}
                alt=""
                src="/chevronright-2.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameDiv}>
        <div className={styles.ellipseParent}>
          <img className={styles.frameItem} alt="" src="/ellipse-81@2x.png" />
          <div className={styles.frameWrapper1}>
            <div className={styles.frameParent1}>
              <div className={styles.abebeWrapper}>
                <div className={styles.abebe}>Abebe</div>
              </div>
              <div className={styles.admin}>Admin</div>
            </div>
          </div>
        </div>
        <div className={styles.chevronDown2Wrapper}>
          <img
            className={styles.chevronDown2Icon}
            alt=""
            src="/chevrondown-21.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
