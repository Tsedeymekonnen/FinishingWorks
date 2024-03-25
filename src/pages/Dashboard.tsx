import { FunctionComponent } from "react";
import FrameComponent5 from "../components/FrameComponent5";
import styles from "./Dashboard.module.css";
import { Link } from "react-router-dom";

const Dashboard: FunctionComponent = () => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.galleryWeHaveContainer}>
        <p className={styles.gallery}> Gallery</p>
        <p className={styles.weHaveSltions}>
          We Have Sltions for All Your Related Issues!
        </p>
      </div>
      <main className={styles.dashboardHttpsbitlyavi}>
        <div className={styles.sideMenu}>
          <div className={styles.sideMenuChild} />
          <div className={styles.frameParent}>
            <div className={styles.setting1Wrapper}>
              <img
                className={styles.setting1Icon}
                alt=""
                src="/setting-1.svg"
              />
            </div>
            <h2 className={styles.dashboard1}>Dashboard</h2>
            <div className={styles.v01Wrapper}>
              <div className={styles.v01}>v.01</div>
            </div>
          </div>
          <div className={styles.sideMenuInner}>
            <div className={styles.icon24OutlineKeySquaParent}>
              <img
                className={styles.icon24OutlineKeySqua}
                alt=""
                src="/icon--24--outline--keysquare.svg"
              />
              <div className={styles.dashboardWrapper}>
                <div className={styles.dashboard2}><Link to={"/dashboard1"}>Dashboard</Link></div>
              </div>
            </div>
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <img className={styles.frameIcon} alt="" src="/frame2.svg" />
              <div className={styles.galleryWrapper}>
                <div className={styles.gallery1}>Gallery</div>
              </div>
            </div>
            <div className={styles.frameWrapper}>
              <div className={styles.frameContainer}>
                <img className={styles.frameIcon1} alt="" src="/frame2.svg" />
                <div className={styles.galleryContainer}>
                  <div className={styles.gallery2}>Gallery</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.ellipseParent}>
              <img
                className={styles.frameItem}
                alt=""
                src="/ellipse-8@2x.png"
              />
              <div className={styles.frameWrapper1}>
                <div className={styles.loginNowButtonParent}>
                  <div className={styles.loginNowButton}>
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
                src="/chevrondown-2.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.postImageWrapper}>
          <h2 className={styles.postImage}>{`Post Image `}</h2>
        </div>
        <div className={styles.dashboardHttpsbitlyaviInner}>
          <img className={styles.frameInner} alt="" src="/ellipse-62.svg" />
        </div>
      </main>
      <div className={styles.dashboardHttpsbitlyavi1}>
        <div className={styles.sideMenu1}>
          <div className={styles.sideMenuItem} />
          <div className={styles.frameParent1}>
            <div className={styles.setting1Container}>
              <img
                className={styles.setting1Icon1}
                loading="lazy"
                alt=""
                src="/setting-1.svg"
              />
            </div>
            <h2 className={styles.dashboard3}>Dashboard</h2>
            <div className={styles.v01Container}>
              <div className={styles.v011}>v.01</div>
            </div>
          </div>
          <div className={styles.sideMenuInner1}>
            <div className={styles.icon24OutlineKeySquaGroup}>
              <img
                className={styles.icon24OutlineKeySqua1}
                loading="lazy"
                alt=""
                src="/icon--24--outline--keysquare.svg"
              />
              <div className={styles.dashboardContainer}>
                <div className={styles.dashboard4}><Link to={"/dashboard1"}>Dashboard</Link></div>
              </div>
            </div>
          </div>
          <div className={styles.frameParent2}>
            <div className={styles.rectangleGroup}>
              <div className={styles.rectangleDiv} />
              <img className={styles.frameIcon2} alt="" src="/frame2.svg" />
              <div className={styles.galleryFrame}>
                <div className={styles.gallery3}>Gallery</div>
              </div>
            </div>
            <div className={styles.thirdLevelGalleryWrapper}>
              <div className={styles.thirdLevelGallery}>
                <img
                  className={styles.frameIcon3}
                  loading="lazy"
                  alt=""
                  src="/frame2.svg"
                />
                <div className={styles.galleryWrapper1}>
                  <div className={styles.gallery4}>Gallery</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameParent3}>
            <div className={styles.ellipseGroup}>
              <img
                className={styles.ellipseIcon}
                alt=""
                src="/ellipse-8@2x.png"
              />
              <div className={styles.frameWrapper2}>
                <div className={styles.frameParent4}>
                  <div className={styles.abebeWrapper}>
                    <div className={styles.abebe1}>Abebe</div>
                  </div>
                  <div className={styles.admin1}>Admin</div>
                </div>
              </div>
            </div>
            <div className={styles.chevronDown2Container}>
              <img
                className={styles.chevronDown2Icon1}
                alt=""
                src="/chevrondown-2.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.forgot}>Forgot？</div>
        <div className={styles.dashboardHttpsbitlyaviChild}>
          <div className={styles.managePostParent}>
            <h2 className={styles.managePost}>{`Manage Post  `}</h2>
            <div className={styles.titleInputWrapper}>
              <div className={styles.titleInput}>
                <div className={styles.titleInputInner}>
                  <img
                    className={styles.frameChild1}
                    loading="lazy"
                    alt=""
                    src="/ellipse-62.svg"
                  />
                </div>
                <div className={styles.titleInputChild}>
                  <div className={styles.frameParent5}>
                    <div className={styles.frameParent6}>
                      <FrameComponent5
                        title="Title"
                        contextPlaceholder="....."
                      />
                      <FrameComponent5
                        title="Description(optional)"
                        contextPlaceholder="....."
                        propAlignSelf="stretch"
                        propPosition="unset"
                        propTop="unset"
                        propLeft="unset"
                        propWidth="unset"
                      />
                    </div>
                    <div className={styles.frameParent7}>
                      <div className={styles.uploadImageWrapper}>
                        <img
                          className={styles.uploadImageIcon}
                          loading="lazy"
                          alt=""
                          src="/upload-image.svg"
                        />
                      </div>
                      <img
                        className={styles.frameChild2}
                        loading="lazy"
                        alt=""
                        src="/frame-300.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.buttonLabel}>
                  <button className={styles.button}>
                    <div className={styles.loginNow}>Upload</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FrameComponent5
        title="Add new"
        contextPlaceholder="Image"
        propAlignSelf="unset"
        propPosition="absolute"
        propTop="237px"
        propLeft="487px"
        propWidth="555px"
      />
      <img
        className={styles.chevronDown2Icon2}
        loading="lazy"
        alt=""
        src="/chevrondown-2-2.svg"
      />
    </div>
  );
};

export default Dashboard;
