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