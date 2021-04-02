import React from 'react';

const SideNavBar = () => {
    return (
        <nav className="pcoded-navbar">
            <div className="sidebar_toggle"><a href="#"><i className="icon-close icons"></i></a></div>
            <div className="pcoded-inner-navbar main-menu">
                <div className="">
                    <div className="main-menu-header">
                        <img className="img-80 img-radius" src="/images/avatar-4.jpg" alt="User-Profile-Image" />
                        <div className="user-details">
                            <span id="more-details">John Doe<i className="fa fa-caret-down"></i></span>
                        </div>
                    </div>
                    <div className="main-menu-content">
                        <ul>
                            <li className="more-details">
                                <a href="user-profile.html"><i className="ti-user"></i>View Profile</a>
                                <a href="#!"><i className="ti-settings"></i>Settings</a>
                                <a href="/login"><i className="ti-layout-sidebar-left"></i>Logout</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="p-15 p-b-0">
                    <form className="form-material">
                        <div className="form-group form-primary">
                            <input type="text" name="footer-email" className="form-control" />
                            <span className="form-bar"></span>
                            <label className="float-label"><i className="fa fa-search m-r-10"></i>Search Friend</label>
                        </div>
                    </form>
                </div>
                <div className="pcoded-navigation-label">Navigation</div>
                <ul className="pcoded-item pcoded-left-item">
                    <li className="active">
                        <a href="/Dashboard" className="waves-effect waves-dark">
                            <span className="pcoded-micon"><i className="ti-home"></i><b>D</b></span>
                            <span className="pcoded-mtext">Dashboard</span>
                            <span className="pcoded-mcaret"></span>
                        </a>
                    </li>
                </ul>
                <div className="pcoded-navigation-label">UI Element</div>
                <ul className="pcoded-item pcoded-left-item">
                    <li className="pcoded-hasmenu">
                        <a href="#" className="waves-effect waves-dark">
                            <span className="pcoded-micon"><i className="ti-layout-grid2-alt"></i><b>BC</b></span>
                            <span className="pcoded-mtext">Basic</span>
                            <span className="pcoded-mcaret"></span>
                        </a>
                        <ul className="pcoded-submenu">
                            <li className=" ">
                                <a href="/breadcrumb" className="waves-effect waves-dark">
                                    <span className="pcoded-micon"><i className="ti-angle-right"></i></span>
                                    <span className="pcoded-mtext">Breadcrumbs</span>
                                    <span className="pcoded-mcaret"></span>
                                </a>
                            </li>
                            <li className=" ">
                                <a href="/button" className="waves-effect waves-dark">
                                    <span className="pcoded-micon"><i className="ti-angle-right"></i></span>
                                    <span className="pcoded-mtext">Button</span>
                                    <span className="pcoded-mcaret"></span>
                                </a>
                            </li>
                            <li className="">
                                <a href="/accordion" className="waves-effect waves-dark">
                                    <span className="pcoded-micon"><i className="ti-angle-right"></i></span>
                                    <span className="pcoded-mtext">Accordion</span>
                                    <span className="pcoded-mcaret"></span>
                                </a>
                            </li>
                            <li className=" ">
                                <a href="/tabs" className="waves-effect waves-dark">
                                    <span className="pcoded-micon"><i className="ti-angle-right"></i></span>
                                    <span className="pcoded-mtext">Tabs</span>
                                    <span className="pcoded-mcaret"></span>
                                </a>
                            </li>
                            <li className=" ">
                                <a href="/color" className="waves-effect waves-dark">
                                    <span className="pcoded-micon"><i className="ti-angle-right"></i></span>
                                    <span className="pcoded-mtext">Color</span>
                                    <span className="pcoded-mcaret"></span>
                                </a>
                            </li>
                            <li className=" ">
                                <a href="/labelbadge" className="waves-effect waves-dark">
                                    <span className="pcoded-micon"><i className="ti-angle-right"></i></span>
                                    <span className="pcoded-mtext">Label Badge</span>
                                    <span className="pcoded-mcaret"></span>
                                </a>
                            </li>
                            <li className=" ">
                                <a href="/tooltip" className="waves-effect waves-dark">
                                    <span className="pcoded-micon"><i className="ti-angle-right"></i></span>
                                    <span className="pcoded-mtext">Tooltip And Popover</span>
                                    <span className="pcoded-mcaret"></span>
                                </a>
                            </li>
                            <li className=" ">
                                <a href="/typography" className="waves-effect waves-dark">
                                    <span className="pcoded-micon"><i className="ti-angle-right"></i></span>
                                    <span className="pcoded-mtext">Typography</span>
                                    <span className="pcoded-mcaret"></span>
                                </a>
                            </li>
                            <li className=" ">
                                <a href="/notification" className="waves-effect waves-dark">
                                    <span className="pcoded-micon"><i className="ti-angle-right"></i></span>
                                    <span className="pcoded-mtext">Notifications</span>
                                    <span className="pcoded-mcaret"></span>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
                <div className="pcoded-navigation-label">Forms</div>
                <ul className="pcoded-item pcoded-left-item">
                    <li className="">
                        <a href="/formelement" className="waves-effect waves-dark">
                            <span className="pcoded-micon"><i className="ti-layers"></i><b>FC</b></span>
                            <span className="pcoded-mtext">Form</span>
                            <span className="pcoded-mcaret"></span>
                        </a>
                    </li>
                </ul>
                <div className="pcoded-navigation-label">Tables</div>
                <ul className="pcoded-item pcoded-left-item">
                    <li className="">
                        <a href="/basic-table" className="waves-effect waves-dark">
                            <span className="pcoded-micon"><i className="ti-receipt"></i><b>B</b></span>
                            <span className="pcoded-mtext">Table</span>
                            <span className="pcoded-mcaret"></span>
                        </a>
                    </li>
                </ul>
                <div className="pcoded-navigation-label">Chart And Maps</div>
                <ul className="pcoded-item pcoded-left-item">
                    <li className="">
                        <a href="/chartmorris" className="waves-effect waves-dark">
                            <span className="pcoded-micon"><i className="ti-bar-chart-alt"></i><b>C</b></span>
                            <span className="pcoded-mtext">Charts</span>
                            <span className="pcoded-mcaret"></span>
                        </a>
                    </li>
                    <li className="">
                        <a href="/map-google" className="waves-effect waves-dark">
                            <span className="pcoded-micon"><i className="ti-map-alt"></i><b>M</b></span>
                            <span className="pcoded-mtext">Maps</span>
                            <span className="pcoded-mcaret"></span>
                        </a>
                    </li>
                </ul>
                <div className="pcoded-navigation-label">Pages</div>
                <ul className="pcoded-item pcoded-left-item">
                    <li className="pcoded-hasmenu ">
                        <a href="#" className="waves-effect waves-dark">
                            <span className="pcoded-micon"><i className="ti-id-badge"></i><b>A</b></span>
                            <span className="pcoded-mtext">Pages</span>
                            <span className="pcoded-mcaret"></span>
                        </a>
                        <ul className="pcoded-submenu">
                            <li className="">
                                <a href="/login" className="waves-effect waves-dark">
                                    <span className="pcoded-micon"><i className="ti-angle-right"></i></span>
                                    <span className="pcoded-mtext">Login</span>
                                    <span className="pcoded-mcaret"></span>
                                </a>
                            </li>
                            <li className="">
                                <a href="/sign-up" className="waves-effect waves-dark">
                                    <span className="pcoded-micon"><i className="ti-angle-right"></i></span>
                                    <span className="pcoded-mtext">Registration</span>
                                    <span className="pcoded-mcaret"></span>
                                </a>
                            </li>
                            <li className="">
                                <a href="/sample-page" className="waves-effect waves-dark">
                                    <span className="pcoded-micon"><i className="ti-layout-sidebar-left"></i><b>S</b></span>
                                    <span className="pcoded-mtext">Sample Page</span>
                                    <span className="pcoded-mcaret"></span>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default SideNavBar;