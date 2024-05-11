import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import styles from "./FrameComponent4.module.css";

const FrameComponent4: FunctionComponent = () => {
  return (
    <section className={styles.frameParent}>
      <div className={styles.corporatePartnershipsParent}>
        <h1 className={styles.corporatePartnerships}>Corporate Partnerships</h1>
        <div className={styles.weWorkWithContainer}>
          <p className={styles.weWorkWith}>
            We work with 100+ companies to meet accommodation needs in London.
            Offer a dedicated
          </p>
          <p className={styles.bookingManagerThat}>
            booking manager that can help to find properties for your needs.
          </p>
        </div>
      </div>
      <div className={styles.beforeParent}>
        <div className={styles.before}>
          <img
            className={styles.unsplashitC9yfrimIcon}
            loading="lazy"
            alt=""
            src="/unsplashit-c9yfrim@2x.png"
          />
          <Button
            className={styles.beforeChild}
            disableElevation={true}
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#000",
              fontSize: "36",
              background: "#e2f1e8",
              borderRadius: "10px",
              "&:hover": { background: "#e2f1e8" },
              width: 188,
              height: 68,
            }}
          >
            Before
          </Button>
        </div>
        <div className={styles.after}>
          <img
            className={styles.unsplashitC9yfrimIcon1}
            alt=""
            src="/unsplashit-c9yfrim@2x.png"
          />
          <Button
            className={styles.afterChild}
            disableElevation={true}
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#000",
              fontSize: "36",
              background: "#e2f1e8",
              borderRadius: "10px",
              "&:hover": { background: "#e2f1e8" },
              width: 163,
              height: 68,
            }}
          >
            After
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent4;
