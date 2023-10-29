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
                                    <span>Awesome, clean &amp; creative HTML5 Template</span>
                                    <div className="main-border-button">
                                        <Link to="/">Purchase Now!</Link>
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
                                                    <p>Lorem ipsum dolor sit amet, conservisii ctetur adipiscing elit incid.</p>
                                                    <div className="main-border-button">
                                                        <Link to="/">Discover More</Link>
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
                                                    <p>Lorem ipsum dolor sit amet, conservisii ctetur adipiscing elit incid.</p>
                                                    <div className="main-border-button">
                                                        <Link to="/">Discover More</Link>
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
                                                    <p>Lorem ipsum dolor sit amet, conservisii ctetur adipiscing elit incid.</p>
                                                    <div className="main-border-button">
                                                        <Link to="/">Discover More</Link>
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
                                                    <p>Lorem ipsum dolor sit amet, conservisii ctetur adipiscing elit incid.</p>
                                                    <div className="main-border-button">
                                                        <Link to="/">Discover More</Link>
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