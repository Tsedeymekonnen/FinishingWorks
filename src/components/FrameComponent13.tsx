import { FunctionComponent } from "react";
import styles from "./FrameComponent13.module.css";

const FrameComponent13: FunctionComponent = () => {
  return (
    <section className={styles.logicTree}>
      <header className={styles.inputHandler}>
        <div className={styles.outputProcessor}>
          <div className={styles.fyn}>FYN</div>
          <img
            className={styles.valueComparatorIcon}
            loading="lazy"
            alt=""
            src="/frame3.svg"
          />
        </div>
      </header>
      <div className={styles.loopController}>
        <img
          className={styles.dataSplitterIcon}
          alt=""
          src="/data-splitter@2x.png"
        />
        <img
          className={styles.errorHandlerIcon}
          loading="lazy"
          alt=""
          src="/vector1.svg"
        />
      </div>
    </section>
  );
};

export default FrameComponent13;
