import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import styles from "./FrameComponent2.module.css";

const FrameComponent2: FunctionComponent = () => {
  return (
    <section className={styles.landlordsPageInner}>
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.pricingParent}>
            <h1 className={styles.pricing}>Pricing</h1>
            <div className={styles.compareOurPricing}>
              Compare our pricing model to high street agents
            </div>
          </div>
        </div>
        <div className={styles.parent}>
          <div className={styles.div}>
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <b className={styles.highStreetAgents}>High Street Agents</b>
              <div className={styles.frameContainer}>
                <div className={styles.frameGroup}>
                  <div className={styles.wrapper}>
                    <b className={styles.b}>{`12% `}</b>
                  </div>
                  <div className={styles.managementFee}>management fee</div>
                </div>
              </div>
            </div>
            <div className={styles.child} />
            <div className={styles.item} />
            <div className={styles.inner} />
            <div className={styles.ellipseDiv} />
            <div className={styles.child1} />
            <div className={styles.child2} />
            <div className={styles.frameDiv}>
              <div className={styles.frameParent1}>
                <div className={styles.frameParent2}>
                  <div className={styles.evacheckmarkFillWrapper}>
                    <img
                      className={styles.evacheckmarkFillIcon}
                      loading="lazy"
                      alt=""
                      src="/evacheckmarkfill.svg"
                    />
                  </div>
                  <div className={styles.to12Months}>6 to 12 months</div>
                </div>
                <div className={styles.frameParent3}>
                  <div className={styles.evacheckmarkFillContainer}>
                    <img
                      className={styles.evacheckmarkFillIcon1}
                      alt=""
                      src="/evacheckmarkfill.svg"
                    />
                  </div>
                  <div className={styles.noMaintenance}>No maintenance</div>
                </div>
                <div className={styles.frameParent4}>
                  <div className={styles.evacheckmarkFillFrame}>
                    <img
                      className={styles.evacheckmarkFillIcon2}
                      alt=""
                      src="/evacheckmarkfill.svg"
                    />
                  </div>
                  <div className={styles.noWeeklyCleaning}>
                    No weekly cleaning
                  </div>
                </div>
                <div className={styles.frameParent5}>
                  <div className={styles.evacheckmarkFillWrapper1}>
                    <img
                      className={styles.evacheckmarkFillIcon3}
                      alt=""
                      src="/evacheckmarkfill.svg"
                    />
                  </div>
                  <div className={styles.noInteriorDesign}>
                    No interior design
                  </div>
                </div>
                <div className={styles.frameParent6}>
                  <div className={styles.evacheckmarkFillWrapper2}>
                    <img
                      className={styles.evacheckmarkFillIcon4}
                      alt=""
                      src="/evacheckmarkfill.svg"
                    />
                  </div>
                  <div className={styles.void}>5% void</div>
                </div>
                <div className={styles.frameParent7}>
                  <div className={styles.evacheckmarkFillWrapper3}>
                    <img
                      className={styles.evacheckmarkFillIcon5}
                      alt=""
                      src="/evacheckmarkfill.svg"
                    />
                  </div>
                  <div className={styles.div1}>£24,900</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.dataProcessor}>
            <h1 className={styles.vs}>Vs</h1>
          </div>
          <div className={styles.div2}>
            <div className={styles.rectangleGroup}>
              <div className={styles.frameItem} />
              <b className={styles.flexLivingGuaranteed}>
                Flex Living (guaranteed Rental)
              </b>
              <div className={styles.frameWrapper1}>
                <div className={styles.fixedPriceParent}>
                  <h1 className={styles.fixedPrice}>Fixed price</h1>
                  <div className={styles.monthlyWrapper}>
                    <div className={styles.monthly}>monthly</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.child3} />
            <div className={styles.child4} />
            <div className={styles.child5} />
            <div className={styles.child6} />
            <div className={styles.child7} />
            <div className={styles.child8} />
            <div className={styles.inner1}>
              <div className={styles.frameParent8}>
                <div className={styles.frameParent9}>
                  <div className={styles.evacheckmarkFillWrapper4}>
                    <img
                      className={styles.evacheckmarkFillIcon6}
                      alt=""
                      src="/evacheckmarkfill.svg"
                    />
                  </div>
                  <div className={styles.to5Years}>3 to 5 years</div>
                </div>
                <div className={styles.frameParent10}>
                  <div className={styles.evacheckmarkFillWrapper5}>
                    <img
                      className={styles.evacheckmarkFillIcon7}
                      alt=""
                      src="/evacheckmarkfill.svg"
                    />
                  </div>
                  <div className={styles.freeMaintenance}>Free maintenance</div>
                </div>
                <div className={styles.frameParent11}>
                  <div className={styles.evacheckmarkFillWrapper6}>
                    <img
                      className={styles.evacheckmarkFillIcon8}
                      alt=""
                      src="/evacheckmarkfill.svg"
                    />
                  </div>
                  <div className={styles.weeklyCleaning}>Weekly cleaning</div>
                </div>
                <div className={styles.frameParent12}>
                  <div className={styles.evacheckmarkFillWrapper7}>
                    <img
                      className={styles.evacheckmarkFillIcon9}
                      alt=""
                      src="/evacheckmarkfill.svg"
                    />
                  </div>
                  <div className={styles.interiorDesign}>Interior design</div>
                </div>
                <div className={styles.frameParent13}>
                  <div className={styles.evacheckmarkFillWrapper8}>
                    <img
                      className={styles.evacheckmarkFillIcon10}
                      alt=""
                      src="/evacheckmarkfill.svg"
                    />
                  </div>
                  <div className={styles.noVoid}>No void</div>
                </div>
                <div className={styles.frameParent14}>
                  <div className={styles.evacheckmarkFillWrapper9}>
                    <img
                      className={styles.evacheckmarkFillIcon11}
                      alt=""
                      src="/evacheckmarkfill.svg"
                    />
                  </div>
                  <div className={styles.div3}>£30,000</div>
                </div>
                <div className={styles.buttonGetStartedWrapper}>
                  <Button
                    className={styles.buttonGetStarted}
                    disableElevation={true}
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      color: "#fff",
                      fontSize: "18",
                      background: "#064749",
                      borderRadius: "40px",
                      "&:hover": { background: "#064749" },
                      width: 171,
                      height: 48,
                    }}
                  >
                    Get started
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent2;
