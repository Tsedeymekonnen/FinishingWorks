import { FunctionComponent } from "react";
import FrameComponent3 from "../components/FrameComponent3";
import RuleEvaluator from "../components/RuleEvaluator";
import FrameComponent11 from "../components/FrameComponent11";
import FrameComponent2 from "../components/FrameComponent4";
import GroupComponent1 from "../components/GroupComponent1";
import styles from "./DesktopMain.module.css";
import { Link } from "react-router-dom";

const DesktopMain: FunctionComponent = () => {
  return (
    <div className={styles.desktopMain}>
      <img
        className={styles.desktopMainChild}
        alt=""
        src="/rectangle-2@2x.png"
      />
      <div className={styles.div}>
        <img className={styles.imageIcon} alt="" src="/image4@2x.png" />
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
                    <div className={styles.home}><Link to={"/"}>HOME</Link></div>
                  </div>
                  <div className={styles.galleryWrapper}>
                    <div className={styles.gallery}><Link to={"/gallery"}>GALLERY</Link></div>
                  </div>
                  <div className={styles.service}><Link to={"/service"}>SERVICE</Link></div>
                  <div className={styles.testimonials}><Link to={"/testimonials"}>TESTIMONIALS</Link></div>
                  <div className={styles.dashboard}><Link to={"/dashboard1"}>DASHBOARD</Link></div>
                </div>
              </div>
              <div className={styles.frameDiv}>
                <div className={styles.frameParent1}>
                  <button className={styles.rectangleParent}>
                    <div className={styles.frameChild} />
                    <div className={styles.rectangleGroup}>
                      <div className={styles.frameItem} />
                      <div className={styles.gallery1}><Link to={"/gallery"}>Gallery</Link></div>
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
                    src="/image4@2x.png"
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
                    alt=""
                    src="/image5@2x.png"
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
                      // title="Experienced Team"
                      titleAlignSelf="stretch"
                      titleFlex="unset"
                    />
                    <div className={styles.iconLibrary}>
                      <RuleEvaluator
                        // title="Transparent Pricing"
                        titleAlignSelf="unset"
                        titleFlex="1"
                      />
                    </div>
                  </div>
                  <div className={styles.frameWrapper2}>
                    <button className={styles.rectangleContainer}>
                      <div className={styles.frameInner} />
                      <div className={styles.gallery2}><Link to={"/gallery"}>Gallery</Link></div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FrameComponent11 />
      <FrameComponent2 />
      <GroupComponent1 />
    </div>
  );
};

export default DesktopMain;
