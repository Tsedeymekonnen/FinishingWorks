import React, { FunctionComponent, FormEvent, useState } from "react";
import styles from "./FrameComponent41.module.css";
import { GoogleLogin, GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';
import { Link, useNavigate } from "react-router-dom";

export type FrameComponent4Type = {
  frameDivWidth?: string;
  welcomeBackWidth?: string;
  frameDivWidth1?: string;
  frameDivDisplay?: string;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  loggedIn: boolean;
  setLoggedIn: (loggedIn: boolean) => void;
};

const FrameComponent4: FunctionComponent<FrameComponent4Type> = ({
  frameDivWidth,
  welcomeBackWidth,
  frameDivWidth1,
  frameDivDisplay,
  handleSubmit,
  loggedIn,
  setLoggedIn,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Function to handle successful Google sign-in
  const responseGoogle = (response: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    // Handle Google sign-in response
    console.log(response);
    // Here, you can set the loggedIn state and perform any other necessary actions
  };

  // Function to handle failed Google sign-in
  const responseGoogleError = (error: any) => {
    // Handle Google sign-in error
    console.error(error);
  };

  return loggedIn ? (
    <div>You are logged in as admin.</div>
  ) : (
    <section className={styles.signUpInner} style={{ width: frameDivWidth }}>
      <div className={styles.frameParent} style={{ width: welcomeBackWidth }}>
        <Link to="/">
        <img
          className={styles.frameIcon}
          loading="lazy"
          alt=""
          src="/frame1.svg"
        />
        </Link>
        <div className={styles.formWrapper}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.welcomeBackParent}>
              <div className={styles.welcomeBack}>Welcome back</div>
              <h2 className={styles.title} style={{ width: frameDivWidth1, display: frameDivDisplay }}>
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
                      name="email"
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
                      name="password"
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
              {/* Google Sign-In Button */}
              <GoogleLogin
                clientId="YOUR_GOOGLE_CLIENT_ID"
                buttonText="Continue with Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogleError}
                cookiePolicy={'single_host_origin'}
                className={styles.button1}
              />
              
              {/* <div className={styles.alreadyHaveAnAccountParent}>
                <div className={styles.alreadyHaveAn}>
                  Already have an account ?
                </div>
                <div className={styles.logIn}>Log in</div>
              </div> */}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent4;
