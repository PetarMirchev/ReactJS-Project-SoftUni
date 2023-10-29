import React from 'react'
import './footer.css';



const Footer1 = () => {
  return (


<footer>
        <div className="container">
            <div className="row">
                <div className="col-lg-4">
                    <div className="first-item">
                        <div className="logo">
                            <img src="images/white-logo.png" alt="hexashop ecommerce templatemo"/>
                        </div>
                        <ul>
                            <li>6400 Collins Ave, Plovdiv, Bulgaria</li>
                            <li>hexashop@company.com</li>
                            <li>010-020-0340</li>
                        </ul>
                    </div>
                </div>
            
                <div className="col-lg-4">
                    <h4>Useful Links</h4>
                    <ul>
                        <li><a href="#">Homepage</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Help</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>
                <div className="col-lg-4">
                    <h4>Help &amp; Information</h4>
                    <ul>
                        <li><a href="#">Help</a></li>
                        <li><a href="#">FAQ's</a></li>
                        <li><a href="#">Shipping</a></li>
                        <li><a href="#">Tracking ID</a></li>
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