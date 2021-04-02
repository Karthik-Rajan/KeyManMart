import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";

import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import CustomLinearProgress from "components/CustomLinearProgress/CustomLinearProgress.js";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";
import GridArea from "./Sections/GridArea.js";

import styles from "assets/jss/material-kit-react/views/components.js";

const useStyles = makeStyles(styles);

export default function Search(props) {

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
            <CustomLinearProgress
                variant="determinate"
                color="primary"
                value={100}
            />
            <div className={classNames(classes.main, classes.mainRaised)} style={{ marginTop: "71px" }} >
                <GridArea />
            </div>
            <Footer />
        </div >
    );
}
