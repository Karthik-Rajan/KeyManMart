import React from 'react';

const Accordion = () => {
    return (
        <div className="pcoded-content">
            <div className="page-header">
                <div className="page-block">
                    <div className="row align-items-center">
                        <div className="col-md-8">
                            <div className="page-header-title">
                                <h5 className="m-b-10">Accordion</h5>
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
                                <li className="breadcrumb-item"><a href="#!">Accordion</a>
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
                                <div className="col-lg-6">
                                    <div className="card">
                                        <div className="card-header">
                                            <h5 className="card-header-text">All Close Accordion</h5>
                                        </div>
                                        <div className="card-block accordion-block">
                                            <div id="accordion" role="tablist" aria-multiselectable="true">
                                                <div className="accordion-panel">
                                                    <div className="accordion-heading" role="tab" id="headingOne">
                                                        <h3 className="card-title accordion-title">
                                                            <a className="accordion-msg waves-effect waves-dark" data-toggle="collapse"
                                                                data-parent="#accordion" href="#collapseOne"
                                                                aria-expanded="true" aria-controls="collapseOne">
                                                                Lorem Message 1
                                                               </a>
                                                        </h3>
                                                    </div>
                                                    <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                                                        <div className="accordion-content accordion-desc">
                                                            <p>
                                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
                                                                survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
                                                                sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                                               </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-panel">
                                                    <div className="accordion-heading" role="tab" id="headingTwo">
                                                        <h3 className="card-title accordion-title">
                                                            <a className="accordion-msg waves-effect waves-dark" data-toggle="collapse"
                                                                data-parent="#accordion" href="#collapseTwo"
                                                                aria-expanded="false"
                                                                aria-controls="collapseTwo">
                                                                Lorem Message 2
                                                           </a>
                                                        </h3>
                                                    </div>
                                                    <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                                                        <div className="accordion-content accordion-desc">
                                                            <p>
                                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
                                                                survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
                                                                sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                                           </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-panel">
                                                    <div className=" accordion-heading" role="tab" id="headingThree">
                                                        <h3 className="card-title accordion-title">
                                                            <a className="accordion-msg waves-effect waves-dark" data-toggle="collapse"
                                                                data-parent="#accordion" href="#collapseThree"
                                                                aria-expanded="false"
                                                                aria-controls="collapseThree">
                                                                Lorem Message 3
                                                       </a>
                                                        </h3>
                                                    </div>
                                                    <div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                                                        <div className="accordion-content accordion-desc">
                                                            <p>
                                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
                                                                survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
                                                                sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                                       </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="card">
                                        <div className="card-header">
                                            <h5 className="card-header-text">Single Open Accordion</h5>
                                        </div>
                                        <div className="card-block accordion-block">
                                            <div className="accordion-box" id="single-open">
                                                <a className="accordion-msg waves-effect waves-dark">Lorem Message 1</a>
                                                <div className="accordion-desc">
                                                    <p>
                                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
                                                        survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
                                                        Lorem Ipsum passages, and more .
                                               </p>
                                                </div>
                                                <a className="accordion-msg waves-effect waves-dark">Lorem Message 2</a>
                                                <div className="accordion-desc">
                                                    <p>
                                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
                                                        survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
                                                        Lorem Ipsum passages, and more .
                                               </p>
                                                </div>
                                                <a className="accordion-msg waves-effect waves-dark">Lorem Message 3</a>
                                                <div className="accordion-desc">
                                                    <p>
                                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
                                                        survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
                                                        Lorem Ipsum passages, and more .
                                               </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="card">
                                        <div className="card-header">
                                            <h5 className="card-header-text">Color Accordion</h5>
                                        </div>
                                        <div className="card-block accordion-block color-accordion-block">
                                            <div className="color-accordion" id="color-accordion">
                                                <a className="accordion-msg b-none waves-effect waves-light">Lorem Message 1</a>
                                                <div className="accordion-desc">
                                                    <p>
                                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
                                                        survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
                                                        Lorem Ipsum passages, and more .
                                               </p>
                                                </div>
                                                <a className="accordion-msg bg-dark-primary b-none waves-effect waves-light">Lorem Message
                                               2</a>
                                                <div className="accordion-desc">
                                                    <p>
                                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
                                                        survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
                                                        Lorem Ipsum passages, and more .
                                                   </p>
                                                </div>
                                                <a className="accordion-msg bg-darkest-primary b-none waves-effect waves-light">Lorem Message
                                                   3</a>
                                                <div className="accordion-desc">
                                                    <p>
                                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
                                                        survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
                                                        Lorem Ipsum passages, and more .
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
                <div id="styleSelector">

                </div>
            </div>
        </div>
    );
}

export default Accordion;