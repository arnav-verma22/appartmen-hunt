import { FunctionComponent } from "react";
import FrameComponent9 from "../components/FrameComponent9";
import FrameComponent8 from "../components/FrameComponent8";
import FrameComponent7 from "../components/FrameComponent7";
import FrameComponent6 from "../components/FrameComponent6";
import FrameComponent5 from "../components/FrameComponent5";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import styles from "./LandlordsPage.module.css";

const LandlordsPage: FunctionComponent = () => {
  return (
    <div className={styles.landlordsPage}>
      <img className={styles.imageIcon} alt="" src="/image@2x.png" />
      <FrameComponent9 />
      <FrameComponent8 />
      <section className={styles.feugiatProinNamTristiqueEgWrapper}>
        <div className={styles.feugiatProinNamTristiqueEg}>
          <div className={styles.bg} />
          <div className={styles.images} />
          <div className={styles.feugiatProinNamTristiqueEgInner}>
            <div className={styles.frameParent}>
              <div className={styles.howItWorksWrapper}>
                <h1 className={styles.howItWorks}>How it Works</h1>
              </div>
              <div className={styles.frameGroup}>
                <div className={styles.frameWrapper}>
                  <div className={styles.evaemailFillParent}>
                    <img
                      className={styles.evaemailFillIcon}
                      loading="lazy"
                      alt=""
                      src="/evaemailfill.svg"
                    />
                    <div className={styles.ellipseWrapper}>
                      <div className={styles.frameChild} />
                    </div>
                  </div>
                </div>
                <h1 className={styles.getInTouch}>Get in touch</h1>
                <div className={styles.utIdCras}>
                  Ut id cras malesuada dolor. Consectetur eget malesuada enim
                  massa viverra mauris
                </div>
              </div>
            </div>
          </div>
          <FrameComponent7 />
          <FrameComponent6 />
          <FrameComponent5 />
        </div>
      </section>
      <FrameComponent4 />
      <FrameComponent3 />
      <FrameComponent2 />
      <FrameComponent1 />
      <FrameComponent />
    </div>
  );
};

export default LandlordsPage;
