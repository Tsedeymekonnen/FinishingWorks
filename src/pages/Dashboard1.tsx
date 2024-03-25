import { FunctionComponent } from "react";
import SideMenu from "../components/SideMenu";
import Product from "../components/Product";
import styles from "./Dashboard1.module.css";

const Dashboard1: FunctionComponent = () => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.galleryWeHaveContainer}>
        <p className={styles.gallery}> Gallery</p>
        <p className={styles.weHaveSolutions}>
          We Have Solutions for All Your Related Issues!
        </p>
      </div>
      <main className={styles.dashboardHttpsbitlyavi}>
        <SideMenu />
        <section className={styles.frameParent}>
          <div className={styles.frameWrapper}>
            <div className={styles.frameGroup}>
              <div className={styles.frameContainer}>
                <div className={styles.helloAbebeWrapper}>
                  <h2 className={styles.helloAbebe}>Hello Abebe 👋🏼,</h2>
                </div>
                <div className={styles.search}>
                  <div className={styles.searchChild} />
                  <img
                    className={styles.search1Icon}
                    alt=""
                    src="/search-1.svg"
                  />
                  <input
                    className={styles.searchItem}
                    placeholder="Search"
                    type="text"
                  />
                </div>
              </div>
              <div className={styles.vectorParent}>
                <img
                  className={styles.frameChild}
                  alt=""
                  src="/rectangle-15.svg"
                />
                <div className={styles.frameDiv}>
                  <div className={styles.serviceParent}>
                    <div className={styles.service}>Service</div>
                    <div className={styles.div}>3</div>
                  </div>
                </div>
                <div className={styles.lineWrapper}>
                  <div className={styles.frameItem} />
                </div>
                <div className={styles.frameWrapper1}>
                  <img
                    className={styles.frameInner}
                    alt=""
                    src="/group-10.svg"
                  />
                </div>
                <div className={styles.shapeSet}>
                  <div className={styles.contactsParent}>
                    <div className={styles.contacts}>Contacts</div>
                    <div className={styles.div1}>21</div>
                    <div className={styles.iconLibrary}>
                      <img
                        className={styles.iconLibraryChild}
                        loading="lazy"
                        alt=""
                        src="/ellipse-62.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Product />
        </section>
      </main>
      <img
        className={styles.vuesaxlinearprofile2userIcon}
        loading="lazy"
        alt=""
        src="/vuesaxlinearprofile2user.svg"
      />
      <img
        className={styles.alignmentEngineIcon}
        loading="lazy"
        alt=""
        src="/frame-21.svg"
      />
    </div>
  );
};

export default Dashboard1;
