import React, { FunctionComponent, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Dashboard.module.css";
import axios from 'axios';

const Dashboard: FunctionComponent = () => {
  // State for input values
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [uploadStatus, setUploadStatus] = useState<string | null>(null);

  // Function to handle file input change
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files[0]);
    }
  };

  // Function to handle upload
  const handleUpload = () => {
    // Create FormData object to append form data
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    
    // Check if image is not null before appending
    if (image !== null) {
      formData.append("image", image);
    }
  
    // Make a POST request to the API endpoint using Axios
    axios.post('http://localhost:3001/api/form', formData)
      .then(response => {
        // Reset input fields after successful upload
        setTitle("");
        setDescription("");
        setImage(null);
        setUploadStatus("Upload successful");
        console.log('Data uploaded successfully');
      })
      .catch(error => {
        console.error('Error:', error);
        setUploadStatus("Error uploading data");
      });
  };
  return (
    <div className={styles.dashboard}>
      <div className={styles.galleryWeHaveContainer}>
        <p className={styles.gallery}> Gallery</p>
        <p className={styles.weHaveSltions}>
          We Have Solutions for All Your Related Issues!
        </p>
      </div>
      <main className={styles.dashboardHttpsbitlyavi}>
        <div className={styles.sideMenu}>
          <div className={styles.sideMenuChild} />
          <div className={styles.frameParent}>
            <div className={styles.setting1Wrapper}>
              <img
                className={styles.setting1Icon}
                alt=""
                src="/setting-1.svg"
              />
            </div>
            <h2 className={styles.dashboard1}>Dashboard</h2>
            <div className={styles.v01Wrapper}>
              <div className={styles.v01}>v.01</div>
            </div>
          </div>
          <div className={styles.sideMenuInner}>
            <div className={styles.icon24OutlineKeySquaParent}>
              <img
                className={styles.icon24OutlineKeySqua}
                alt=""
                src="/icon--24--outline--keysquare.svg"
              />
              <div className={styles.dashboardWrapper}>
                <div className={styles.dashboard2}>
                  <Link to={"/dashboard1"}>Dashboard</Link>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <img className={styles.frameIcon} alt="" src="/frame2.svg" />
              <div className={styles.galleryWrapper}>
                <div className={styles.gallery1}>Gallery</div>
              </div>
            </div>
            <div className={styles.frameWrapper}>
              <div className={styles.frameContainer}>
                <img className={styles.frameIcon1} alt="" src="/frame2.svg" />
                <div className={styles.galleryContainer}>
                  <div className={styles.gallery2}>Gallery</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.ellipseParent}>
              <img
                className={styles.frameItem}
                alt=""
                src="/ellipse-8@2x.png"
              />
              <div className={styles.frameWrapper1}>
                <div className={styles.loginNowButtonParent}>
                  <div className={styles.loginNowButton}>
                    <div className={styles.abebe}>Abebe</div>
                  </div>
                  <div className={styles.admin}>Admin</div>
                </div>
              </div>
            </div>
            <div className={styles.chevronDown2Wrapper}>
              <img
                className={styles.chevronDown2Icon}
                alt=""
                src="/chevrondown-2.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.postImageWrapper}>
          <h2 className={styles.postImage}>Post Image</h2>
        </div>
        <div className={styles.dashboardHttpsbitlyaviInner}>
          <img className={styles.frameInner} alt="" src="/ellipse-62.svg" />
        </div>
      </main>
      <div className={styles.dashboardHttpsbitlyavi1}>
        <div className={styles.sideMenu1}>
          <div className={styles.sideMenuItem} />
          <div className={styles.frameParent1}>
            <div className={styles.setting1Container}>
              <img
                className={styles.setting1Icon1}
                loading="lazy"
                alt=""
                src="/setting-1.svg"
              />
            </div>
            <h2 className={styles.dashboard3}>Dashboard</h2>
            <div className={styles.v01Container}>
              <div className={styles.v011}>v.01</div>
            </div>
          </div>
          <div className={styles.sideMenuInner1}>
            <div className={styles.icon24OutlineKeySquaGroup}>
              <img
                className={styles.icon24OutlineKeySqua1}
                loading="lazy"
                alt=""
                src="/icon--24--outline--keysquare.svg"
              />
              <div className={styles.dashboardContainer}>
                <div className={styles.dashboard4}>
                  <Link to={"/dashboard1"}>Dashboard</Link>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameParent2}>
            <div className={styles.rectangleGroup}>
              <div className={styles.rectangleDiv} />
              <img className={styles.frameIcon2} alt="" src="/frame2.svg" />
              <div className={styles.galleryFrame}>
                <div className={styles.gallery3}>Gallery</div>
              </div>
            </div>
            <div className={styles.thirdLevelGalleryWrapper}>
              <div className={styles.thirdLevelGallery}>
                <img
                  className={styles.frameIcon3}
                  loading="lazy"
                  alt=""
                  src="/frame2.svg"
                />
                <div className={styles.galleryWrapper1}>
                  <div className={styles.gallery4}>Gallery</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameParent3}>
            <div className={styles.ellipseGroup}>
              <img
                className={styles.ellipseIcon}
                alt=""
                src="/ellipse-8@2x.png"
              />
              <div className={styles.frameWrapper2}>
                <div className={styles.frameParent4}>
                  <div className={styles.abebeWrapper}>
                    <div className={styles.abebe1}>Abebe</div>
                  </div>
                  <div className={styles.admin1}>Admin</div>
                </div>
              </div>
            </div>
            <div className={styles.chevronDown2Container}>
              <img
                className={styles.chevronDown2Icon1}
                alt=""
                src="/chevrondown-2.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.forgot}>Forgot？</div>
        <div className={styles.dashboardHttpsbitlyaviChild}>
          <div className={styles.managePostParent}>
            <h2 className={styles.managePost}>Manage Post</h2>
            <div className={styles.titleInputWrapper}>
              <div className={styles.titleInput}>
                <div className={styles.titleInputInner}>
                  <img
                    className={styles.frameChild1}
                    loading="lazy"
                    alt=""
                    src="/ellipse-62.svg"
                  />
                </div>
                <div className={styles.titleInputChild}>
                  <label htmlFor="title">Title:</label>
                  <input
                    id="title"
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                  <label htmlFor="description">Description:</label>
                  <textarea
                    id="description"
                    placeholder="Description(optional)"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                  <label htmlFor="image">Image:</label>
                  <div className={styles.uploadImageWrapper}>
                    <input
                      id="image"
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                    />
                    {image && <div>{image.name}</div>}
                  </div>
                </div>
                <div className={styles.buttonLabel}>
                  <button className={styles.button} onClick={handleUpload}>
                    Upload
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className={styles.chevronDown2Icon2}
        loading="lazy"
        alt=""
        src="/chevrondown-2-2.svg"
      />
    </div>
  );
};

export default Dashboard;