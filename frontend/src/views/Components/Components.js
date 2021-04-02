import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";

import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import CustomLinearProgress from "components/CustomLinearProgress/CustomLinearProgress.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";
import GridArea from "./Sections/GridArea.js";

import styles from "assets/jss/material-kit-react/views/components.js";

const useStyles = makeStyles(styles);

export default function Components(props) {

  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        brand="KMM"
        rightLinks={<HeaderLinks />}
        fixed
        color=""
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
      <Parallax image={require("assets/img/homeBanner.png")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12} lg={12}>
              <div className={classes.brand}>
                <h1 className={classes.title}>Best Place To Find Your Work!</h1>
                <h3 className={classes.subtitle}>
                  Post Ad, Earn!
                </h3>
              </div>
            </GridItem>
            <GridItem xs={12} sm={12} md={6} lg={6}>
              <CustomInput
                labelText="Search your area"
                id="float"
                formControlProps={{
                  fullWidth: true
                }}
              />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <CustomLinearProgress
          variant="determinate"
          color="primary"
          value={100}
        />
        <GridArea />
      </div>
      <Footer />
    </div>
  );
}
