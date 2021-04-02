import React from 'react';

const MapGoogle = () => {
    return (
        <div className="pcoded-content">
            <div className="page-header">
                <div className="page-block">
                    <div className="row align-items-center">
                        <div className="col-md-8">
                            <div className="page-header-title">
                                <h5 className="m-b-10">Google Map</h5>
                                <p className="m-b-0">Lorem Ipsum is simply dummy text of the printing</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <a href="index.html"> <i className="fa fa-home"></i> </a>
                                </li>
                                <li className="breadcrumb-item"><a href="#!">Maps</a>
                                </li>
                                <li className="breadcrumb-item"><a href="#!">Google Maps</a>
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
                                <div className="col-lg-12 col-xl-6">
                                    <div className="card">
                                        <div className="card-header">
                                            <h5>Basic</h5>
                                            <span>Map shows places around the world</span>
                                        </div>
                                        <div className="card-block">
                                            <div id="basic-map" className="set-map"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-xl-6">
                                    <div className="card">
                                        <div className="card-header">
                                            <h5>Markers</h5>
                                            <span>Maps shows <code>location</code> of the place</span>
                                        </div>
                                        <div className="card-block">
                                            <div id="markers-map" className="set-map"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12 col-xl-6">
                                    <div className="card">
                                        <div className="card-header">
                                            <h5>Overlay</h5>
                                            <span>Map shows places around the world</span>
                                        </div>
                                        <div className="card-block">
                                            <div id="mapOverlay" className="set-map"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-xl-6">
                                    <div className="card">
                                        <div className="card-header">
                                            <h5>Geo-Coding</h5>
                                            <span>Search your location</span>
                                        </div>
                                        <div className="card-block">
                                            <form method="post" id="geocoding_form">
                                                <div className="input-group input-group-button">
                                                    <input type="text" id="address" className="form-control" placeholder="Write your place" />
                                                    <span className="input-group-addon" id="basic-addon1">
                                                        <button className="btn btn-primary">Search Location</button>
                                                    </span>
                                                </div>
                                            </form>
                                            <div id="mapGeo" className="set-map"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12 col-xl-6">
                                    <div className="card">
                                        <div className="card-header">
                                            <h5>Street View</h5>
                                            <span>Map shows view of street</span>
                                        </div>
                                        <div className="card-block">
                                            <div id="mapStreet" className="set-map"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-xl-6">
                                    <div className="card">
                                        <div className="card-header">
                                            <h5>Map Types</h5>
                                            <span>Select your <code>map-types</code> to see differant views</span>
                                        </div>
                                        <div className="card-block">
                                            <div id="mapTypes" className="set-map"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12 col-xl-6">
                                    <div className="card">
                                        <div className="card-header">
                                            <h5>GeoRSS Layers</h5>
                                            <span>Shows <code>RSS</code> location</span>
                                        </div>
                                        <div className="card-block">
                                            <div id="georssmap" className="set-map"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-xl-6">
                                    <div className="card">
                                        <div className="card-header">
                                            <h5>Marker Clustering</h5>
                                            <span>Multiple markers show differant location</span>
                                        </div>
                                        <div className="card-block">
                                            <div id="map" className="set-map"></div>
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

export default MapGoogle;