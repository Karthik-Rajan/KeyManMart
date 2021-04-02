import React from 'react';

const Button = () => {
    return (
        <div className="pcoded-content">
            <div className="page-header">
                <div className="page-block">
                    <div className="row align-items-center">
                        <div className="col-md-8">
                            <div className="page-header-title">
                                <h5 className="m-b-10">Buttons</h5>
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
                                <li className="breadcrumb-item"><a href="#!">Buttons</a>
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
                                            <div className="card-header-left">
                                                <h5>Basic Buttons</h5>
                                            </div>
                                            <div className="card-header-right">
                                                <ul className="list-unstyled card-option">
                                                    <li><i className="fa fa fa-wrench open-card-option"></i></li>
                                                    <li><i className="fa fa-window-maximize full-card"></i></li>
                                                    <li><i className="fa fa-minus minimize-card"></i></li>
                                                    <li><i className="fa fa-refresh reload-card"></i></li>
                                                    <li><i className="fa fa-trash close-card"></i></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="card-block">
                                            <p>
                                                Use the button classes on an <code>&lt;a&gt;</code>, <code>&lt;button&gt;</code>, or <code>&lt;input&gt;</code> element.
                                                        </p>
                                            <button className="btn btn-primary waves-effect waves-light">Primary Button</button>
                                            <button className="btn btn-success waves-effect waves-light">Success Button</button>
                                            <button className="btn btn-info waves-effect waves-light">Info Button</button>
                                            <button className="btn btn-warning waves-effect waves-light">Warning Button</button>
                                            <button className="btn btn-danger waves-effect waves-light">Danger Button</button>
                                            <button className="btn btn-inverse waves-effect waves-light">Inverse Button</button>
                                            <button className="btn btn-disabled disabled waves-effect waves-light">Disabled Button</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="card">
                                        <div className="card-header">
                                            <div className="card-header-left">
                                                <h5>Buttons With Icon</h5>
                                            </div>
                                            <div className="card-header-right">
                                                <ul className="list-unstyled card-option">
                                                    <li><i className="fa fa fa-wrench open-card-option"></i></li>
                                                    <li><i className="fa fa-window-maximize full-card"></i></li>
                                                    <li><i className="fa fa-minus minimize-card"></i></li>
                                                    <li><i className="fa fa-refresh reload-card"></i></li>
                                                    <li><i className="fa fa-trash close-card"></i></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="card-block">
                                            <p>Use <code>&lt;i className="icofont icofont-star"&gt;</code> inside button to add icon.</p>
                                            <button className="btn waves-effect waves-light btn-primary"><i className="icofont icofont-user-alt-3"></i>Primary Button</button>
                                            <button className="btn waves-effect waves-light btn-success"><i className="icofont icofont-check-circled"></i>Success Button</button>
                                            <button className="btn waves-effect waves-light btn-info"><i className="icofont icofont-info-square"></i>Info Button</button>
                                            <button className="btn waves-effect waves-light btn-warning"><i className="icofont icofont-warning-alt"></i>Warning Button</button>
                                            <button className="btn waves-effect waves-light btn-danger"><i className="icofont icofont-eye-alt"></i>Danger Button</button>
                                            <button className="btn waves-effect waves-light btn-inverse"><i className="icofont icofont-exchange"></i>Inverse Button</button>
                                            <button className="btn waves-effect waves-light btn-disabled disabled"><i className="icofont icofont-not-allowed"></i>Disabled Button</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="card">
                                        <div className="card-header">
                                            <div className="card-header-left">
                                                <h5>Border Buttons</h5>
                                            </div>
                                            <div className="card-header-right">
                                                <ul className="list-unstyled card-option">
                                                    <li><i className="fa fa fa-wrench open-card-option"></i></li>
                                                    <li><i className="fa fa-window-maximize full-card"></i></li>
                                                    <li><i className="fa fa-minus minimize-card"></i></li>
                                                    <li><i className="fa fa-refresh reload-card"></i></li>
                                                    <li><i className="fa fa-trash close-card"></i></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="card-block">
                                            <p>Use className <code>btn-outline-*</code> inside button to make Border Button.</p>
                                            <button className="btn waves-effect waves-light btn-primary btn-outline-primary"><i className="icofont icofont-user-alt-3"></i>Primary Button</button>
                                            <button className="btn waves-effect waves-light btn-success btn-outline-success"><i className="icofont icofont-check-circled"></i>Success Button</button>
                                            <button className="btn waves-effect waves-light btn-info btn-outline-info"><i className="icofont icofont-info-square"></i>Info Button</button>
                                            <button className="btn waves-effect waves-light btn-warning btn-outline-warning"><i className="icofont icofont-warning-alt"></i>Warning Button</button>
                                            <button className="btn waves-effect waves-light btn-danger btn-outline-danger"><i className="icofont icofont-eye-alt"></i>Danger Button</button>
                                            <button className="btn waves-effect waves-light btn-inverse btn-outline-inverse"><i className="icofont icofont-exchange"></i>Inverse Button</button>
                                            <button className="btn waves-effect waves-light btn-disabled btn-outline-disabled disabled"><i className="icofont icofont-not-allowed"></i>Disabled Button</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="card">
                                        <div className="card-header">
                                            <div className="card-header-left">
                                                <h5>Buttons Dropdown</h5>
                                            </div>
                                            <div className="card-header-right">
                                                <ul className="list-unstyled card-option">
                                                    <li><i className="fa fa fa-wrench open-card-option"></i></li>
                                                    <li><i className="fa fa-window-maximize full-card"></i></li>
                                                    <li><i className="fa fa-minus minimize-card"></i></li>
                                                    <li><i className="fa fa-refresh reload-card"></i></li>
                                                    <li><i className="fa fa-trash close-card"></i></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="card-block">
                                            <div className="dropdown-primary dropdown open">
                                                <button className="btn btn-primary dropdown-toggle waves-effect waves-light " type="button" id="dropdown-2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">Primary</button>
                                                <div className="dropdown-menu" aria-labelledby="dropdown-2" data-dropdown-in="fadeIn" data-dropdown-out="fadeOut">
                                                    <a className="dropdown-item waves-light waves-effect" href="#">Action</a>
                                                    <a className="dropdown-item waves-light waves-effect" href="#">Another action</a>
                                                    <a className="dropdown-item waves-light waves-effect" href="#">Something else</a>
                                                    <div className="dropdown-divider"></div>
                                                    <a className="dropdown-item waves-light waves-effect" href="#">Something else</a>
                                                </div>
                                            </div>
                                            <div className="dropdown-success dropdown open">
                                                <button className="btn btn-success dropdown-toggle waves-effect waves-light " type="button" id="dropdown-3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">Success</button>
                                                <div className="dropdown-menu" aria-labelledby="dropdown-3" data-dropdown-in="fadeIn" data-dropdown-out="fadeOut">
                                                    <a className="dropdown-item waves-light waves-effect" href="#">Action</a>
                                                    <a className="dropdown-item waves-light waves-effect" href="#">Another action</a>
                                                    <a className="dropdown-item waves-light waves-effect" href="#">Something else</a>
                                                </div>
                                            </div>
                                            <div className="dropdown-info dropdown open">
                                                <button className="btn btn-info dropdown-toggle waves-effect waves-light " type="button" id="dropdown-4" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">Info</button>
                                                <div className="dropdown-menu" aria-labelledby="dropdown-4" data-dropdown-in="fadeIn" data-dropdown-out="fadeOut">
                                                    <a className="dropdown-item waves-light waves-effect" href="#">Action</a>
                                                    <a className="dropdown-item waves-light waves-effect" href="#">Another action</a>
                                                    <a className="dropdown-item waves-light waves-effect" href="#">Something else</a>
                                                </div>
                                            </div>
                                            <div className="dropdown-warning dropdown open">
                                                <button className="btn btn-warning dropdown-toggle waves-effect waves-light " type="button" id="dropdown-5" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">Warning</button>
                                                <div className="dropdown-menu" aria-labelledby="dropdown-5" data-dropdown-in="fadeIn" data-dropdown-out="fadeOut">
                                                    <a className="dropdown-item waves-light waves-effect" href="#">Action</a>
                                                    <a className="dropdown-item waves-light waves-effect" href="#">Another action</a>
                                                    <a className="dropdown-item waves-light waves-effect" href="#">Something else</a>
                                                </div>
                                            </div>
                                            <div className="dropdown-danger dropdown open">
                                                <button className="btn btn-danger dropdown-toggle waves-effect waves-light " type="button" id="dropdown-6" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">Danger</button>
                                                <div className="dropdown-menu" aria-labelledby="dropdown-6" data-dropdown-in="fadeIn" data-dropdown-out="fadeOut">
                                                    <a className="dropdown-item waves-light waves-effect" href="#">Action</a>
                                                    <a className="dropdown-item waves-light waves-effect" href="#">Another action</a>
                                                    <a className="dropdown-item waves-light waves-effect" href="#">Something else</a>
                                                </div>
                                            </div>
                                            <div className="dropdown-inverse dropdown open">
                                                <button className="btn btn-inverse dropdown-toggle waves-effect waves-light " type="button" id="dropdown-7" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">Inverse</button>
                                                <div className="dropdown-menu" aria-labelledby="dropdown-7" data-dropdown-in="fadeIn" data-dropdown-out="fadeOut">
                                                    <a className="dropdown-item waves-light waves-effect" href="#">Action</a>
                                                    <a className="dropdown-item waves-light waves-effect" href="#">Another action</a>
                                                    <a className="dropdown-item waves-light waves-effect" href="#">Something else</a>
                                                </div>
                                            </div>
                                            <div className="dropdown-disabled dropdown open">
                                                <button className="btn btn-disabled dropdown-toggle waves-effect waves-light disabled" type="button" id="dropdown-8" data-toggle="dropdown" aria-haspopup="true"
                                                    aria-expanded="true">Disabled</button>
                                                <div className="dropdown-menu" aria-labelledby="dropdown-8" data-dropdown-in="fadeIn" data-dropdown-out="fadeOut">
                                                    <a className="dropdown-item waves-light waves-effect" href="#">Action</a>
                                                    <a className="dropdown-item waves-light waves-effect" href="#">Another action</a>
                                                    <a className="dropdown-item waves-light waves-effect" href="#">Something else</a>
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
                                            <div className="card-header-left">
                                                <h5>Group Buttons</h5>
                                            </div>
                                            <div className="card-header-right">
                                                <ul className="list-unstyled card-option">
                                                    <li><i className="fa fa fa-wrench open-card-option"></i></li>
                                                    <li><i className="fa fa-window-maximize full-card"></i></li>
                                                    <li><i className="fa fa-minus minimize-card"></i></li>
                                                    <li><i className="fa fa-refresh reload-card"></i></li>
                                                    <li><i className="fa fa-trash close-card"></i></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="card-block">
                                            <div>
                                                <div className="btn-group " role="group" data-toggle="tooltip" data-placement="top" title="" data-original-title=".btn-xlg">
                                                    <button type="button" className="btn btn-primary btn-lg waves-effect waves-light">Left</button>
                                                    <button type="button" className="btn btn-primary btn-lg waves-effect waves-light">Middle</button>
                                                    <button type="button" className="btn btn-primary btn-lg waves-effect waves-light">Right</button>
                                                </div>
                                                <div className="btn-group " role="group" data-toggle="tooltip" data-placement="top" title="" data-original-title=".btn-xlg">
                                                    <button type="button" className="btn btn-primary btn-md waves-effect waves-light">Left</button>
                                                    <button type="button" className="btn btn-primary btn-md waves-effect waves-light">Middle</button>
                                                    <button type="button" className="btn btn-primary btn-md waves-effect waves-light">Right</button>
                                                </div>
                                                <div className="btn-group " role="group" data-toggle="tooltip" data-placement="top" title="" data-original-title=".btn-xlg">
                                                    <button type="button" className="btn btn-primary btn-sm waves-effect waves-light">Left</button>
                                                    <button type="button" className="btn btn-primary btn-sm waves-effect waves-light">Middle</button>
                                                    <button type="button" className="btn btn-primary btn-sm waves-effect waves-light">Right</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="styleSelector">

                </div>
            </div>
        </div>
    );
}

export default Button;