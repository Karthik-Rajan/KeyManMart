import React from 'react';

const FormElementComponent = () => {
    return (
        <div className="pcoded-content">
            <div className="page-header">
                <div className="page-block">
                    <div className="row align-items-center">
                        <div className="col-md-8">
                            <div className="page-header-title">
                                <h5 className="m-b-10">Basic Form Inputs</h5>
                                <p className="m-b-0">Lorem Ipsum is simply dummy text of the printing</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <a href="index.html"> <i className="fa fa-home"></i> </a>
                                </li>
                                <li className="breadcrumb-item"><a href="#!">Form Components</a>
                                </li>
                                <li className="breadcrumb-item"><a href="#!">Basic Form Inputs</a>
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
                                <div className="col-md-6">
                                    <div className="card">
                                        <div className="card-header">
                                            <h5>Material Form Inputs</h5>
                                        </div>
                                        <div className="card-block">
                                            <form className="form-material">
                                                <div className="form-group form-default">
                                                    <input type="text" name="footer-email" className="form-control" />
                                                    <span className="form-bar"></span>
                                                    <label className="float-label">Username</label>
                                                </div>
                                                <div className="form-group form-default">
                                                    <input type="text" name="footer-email" className="form-control" />
                                                    <span className="form-bar"></span>
                                                    <label className="float-label">Email (exa@gmail.com)</label>
                                                </div>
                                                <div className="form-group form-default">
                                                    <input type="password" name="footer-email" className="form-control" />
                                                    <span className="form-bar"></span>
                                                    <label className="float-label">Password</label>
                                                </div>
                                                <div className="form-group form-default">
                                                    <input type="text" name="footer-email" className="form-control" value="My value" />
                                                    <span className="form-bar"></span>
                                                    <label className="float-label">Predefine value</label>
                                                </div>
                                                <div className="form-group form-default">
                                                    <input type="text" name="footer-email" className="form-control" disabled />
                                                    <span className="form-bar"></span>
                                                    <label className="float-label">Disabled</label>
                                                </div>
                                                <div className="form-group form-default">
                                                    <input type="text" name="footer-email" className="form-control" maxlength="6" />
                                                    <span className="form-bar"></span>
                                                    <label className="float-label">Max length 6 char</label>
                                                </div>
                                                <div className="form-group form-default">
                                                    <textarea className="form-control"></textarea>
                                                    <span className="form-bar"></span>
                                                    <label className="float-label">Text area Input</label>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card">
                                        <div className="card-header">
                                            <h5>Material Form Inputs With Static Label</h5>
                                        </div>
                                        <div className="card-block">
                                            <form className="form-material">
                                                <div className="form-group form-default form-static-label">
                                                    <input type="text" name="footer-email" className="form-control" placeholder="Enter User Name" />
                                                    <span className="form-bar"></span>
                                                    <label className="float-label">Username</label>
                                                </div>
                                                <div className="form-group form-default form-static-label">
                                                    <input type="text" name="footer-email" className="form-control" placeholder="Enter Email" />
                                                    <span className="form-bar"></span>
                                                    <label className="float-label">Email (exa@gmail.com)</label>
                                                </div>
                                                <div className="form-group form-default form-static-label">
                                                    <input type="password" name="footer-email" className="form-control" placeholder="Enter Password" />
                                                    <span className="form-bar"></span>
                                                    <label className="float-label">Password</label>
                                                </div>
                                                <div className="form-group form-default form-static-label">
                                                    <input type="text" name="footer-email" className="form-control" placeholder="Pre define value" value="My value" />
                                                    <span className="form-bar"></span>
                                                    <label className="float-label">Predefine value</label>
                                                </div>
                                                <div className="form-group form-default form-static-label">
                                                    <input type="text" name="footer-email" className="form-control" placeholder="disabled Input" disabled />
                                                    <span className="form-bar"></span>
                                                    <label className="float-label">Disabled</label>
                                                </div>
                                                <div className="form-group form-default form-static-label">
                                                    <input type="text" name="footer-email" className="form-control" maxlength="6" placeholder="Enter only 6 char" />
                                                    <span className="form-bar"></span>
                                                    <label className="float-label">Max length 6 char</label>
                                                </div>
                                                <div className="form-group form-default form-static-label">
                                                    <textarea className="form-control">Enter Text hear</textarea>
                                                    <span className="form-bar"></span>
                                                    <label className="float-label">Text area Input</label>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="card">
                                        <div className="card-header">
                                            <h5>Colored Input</h5>
                                        </div>
                                        <div className="card-block">
                                            <form className="form-material">
                                                <div className="form-group form-default">
                                                    <input type="text" name="footer-email" className="form-control" />
                                                    <span className="form-bar"></span>
                                                    <label className="float-label">form-default</label>
                                                </div>
                                                <div className="form-group form-primary">
                                                    <input type="text" name="footer-email" className="form-control" />
                                                    <span className="form-bar"></span>
                                                    <label className="float-label">form-primary</label>
                                                </div>
                                                <div className="form-group form-success">
                                                    <input type="text" name="footer-email" className="form-control" />
                                                    <span className="form-bar"></span>
                                                    <label className="float-label">form-success</label>
                                                </div>
                                                <div className="form-group form-danger">
                                                    <input type="text" name="footer-email" className="form-control" />
                                                    <span className="form-bar"></span>
                                                    <label className="float-label">form-danger</label>
                                                </div>
                                                <div className="form-group form-warning">
                                                    <input type="text" name="footer-email" className="form-control" />
                                                    <span className="form-bar"></span>
                                                    <label className="float-label">form-warning</label>
                                                </div>
                                                <div className="form-group form-info">
                                                    <input type="text" name="footer-email" className="form-control" />
                                                    <span className="form-bar"></span>
                                                    <label className="float-label">form-info</label>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card">
                                        <div className="card-header">
                                            <h5>Colored Input With Static Label</h5>
                                        </div>
                                        <div className="card-block">
                                            <form className="form-material">
                                                <div className="form-group form-default form-static-label">
                                                    <input type="text" name="footer-email" className="form-control" />
                                                    <span className="form-bar"></span>
                                                    <label className="float-label">form-default</label>
                                                </div>
                                                <div className="form-group form-primary form-static-label">
                                                    <input type="text" name="footer-email" className="form-control" />
                                                    <span className="form-bar"></span>
                                                    <label className="float-label">form-primary</label>
                                                </div>
                                                <div className="form-group form-success form-static-label">
                                                    <input type="text" name="footer-email" className="form-control" />
                                                    <span className="form-bar"></span>
                                                    <label className="float-label">form-success</label>
                                                </div>
                                                <div className="form-group form-danger form-static-label">
                                                    <input type="text" name="footer-email" className="form-control" />
                                                    <span className="form-bar"></span>
                                                    <label className="float-label">form-danger</label>
                                                </div>
                                                <div className="form-group form-warning form-static-label">
                                                    <input type="text" name="footer-email" className="form-control" />
                                                    <span className="form-bar"></span>
                                                    <label className="float-label">form-warning</label>
                                                </div>
                                                <div className="form-group form-info form-static-label">
                                                    <input type="text" name="footer-email" className="form-control" />
                                                    <span className="form-bar"></span>
                                                    <label className="float-label">form-info</label>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="card">
                                        <div className="card-header">
                                            <h5>Basic Form Inputs</h5>
                                            <span>Add className of <code>.form-control</code> with <code>&lt;input&gt;</code> tag</span>
                                        </div>
                                        <div className="card-block">
                                            <h4 className="sub-title">Basic Inputs</h4>
                                            <form>
                                                <div className="form-group row">
                                                    <label className="col-sm-2 col-form-label">Simple Input</label>
                                                    <div className="col-sm-10">
                                                        <input type="text" className="form-control" />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-sm-2 col-form-label">Placeholder</label>
                                                    <div className="col-sm-10">
                                                        <input type="text" className="form-control" placeholder="Type your title in Placeholder" />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-sm-2 col-form-label">Password</label>
                                                    <div className="col-sm-10">
                                                        <input type="password" className="form-control" placeholder="Password input" />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-sm-2 col-form-label">Read only</label>
                                                    <div className="col-sm-10">
                                                        <input type="text" className="form-control" placeholder="You can't change me" readonly />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-sm-2 col-form-label">Disable Input</label>
                                                    <div className="col-sm-10">
                                                        <input type="text" className="form-control" placeholder="Disabled text" disabled />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-sm-2 col-form-label">Predefine
                                                Input</label>
                                                    <div className="col-sm-10">
                                                        <input type="text" className="form-control" value="Enter yout content after me" />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-sm-2 col-form-label">Select Box</label>
                                                    <div className="col-sm-10">
                                                        <select name="select" className="form-control">
                                                            <option value="opt1">Select One Value Only</option>
                                                            <option value="opt2">Type 2</option>
                                                            <option value="opt3">Type 3</option>
                                                            <option value="opt4">Type 4</option>
                                                            <option value="opt5">Type 5</option>
                                                            <option value="opt6">Type 6</option>
                                                            <option value="opt7">Type 7</option>
                                                            <option value="opt8">Type 8</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-sm-2 col-form-label">Round Input</label>
                                                    <div className="col-sm-10">
                                                        <input type="text" className="form-control form-control-round" placeholder=".form-control-round" />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-sm-2 col-form-label">Maximum
                                                Length</label>
                                                    <div className="col-sm-10">
                                                        <input type="text" className="form-control" placeholder="Content must be in 6 characters" maxlength="6" />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-sm-2 col-form-label">Disable
                                                Autocomplete</label>
                                                    <div className="col-sm-10">
                                                        <input type="text" className="form-control" placeholder="Autocomplete Off" autocomplete="off" />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-sm-2 col-form-label">Static Text</label>
                                                    <div className="col-sm-10">
                                                        <div className="form-control-static">Hello !... This is
                                                        static text
                                                </div>
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-sm-2 col-form-label">Color</label>
                                                    <div className="col-sm-10">
                                                        <input type="color" className="form-control" />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-sm-2 col-form-label">Upload File</label>
                                                    <div className="col-sm-10">
                                                        <input type="file" className="form-control" />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-sm-2 col-form-label">Textarea</label>
                                                    <div className="col-sm-10">
                                                        <textarea rows="5" cols="5" className="form-control" placeholder="Default textarea"></textarea>
                                                    </div>
                                                </div>
                                            </form>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <h4 className="sub-title">Input Sizes</h4>
                                                    <form>
                                                        <div className="form-group row">
                                                            <div className="col-sm-12">
                                                                <input type="text" className="form-control form-control-lg" placeholder=".form-control-lg" />
                                                            </div>
                                                        </div>
                                                        <div className="form-group row">
                                                            <div className="col-sm-10">
                                                                <input type="text" className="form-control" placeholder=".form-control" />
                                                            </div>
                                                        </div>
                                                        <div className="form-group row">
                                                            <div className="col-sm-8">
                                                                <input type="text" className="form-control form-control-sm" placeholder=".form-control-sm" />
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                                <div className="col-sm-6 mobile-inputs">
                                                    <h4 className="sub-title">Color Inputs</h4>
                                                    <form>
                                                        <div className="form-group">
                                                            <input type="text" className="form-control form-control-primary" placeholder=".form-control-primary" />
                                                        </div>
                                                        <div className="form-group row">
                                                            <div className="col-sm-6">
                                                                <input type="text" className="form-control form-control-warning" placeholder=".form-control-warning" />
                                                            </div>
                                                            <div className="col-sm-6">
                                                                <input type="text" className="form-control form-control-default" placeholder=".form-control-default" />
                                                            </div>
                                                        </div>
                                                        <div className="form-group row">
                                                            <div className="col-sm-6">
                                                                <input type="text" className="form-control form-control-danger" placeholder=".form-control-danger" />
                                                            </div>
                                                            <div className="col-sm-6">
                                                                <input type="text" className="form-control form-control-success" placeholder=".form-control-success" />
                                                            </div>
                                                        </div>
                                                        <div className="form-group row">
                                                            <div className="col-sm-6">
                                                                <input type="text" className="form-control form-control-inverse" placeholder=".form-control-inverse" />
                                                            </div>
                                                            <div className="col-sm-6">
                                                                <input type="text" className="form-control form-control-info" placeholder=".form-control-info" />
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-6 mobile-inputs">
                                                    <h4 className="sub-title">Text-color</h4>
                                                    <form>
                                                        <div className="form-group">
                                                            <input type="text" className="form-control form-txt-primary" placeholder=".form-txt-primary" />
                                                        </div>
                                                        <div className="form-group row">
                                                            <div className="col-sm-6">
                                                                <input type="text" className="form-control form-txt-warning" placeholder=".form-txt-warning" />
                                                            </div>
                                                            <div className="col-sm-6">
                                                                <input type="text" className="form-control form-txt-default" placeholder=".form-txt-default" />
                                                            </div>
                                                        </div>
                                                        <div className="form-group row">
                                                            <div className="col-sm-6">
                                                                <input type="text" className="form-control form-txt-danger" placeholder=".form-txt-danger" />
                                                            </div>
                                                            <div className="col-sm-6">
                                                                <input type="text" className="form-control form-txt-success" placeholder=".form-txt-success" />
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-sm-6">
                                                                <input type="text" className="form-control form-txt-inverse" placeholder=".form-txt-inverse" />
                                                            </div>
                                                            <div className="col-sm-6">
                                                                <input type="text" className="form-control form-txt-info" placeholder=".form-txt-info" />
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                                <div className="col-sm-6 mobile-inputs">
                                                    <h4 className="sub-title">Background-color</h4>
                                                    <form>
                                                        <div className="form-group">
                                                            <input type="text" className="form-control form-bg-primary" placeholder=".form-bg-primary" />
                                                        </div>
                                                        <div className="form-group row">
                                                            <div className="col-sm-6">
                                                                <input type="text" className="form-control form-bg-warning" placeholder=".form-bg-warning" />
                                                            </div>
                                                            <div className="col-sm-6">
                                                                <input type="text" className="form-control form-bg-default" placeholder=".form-bg-default" />
                                                            </div>
                                                        </div>
                                                        <div className="form-group row">
                                                            <div className="col-sm-6">
                                                                <input type="text" className="form-control form-bg-danger" placeholder=".form-bg-danger" />
                                                            </div>
                                                            <div className="col-sm-6">
                                                                <input type="text" className="form-control form-bg-success" placeholder=".form-bg-success" />
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-sm-6">
                                                                <input type="text" className="form-control form-bg-inverse" placeholder=".form-bg-inverse" />
                                                            </div>
                                                            <div className="col-sm-6">
                                                                <input type="text" className="form-control form-bg-info" placeholder=".form-bg-info" />
                                                            </div>
                                                        </div>
                                                    </form>
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

export default FormElementComponent;