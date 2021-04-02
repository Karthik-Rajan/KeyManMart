import React from 'react';

const Typography = () => {
    return (
        <div className="pcoded-content">
            <div className="page-header">
                <div className="page-block">
                    <div className="row align-items-center">
                        <div className="col-md-8">
                            <div className="page-header-title">
                                <h5 className="m-b-10">Typography</h5>
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
                                <li className="breadcrumb-item"><a href="#!">Typography</a>
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
                                            <h5>Typography</h5>
                                            <span>lorem ipsum dolor sit amet, consectetur adipisicing elit</span>
                                        </div>
                                        <div className="card-block typography">
                                            <div className="row">
                                                <div className="col-sm-12 col-xl-6">
                                                    <h4 className="sub-title">Headings</h4>
                                                    <p>Use tags <code>h1 to h6</code> for get desire heading.</p>
                                                    <h1>This is a Heading 1</h1>
                                                    <h2>This is a Heading 2</h2>
                                                    <h3>This is a Heading 3</h3>
                                                    <h4>This is a Heading 4</h4>
                                                    <h5>This is a Heading 5</h5>
                                                    <h6>This is a Heading 6</h6>
                                                </div>
                                                <div className="col-sm-12 col-xl-6">
                                                    <h4 className="sub-title">HEADINGS WITH SUBHEADING</h4>
                                                    <p>Use tags <code>h1 to h6</code> for get desire heading.</p>
                                                    <h1>This is a Heading 1<small>Sub-heading</small></h1>
                                                    <h2>This is a Heading 2<small>Sub-heading</small></h2>
                                                    <h3>This is a Heading 3<small>Sub-heading</small></h3>
                                                    <h4>This is a Heading 4<small>Sub-heading</small></h4>
                                                    <h5>This is a Heading 5<small>Sub-heading</small></h5>
                                                    <h6>This is a Heading 6<small>Sub-heading</small></h6>
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
                                            <h5>text elements</h5>
                                            <span>lorem ipsum dolor sit amet, consectetur adipisicing elit</span>
                                        </div>
                                        <div className="card-block">
                                            <div className="row">
                                                <div className="col-sm-12 col-xl-6">
                                                    <h4 className="sub-title">Inline text elements</h4>
                                                    <p className="lead m-t-0">Your title goes here</p>
                                                    <p>You can use the mark tag to
                                                                    <mark>highlight</mark> text.</p>
                                                    <p>
                                                        <del>This line of text is meant to be treated as deleted text.</del>
                                                    </p>
                                                    <p>
                                                        <ins>This line of text is meant to be treated as an addition to the document.</ins>
                                                    </p>
                                                    <p><strong>rendered as bold text</strong></p>
                                                    <p><em>rendered as italicized text</em></p>
                                                </div>
                                                <div className="col-sm-12 col-xl-6">
                                                    <h4 className="sub-title">CONTEXTUAL TEXT COLORS</h4>
                                                    <p className="text-custom">
                                                        Etiam porta sem malesuada magna mollis euismod.<code>text-custom</code>
                                                    </p>
                                                    <p className="text-pink">
                                                        Donec ullamcorper nulla non metus auctor fringilla.<code>text-pink</code>
                                                    </p>
                                                    <p className="text-muted">
                                                        Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.<code>text-muted</code>
                                                    </p>
                                                    <p className="text-primary">
                                                        Nullam id dolor id nibh ultricies vehicula ut id elit.<code>text-primary</code>
                                                    </p>
                                                    <p className="text-success">
                                                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.<code>text-success</code>
                                                    </p>
                                                    <p className="text-info">
                                                        Maecenas sed diam eget risus varius blandit sit amet non magna.<code>text-info</code>
                                                    </p>
                                                    <p className="text-warning">
                                                        Etiam porta sem malesuada magna mollis euismod.<code>text-warning</code>
                                                    </p>
                                                    <p className="text-danger">
                                                        Donec ullamcorper nulla non metus auctor fringilla.<code>text-danger</code>
                                                    </p>
                                                    <p className="text-dark">
                                                        Nullam id dolor id nibh ultricies vehicula ut id elit.<code>text-dark</code>
                                                    </p>
                                                    <p className="text-purple m-b-0">
                                                        Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.<code>text-purple</code>
                                                    </p>
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
                                            <h5>List Tag</h5>
                                            <span>lorem ipsum dolor sit amet, consectetur adipisicing elit</span>
                                        </div>
                                        <div className="card-block list-tag">
                                            <div className="row">
                                                <div className="col-sm-12 col-xl-4">
                                                    <h4 className="sub-title">UNORDERED</h4>
                                                    <ul>
                                                        <li>Lorem ipsum dolor sit amet</li>
                                                        <li>Consectetur adipiscing elit</li>
                                                        <li>Integer molestie lorem at massa</li>
                                                        <li>Facilisis in pretium nisl aliquet</li>
                                                        <li>Nulla volutpat aliquam velit
                                                                        <ul>
                                                                <li>Phasellus iaculis neque</li>
                                                                <li>Purus sodales ultricies</li>
                                                                <li>Vestibulum laoreet porttitor sem</li>
                                                                <li>Ac tristique libero volutpat at</li>
                                                            </ul>
                                                        </li>
                                                        <li>Faucibus porta lacus fringilla vel</li>
                                                        <li>Aenean sit amet erat nunc</li>
                                                        <li>Eget porttitor lorem</li>
                                                    </ul>
                                                </div>
                                                <div className="col-sm-12 col-xl-4">
                                                    <h4 className="sub-title">ORDERED</h4>
                                                    <ol>
                                                        <li> Lorem ipsum dolor sit amet</li>
                                                        <li>Consectetur adipiscing elit</li>
                                                        <li>Integer molestie lorem at massa</li>
                                                        <li>Facilisis in pretium nisl aliquet</li>
                                                        <li>Nulla volutpat aliquam velit
                                                                        <ol>
                                                                <li>Phasellus iaculis neque</li>
                                                                <li>Purus sodales ultricies</li>
                                                                <li>Vestibulum laoreet porttitor sem</li>
                                                                <li>Ac tristique libero volutpat at</li>
                                                            </ol>
                                                        </li>
                                                        <li>Faucibus porta lacus fringilla vel</li>
                                                        <li>Aenean sit amet erat nunc</li>
                                                        <li>Eget porttitor lorem</li>
                                                    </ol>
                                                </div>
                                                <div className="col-sm-12 col-xl-4">
                                                    <h4 className="sub-title">UNSTYLED</h4>
                                                    <div className="row col-sm-12">
                                                        <ul className="list-unstyled">
                                                            <li>Lorem ipsum dolor sit amet</li>
                                                            <li>Integer molestie lorem at massa</li>
                                                            <li>Phasellus iaculis neque</li>
                                                            <li>Faucibus porta lacus fringilla vel</li>
                                                            <li>Eget porttitor lorem</li>
                                                        </ul>
                                                    </div>
                                                    <div className="row col-sm-12">
                                                        <div className="inline-order-list">
                                                            <h4 className="sub-title">Inline</h4>
                                                            <p className="text-muted">
                                                                Place all list items on a single line with <code>
                                                                    display: inline-block;</code>
                                                            </p>
                                                        </div>
                                                        <div className="card-block">
                                                            <ul className="list-inline m-b-0">
                                                                <li className="list-inline-item">Lorem ipsum</li>
                                                                <li className="list-inline-item">Phasellus iaculis</li>
                                                                <li className="list-inline-item">Nulla volutpat</li>
                                                            </ul>
                                                        </div>
                                                    </div>
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
                                            <h5>Other</h5>
                                            <span>lorem ipsum dolor sit amet, consectetur adipisicing elit</span>
                                        </div>
                                        <div className="card-block list-tag">
                                            <div className="row">
                                                <div className="col-sm-12 col-xl-3">
                                                    <h4 className="sub-title">Fancy listing 1</h4>
                                                    <ul>
                                                        <li>
                                                            <i className="icofont icofont-bubble-right"></i> Lorem ipsum dolor sit amet
                                                                    </li>
                                                        <li>
                                                            <i className="icofont icofont-bubble-right"></i> Consectetur adipiscing elit
                                                                    </li>
                                                        <li>
                                                            <i className="icofont icofont-bubble-right"></i> Integer molestie lorem at massa
                                                                    </li>
                                                    </ul>
                                                </div>
                                                <div className="col-sm-12 col-xl-3">
                                                    <h4 className="sub-title">Fancy listing 2</h4>
                                                    <ul>
                                                        <li>
                                                            <i className="icofont icofont-double-right text-success"></i> Lorem ipsum dolor sit amet
                                                                    </li>
                                                        <li>
                                                            <i className="icofont icofont-double-right text-success"></i> Consectetur adipiscing elit
                                                                    </li>
                                                        <li>
                                                            <i className="icofont icofont-double-right text-success"></i> Integer molestie lorem at massa
                                                                    </li>
                                                    </ul>
                                                </div>
                                                <div className="col-sm-12 col-xl-3">
                                                    <h4 className="sub-title">Fancy listing 2</h4>
                                                    <ul>
                                                        <li>
                                                            <i className="icofont icofont-hand-right text-info"></i> Lorem ipsum dolor sit amet
                                                                    </li>
                                                        <li>
                                                            <i className="icofont icofont-hand-right text-info"></i> Consectetur adipiscing elit
                                                                    </li>
                                                        <li>
                                                            <i className="icofont icofont-hand-right text-info"></i> Integer molestie lorem at massa
                                                                    </li>
                                                    </ul>
                                                </div>
                                                <div className="col-sm-12 col-xl-3">
                                                    <h4 className="sub-title">Fancy listing 2</h4>
                                                    <ul>
                                                        <li>
                                                            <i className="icofont icofont-stylish-right text-danger"></i> Lorem ipsum dolor sit amet
                                                                    </li>
                                                        <li>
                                                            <i className="icofont icofont-stylish-right text-danger"></i> Consectetur adipiscing elit
                                                                    </li>
                                                        <li>
                                                            <i className="icofont icofont-stylish-right text-danger"></i> Integer molestie lorem at massa
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
                                            <h5>Other</h5>
                                            <span>lorem ipsum dolor sit amet, consectetur adipisicing elit</span>
                                        </div>
                                        <div className="card-block">
                                            <div className="row">
                                                <div className="col-sm-12 col-xl-6">
                                                    <h4 className="sub-title">BLOCKQUOTES</h4>
                                                    <p className="text-muted m-b-30">
                                                        Your awesome text goes here.
                                                                </p>
                                                    <blockquote className="blockquote">
                                                        <p className="m-b-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                                        <footer className="blockquote-footer">Someone famous in
                                                                        <cite title="Source Title">Source Title</cite>
                                                        </footer>
                                                    </blockquote>
                                                    <p className="text-muted m-b-15 m-t-20">
                                                        For a blockquote with right-aligned content.
                                                                </p>
                                                    <blockquote className="blockquote blockquote-reverse">
                                                        <p className="m-b-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                                        <footer className="blockquote-footer">Someone famous in
                                                                        <cite title="Source Title">Source Title</cite>
                                                        </footer>
                                                    </blockquote>
                                                </div>
                                                <div className="col-sm-12 col-xl-6">
                                                    <h4 className="sub-title">HORIZONTAL DESCRIPTION</h4>
                                                    <dl className="dl-horizontal row">
                                                        <dt className="col-sm-3">Description lists</dt>
                                                        <dd className="col-sm-9">A description list is perfect for defining terms.</dd>
                                                        <dt className="col-sm-3">Euismod</dt>
                                                        <dd className="col-sm-9">Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</dd>
                                                        <dd className="col-sm-12 col-sm-offset-3">Donec id elit non mi porta gravida at eget metus.</dd>
                                                        <dt className="col-sm-3">Malesuada porta</dt>
                                                        <dd className="col-sm-9">Etiam porta sem malesuada magna mollis euismod.</dd>
                                                        <dt className="col-sm-3 text-truncate">Truncated term is truncated</dt>
                                                        <dd className="col-sm-9">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</dd>
                                                    </dl>
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

export default Typography;