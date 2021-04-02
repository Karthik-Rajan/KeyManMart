import React from "react";
// plugin that creates slider
import Slider from "nouislider";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Radio from "@material-ui/core/Radio";
import Switch from "@material-ui/core/Switch";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
import People from "@material-ui/icons/People";
import Check from "@material-ui/icons/Check";
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";
import RoomIcon from '@material-ui/icons/Room';
import ScheduleIcon from '@material-ui/icons/Schedule';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import CustomLinearProgress from "components/CustomLinearProgress/CustomLinearProgress.js";
import Paginations from "components/Pagination/Pagination.js";
import Badge from "components/Badge/Badge.js";
import { Icon, InlineIcon } from '@iconify/react';
import currencyInr from '@iconify-icons/mdi/currency-inr';

import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";

const useStyles = makeStyles(styles);

export default function GridArea() {
    const classes = useStyles();
    const [checked, setChecked] = React.useState([24, 22]);
    const [selectedEnabled, setSelectedEnabled] = React.useState("b");
    const [checkedA, setCheckedA] = React.useState(true);
    const [checkedB, setCheckedB] = React.useState(false);
    React.useEffect(() => {
        if (
            !document
                .getElementById("sliderRegular")
                .classList.contains("noUi-target")
        ) {
            Slider.create(document.getElementById("sliderRegular"), {
                start: [40],
                connect: [true, false],
                step: 1,
                range: { min: 0, max: 100 }
            });
        }
        // if (
        //     !document.getElementById("sliderDouble").classList.contains("noUi-target")
        // ) {
        //     Slider.create(document.getElementById("sliderDouble"), {
        //         start: [20, 60],
        //         connect: [false, true, false],
        //         step: 1,
        //         range: { min: 0, max: 100 }
        //     });
        // }
        return function cleanup() { };
    });
    const handleToggle = value => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }
        setChecked(newChecked);
    };
    return (
        <div className={classes.sections}>
            <div className={classes.container} style={{ maxWidth: "94%" }}>
                <div id="checkRadios">
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={3} lg={3}>
                            <div className={classes.title}>
                                <h3>Filters</h3>
                            </div>
                            <div
                                className={
                                    classes.checkboxAndRadio +
                                    " " +
                                    classes.checkboxAndRadioHorizontal
                                }
                            >
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            tabIndex={-1}
                                            onClick={() => handleToggle(21)}
                                            checkedIcon={<Check className={classes.checkedIcon} />}
                                            icon={<Check className={classes.uncheckedIcon} />}
                                            classes={{
                                                checked: classes.checked,
                                                root: classes.checkRoot
                                            }}
                                        />
                                    }
                                    classes={{ label: classes.label, root: classes.labelRoot }}
                                    label="Unchecked"
                                />
                            </div>
                            <div
                                className={
                                    classes.checkboxAndRadio +
                                    " " +
                                    classes.checkboxAndRadioHorizontal
                                }
                            >
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            tabIndex={-1}
                                            onClick={() => handleToggle(22)}
                                            checked={checked.indexOf(22) !== -1 ? true : false}
                                            checkedIcon={<Check className={classes.checkedIcon} />}
                                            icon={<Check className={classes.uncheckedIcon} />}
                                            classes={{
                                                checked: classes.checked,
                                                root: classes.checkRoot
                                            }}
                                        />
                                    }
                                    classes={{ label: classes.label, root: classes.labelRoot }}
                                    label="Checked"
                                />
                            </div>
                            <div>
                                <FormControlLabel
                                    control={
                                        <Switch
                                            checked={checkedA}
                                            onChange={event => setCheckedA(event.target.checked)}
                                            value="checkedA"
                                            classes={{
                                                switchBase: classes.switchBase,
                                                checked: classes.switchChecked,
                                                thumb: classes.switchIcon,
                                                track: classes.switchBar
                                            }}
                                        />
                                    }
                                    classes={{
                                        label: classes.label
                                    }}
                                    label="Toggle is on"
                                />
                            </div>
                            <div id="sliderRegular" className="slider-primary" style={{ width: "85%" }} />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={6} lg={6} style={{ maxHeight: "550px", overflowX: "scroll" }}>
                            <Card className={classes.postCard}>
                                <CardHeader>
                                    <img
                                        src={"https://m.media-amazon.com/images/M/MV5BNmM1NmY4N2QtNmVkOS00MjMyLWI5ZGUtYWYxMDRjY2MzNDdiXkEyXkFqcGdeQXVyMTAwMDAwMA@@._V1_.jpg"}
                                        alt="..."
                                        className={
                                            classes.imgRaised +
                                            " " +
                                            classes.imgRounded +
                                            " " +
                                            classes.imgFluid
                                        }
                                    />
                                </CardHeader>
                                <CardBody style={{ padding: "8px" }}>
                                    <GridContainer>
                                        <GridItem xs={1} sm={1} md={1} lg={1}>
                                            <Icon icon={currencyInr} style={{ fontSize: "30px" }} />
                                        </GridItem>
                                        <GridItem xs={7} sm={7} md={7} lg={7} style={{ fontSize: "25px", fontWeight: "bold", top: "3px" }}>
                                            500
                                        </GridItem>
                                        <GridItem xs={3} sm={3} md={3} lg={3} >
                                            <FavoriteBorderOutlinedIcon style={{ color: "#e91e63", fontSize: "30px", cursor: "pointer", float: "right" }} />
                                        </GridItem>
                                        <GridItem xs={1} sm={1} md={1} lg={1}>
                                            <RoomIcon />
                                        </GridItem>
                                        <GridItem xs={10} sm={10} md={10} lg={10}>
                                            Thoraipakkam, Chennai.
                                        </GridItem>
                                        <GridItem xs={12} sm={12} md={12} lg={12}>
                                            The work is that the wood shoud be converted to some tools and this wont take much time.The work is that the wood shoud be converted to some tools and this wont take much time. The work is that the wood shoud be converted to some tools and this wont take much time.
                                        </GridItem>
                                    </GridContainer>
                                </CardBody>
                                <CardFooter className={classes.cardFooter}>
                                    <GridContainer>
                                        <GridItem xs={1} sm={1} md={1} lg={1}>
                                            <ScheduleIcon />
                                        </GridItem>
                                        <GridItem xs={10} sm={10} md={10} lg={10}>
                                            A second ago
                                        </GridItem>
                                    </GridContainer>
                                </CardFooter>
                            </Card>
                            <Card className={classes.postCard}>
                                <CardHeader>
                                    <img
                                        src={"https://m.media-amazon.com/images/M/MV5BNmM1NmY4N2QtNmVkOS00MjMyLWI5ZGUtYWYxMDRjY2MzNDdiXkEyXkFqcGdeQXVyMTAwMDAwMA@@._V1_.jpg"}
                                        alt="..."
                                        className={
                                            classes.imgRaised +
                                            " " +
                                            classes.imgRounded +
                                            " " +
                                            classes.imgFluid
                                        }
                                    />
                                </CardHeader>
                                <CardBody>
                                </CardBody>
                                <CardFooter className={classes.cardFooter}>
                                </CardFooter>
                            </Card>
                            <Card className={classes.postCard}>
                                <CardHeader>
                                </CardHeader>
                                <CardBody>
                                </CardBody>
                                <CardFooter className={classes.cardFooter}>
                                </CardFooter>
                            </Card>
                            <Card className={classes.postCard}>
                                <CardHeader>
                                </CardHeader>
                                <CardBody>
                                </CardBody>
                                <CardFooter className={classes.cardFooter}>
                                </CardFooter>
                            </Card>
                            <Card className={classes.postCard}>
                                <CardHeader>
                                </CardHeader>
                                <CardBody>
                                </CardBody>
                                <CardFooter className={classes.cardFooter}>
                                </CardFooter>
                            </Card>
                            <Card className={classes.postCard}>
                                <CardHeader>
                                </CardHeader>
                                <CardBody>
                                </CardBody>
                                <CardFooter className={classes.cardFooter}>
                                </CardFooter>
                            </Card>
                            <Card className={classes.postCard}>
                                <CardHeader>
                                </CardHeader>
                                <CardBody>
                                </CardBody>
                                <CardFooter className={classes.cardFooter}>
                                </CardFooter>
                            </Card>
                            <Card className={classes.postCard}>
                                <CardHeader>
                                </CardHeader>
                                <CardBody>
                                </CardBody>
                                <CardFooter className={classes.cardFooter}>
                                </CardFooter>
                            </Card>
                            <Card className={classes.postCard}>
                                <CardHeader>
                                </CardHeader>
                                <CardBody>
                                </CardBody>
                                <CardFooter className={classes.cardFooter}>
                                </CardFooter>
                            </Card>
                            <Card className={classes.postCard}>
                                <CardHeader>
                                </CardHeader>
                                <CardBody>
                                </CardBody>
                                <CardFooter className={classes.cardFooter}>
                                </CardFooter>
                            </Card>
                            <Card className={classes.postCard}>
                                <CardHeader>
                                </CardHeader>
                                <CardBody>
                                </CardBody>
                                <CardFooter className={classes.cardFooter}>
                                </CardFooter>
                            </Card>
                            <Card className={classes.postCard}>
                                <CardHeader>
                                </CardHeader>
                                <CardBody>
                                </CardBody>
                                <CardFooter className={classes.cardFooter}>
                                </CardFooter>
                            </Card>
                            <Card className={classes.postCard}>
                                <CardHeader>
                                </CardHeader>
                                <CardBody>
                                </CardBody>
                                <CardFooter className={classes.cardFooter}>
                                </CardFooter>
                            </Card>
                            <Card className={classes.postCard}>
                                <CardHeader>
                                </CardHeader>
                                <CardBody>
                                </CardBody>
                                <CardFooter className={classes.cardFooter}>
                                </CardFooter>
                            </Card>
                            <Card className={classes.postCard}>
                                <CardHeader>
                                </CardHeader>
                                <CardBody>
                                </CardBody>
                                <CardFooter className={classes.cardFooter}>
                                </CardFooter>
                            </Card>
                        </GridItem>
                    </GridContainer>
                </div>
            </div>
        </div>
    );
}
