import { FunctionComponent } from "react";
import styles from "./Product.module.css";

const Product: FunctionComponent = () => {
  return (
    <div className={styles.product}>
      <img className={styles.productChild} alt="" src="/rectangle-30.svg" />
      <div className={styles.allGalleryParent}>
        <h3 className={styles.allGallery}>All Gallery</h3>
        <div className={styles.frameWrapper}>
          <div className={styles.frameParent}>
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <img
                className={styles.search1Icon}
                alt=""
                src="/search-1-1.svg"
              />
              <input
                className={styles.frameItem}
                placeholder="Search"
                type="text"
              />
            </div>
            <div className={styles.rectangleGroup}>
              <div className={styles.frameInner} />
              <div className={styles.shortByContainer}>
                <span>{`Short by : `}</span>
                <span className={styles.newest}>Newest</span>
              </div>
              <img
                className={styles.chevronDown1Icon}
                alt=""
                src="/chevrondown-1.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.pathCombineWrapper}>
        <div className={styles.pathCombine}>
          <div className={styles.frameGroup}>
            <div className={styles.imageWrapper}>
              <div className={styles.image}>Image</div>
            </div>
            <div className={styles.titleWrapper}>
              <div className={styles.title}>Title</div>
            </div>
            <div className={styles.dateWrapper}>
              <div className={styles.date}>Date</div>
            </div>
            <div className={styles.typeWrapper}>
              <div className={styles.type}>type</div>
            </div>
            <div className={styles.actionWrapper}>
              <div className={styles.action}>Action</div>
            </div>
          </div>
          <div className={styles.pathCombineInner}>
            <div className={styles.lineParent}>
              <img className={styles.lineIcon} loading="lazy" alt="" />
              <div className={styles.pathUnion}>
                <div className={styles.frameContainer}>
                  <div className={styles.frameDiv}>
                    <div className={styles.imageRotateParent}>
                      <div className={styles.imageRotate}>
                        <div className={styles.marvel}>Marvel</div>
                      </div>
                      <div className={styles.shapeScaleY}>
                        <div className={styles.shapeTransform}>24-10-2024</div>
                      </div>
                      <div className={styles.shapeMirrorV}>
                        <div className={styles.gallery}>Gallery</div>
                      </div>
                      <div className={styles.removeWrapper}>
                        <div className={styles.remove}>Remove</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.lineWrapper}>
                    <img className={styles.frameChild1} loading="lazy" alt="" />
                  </div>
                  <div className={styles.frameWrapper1}>
                    <div className={styles.frameParent1}>
                      <div className={styles.marvelWrapper}>
                        <div className={styles.marvel1}>Marvel</div>
                      </div>
                      <div className={styles.wrapper}>
                        <div className={styles.div}>24-10-2024</div>
                      </div>
                      <div className={styles.galleryWrapper}>
                        <div className={styles.gallery1}>Gallery</div>
                      </div>
                      <button className={styles.removeContainer}>
                        <div className={styles.remove1}>Remove</div>
                      </button>
                    </div>
                  </div>
                  <div className={styles.lineContainer}>
                    <img className={styles.frameChild2} loading="lazy" alt="" />
                  </div>
                  <div className={styles.frameWrapper2}>
                    <div className={styles.frameParent2}>
                      <div className={styles.marvelContainer}>
                        <div className={styles.marvel2}>Marvel</div>
                      </div>
                      <div className={styles.container}>
                        <div className={styles.div1}>24-10-2024</div>
                      </div>
                      <div className={styles.galleryContainer}>
                        <div className={styles.gallery2}>Gallery</div>
                      </div>
                      <button className={styles.removeFrame}>
                        <div className={styles.remove2}>Remove</div>
                      </button>
                    </div>
                  </div>
                  <div className={styles.lineFrame}>
                    <div className={styles.lineDiv} />
                  </div>
                  <div className={styles.frameWrapper3}>
                    <div className={styles.frameParent3}>
                      <div className={styles.marvelFrame}>
                        <div className={styles.marvel3}>Marvel</div>
                      </div>
                      <div className={styles.frame}>
                        <div className={styles.div2}>24-10-2024</div>
                      </div>
                      <div className={styles.serviceWrapper}>
                        <div className={styles.service}>Service</div>
                      </div>
                      <button className={styles.frameButton}>
                        <div className={styles.remove3}>Remove</div>
                      </button>
                    </div>
                  </div>
                  <img className={styles.imageBlurIcon} loading="lazy" alt="" />
                  <div className={styles.imageBrightness}>
                    <div className={styles.imageContrast}>
                      <div className={styles.shapeOpacity}>
                        <div className={styles.marvelParent}>
                          <div className={styles.marvel4}>Marvel</div>
                          <div className={styles.marvel5}>Marvel</div>
                        </div>
                      </div>
                      <div className={styles.shapeOpacity1}>
                        <div className={styles.parent}>
                          <div className={styles.div3}>24-10-2024</div>
                          <div className={styles.div4}>24-10-2024</div>
                        </div>
                      </div>
                      <div className={styles.dataAggregatorWrapper}>
                        <div className={styles.dataAggregator}>
                          <div className={styles.service1}>Service</div>
                          <div className={styles.service2}>Service</div>
                        </div>
                      </div>
                      <div className={styles.valueTransformer}>
                        <button className={styles.outputCombiner}>
                          <div className={styles.remove4}>Remove</div>
                        </button>
                        <div className={styles.outputCombiner1}>
                          <img
                            className={styles.outputCombinerChild}
                            loading="lazy"
                            alt=""
                          />
                          <button className={styles.errorHandler}>
                            <div className={styles.remove5}>Remove</div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.productInner}>
        <div className={styles.frameParent4}>
          <div className={styles.marvelWrapper1}>
            <div className={styles.marvel6}>Marvel</div>
          </div>
          <div className={styles.wrapper1}>
            <div className={styles.div5}>24-10-2024</div>
          </div>
          <div className={styles.galleryFrame}>
            <div className={styles.gallery3}>Gallery</div>
          </div>
          <div className={styles.lineGroup}>
            <img className={styles.frameChild3} loading="lazy" alt="" />
            <button className={styles.removeWrapper1}>
              <div className={styles.remove6}>Remove</div>
            </button>
          </div>
        </div>
      </div>
      <div className={styles.productInner1}>
        <div className={styles.lineParent1}>
          <img className={styles.frameChild4} loading="lazy" alt="" />
          <div className={styles.frameWrapper4}>
            <div className={styles.frameParent5}>
              <div className={styles.marvelWrapper2}>
                <div className={styles.marvel7}>Marvel</div>
              </div>
              <div className={styles.wrapper2}>
                <div className={styles.div6}>24-10-2024</div>
              </div>
              <div className={styles.galleryWrapper1}>
                <div className={styles.gallery4}>Gallery</div>
              </div>
              <button className={styles.removeWrapper2}>
                <div className={styles.remove7}>Remove</div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.productInner2}>
        <div className={styles.frameParent6}>
          <div className={styles.lineWrapper1}>
            <img className={styles.frameChild5} loading="lazy" alt="" />
          </div>
          <div className={styles.frameParent7}>
            <div className={styles.showingData1To8Of8EntriWrapper}>
              <div className={styles.showingData1}>
                Showing data 1 to 8 of 8 entries
              </div>
            </div>
            <div className={styles.frameParent8}>
              <div className={styles.wrapper3}>
                <div className={styles.div7}>{`<`}</div>
              </div>
              <div className={styles.wrapper4}>
                <div className={styles.div8}>1</div>
              </div>
              <div className={styles.wrapper5}>
                <div className={styles.div9}>2</div>
              </div>
              <div className={styles.wrapper6}>
                <div className={styles.div10}>3</div>
              </div>
              <div className={styles.wrapper7}>
                <div className={styles.div11}>{`>`}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameParent9}>
        <div className={styles.frameWrapper5}>
          <div className={styles.frameParent10}>
            <div className={styles.frameParent11}>
              <img className={styles.groupIcon} alt="" src="/group-10.svg" />
              <img
                className={styles.frameIcon}
                loading="lazy"
                alt=""
                src="/frame21.svg"
              />
            </div>
            <div className={styles.totalGalleryParent}>
              <div className={styles.totalGallery}>Total Gallery</div>
              <div className={styles.div12}>10</div>
              <div className={styles.arrowUp1Parent}>
                <img
                  className={styles.arrowUp1Icon}
                  loading="lazy"
                  alt=""
                  src="/arrowup-1.svg"
                />
                <div className={styles.imagesWrapper}>
                  <div className={styles.images}>Images</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img className={styles.frameChild6} alt="" src="/group-10-2.svg" />
        <div className={styles.shapeContainer} />
        <div className={styles.colorPaletteWrapper}>
          <img
            className={styles.colorPaletteIcon}
            loading="lazy"
            alt=""
            src="/frame-11.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Product;
