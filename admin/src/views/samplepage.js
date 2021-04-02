import React from 'react';

const SamplePage = () => {
    return (
        <div className="pcoded-content">
            <div className="page-header">
                <div className="page-block">
                    <div className="row align-items-center">
                        <div className="col-md-8">
                            <div className="page-header-title">
                                <h5 className="m-b-10">Sample page</h5>
                                <p className="m-b-0">Lorem Ipsum is simply dummy text of the printing</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <a href="/"> <i className="fa fa-home"></i> </a>
                                </li>
                                <li className="breadcrumb-item"><a href="#!">Sample page</a>
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
                                            <h5>Hello card</h5>
                                            <span>lorem ipsum dolor sit amet, consectetur adipisicing elit</span>
                                            <div className="card-header-right">
                                                <ul className="list-unstyled card-option">
                                                    <li>
                                                        <i className="fa fa fa-wrench open-card-option"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-window-maximize full-card"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-minus minimize-card"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-refresh reload-card"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-trash close-card"></i>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="card-block">
                                            <p>
                                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                                                in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                                                laborum."
                                        </p>
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
export default SamplePage;