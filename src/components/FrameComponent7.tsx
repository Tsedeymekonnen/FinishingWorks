import { FunctionComponent } from "react";
import styles from "./FrameComponent7.module.css";

const FrameComponent7: FunctionComponent = () => {
  return (
    <section className={styles.timer}>
      <div className={styles.matrixProcessor}>
        <div className={styles.connectUsWrapper}>
          <b className={styles.connectUs}>Connect US</b>
        </div>
        <form className={styles.graphBuilder}>
          <div className={styles.fillTheForm}>
            Fill the form so that our team can reach out to you
          </div>
          <input
            className={styles.pathFollower}
            placeholder="Name"
            type="text"
          />
          <div className={styles.imageProcessorWrapper}>
            <div className={styles.imageProcessor}>
              <input
                className={styles.audioProcessor}
                placeholder="Email"
                type="text"
              />
              <input className={styles.email} placeholder="Phone" type="text" />
              <div className={styles.externalInterface}>
                <button className={styles.button}>
                  <b className={styles.submit}>Submit</b>
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default FrameComponent7;
