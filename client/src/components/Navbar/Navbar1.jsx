import React from 'react';
import './navbar.css';
import { Link } from "react-router-dom";
import logoImg from './logo.png';



const Navbar1 = () => {


    const logoutHandler = async (e) => {
        e.preventDefault(); //this line prevent refreshing the page after click
      

      }


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
                            <img src={logoImg} alt='logo'/>
                        </Link>
                        {/* <!-- ***** Logo End ***** -->
                        <!-- ***** Menu Start ***** --> */}
                        <ul className="nav">
                            <li ><Link to="/">Home</Link></li>
                            <li><Link to="/shop">Shop</Link></li>
                            <li ><Link to="/about">About</Link></li>
                            <li ><Link to="/contact">Contact</Link></li>
                            

                            {/* if is no "user" (log in) show dis div down (login/register buttons), if is "user" show his name */}
                                    <li ><Link to="/profile">My Account</Link></li>
                                                                    
                                    <li ><Link to="/register">Register</Link></li>
                                    <li ><Link to="/login">Login</Link></li>
                                    <li ><Link to="/logout" onClick={logoutHandler}>Logout</Link></li> 
                                    
                                    {/* for admin to add/create new items               */}
                                    <li ><Link to="/create">Create/Add</Link></li>

                                {/* user CART (chosen items from user!)             */}
                                    <li >
                                        <Link to="/cart">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-cart-fill" viewBox="0 0 16 16">
                                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                                            </svg>
                                        </Link>
                                    </li>
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