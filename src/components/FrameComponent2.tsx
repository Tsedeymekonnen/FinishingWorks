import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FrameComponent2.module.css";

export type FrameComponent2Type = {
  star2?: string;
  star3?: string;
  star4?: string;
  star5?: string;
  star6?: string;
  iWillLetMyMumKnowAboutThi?: string;
  samri?: string;
  ellipse1?: string;

  /** Style props */
  propFlex?: CSSProperties["flex"];
  propMinHeight?: CSSProperties["minHeight"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propLineHeight?: CSSProperties["lineHeight"];
  propMinWidth?: CSSProperties["minWidth"];
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  star2,
  star3,
  star4,
  star5,
  star6,
  iWillLetMyMumKnowAboutThi,
  samri,
  ellipse1,
  propFlex,
  propMinHeight,
  propAlignSelf,
  propLineHeight,
  propMinWidth,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
      minHeight: propMinHeight,
      alignSelf: propAlignSelf,
    };
  }, [propFlex, propMinHeight, propAlignSelf]);

  const iWillLetStyle: CSSProperties = useMemo(() => {
    return {
      lineHeight: propLineHeight,
    };
  }, [propLineHeight]);

  const samriStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className={styles.frameParent} style={frameDivStyle}>
      <div className={styles.starsWrapper}>
        <div className={styles.stars}>
          <img
            className={styles.starsChild}
            loading="lazy"
            alt=""
            src={star2}
          />
          <img className={styles.starsItem} loading="lazy" alt="" src={star3} />
          <img
            className={styles.starsInner}
            loading="lazy"
            alt=""
            src={star4}
          />
          <img className={styles.starIcon} alt="" src={star5} />
          <img className={styles.starsChild1} alt="" src={star6} />
        </div>
      </div>
      <div className={styles.iWillLet} style={iWillLetStyle}>
        {iWillLetMyMumKnowAboutThi}
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.samriWrapper}>
          <div className={styles.samri} style={samriStyle}>
            {samri}
          </div>
        </div>
        <img
          className={styles.logo5ff3c18e1Icon}
          loading="lazy"
          alt=""
          src="/logo5ff3c18e-1.svg"
        />
      </div>
      <img className={styles.frameChild} loading="lazy" alt="" src={ellipse1} />
    </div>
  );
};

export default FrameComponent2;
