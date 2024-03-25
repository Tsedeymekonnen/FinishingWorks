import { FunctionComponent } from "react";
import styles from "./GroupComponent3.module.css";

const GroupComponent3: FunctionComponent = () => {
  return (
    <section className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <div className={styles.frameItem} />
      <div className={styles.loopManager}>
        <div className={styles.variableVault}>
          <b className={styles.aboutUs}>About Us</b>
          <div className={styles.craftingExcellenceThroughContainer}>
            <p className={styles.craftingExcellenceThrough}>
              Crafting excellence through precision and passion, we redefine
              spaces with our expert finishing works
            </p>
          </div>
        </div>
      </div>
      <div className={styles.errorHandler}>
        <div className={styles.eventExecutor}>
          <div className={styles.contactInfo}>Contact Info</div>
          <div className={styles.rdFloorSomewhere}>
            3rd Floor somewhere, Addis Ababa
          </div>
          <div className={styles.expressionExplorer}>0965325142</div>
          <div className={styles.fyngmailcom}>fyn@gmail.com</div>
        </div>
      </div>
      <div className={styles.parameterProcessor}>
        <div className={styles.controlCenter}>
          <div className={styles.transitionTrigglerParent}>
            <div className={styles.transitionTriggler}>
              <div className={styles.ourCompany}>Our Company</div>
            </div>
            <div className={styles.connectionController}>
              <div className={styles.signalSender}>
                <div className={styles.testimonials}>Testimonials</div>
              </div>
              <div className={styles.signalSender1}>
                <div className={styles.contact}>Contact</div>
              </div>
              <div className={styles.gallery}>Gallery</div>
            </div>
          </div>
          <div className={styles.errorEliminator}>
            <div className={styles.performanceTracker}>
              <div className={styles.errorHandler1}>
                <img
                  className={styles.eventEmitterIcon}
                  loading="lazy"
                  alt=""
                  src="/vector-11.svg"
                />
              </div>
              <div className={styles.signalRouter}>
                <img
                  className={styles.conditionCombinerIcon}
                  alt=""
                  src="/frame.svg"
                />
                <img
                  className={styles.sequenceSequencerIcon}
                  loading="lazy"
                  alt=""
                  src="/vector-21.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.dataDistributor} />
      <div className={styles.copyright2024FynFinishingWrapper}>
        <div className={styles.copyright2024}>
          Copyright © 2024 FYN finishing work
        </div>
      </div>
    </section>
  );
};

export default GroupComponent3;
