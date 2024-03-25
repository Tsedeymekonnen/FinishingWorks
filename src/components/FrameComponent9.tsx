import { FunctionComponent } from "react";
import FrameComponent10 from "./FrameComponent10";
import styles from "./FrameComponent9.module.css";

const FrameComponent9: FunctionComponent = () => {
  return (
    <section className={styles.treeTraverser}>
      <div className={styles.decisionMaker}>
        <FrameComponent10
          title="Diverse Portfolio"
          group304="/group-3041.svg"
          group305="/group-3041.svg"
        />
        <div className={styles.functionScope}>
          <FrameComponent10
            title="Experienced Team"
            group304="/group-304-1.svg"
            group305="/group-304-1.svg"
          />
          <FrameComponent10
            title="Transparent Pricing"
            group304="/group-304-2.svg"
            group305="/group-304-2.svg"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent9;
