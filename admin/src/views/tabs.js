import React from 'react';

const Tabs = () => {
    return (
        <div className="pcoded-content">
            <div className="page-header">
                <div className="page-block">
                    <div className="row align-items-center">
                        <div className="col-md-8">
                            <div className="page-header-title">
                                <h5 className="m-b-10">Tabs</h5>
                                <p className="m-b-0">Lorem Ipsum is simply dummy text of the printing</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <a href="index.html"> <i className="fa fa-home"></i> </a>
                                </li>
                                <li className="breadcrumb-item"><a href="#!">Basic Components</a>
                                </li>
                                <li className="breadcrumb-item"><a href="#!">Tabs</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pcoded-inner-content">
                <div className="main-body">
                    <div className="page-wrapper">
                        <div className="page-body">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="card">
                                        <div className="card-header">
                                            <h5>Bootstrap Tab</h5>
                                            <span>lorem ipsum dolor sit amet, consectetur adipisicing elit</span>
                                        </div>
                                        <div className="card-block">
                                            <div className="row">
                                                <div className="col-lg-12 col-xl-6">
                                                    <div className="sub-title">Default</div>
                                                    <ul className="nav nav-tabs  tabs" role="tablist">
                                                        <li className="nav-item">
                                                            <a className="nav-link active" data-toggle="tab" href="#home1" role="tab">Home</a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a className="nav-link" data-toggle="tab" href="#profile1" role="tab">Profile</a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a className="nav-link" data-toggle="tab" href="#messages1" role="tab">Messages</a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a className="nav-link" data-toggle="tab" href="#settings1" role="tab">Settings</a>
                                                        </li>
                                                    </ul>
                                                    <div className="tab-content tabs card-block">
                                                        <div className="tab-pane active" id="home1" role="tabpanel">
                                                            <p className="m-0">1. This is Photoshop's version of Lorem IpThis is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis
                                                            bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean
                                                            mas Cum sociis natoque penatibus et magnis dis.....</p>
                                                        </div>
                                                        <div className="tab-pane" id="profile1" role="tabpanel">
                                                            <p className="m-0">2.Cras consequat in enim ut efficitur. Nulla posuere elit quis auctor interdum praesent sit amet nulla vel enim amet. Donec convallis tellus neque, et imperdiet
                                                            felis amet.</p>
                                                        </div>
                                                        <div className="tab-pane" id="messages1" role="tabpanel">
                                                            <p className="m-0">3. This is Photoshop's version of Lorem IpThis is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis
                                                            bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean
                                                            mas Cum sociis natoque penatibus et magnis dis.....</p>
                                                        </div>
                                                        <div className="tab-pane" id="settings1" role="tabpanel">
                                                            <p className="m-0">4.Cras consequat in enim ut efficitur. Nulla posuere elit quis auctor interdum praesent sit amet nulla vel enim amet. Donec convallis tellus neque, et imperdiet
                                                            felis amet.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12 col-xl-6">
                                                    <div className="sub-title">Below Tabs</div>
                                                    <div className="tab-content tabs card-block">
                                                        <div className="tab-pane active" id="home2" role="tabpanel">
                                                            <p className="m-0">1. This is Photoshop's version of Lorem IpThis is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis
                                                            bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean
                                                            mas Cum sociis natoque penatibus et magnis dis.....</p>
                                                        </div>
                                                        <div className="tab-pane" id="profile2" role="tabpanel">
                                                            <p className="m-0">2.Cras consequat in enim ut efficitur. Nulla posuere elit quis auctor interdum praesent sit amet nulla vel enim amet. Donec convallis tellus neque, et imperdiet
                                                            felis amet.</p>
                                                        </div>
                                                        <div className="tab-pane" id="messages2" role="tabpanel">
                                                            <p className="m-0">3. This is Photoshop's version of Lorem IpThis is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis
                                                            bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean
                                                            mas Cum sociis natoque penatibus et magnis dis.....</p>
                                                        </div>
                                                        <div className="tab-pane" id="settings2" role="tabpanel">
                                                            <p className="m-0">4.Cras consequat in enim ut efficitur. Nulla posuere elit quis auctor interdum praesent sit amet nulla vel enim amet. Donec convallis tellus neque, et imperdiet
                                                            felis amet.</p>
                                                        </div>
                                                    </div>
                                                    <ul className="nav nav-tabs tab-below tabs" role="tablist">
                                                        <li className="nav-item">
                                                            <a className="nav-link active" data-toggle="tab" href="#home2" role="tab">Home</a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a className="nav-link" data-toggle="tab" href="#profile2" role="tab">Profile</a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a className="nav-link" data-toggle="tab" href="#messages2" role="tab">Messages</a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a className="nav-link" data-toggle="tab" href="#settings2" role="tab">Settings</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="card">
                                        <div className="card-header">
                                            <h5>Material Tab</h5>
                                        </div>
                                        <div className="card-block">
                                            <div className="row m-b-30">
                                                <div className="col-lg-12 col-xl-6">
                                                    <div className="sub-title">Default</div>
                                                    <ul className="nav nav-tabs md-tabs" role="tablist">
                                                        <li className="nav-item">
                                                            <a className="nav-link active" data-toggle="tab" href="#home3" role="tab">Home</a>
                                                            <div className="slide"></div>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a className="nav-link" data-toggle="tab" href="#profile3" role="tab">Profile</a>
                                                            <div className="slide"></div>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a className="nav-link" data-toggle="tab" href="#messages3" role="tab">Messages</a>
                                                            <div className="slide"></div>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a className="nav-link" data-toggle="tab" href="#settings3" role="tab">Settings</a>
                                                            <div className="slide"></div>
                                                        </li>
                                                    </ul>
                                                    <div className="tab-content card-block">
                                                        <div className="tab-pane active" id="home3" role="tabpanel">
                                                            <p className="m-0">1. This is Photoshop's version of Lorem IpThis is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis
                                                            bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean
                                                            mas Cum sociis natoque penatibus et magnis dis.....</p>
                                                        </div>
                                                        <div className="tab-pane" id="profile3" role="tabpanel">
                                                            <p className="m-0">2.Cras consequat in enim ut efficitur. Nulla posuere elit quis auctor interdum praesent sit amet nulla vel enim amet. Donec convallis tellus neque, et imperdiet
                                                            felis amet.</p>
                                                        </div>
                                                        <div className="tab-pane" id="messages3" role="tabpanel">
                                                            <p className="m-0">3. This is Photoshop's version of Lorem IpThis is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis
                                                            bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean
                                                            mas Cum sociis natoque penatibus et magnis dis.....</p>
                                                        </div>
                                                        <div className="tab-pane" id="settings3" role="tabpanel">
                                                            <p className="m-0">4.Cras consequat in enim ut efficitur. Nulla posuere elit quis auctor interdum praesent sit amet nulla vel enim amet. Donec convallis tellus neque, et imperdiet
                                                            felis amet.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12 col-xl-6">
                                                    <div className="sub-title">Below Tab</div>
                                                    <div className="tab-content card-block">
                                                        <div className="tab-pane active" id="home4" role="tabpanel">
                                                            <p className="m-0">1. This is Photoshop's version of Lorem IpThis is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis
                                                            bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean
                                                            mas Cum sociis natoque penatibus et magnis dis.....</p>
                                                        </div>
                                                        <div className="tab-pane" id="profile4" role="tabpanel">
                                                            <p className="m-0">2.Cras consequat in enim ut efficitur. Nulla posuere elit quis auctor interdum praesent sit amet nulla vel enim amet. Donec convallis tellus neque, et imperdiet
                                                            felis amet.</p>
                                                        </div>
                                                        <div className="tab-pane" id="messages4" role="tabpanel">
                                                            <p className="m-0">3. This is Photoshop's version of Lorem IpThis is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis
                                                            bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean
                                                            mas Cum sociis natoque penatibus et magnis dis.....</p>
                                                        </div>
                                                        <div className="tab-pane" id="settings4" role="tabpanel">
                                                            <p className="m-0">4.Cras consequat in enim ut efficitur. Nulla posuere elit quis auctor interdum praesent sit amet nulla vel enim amet. Donec convallis tellus neque, et imperdiet
                                                            felis amet.</p>
                                                        </div>
                                                    </div>
                                                    <ul className="nav nav-tabs md-tabs" role="tablist">
                                                        <li className="nav-item">
                                                            <a className="nav-link active" data-toggle="tab" href="#home4" role="tab">Home</a>
                                                            <div className="slide"></div>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a className="nav-link" data-toggle="tab" href="#profile4" role="tab">Profile</a>
                                                            <div className="slide"></div>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a className="nav-link" data-toggle="tab" href="#messages4" role="tab">Messages</a>
                                                            <div className="slide"></div>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a className="nav-link" data-toggle="tab" href="#settings4" role="tab">Settings</a>
                                                            <div className="slide"></div>
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

export default Tabs;