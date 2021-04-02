import React from 'react';

const Notification = () => {
    return (
        <div className="pcoded-content">
            <div className="page-header">
                <div className="page-block">
                    <div className="row align-items-center">
                        <div className="col-md-8">
                            <div className="page-header-title">
                                <h5 className="m-b-10">Notification</h5>
                                <p className="m-b-0">Lorem Ipsum is simply dummy text of the printing</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <a href="index.html"> <i className="fa fa-home"></i> </a>
                                </li>
                                <li className="breadcrumb-item"><a href="#!">Advance Components</a>
                                </li>
                                <li className="breadcrumb-item"><a href="#!">Notification</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pcoded-inner-content">
                <div className="main-body">
                    <div className="page-wrapper">
                        <div className="page-body button-page">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="card">
                                        <div className="card-header">
                                            <h5>Notifications</h5>
                                        </div>
                                        <div className="card-block">
                                            <div className="row">
                                                <div className="col-sm-12">
                                                    <div className="sub-title">Notification Position</div>
                                                    <p>This plugin has layout options where you can display it in any corner of the screen, simply click one layout corners and press the buttons on the other section to see the magic</p>
                                                    <div className="location-selector">
                                                        <div className="bit top left" data-position="top left"></div>
                                                        <div className="bit top right" data-position="top right"></div>
                                                        <div className="bit top" data-position="top"></div>
                                                        <div className="bit bottom left" data-position="bottom left"></div>
                                                        <div className="bit bottom right" data-position="bottom right"></div>
                                                        <div className="bit bottom" data-position="bottom"></div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-12">
                                                    <div className="sub-title">Notification Alert</div>
                                                    <p>Notification color : <code> data-type="inverse"</code> Notification position : <code> data-align="left" </code></p>
                                                    <ul className="notifications">
                                                        <li>
                                                            <button className="btn btn-primary waves-effect" data-type="inverse" data-from="top" data-align="left" data-icon="fa fa-check">Top Left</button>
                                                        </li>
                                                        <li>
                                                            <button className="btn btn-primary waves-effect" data-type="inverse" data-from="top" data-align="right" data-icon="fa fa-comments">Top Right</button>
                                                        </li>
                                                        <li>
                                                            <button className="btn btn-primary waves-effect" data-type="inverse" data-from="top" data-align="center" data-icon="fa fa-comments">Top Center</button>
                                                        </li>
                                                        <li>
                                                            <button className="btn btn-primary waves-effect" data-type="inverse" data-from="bottom" data-align="left">Bottom Left</button>
                                                        </li>
                                                        <li>
                                                            <button className="btn btn-primary waves-effect" data-type="inverse" data-from="bottom" data-align="right">Bottom Right</button>
                                                        </li>
                                                        <li>
                                                            <button className="btn btn-primary waves-effect" data-type="inverse" data-from="bottom" data-align="center">Bottom Center</button>
                                                        </li>
                                                    </ul>
                                                    <div className="sub-title">Notification Position</div>
                                                    <p>Change data-type : <code> data-type="primary"</code> to change notification color</p>
                                                    <ul className="notifications">
                                                        <li>
                                                            <button className="btn btn-inverse waves-effect" data-type="inverse" data-from="top" data-align="right" data-icon="fa fa-check">Inverse</button>
                                                        </li>
                                                        <li>
                                                            <button className="btn btn-primary waves-effect" data-type="primary" data-from="top" data-align="right" data-icon="fa fa-comments">Primary</button>
                                                        </li>
                                                        <li>
                                                            <button className="btn btn-info waves-effect" data-type="info" data-from="top" data-align="right" data-icon="fa fa-comments">Info</button>
                                                        </li>
                                                        <li>
                                                            <button className="btn btn-success waves-effect" data-type="success" data-from="top" data-align="right">success</button>
                                                        </li>
                                                        <li>
                                                            <button className="btn btn-warning waves-effect" data-type="warning" data-from="top" data-align="right">Warning</button>
                                                        </li>
                                                        <li>
                                                            <button className="btn btn-danger waves-effect" data-type="danger" data-from="top" data-align="right">Danger</button>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-sm-12">
                                                    <div className="sub-title">Notification Behaviour</div>
                                                    <p>use code <code>data-animation-in="animated fadeIn" data-animation-out="animated fadeOut"</code> notification animation effect</p>
                                                    <ul className="notifications">
                                                        <li>
                                                            <button className="btn btn-primary waves-effect" data-type="inverse" data-animation-in="animated fadeIn" data-animation-out="animated fadeOut">Fade In</button>
                                                        </li>
                                                        <li>
                                                            <button className="btn btn-primary waves-effect" data-type="inverse" data-animation-in="animated fadeInLeft" data-animation-out="animated fadeOutLeft">Fade In Left</button>
                                                        </li>
                                                        <li>
                                                            <button className="btn btn-primary waves-effect" data-type="inverse" data-animation-in="animated fadeInRight" data-animation-out="animated fadeOutRight">Fade In Right</button>
                                                        </li>
                                                        <li>
                                                            <button className="btn btn-primary waves-effect" data-type="inverse" data-animation-in="animated fadeInUp" data-animation-out="animated fadeOutUp">Fade In Up</button>
                                                        </li>
                                                        <li>
                                                            <button className="btn btn-primary waves-effect" data-type="inverse" data-animation-in="animated fadeInDown" data-animation-out="animated fadeOutDown">Fade In Down</button>
                                                        </li>
                                                        <li>
                                                            <button className="btn btn-primary waves-effect" data-type="inverse" data-animation-in="animated bounceIn" data-animation-out="animated bounceOut">Bounce In</button>
                                                        </li>
                                                        <li>
                                                            <button className="btn btn-primary waves-effect" data-type="inverse" data-animation-in="animated bounceInLeft" data-animation-out="animated bounceOutLeft">Bounce In Left</button>
                                                        </li>
                                                        <li>
                                                            <button className="btn btn-primary waves-effect" data-type="inverse" data-animation-in="animated bounceInRight" data-animation-out="animated bounceOutRight">Bounce In Right</button>
                                                        </li>
                                                        <li>
                                                            <button className="btn btn-primary waves-effect" data-type="inverse" data-animation-in="animated rotateInDownRight" data-animation-out="animated rotateOutUpRight">Fall In
                                                        Right</button>
                                                        </li>
                                                        <li>
                                                            <button className="btn btn-primary waves-effect" data-type="inverse" data-animation-in="animated rotateIn" data-animation-out="animated rotateOut">Rotate In</button>
                                                        </li>
                                                        <li>
                                                            <button className="btn btn-primary waves-effect" data-type="inverse" data-animation-in="animated flipInX" data-animation-out="animated flipOutX">Flip In X</button>
                                                        </li>
                                                        <li>
                                                            <button className="btn btn-primary waves-effect" data-type="inverse" data-animation-in="animated flipInY" data-animation-out="animated flipOutY">Flip In Y</button>
                                                        </li>
                                                    </ul>
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
        </div>
    );
}
export default Notification;