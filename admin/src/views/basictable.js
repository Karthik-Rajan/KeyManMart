import React from 'react';

const Table = () => {
    return (
        <div className="pcoded-content">
            <div className="page-header">
                <div className="page-block">
                    <div className="row align-items-center">
                        <div className="col-md-8">
                            <div className="page-header-title">
                                <h5 className="m-b-10">Bootstrap Basic Tables</h5>
                                <p className="m-b-0">Lorem Ipsum is simply dummy text of the printing</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <a href="index.html"> <i className="fa fa-home"></i> </a>
                                </li>
                                <li className="breadcrumb-item"><a href="#!">Bootstrap Tables</a>
                                </li>
                                <li className="breadcrumb-item"><a href="#!">Basic Tables</a>
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
                            <div className="card">
                                <div className="card-header">
                                    <h5>Basic Table</h5>
                                    <span>use className <code>table</code> inside table element</span>
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
                                <div className="card-block table-border-style">
                                    <div className="table-responsive">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>First Name</th>
                                                    <th>Last Name</th>
                                                    <th>Username</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">1</th>
                                                    <td>Mark</td>
                                                    <td>Otto</td>
                                                    <td>@mdo</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">2</th>
                                                    <td>Jacob</td>
                                                    <td>Thornton</td>
                                                    <td>@fat</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">3</th>
                                                    <td>Larry</td>
                                                    <td>the Bird</td>
                                                    <td>@twitter</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header">
                                    <h5>Dark Table</h5>
                                    <span>use className <code>table-dark</code> inside table element</span>
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
                                <div className="card-block table-border-style">
                                    <div className="table-responsive">
                                        <table className="table table-dark">
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>First Name</th>
                                                    <th>Last Name</th>
                                                    <th>Username</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">1</th>
                                                    <td>Mark</td>
                                                    <td>Otto</td>
                                                    <td>@mdo</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">2</th>
                                                    <td>Jacob</td>
                                                    <td>Thornton</td>
                                                    <td>@fat</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">3</th>
                                                    <td>Larry</td>
                                                    <td>the Bird</td>
                                                    <td>@twitter</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header">
                                    <h5>Hover Table</h5>
                                    <span>use className <code>table-hover</code> inside table element</span>
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
                                <div className="card-block table-border-style">
                                    <div className="table-responsive">
                                        <table className="table table-hover">
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>First Name</th>
                                                    <th>Last Name</th>
                                                    <th>Username</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">1</th>
                                                    <td>Mark</td>
                                                    <td>Otto</td>
                                                    <td>@mdo</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">2</th>
                                                    <td>Jacob</td>
                                                    <td>Thornton</td>
                                                    <td>@fat</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">3</th>
                                                    <td>Larry</td>
                                                    <td>the Bird</td>
                                                    <td>@twitter</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header">
                                    <h5>Contextual Classes</h5>
                                    <span>For Make row Contextual add Contextual className like <code>.table-success</code> in <code> tr tag</code> and For cell add Contextual className in <code> td or th tag</code> . </span>
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
                                <div className="card-block table-border-style">
                                    <div className="table-responsive">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>First Name</th>
                                                    <th>Last Name</th>
                                                    <th>Username</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="table-active">
                                                    <th scope="row">1</th>
                                                    <td>Mark</td>
                                                    <td>Otto</td>
                                                    <td>@mdo</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">2</th>
                                                    <td>Jacob</td>
                                                    <td>Thornton</td>
                                                    <td>@fat</td>
                                                </tr>
                                                <tr className="table-success">
                                                    <th scope="row">3</th>
                                                    <td>Larry</td>
                                                    <td>the Bird</td>
                                                    <td>@twitter</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">4</th>
                                                    <td>Larry</td>
                                                    <td>the Bird</td>
                                                    <td>@twitter</td>
                                                </tr>
                                                <tr className="table-warning">
                                                    <th scope="row">5</th>
                                                    <td>Larry</td>
                                                    <td>the Bird</td>
                                                    <td>@twitter</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">6</th>
                                                    <td>Larry</td>
                                                    <td>the Bird</td>
                                                    <td>@twitter</td>
                                                </tr>
                                                <tr className="table-danger">
                                                    <th scope="row">7</th>
                                                    <td>Larry</td>
                                                    <td>the Bird</td>
                                                    <td>@twitter</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">8</th>
                                                    <td>Larry</td>
                                                    <td>the Bird</td>
                                                    <td>@twitter</td>
                                                </tr>
                                                <tr className="table-info">
                                                    <th scope="row">9</th>
                                                    <td>Larry</td>
                                                    <td>the Bird</td>
                                                    <td>@twitter</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header">
                                    <h5>Background Utilities</h5>
                                    <span>Regular table background variants are not available with the inverse table, however, you may use <code>text or background utilities</code> to achieve similar styles.</span>
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
                                <div className="card-block table-border-style">
                                    <div className="table-responsive">
                                        <table className="table table-inverse">
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>First Name</th>
                                                    <th>Last Name</th>
                                                    <th>Username</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="bg-primary">
                                                    <th scope="row">1</th>
                                                    <td>Mark</td>
                                                    <td>Otto</td>
                                                    <td>@mdo</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">2</th>
                                                    <td>Jacob</td>
                                                    <td>Thornton</td>
                                                    <td>@fat</td>
                                                </tr>
                                                <tr className="bg-success">
                                                    <th scope="row">3</th>
                                                    <td>Larry</td>
                                                    <td>the Bird</td>
                                                    <td>@twitter</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">4</th>
                                                    <td>Larry</td>
                                                    <td>the Bird</td>
                                                    <td>@twitter</td>
                                                </tr>
                                                <tr className="bg-warning">
                                                    <th scope="row">5</th>
                                                    <td>Larry</td>
                                                    <td>the Bird</td>
                                                    <td>@twitter</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">6</th>
                                                    <td>Larry</td>
                                                    <td>the Bird</td>
                                                    <td>@twitter</td>
                                                </tr>
                                                <tr className="bg-danger">
                                                    <th scope="row">7</th>
                                                    <td>Larry</td>
                                                    <td>the Bird</td>
                                                    <td>@twitter</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">8</th>
                                                    <td>Larry</td>
                                                    <td>the Bird</td>
                                                    <td>@twitter</td>
                                                </tr>
                                                <tr className="bg-info">
                                                    <th scope="row">9</th>
                                                    <td>Larry</td>
                                                    <td>the Bird</td>
                                                    <td>@twitter</td>
                                                </tr>
                                            </tbody>
                                        </table>
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

export default Table;