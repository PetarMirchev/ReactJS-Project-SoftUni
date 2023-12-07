import React from 'react';
import './explore.css';

const ExploreProducts = () => {
  return (
    <div>


    <div className="section" id="explore">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="left-content">
                        <h2>Explore Our Products</h2>
                        <span>We all love getting new pieces for our wardrobe or home, but sometimes it's not easy on our wallets. 
                             </span>
                        <div className="quote">
                            <i className="fa fa-quote-left"></i><p>That's why we have amazing offers for everyone in the family to enjoy!</p>
                        </div>
                        <p>From women's clothing offers, and men's clothing offers, to kids' offers, there's something for everyone in your family at discounted prices. It doesn't stop there either we also have offers on homeware that allow you to freshen up your interiors without breaking the bank. Keep up to date with our latest offers and don't miss out!</p>
                        <div className="quote">
                            <i className="fa fa-quote-left"></i><p>Please also tell your friends about our great website. Thank you.</p>
                        </div>
                        <div className="main-border-button">
                            <a href="/shop">Discover More</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="right-content">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="leather">
                                    <h4>Accessories</h4>
                                    <p>Latest Collection</p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="first-image">
                                    <img src="images/explore-image-01.jpg" alt="Random1"/>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="second-image">
                                    <img src="images/explore-image-02.jpg" alt="Random2"/>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="types">
                                    <h4>Different Clothes</h4>
                                    <p>Over 304 Products</p>
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

export default ExploreProducts;