import React from 'react';
import { Link } from "react-router-dom";




export default function Navbar() {



  return (
    <>
	
	{/* <!-- Header --> */}
	
		{/* <!-- Header desktop --> */}
		<div className="container-menu-desktop">
			{/* <!-- Topbar --> */}
			<div className="top-bar">
				<div className="content-topbar flex-sb-m h-full container">
					<div className="left-top-bar">
						Free shipping for standard order over $100
					</div>

					<div className="right-top-bar flex-w h-full">
					<Link to="/register" className="flex-c-m trans-04 p-lr-25">
							Register
					</Link>
					
					<Link to="/login" className="flex-c-m trans-04 p-lr-25">	
						 	Login
					</Link>	
					
					<Link to="/logout" className="flex-c-m trans-04 p-lr-25">
							Logout
					</Link>

					<Link to="/" className="flex-c-m trans-04 p-lr-25">
							My Account
					</Link>
						
					</div>
				</div>
			</div>


				<nav className="limiter-menu-desktop container">				
					{/* <!-- Logo desktop -->		 */}				
						<Link  to="/" className="logo"><img src="images/icons/logo-01.png" alt="IMG-LOGO"/></Link>

					
					{/* <!-- Menu desktop --> */}
					<div className="menu-desktop">
						<ul className="main-menu">
							<li className="active-menu">
							<Link to="/">Home</Link>
								{/* <ul className="sub-menu">
									<li><a href="index.html">Homepage 1</a></li>
									<li><a href="home-02.html">Homepage 2</a></li>
									<li><a href="home-03.html">Homepage 3</a></li>
								</ul> */}
							</li>

							<li>
								<Link to="/shop">Shop</Link>								
							</li>

							<li className="label1" data-label1="hot">
								<a href="shoping-cart.html">Features</a>
							</li>

							{/* <li>
								<a href="blog.html">Blog</a>
							</li> */}

							<li>
								<Link to="/about">About</Link>
							</li>

							<li>
								<Link to="/contact">Contact</Link>
							</li>
						</ul>
					</div>	

					{/* <!-- Icon header --> */}
					<div className="wrap-icon-header flex-w flex-r-m">
						
						<div className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 js-show-modal-search">		
							<i className="zmdi zmdi-search"></i>
						</div>

						<div className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti js-show-cart" data-notify="2">
							<i className="zmdi zmdi-shopping-cart"></i>
						</div>

						<a href={"/"} onClick={(e) => { e.preventDefault(); }} className="dis-block icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti" data-notify="0">
							<i className="zmdi zmdi-favorite-outline"></i>
						</a>
					</div>
				</nav>
			</div>	
    </>
  )
}
