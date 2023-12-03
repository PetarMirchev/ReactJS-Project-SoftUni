import React from 'react'
import './footer.css';
import { Link } from "react-router-dom";
import logoImg2 from './white-logo.png';



const Footer1 = () => {
  return (


<footer>
        <div className="container">
            <div className="row">
                <div className="col-lg-4">
                    <div className="first-item">
                        <div className="logo">
                            <img src={logoImg2} alt="hexashop ecommerce templatemo"/>
                        </div>
                        <ul id='company-text-info'>
                            <li>6400 Collins Ave, Plovdiv, Bulgaria</li>
                            <li>hexashop@company.com</li>
                            <li>010-020-0340</li>
                        </ul>
                    </div>
                </div>
            
                <div className="col-lg-4">
                    <h4>Useful Links</h4>
                    <ul>
                        <li><Link to="/">Homepage</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                        <li><Link to="/shop">Shop</Link></li>
                    </ul>
                </div>
                <div className="col-lg-4">
                    <h4>Help &amp; Information</h4>
                    <ul id='information-list-items'>
                        <li >Help</li>
                        <li>FAQ's</li>
                        <li>Shipping</li>
                        <li>Tracking ID</li>
                    </ul>
                </div>
                <div className="col-lg-12">
                    <div className="under-footer">
                        <p>Copyright © 2023 Petar Mirchev - SoftUni, Ltd. All Rights Reserved.
                        
                        <br/>Design: Petar Mirchev</p>
                        
                        <ul>
                            <li><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook"></i></a></li>
                            <li><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter"></i></a></li>
                            <li><a href="https://www.pinterest.com/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
</footer>
    
  )
}

export default Footer1;