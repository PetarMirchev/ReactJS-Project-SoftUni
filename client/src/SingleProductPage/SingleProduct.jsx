import React from 'react';
import './single.css';
import img1 from './product-01.jpg';
import img2 from './product-02.jpg';


const SingleProduct = () => {
  return (
    <div>



    <div className="page-heading" id="top">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="inner-content">
                        <h2>Single Product Page</h2>
                        <p className='banner-product-text'>Awesome &amp; Creative HTML CSS layout by TemplateMo</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
 



 
    <div className="section" id="product">
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                <div className="left-images">
                    <img src={img1} alt="product-img-1"/>
                    <img src={img2} alt="product-img-2"/>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="right-content">
                    <h4>New Green Jacket</h4>
                    <p className="price">$75.00</p>
                
                
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod kon tempor incididunt ut labore.</p>
                    <div className="quote">
                        <i className="fa fa-quote-left"></i><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiuski smod.</p>
                    </div>
                    <div className="quantity-content">
                        <div className="left-content">
                            <h6>No. of Orders</h6>
                        </div>
                        <div className="right-content">
                            <div className="quantity buttons_added">
                                <input type="button" value="-" className="minus"/>
                                <input type="number" step="1" min="1" max="" name="quantity" value="1" title="Qty" className="input-text qty text" size="4" pattern="" inputmode=""/>
                                <input type="button" value="+" className="plus"/>
                            </div>
                        </div>
                    </div>
                    <div className="total">
                        <h4>Total: $210.00</h4>
                        <div className="main-border-button"></div>
                    </div>
                    <button id='button-extra-1'><a href="/">Add To Cart</a></button>
                    <button id='button-extra-2'><a href="/">Like</a></button>
                </div>
            </div>
            </div>
        </div>
    </div>


   

    </div>
  )
}

export default SingleProduct;