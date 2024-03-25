import { FunctionComponent } from "react";
import FrameComponent13 from "../components/FrameComponent13";
import FrameComponent12 from "../components/FrameComponent12";
import FrameComponent9 from "../components/FrameComponent9";
import FrameComponent8 from "../components/FrameComponent8";
import FrameComponent7 from "../components/FrameComponent7";
import FrameComponent6 from "../components/FrameComponent6";
import GroupComponent3 from "../components/GroupComponent3";
import styles from "./MobileHome.module.css";

const MobileHome: FunctionComponent = () => {
  return (
    <div className={styles.mobileHome}>
      <FrameComponent13 />
      <FrameComponent12 />
      <section className={styles.indexCalculator}>
        <div className={styles.div}>
          <img
            className={styles.imageIcon}
            loading="lazy"
            alt=""
            src="/image-2@2x.png"
          />
          <div className={styles.graphManager}>
            <div className={styles.treeLeaf}>
              <div className={styles.marbleAndGranite}>marble and granite</div>
              <div className={styles.exquisiteMarbleAnd}>
                Exquisite marble and granite craftsmanship, elevating spaces
                with timeless beauty.
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.memoryManager}>
        <div className={styles.timer}>
          <img
            className={styles.imageIcon1}
            loading="lazy"
            alt=""
            src="/image4@2x.png"
          />
          <div className={styles.stackManager}>
            <div className={styles.signalHandler}>
              <div className={styles.ceramicInstallation}>
                ceramic installation
              </div>
              <div className={styles.expertCeramicInstallation}>
                Expert ceramic installation, enhancing spaces with durability
                and style
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.dataValidator}>
        <div className={styles.dataFilterWrapper}>
          <div className={styles.dataFilter}>
            <img className={styles.imageIcon2} alt="" src="/image-3@2x.png" />
            <img
              className={styles.imageIcon3}
              loading="lazy"
              alt=""
              src="/image-41@2x.png"
            />
            <img
              className={styles.dataFilterChild}
              alt=""
              src="/group-3031@2x.png"
            />
          </div>
        </div>
      </section>
      <FrameComponent9 />
      <div className={styles.mobileHomeInner}>
        <button className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.gallery}>Gallery</div>
        </button>
      </div>
      <FrameComponent8 />
      <FrameComponent7 />
      <FrameComponent6 />
      <GroupComponent3 />
    </div>
  );
};

export default MobileHome;
