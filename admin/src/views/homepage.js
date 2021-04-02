import React from 'react';
import { Route, Switch, Redirect, useHistory } from "react-router-dom";
import Dashboard from './dashboard';
import SamplePage from './samplepage';
import HeaderNavBar from './headernavbar';
import SideNavBar from './sidenavbar';
import Accordion from './accordion';
import BreadCrumb from './breadcrumb';
import Button from './button';
import ChartMorris from './chartmorris';
import Color from './color';
import FormElement from './formelementcomponent';
import LabelBadge from './labelbadge';
import Table from './basictable';
import MapGoogle from './mapgoogle';
import Notification from './notification';
import Tabs from './tabs';
import ToolTip from './tooltip';
import Typography from './typography';
import { checkLogin } from '../actions/authAction';
import store from '../reducers/store';




const HomePage = () => {
    const history = useHistory();
    localStorage.setItem('auth', true );

    store.dispatch(checkLogin());
    let login =  store.getState();
    if(login.auth.loggedIn == 'false' ) {
      history.push('/login');
    }

    return (
        <div id="pcoded" className="pcoded">
            <div className="pcoded-overlay-box"></div>
            <div className="pcoded-container navbar-wrapper">
                <HeaderNavBar />
                <div className="pcoded-main-container">
                    <div className="pcoded-wrapper">
                        <SideNavBar />
                        <Switch>
                            <Route path="/simple-page" exact component={SamplePage} />
                            <Route path="/accordion" exact component={Accordion} />
                            <Route path="/breadcrumb" exact component={BreadCrumb} />
                            <Route path="/button" exact component={Button} />
                            <Route path="/chartmorris" exact component={ChartMorris} />
                            <Route path="/color" exact component={Color} />
                            <Route path="/formelement" exact component={FormElement} />
                            <Route path="/labelbadge" exact component={LabelBadge} />
                            <Route path="/basic-table" exact component={Table} />
                            <Route path="/map-google" exact component={MapGoogle} />
                            <Route path="/notification" exact component={Notification} />
                            <Route path="/tabs" exact component={Tabs} />
                            <Route path="/tooltip" exact component={ToolTip} />
                            <Route path="/typography" exact component={Typography} />
                            <Route path={"/" | "/Dashboard"} component={Dashboard} />
                        </Switch>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default HomePage;