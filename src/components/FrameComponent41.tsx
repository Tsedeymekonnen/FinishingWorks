import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FrameComponent41.module.css";

export type FrameComponent4Type = {
  /** Style props */
  frameDivWidth?: CSSProperties["width"];
  welcomeBackWidth?: CSSProperties["width"];
  frameDivWidth1?: CSSProperties["width"];
  frameDivDisplay?: CSSProperties["display"];
};

const FrameComponent4: FunctionComponent<FrameComponent4Type> = ({
  frameDivWidth,
  welcomeBackWidth,
  frameDivWidth1,
  frameDivDisplay,
}) => {
  const frameSectionStyle: CSSProperties = useMemo(() => {
    return {
      width: frameDivWidth,
    };
  }, [frameDivWidth]);

  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      width: welcomeBackWidth,
    };
  }, [welcomeBackWidth]);

  const titleStyle: CSSProperties = useMemo(() => {
    return {
      width: frameDivWidth1,
      display: frameDivDisplay,
    };
  }, [frameDivWidth1, frameDivDisplay]);

  return (
    <section className={styles.signUpInner} style={frameSectionStyle}>
      <div className={styles.frameParent} style={frameDiv1Style}>
        <img
          className={styles.frameIcon}
          loading="lazy"
          alt=""
          src="/frame1.svg"
        />
        <div className={styles.formWrapper}>
          <form className={styles.form}>
            <div className={styles.welcomeBackParent}>
              <div className={styles.welcomeBack}>Welcome back</div>
              <h2 className={styles.title} style={titleStyle}>
                Create an account
              </h2>
            </div>
            <div className={styles.frameGroup}>
              <div className={styles.frameContainer}>
                <div className={styles.emailWrapper}>
                  <div className={styles.email}>Email</div>
                </div>
                <div className={styles.inputTextWrapper}>
                  <div className={styles.inputText}>
                    <input
                      className={styles.context}
                      placeholder="abebe@gmail.com"
                      type="text"
                    />
                    <div className={styles.iconeyeWrapper}>
                      <img
                        className={styles.iconeye}
                        alt=""
                        src="/iconeye.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameDiv}>
                <div className={styles.passwordParent}>
                  <div className={styles.password}>Password</div>
                  <div className={styles.forgot} />
                </div>
                <div className={styles.input}>
                  <div className={styles.inputText1}>
                    <input
                      className={styles.context1}
                      placeholder="Enter your password"
                      type="text"
                    />
                    <div className={styles.iconeyeContainer}>
                      <img
                        className={styles.iconeye1}
                        alt=""
                        src="/iconeye.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.buttonParent}>
              <button className={styles.button}>
                <div className={styles.loginNow}>Create account</div>
              </button>
              <button className={styles.button1}>
                <img
                  className={styles.icongoogleOriginal}
                  alt=""
                  src="/icongoogle--original.svg"
                />
                <div className={styles.loginNow1}>Continue with Google</div>
              </button>
              <div className={styles.alreadyHaveAnAccountParent}>
                <div className={styles.alreadyHaveAn}>
                  Already have an account ?
                </div>
                <div className={styles.logIn}>Log in</div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent4;
