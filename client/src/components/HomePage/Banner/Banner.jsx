import React from 'react';
import './banner.css';
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>

        <div className="main-banner" id="top">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="left-content">
                            <div className="thumb">
                                <div className="inner-content">
                                    <h4>We Are Hexashop</h4>
                                    <span>Awesome products for You, friends & your Family!</span>
                                    <div className="main-border-button">
                                        <Link to="/shop">Purchase Now!</Link>
                                    </div>
                                </div>
                                <img src="images/left-banner-image.jpg" alt="welcome"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="right-content">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="right-first-image">
                                        <div className="thumb">
                                            <div className="inner-content">
                                                <h4>Women</h4>
                                                <span>Best Clothes For Women</span>
                                            </div>
                                            <div className="hover-content">
                                                <div className="inner">
                                                    <h4>Women</h4>
                                                    <p>Find the perfect outfit for the right moment now!.</p>
                                                    <div className="main-border-button">
                                                        <Link to="/shop">Discover More</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <img src="images/baner-right-image-01.jpg" alt="Women"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="right-first-image">
                                        <div className="thumb">
                                            <div className="inner-content">
                                                <h4>Men</h4>
                                                <span>Best Clothes For Men</span>
                                            </div>
                                            <div className="hover-content">
                                                <div className="inner">
                                                    <h4>Men</h4>
                                                    <p>Style and vision are a way of life for us!</p>
                                                    <div className="main-border-button">
                                                        <Link to="/shop">Discover More</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <img src="images/baner-right-image-02.jpg" alt="Men"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="right-first-image">
                                        <div className="thumb">
                                            <div className="inner-content">
                                                <h4>Kids</h4>
                                                <span>Best Clothes For Kids</span>
                                            </div>
                                            <div className="hover-content">
                                                <div className="inner">
                                                    <h4>Kids</h4>
                                                    <p>The perfect clothes for your precious child!</p>
                                                    <div className="main-border-button">
                                                        <Link to="/shop">Discover More</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <img src="images/baner-right-image-03.jpg" alt="Kids"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="right-first-image">
                                        <div className="thumb">
                                            <div className="inner-content">
                                                <h4>Accessories</h4>
                                                <span>Best Trend Accessories</span>
                                            </div>
                                            <div className="hover-content">
                                                <div className="inner">
                                                    <h4>Accessories</h4>
                                                    <p>watches, bracelets, locket, rings, brooches... we have everything you can think of!</p>
                                                    <div className="main-border-button">
                                                        <Link to="/shop">Discover More</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <img src="images/baner-right-image-04.jpg" alt="Accessories"/>
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
  )
}

export default Banner