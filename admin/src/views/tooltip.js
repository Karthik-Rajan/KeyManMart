import React from 'react';

const ToolTip = () => {
    return (
        <div className="pcoded-content">
            <div className="page-header">
                <div className="page-block">
                    <div className="row align-items-center">
                        <div className="col-md-8">
                            <div className="page-header-title">
                                <h5 className="m-b-10">Animated Tooltip</h5>
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
                                <li className="breadcrumb-item"><a href="#!">Animated Tooltip</a>
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
                                <div className="col-sm-6">
                                    <div className="card button-page o-visible">
                                        <div className="card-header">
                                            <h5>Tooltip</h5>
                                        </div>
                                        <div className="card-block">
                                            <ul>
                                                <li>
                                                    <button type="button" className="btn btn-default waves-effect" data-toggle="tooltip" data-placement="top" title="tooltip on top">Top
                                             </button>
                                                </li>
                                                <li>
                                                    <button type="button" className="btn btn-primary waves-effect waves-light" data-toggle="tooltip" data-placement="left" title="tooltip on left">Left
                                             </button>
                                                </li>
                                                <li>
                                                    <button type="button" className="btn btn-success waves-effect waves-light" data-toggle="tooltip" data-placement="right" title="tooltip on right">right
                                             </button>
                                                </li>
                                                <li>
                                                    <button type="button" className="btn btn-warning waves-effect waves-light" data-toggle="tooltip" data-placement="bottom" title="tooltip on bottom">bottom
                                             </button>
                                                </li>
                                                <li>
                                                    <button type="button" className="btn btn-info waves-effect waves-light" data-toggle="tooltip" data-html="true" title="<em>Tooltip</em> <u>with</u> <b>HTML</b>">Html Tooltip
                                             </button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="card o-visible">
                                        <div className="card-header">
                                            <h5>Popover</h5>
                                        </div>
                                        <div className="card-block tooltip-pop button-list">
                                            <button type="button" className="btn btn-default waves-effect" data-toggle="popover" data-placement="top" title="" data-content="top by popover" data-original-title="tooltip on top">Top
                                     </button>
                                            <button type="button" className="btn btn-primary waves-effect waves-light" data-toggle="popover" data-placement="left" title="tooltip on left" data-content="left by popover">Left
                                     </button>
                                            <button type="button" className="btn btn-success waves-effect waves-light" data-toggle="popover" data-placement="right" title="tooltip on right" data-content="right by popover">right
                                     </button>
                                            <button type="button" className="btn btn-warning waves-effect waves-light" data-toggle="popover" data-placement="bottom" title="tooltip on bottom" data-content="bottom by popover">bottom
                                     </button>
                                            <button type="button" className="btn btn-info waves-effect waves-light" data-toggle="popover" data-html="true" data-placement="top" title="<em>Tooltip</em> <u>with</u> <b>HTML</b>"
                                                data-content="tooltip by HTML">Html Tooltip
                                     </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <div className="card o-visible">
                                        <div className="card-header">
                                            <h5>Tooltips On Textbox</h5>
                                        </div>
                                        <div className="card-block tooltip-icon button-list">
                                            <div className="input-group">
                                                <span className="input-group-prepend" id="name"><label className="input-group-text"><i className="icofont icofont-user-alt-3"></i></label></span>
                                                <input type="text" className="form-control" placeholder="Enter your name" title="Enter your name" data-toggle="tooltip" />
                                            </div>
                                            <div className="input-group">
                                                <span className="input-group-prepend" id="name"><label className="input-group-text"><i className="icofont icofont-ui-email"></i></label></span>
                                                <input type="text" className="form-control" placeholder="Enter email" title="Enter email" data-toggle="tooltip" />
                                            </div>
                                            <button type="button" className="btn btn-primary waves-effect waves-light m-r-20" data-toggle="tooltip" data-placement="right" title="submit">Submit
                                     </button>
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

export default ToolTip;