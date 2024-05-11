import { FunctionComponent, useCallback } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./FrameComponent9.module.css";

const FrameComponent9: FunctionComponent = () => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    // Please sync "Homepage" to the project
  }, []);

  const onLandloardsTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onBlogTextClick = useCallback(() => {
    // Please sync "Blog page" to the project
  }, []);

  const onContactsTextClick = useCallback(() => {
    // Please sync "Contacts page" to the project
  }, []);

  return (
    <section className={styles.menuParent}>
      <header className={styles.menu}>
        <div className={styles.menu1}>
          <img
            className={styles.logoIcon}
            loading="lazy"
            alt=""
            src="/logo@2x.png"
          />
          <nav className={styles.menu2}>
            <div className={styles.home} onClick={onHomeTextClick}>
              Home
            </div>
            <div className={styles.landloards} onClick={onLandloardsTextClick}>
              Landloards
            </div>
            <div className={styles.blog} onClick={onBlogTextClick}>
              Blog
            </div>
            <div className={styles.contacts} onClick={onContactsTextClick}>
              Contacts
            </div>
          </nav>
        </div>
      </header>
      <div className={styles.formWrapper}>
        <div className={styles.form}>
          <form className={styles.main}>
            <div className={styles.titledescription}>
              <h1 className={styles.earnMoreFrom}>
                Earn more from your property, do less
              </h1>
              <div className={styles.findOutIf}>
                Find out if your property meets our criteria
              </div>
            </div>
            <div className={styles.form1}>
              <div className={styles.inputs}>
                <TextField
                  className={styles.input1Big}
                  placeholder="Name *"
                  variant="outlined"
                  sx={{
                    "& fieldset": { border: "none" },
                    "& .MuiInputBase-root": {
                      height: "52px",
                      backgroundColor: "#fff",
                      borderRadius: "12px",
                    },
                    "& .MuiInputBase-input": { color: "#49735a" },
                  }}
                />
                <TextField
                  className={styles.input1Big1}
                  placeholder="Email *"
                  variant="outlined"
                  sx={{
                    "& fieldset": { border: "none" },
                    "& .MuiInputBase-root": {
                      height: "52px",
                      backgroundColor: "#fff",
                      borderRadius: "12px",
                    },
                    "& .MuiInputBase-input": { color: "#49735a" },
                  }}
                />
                <TextField
                  className={styles.input1Big2}
                  placeholder="Phone number *"
                  variant="outlined"
                  sx={{
                    "& fieldset": { border: "none" },
                    "& .MuiInputBase-root": {
                      height: "52px",
                      backgroundColor: "#fff",
                      borderRadius: "12px",
                    },
                    "& .MuiInputBase-input": { color: "#49735a" },
                  }}
                />
              </div>
              <div className={styles.propertyDetails}>
                <b className={styles.propertyDetails1}>Property details</b>
                <div className={styles.inputs1}>
                  <FormControl
                    className={styles.input1Big3}
                    variant="standard"
                    sx={{
                      borderTopWidth: "1px",
                      borderRightWidth: "1px",
                      borderBottomWidth: "1px",
                      borderLeftWidth: "1px",
                      backgroundColor: "#fff",
                      borderRadius: "12px",
                      width: "48.27586206896552%",
                      height: "52px",
                      m: 0,
                      p: 0,
                      "& .MuiInputBase-root": {
                        m: 0,
                        p: 0,
                        minHeight: "52px",
                        justifyContent: "center",
                        display: "inline-flex",
                      },
                      "& .MuiInputLabel-root": {
                        m: 0,
                        p: 0,
                        minHeight: "52px",
                        display: "inline-flex",
                      },
                      "& .MuiMenuItem-root": {
                        m: 0,
                        p: 0,
                        height: "52px",
                        display: "inline-flex",
                      },
                      "& .MuiSelect-select": {
                        m: 0,
                        p: 0,
                        height: "52px",
                        alignItems: "center",
                        display: "inline-flex",
                      },
                      "& .MuiInput-input": { m: 0, p: 0 },
                      "& .MuiInputBase-input": {
                        color: "#49735a",
                        fontSize: 16,
                        fontWeight: "☞",
                        fontFamily: "AvertaCY-Regular",
                        textAlign: "left",
                        p: "0 !important",
                        marginLeft: "20px",
                      },
                    }}
                  >
                    <InputLabel color="secondary" />
                    <Select
                      color="secondary"
                      disableUnderline
                      displayEmpty
                      IconComponent={() => (
                        <img
                          width="20px"
                          height="20px"
                          src="/evaarrowdownfill.svg"
                          style={{ marginRight: "20px" }}
                        />
                      )}
                    >
                      <MenuItem>City *</MenuItem>
                    </Select>
                    <FormHelperText />
                  </FormControl>
                  <FormControl
                    className={styles.input1Big4}
                    variant="standard"
                    sx={{
                      borderTopWidth: "1px",
                      borderRightWidth: "1px",
                      borderBottomWidth: "1px",
                      borderLeftWidth: "1px",
                      backgroundColor: "#fff",
                      borderRadius: "12px",
                      width: "48.27586206896552%",
                      height: "52px",
                      m: 0,
                      p: 0,
                      "& .MuiInputBase-root": {
                        m: 0,
                        p: 0,
                        minHeight: "52px",
                        justifyContent: "center",
                        display: "inline-flex",
                      },
                      "& .MuiInputLabel-root": {
                        m: 0,
                        p: 0,
                        minHeight: "52px",
                        display: "inline-flex",
                      },
                      "& .MuiMenuItem-root": {
                        m: 0,
                        p: 0,
                        height: "52px",
                        display: "inline-flex",
                      },
                      "& .MuiSelect-select": {
                        m: 0,
                        p: 0,
                        height: "52px",
                        alignItems: "center",
                        display: "inline-flex",
                      },
                      "& .MuiInput-input": { m: 0, p: 0 },
                      "& .MuiInputBase-input": {
                        color: "#49735a",
                        fontSize: 16,
                        fontWeight: "☞",
                        fontFamily: "AvertaCY-Regular",
                        textAlign: "left",
                        p: "0 !important",
                        marginLeft: "20px",
                      },
                    }}
                  >
                    <InputLabel color="secondary" />
                    <Select
                      color="secondary"
                      disableUnderline
                      displayEmpty
                      IconComponent={() => (
                        <img
                          width="20px"
                          height="20px"
                          src="/evaarrowdownfill-1.svg"
                          style={{ marginRight: "20px" }}
                        />
                      )}
                    >
                      <MenuItem>Area *</MenuItem>
                    </Select>
                    <FormHelperText />
                  </FormControl>
                </div>
                <FormControl
                  className={styles.input1Big5}
                  variant="standard"
                  sx={{
                    borderTopWidth: "1px",
                    borderRightWidth: "1px",
                    borderBottomWidth: "1px",
                    borderLeftWidth: "1px",
                    backgroundColor: "#fff",
                    borderRadius: "12px",
                    width: "100%",
                    height: "52px",
                    m: 0,
                    p: 0,
                    "& .MuiInputBase-root": {
                      m: 0,
                      p: 0,
                      minHeight: "52px",
                      justifyContent: "center",
                      display: "inline-flex",
                    },
                    "& .MuiInputLabel-root": {
                      m: 0,
                      p: 0,
                      minHeight: "52px",
                      display: "inline-flex",
                    },
                    "& .MuiMenuItem-root": {
                      m: 0,
                      p: 0,
                      height: "52px",
                      display: "inline-flex",
                    },
                    "& .MuiSelect-select": {
                      m: 0,
                      p: 0,
                      height: "52px",
                      alignItems: "center",
                      display: "inline-flex",
                    },
                    "& .MuiInput-input": { m: 0, p: 0 },
                    "& .MuiInputBase-input": {
                      color: "#49735a",
                      fontSize: 16,
                      fontWeight: "☞",
                      fontFamily: "AvertaCY-Regular",
                      textAlign: "left",
                      p: "0 !important",
                      marginLeft: "20px",
                    },
                  }}
                >
                  <InputLabel color="secondary" />
                  <Select
                    color="secondary"
                    disableUnderline
                    displayEmpty
                    IconComponent={() => (
                      <img
                        width="20px"
                        height="20px"
                        src="/evaarrowdownfill-2.svg"
                        style={{ marginRight: "20px" }}
                      />
                    )}
                  >
                    <MenuItem># of bedrooms *</MenuItem>
                  </Select>
                  <FormHelperText />
                </FormControl>
              </div>
            </div>
            <Button
              className={styles.button1Big}
              disableElevation={true}
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "18",
                background: "#064749",
                borderRadius: "30px",
                "&:hover": { background: "#064749" },
                width: 137,
                height: 48,
              }}
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent9;
