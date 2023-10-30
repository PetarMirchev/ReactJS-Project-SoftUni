import React from 'react'
import './product.css';

const ProductComp = () => {
  return (
<div className='buffer1'>



    <section className="section" id="products">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-heading">
                        <h2>Our Latest Products</h2>
                        <p id='product-span-info'>Check out all of our products.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-lg-4">
                    <div className="item">
                        <div className="thumb">
                            <div className="hover-content">
                                <ul>
                                    <li><a href="/shop/:productId"><i className="fa fa-eye"></i></a></li>
                                    <li><a href="/shop/:productId"><i className="fa fa-star"></i></a></li>
                                    <li><a href="/shop/:productId"><i className="fa fa-shopping-cart"></i></a></li>
                                </ul>
                            </div>
                            <img src="images/men-01.jpg" alt="one"/>
                        </div>
                        <div className="down-content">
                            <h4>ClassNameic Spring</h4>
                            <span>$120.00</span>
                            <ul className="stars">
                                <li><i className="fa fa-star"></i></li>
                                <li><i className="fa fa-star"></i></li>
                                <li><i className="fa fa-star"></i></li>
                                <li><i className="fa fa-star"></i></li>
                                <li><i className="fa fa-star"></i></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="item">
                        <div className="thumb">
                            <div className="hover-content">
                                <ul>
                                    <li><a href="single-product.html"><i className="fa fa-eye"></i></a></li>
                                    <li><a href="single-product.html"><i className="fa fa-star"></i></a></li>
                                    <li><a href="single-product.html"><i className="fa fa-shopping-cart"></i></a></li>
                                </ul>
                            </div>
                            <img src="images/men-02.jpg" alt="one1"/>
                        </div>
                        <div className="down-content">
                            <h4>Air Force 1 X</h4>
                            <span>$90.00</span>
                            <ul className="stars">
                                <li><i className="fa fa-star"></i></li>
                                <li><i className="fa fa-star"></i></li>
                                <li><i className="fa fa-star"></i></li>
                                <li><i className="fa fa-star"></i></li>
                                <li><i className="fa fa-star"></i></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="item">
                        <div className="thumb">
                            <div className="hover-content">
                                <ul>
                                    <li><a href="single-product.html"><i className="fa fa-eye"></i></a></li>
                                    <li><a href="single-product.html"><i className="fa fa-star"></i></a></li>
                                    <li><a href="single-product.html"><i className="fa fa-shopping-cart"></i></a></li>
                                </ul>
                            </div>
                            <img src="images/men-03.jpg" alt="one2"/>
                        </div>
                        <div className="down-content">
                            <h4>Love Nana ‘20</h4>
                            <span>$150.00</span>
                            <ul className="stars">
                                <li><i className="fa fa-star"></i></li>
                                <li><i className="fa fa-star"></i></li>
                                <li><i className="fa fa-star"></i></li>
                                <li><i className="fa fa-star"></i></li>
                                <li><i className="fa fa-star"></i></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="item">
                        <div className="thumb">
                            <div className="hover-content">
                                <ul>
                                    <li><a href="single-product.html"><i className="fa fa-eye"></i></a></li>
                                    <li><a href="single-product.html"><i className="fa fa-star"></i></a></li>
                                    <li><a href="single-product.html"><i className="fa fa-shopping-cart"></i></a></li>
                                </ul>
                            </div>
                            <img src="images/women-01.jpg" alt="one3"/>
                        </div>
                        <div className="down-content">
                            <h4>New Green Jacket</h4>
                            <span>$75.00</span>
                            <ul className="stars">
                                <li><i className="fa fa-star"></i></li>
                                <li><i className="fa fa-star"></i></li>
                                <li><i className="fa fa-star"></i></li>
                                <li><i className="fa fa-star"></i></li>
                                <li><i className="fa fa-star"></i></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="item">
                        <div className="thumb">
                            <div className="hover-content">
                                <ul>
                                    <li><a href="single-product.html"><i className="fa fa-eye"></i></a></li>
                                    <li><a href="single-product.html"><i className="fa fa-star"></i></a></li>
                                    <li><a href="single-product.html"><i className="fa fa-shopping-cart"></i></a></li>
                                </ul>
                            </div>
                            <img src="images/women-02.jpg" alt="one4"/>
                        </div>
                        <div className="down-content">
                            <h4>ClassNameic Dress</h4>
                            <span>$45.00</span>
                            <ul className="stars">
                                <li><i className="fa fa-star"></i></li>
                                <li><i className="fa fa-star"></i></li>
                                <li><i className="fa fa-star"></i></li>
                                <li><i className="fa fa-star"></i></li>
                                <li><i className="fa fa-star"></i></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="item">
                        <div className="thumb">
                            <div className="hover-content">
                                <ul>
                                    <li><a href="single-product.html"><i className="fa fa-eye"></i></a></li>
                                    <li><a href="single-product.html"><i className="fa fa-star"></i></a></li>
                                    <li><a href="single-product.html"><i className="fa fa-shopping-cart"></i></a></li>
                                </ul>
                            </div>
                            <img src="images/women-03.jpg" alt="one5"/>
                        </div>
                        <div className="down-content">
                            <h4>Spring Collection</h4>
                            <span>$130.00</span>
                            <ul className="stars">
                                <li><i className="fa fa-star"></i></li>
                                <li><i className="fa fa-star"></i></li>
                                <li><i className="fa fa-star"></i></li>
                                <li><i className="fa fa-star"></i></li>
                                <li><i className="fa fa-star"></i></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="item">
                        <div className="thumb">
                            <div className="hover-content">
                                <ul>
                                    <li><a href="single-product.html"><i className="fa fa-eye"></i></a></li>
                                    <li><a href="single-product.html"><i className="fa fa-star"></i></a></li>
                                    <li><a href="single-product.html"><i className="fa fa-shopping-cart"></i></a></li>
                                </ul>
                            </div>
                            <img src="images/kid-01.jpg" alt="one6"/>
                        </div>
                        <div className="down-content">
                            <h4>School Collection</h4>
                            <span>$80.00</span>
                            <ul className="stars">
                                <li><i className="fa fa-star"></i></li>
                                <li><i className="fa fa-star"></i></li>
                                <li><i className="fa fa-star"></i></li>
                                <li><i className="fa fa-star"></i></li>
                                <li><i className="fa fa-star"></i></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="item">
                        <div className="thumb">
                            <div className="hover-content">
                                <ul>
                                    <li><a href="single-product.html"><i className="fa fa-eye"></i></a></li>
                                    <li><a href="single-product.html"><i className="fa fa-star"></i></a></li>
                                    <li><a href="single-product.html"><i className="fa fa-shopping-cart"></i></a></li>
                                </ul>
                            </div>
                            <img src="images/kid-02.jpg" alt="one7"/>
                        </div>
                        <div className="down-content">
                            <h4>Summer Cap</h4>
                            <span>$12.00</span>
                            <ul className="stars">
                                <li><i className="fa fa-star"></i></li>
                                <li><i className="fa fa-star"></i></li>
                                <li><i className="fa fa-star"></i></li>
                                <li><i className="fa fa-star"></i></li>
                                <li><i className="fa fa-star"></i></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="item">
                        <div className="thumb">
                            <div className="hover-content">
                                <ul>
                                    <li><a href="single-product.html"><i className="fa fa-eye"></i></a></li>
                                    <li><a href="single-product.html"><i className="fa fa-star"></i></a></li>
                                    <li><a href="single-product.html"><i className="fa fa-shopping-cart"></i></a></li>
                                </ul>
                            </div>
                            <img src="images/kid-03.jpg" alt="one9"/>
                        </div>
                        <div className="down-content">
                            <h4>ClassNameic Kid</h4>
                            <span>$30.00</span>
                            <ul className="stars">
                                <li><i className="fa fa-star"></i></li>
                                <li><i className="fa fa-star"></i></li>
                                <li><i className="fa fa-star"></i></li>
                                <li><i className="fa fa-star"></i></li>
                                <li><i className="fa fa-star"></i></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="pagination">
                        <ul>
                            <li>
                                <a href="/">1</a>
                            </li>
                            <li className="active">
                                <a href="/">2</a>
                            </li>
                            <li>
                                <a href="/">3</a>
                            </li>
                            <li>
                                <a href="/">4</a>
                            </li>
                            <li>
                                <a href="/">-</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>




</div>
  )
}

export default ProductComp