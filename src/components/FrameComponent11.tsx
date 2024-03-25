import { FunctionComponent } from "react";
import FrameComponent21 from "./FrameComponent2";
import styles from "./FrameComponent11.module.css";

const FrameComponent11: FunctionComponent = () => {
  return (
    <section className={styles.desktopMainInner}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.frameWrapper}>
          <div className={styles.whatOurClientsSayParent}>
            <div className={styles.whatOurClients}>What Our Clients Say</div>
            <div className={styles.frameContainer}>
              <FrameComponent21
                star2="/star-2.svg"
                star3="/star-3.svg"
                star4="/star-4.svg"
                star5="/star-5.svg"
                star6="/star-6.svg"
                iWillLetMyMumKnowAboutThi="I will let my mum know about this, she could really make use of software! Very easy to use. Since I invested in software I made over 100,000 dollars profits. I just can't get enough of software. I want to get a T-Shirt with software on it so I can show it off to everyone."
                samri="Samri"
                ellipse1="/ellipse-1@2x.png"
              />
            </div>
          </div>
        </div>
        <div className={styles.frameParent}>
          <FrameComponent21
            star2="/star-2.svg"
            star3="/star-3.svg"
            star4="/star-4.svg"
            star5="/star-5.svg"
            star6="/star-6.svg"
            iWillLetMyMumKnowAboutThi="Website design did exactly what you said it does. Just what I was looking for. Nice work on your website design."
            samri="Robel Y"
            ellipse1="/ellipse-1-1@2x.png"
            propFlex="unset"
            propMinHeight="257px"
            propAlignSelf="stretch"
            propLineHeight="unset"
            propMinWidth="52px"
          />
          <FrameComponent21
            star2="/star-2-2.svg"
            star3="/star-3-2.svg"
            star4="/star-4-2.svg"
            star5="/star-5-2.svg"
            star6="/star-6-2.svg"
            iWillLetMyMumKnowAboutThi="If you want real marketing that works and effective implementation - mobile app's got you covered."
            samri="Sol D"
            ellipse1="/ellipse-1-2@2x.png"
            propFlex="unset"
            propMinHeight="257px"
            propAlignSelf="stretch"
            propLineHeight="unset"
            propMinWidth="36px"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent11;
