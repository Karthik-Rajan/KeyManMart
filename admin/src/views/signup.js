import React from 'react';

const SignUp = (props) => {
    return (
        <section className="login-block">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <form className="md-float-material form-material">
                            <div className="text-center">
                                <img src="/images/logo.png" alt="logo.png" />
                            </div>
                            <div className="auth-box card">
                                <div className="card-block">
                                    <form encType="multipart/form-data">
                                        <div className="row m-b-20">
                                            <div className="col-md-12">
                                                <h3 className="text-center txt-primary">Sign up</h3>
                                            </div>
                                        </div>
                                        <div className="form-group form-primary">
                                            <input type="text" name="user-name" className="form-control" />
                                            <span className="form-bar"></span>
                                            <label className="float-label">Choose Username</label>
                                        </div>
                                        <div className="form-group form-primary">
                                            <input type="text" name="email" className="form-control" />
                                            <span className="form-bar"></span>
                                            <label className="float-label">Your Email Address</label>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div className="form-group form-primary">
                                                    <input type="password" name="password" className="form-control" />
                                                    <span className="form-bar"></span>
                                                    <label className="float-label">Password</label>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group form-primary">
                                                    <input type="password" name="confirm-password" className="form-control" />
                                                    <span className="form-bar"></span>
                                                    <label className="float-label">Confirm Password</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row m-t-25 text-left">
                                            <div className="col-md-12">
                                                <div className="checkbox-fade fade-in-primary">
                                                    <label>
                                                        <input type="checkbox" value="" />
                                                        <span className="cr"><i className="cr-icon icofont icofont-ui-check txt-primary"></i></span>
                                                        <span className="text-inverse">I read and accept <a href="#">Terms &amp; Conditions.</a></span>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="checkbox-fade fade-in-primary">
                                                    <label>
                                                        <input type="checkbox" value="" />
                                                        <span className="cr"><i className="cr-icon icofont icofont-ui-check txt-primary"></i></span>
                                                        <span className="text-inverse">Send me the <a href="#!">Newsletter</a> weekly.</span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row m-t-30">
                                            <div className="col-md-12">
                                                <button type="button" className="btn btn-primary btn-md btn-block waves-effect text-center m-b-20" onClick={props.onSubmit}>Sign up now</button>
                                            </div>
                                        </div>
                                    </form>
                                    <hr />
                                    <div className="row">
                                        <div className="col-md-10">
                                            <p className="text-inverse text-left m-b-0">Thank you.</p>
                                            <p className="text-inverse text-left"><a href="/"><b>Back to website</b></a></p>
                                        </div>
                                        <div className="col-md-2">
                                            <img src="/images/auth/Logo-small-bottom.png" alt="small-logo.png" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SignUp;
