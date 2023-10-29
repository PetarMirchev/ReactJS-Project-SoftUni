import React from 'react';
import './navbar.css';
import { Link } from "react-router-dom";


const Navbar1 = () => {
  return (
    <div >

            {/* <!-- ***** Header Area Start ***** --> */}
    <header className="header-area header-sticky">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <nav className="main-nav">
                        {/* <!-- ***** Logo Start ***** --> */}
                        <Link  to="/" className="logo">
                            <img src="images/logo.png" alt='logo'/>
                        </Link>
                        {/* <!-- ***** Logo End ***** -->
                        <!-- ***** Menu Start ***** --> */}
                        <ul className="nav">
                            <li ><Link to="/">Home</Link></li>
                            <li><Link to="/shop">Shop</Link></li>
                            <li ><Link to="/about">About</Link></li>
                            <li ><Link to="/contact">Contact</Link></li>
                            {/* <li className="submenu">
                                <a href="javascript:;">Pages</a>
                                <ul>
                                    <li><a href="about.html">About Us</a></li>
                                    <li><a href="products.html">Products</a></li>
                                    <li><a href="single-product.html">Single Product</a></li>
                                    <li><a href="contact.html">Contact Us</a></li>
                                </ul>
                            </li> */}
                            {/* <li className="submenu">
                                <a href="javascript:;">Features</a>
                                <ul>
                                    <li><a href="#">Features Page 1</a></li>
                                    <li><a href="#">Features Page 2</a></li>
                                    <li><a href="#">Features Page 3</a></li>
                                    <li><a rel="nofollow" href="https://templatemo.com/page/4" target="_blank">Template Page 4</a></li>
                                </ul>
                            </li> */}
                            <li ><Link to="/register">Register</Link></li>
                            <li ><Link to="/login">Login</Link></li>
                            <li ><Link to="/logout">Logout</Link></li>
                            <li ><Link to="/">My Account</Link></li>
                        </ul>        
    
                        {/* <!-- ***** Menu End ***** --> */}
                    </nav>
                </div>
            </div>
        </div>
    </header>
    {/* <!-- ***** Header Area End ***** --> */}


    </div>
  )
}

export default Navbar1