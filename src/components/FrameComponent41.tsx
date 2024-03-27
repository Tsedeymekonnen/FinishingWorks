import { FunctionComponent, useEffect, useMemo, useState, type CSSProperties } from "react";
import styles from "./FrameComponent41.module.css";
import { useNavigate } from "react-router-dom";

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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email === "admin@gmail.com" && password === "12345678") {
      setLoggedIn(true);
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };
  useEffect(() => {
    if (loggedIn) {
      navigate("/dashboard");
    }
  }, [loggedIn, navigate]);

  return loggedIn ? (
    <div>You are logged in as admin.</div>
  ) : (
    <section className={styles.signUpInner} style={frameSectionStyle}>
      <div className={styles.frameParent} style={frameDiv1Style}>
        <img
          className={styles.frameIcon}
          loading="lazy"
          alt=""
          src="/frame1.svg"
        />
        <div className={styles.formWrapper}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.welcomeBackParent}>
              <div className={styles.welcomeBack}>Welcome back</div>
              <h2 className={styles.title} style={titleStyle}>
                Admin Login
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
                      placeholder="admin@example.com"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
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
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
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
              <button className={styles.button} type="submit">
                <div className={styles.loginNow}>Login</div>
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
