import { FunctionComponent } from "react";
import Name1 from "./Name1";
import Email from "./Email";
import PhioneNumber from "./PhioneNumber";
import Button from "./Button";
import MapsFullMap from "./MapsFullMap";
import styles from "./FrameComponent4.module.css";

const FrameComponent2: FunctionComponent = () => {
  return (
    <section className={styles.desktopMainInner}>
      <div className={styles.frameParent}>
        <div className={styles.contactForm5Wrapper}>
          <div className={styles.contactForm5}>
            <form className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <div className={styles.dataAggregator}>
                <h1 className={styles.connectUs}>Connect US</h1>
              </div>
              <div className={styles.numberCruncher}>
                <div className={styles.booleanOperator}>
                  <div className={styles.fillTheForm}>
                    Fill the form so that our team can reach out to you
                  </div>
                </div>
                <div className={styles.ifStatementParent}>
                  <div className={styles.ifStatement}>
                    <Name1 />
                    <Email />
                  </div>
                  <PhioneNumber />
                </div>
              </div>
              <div className={styles.buttonWrapper}>
                <Button />
              </div>
            </form>
          </div>
        </div>
        <MapsFullMap />
      </div>
    </section>
  );
};

export default FrameComponent2;
