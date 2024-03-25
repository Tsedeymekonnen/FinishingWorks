import { FunctionComponent } from "react";
import FrameComponent3 from "../components/FrameComponent3";
import RuleEvaluator from "../components/RuleEvaluator";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import GroupComponent from "../components/GroupComponent";
import styles from "./DesktopMain.module.css";

const DesktopMain: FunctionComponent = () => {
  return (
    <div className={styles.desktopMain}>
      <img
        className={styles.desktopMainChild}
        alt=""
        src="/rectangle-2@2x.png"
      />
      <div className={styles.div}>
        <img className={styles.imageIcon} alt="" src="/image@2x.png" />
        <div className={styles.ceramicInstallation}>ceramic installation</div>
        <div className={styles.expertCeramicInstallation}>
          Expert ceramic installation, enhancing spaces with durability and
          style
        </div>
      </div>
      <FrameComponent3 />
      <section className={styles.desktopMainInner}>
        <div className={styles.frameParent}>
          <div className={styles.fynParent}>
            <div className={styles.fyn}>FYN</div>
            <div className={styles.frameGroup}>
              <div className={styles.frameWrapper}>
                <div className={styles.frameContainer}>
                  <div className={styles.homeWrapper}>
                    <div className={styles.home}>HOME</div>
                  </div>
                  <div className={styles.galleryWrapper}>
                    <div className={styles.gallery}>GALLERY</div>
                  </div>
                  <div className={styles.service}>SERVICE</div>
                  <div className={styles.testimonials}>TESTIMONIALS</div>
                </div>
              </div>
              <div className={styles.frameDiv}>
                <div className={styles.frameParent1}>
                  <button className={styles.rectangleParent}>
                    <div className={styles.frameChild} />
                    <div className={styles.rectangleGroup}>
                      <div className={styles.frameItem} />
                      <div className={styles.gallery1}>Gallery</div>
                    </div>
                  </button>
                  <div className={styles.vectorWrapper}>
                    <img
                      className={styles.vectorIcon}
                      loading="lazy"
                      alt=""
                      src="/vector-4.svg"
                    />
                  </div>
                </div>
              </div>
              <h1 className={styles.ourService}>Our Service</h1>
            </div>
          </div>
          <div className={styles.frameParent2}>
            <div className={styles.frameWrapper1}>
              <div className={styles.parent}>
                <div className={styles.div1}>
                  <img
                    className={styles.imageIcon1}
                    loading="lazy"
                    alt=""
                    src="/image-1@2x.png"
                  />
                  <div className={styles.inner}>
                    <div className={styles.paintingParent}>
                      <div className={styles.painting}>{`Painting `}</div>
                      <div className={styles.precisionPaintingService}>
                        Precision painting service: transforming spaces with
                        vibrant colors and expertise.
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.rootedTrees}>
                  <div className={styles.networkConnections}>
                    <img
                      className={styles.imageIcon2}
                      loading="lazy"
                      alt=""
                      src="/image-2@2x.png"
                    />
                    <div className={styles.treeGraph}>
                      <div className={styles.dataAggregator}>
                        <div className={styles.marbleAndGranite}>
                          marble and granite
                        </div>
                        <div className={styles.exquisiteMarbleAnd}>
                          Exquisite marble and granite craftsmanship, elevating
                          spaces with timeless beauty.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.div2}>
                  <img
                    className={styles.imageIcon3}
                    loading="lazy"
                    alt=""
                    src="/image@2x.png"
                  />
                  <div className={styles.child}>
                    <div className={styles.ceramicInstallationParent}>
                      <div className={styles.ceramicInstallation1}>
                        ceramic installation
                      </div>
                      <div className={styles.expertCeramicInstallation1}>
                        Expert ceramic installation, enhancing spaces with
                        durability and style
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.listProcessor}>
              <div className={styles.iterativeContainerWrapper}>
                <div className={styles.iterativeContainer}>
                  <img
                    className={styles.imageIcon4}
                    alt=""
                    src="/image-4@2x.png"
                  />
                  <img
                    className={styles.imageIcon5}
                    rows={17}
                    cols={18}
                    alt=""
                    src="/image@2x.png"
                  />
                  <img
                    className={styles.iterativeContainerChild}
                    alt=""
                    src="/group-303@2x.png"
                  />
                </div>
              </div>
              <div className={styles.outputDistributor}>
                <div className={styles.pathBuilderParent}>
                  <div className={styles.pathBuilder}>
                    <RuleEvaluator title="Diverse Portfolio" />
                    <RuleEvaluator
                      title="Experienced Team"
                      titleAlignSelf="stretch"
                      titleFlex="unset"
                    />
                    <div className={styles.iconLibrary}>
                      <RuleEvaluator
                        title="Transparent Pricing"
                        titleAlignSelf="unset"
                        titleFlex="1"
                      />
                    </div>
                  </div>
                  <div className={styles.frameWrapper2}>
                    <button className={styles.rectangleContainer}>
                      <div className={styles.frameInner} />
                      <div className={styles.gallery2}>Gallery</div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FrameComponent1 />
      <FrameComponent />
      <GroupComponent />
    </div>
  );
};

export default DesktopMain;
