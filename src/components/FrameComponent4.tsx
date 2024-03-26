import React, { FunctionComponent, useState } from "react";
import emailjs from "emailjs-com";
import Button from "./Button";
import MapsFullMap from "./MapsFullMap";
import styles from "./FrameComponent4.module.css";

const FrameComponent2: FunctionComponent = () => {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    PhoneNumber: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const timeoutDuration = 3000;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { Name, Email, PhoneNumber } = formData;
    if (!emailRegex.test(Email)) {
      setErrorMessage("Please enter a valid email address.");
      setSuccessMessage("");
      return;
    }
    const serviceID = "service_qrt71ed";
    const templateID = "template_0011xd3";
    const userID = "8kzIEe9Tvk3UMTcm2"; 

    emailjs
      .sendForm(serviceID, templateID, e.currentTarget, userID)
      .then((result) => {
        console.log("Email sent successfully:", result);
        setSuccessMessage("Message sent successfully!");
        setErrorMessage("");
        setTimeout(() => {
          setSuccessMessage("");
        }, 5000);

      })
      .catch((error) => {
        console.error("Email send failed:", error);
        setErrorMessage("Message failed to send. Please try again later.");
        setSuccessMessage("");
      });
    setTimeout(() => {
      setFormData({ Name: "", Email: "", PhoneNumber: "" }); 
    }, timeoutDuration);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <section className={styles.desktopMainInner}>
      <div className={styles.frameParent}>
        <div className={styles.contactForm5Wrapper}>
          <div className={styles.contactForm5}>
            <form className={styles.rectangleParent} onSubmit={handleSubmit}>
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
                    <input
                      className={styles.name}
                      placeholder="Name"
                      type="text"
                      name="Name"
                      value={formData.Name}
                      onChange={handleChange}
                      required
                    />
                    <input
                      className={styles.email}
                      placeholder="Email"
                      type="text"
                      name="Email"
                      value={formData.Email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <input
                    className={styles.phioneNumber}
                    placeholder="Phone Number"
                    type="text"
                    name="PhoneNumber"
                    value={formData.PhoneNumber}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className={styles.buttonWrapper}>
                <Button />

               <div className={styles.successMessageWrapper}>
                {successMessage && (
                  <p className={styles.successMessage}>{successMessage}</p>
                )}

                {errorMessage && (
                  <p className={styles.errorMessage}>{errorMessage}</p>
                )}
                </div> 
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
