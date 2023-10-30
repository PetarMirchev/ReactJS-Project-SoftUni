import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { useState } from "react";

import Navbar1 from "./Navbar/Navbar1";
import Footer  from "./Footer/Footer1";
import ContactPage from "./ContactPage/ContactPage";
import AboutPage from "./AboutPage/AboutPage";
import Register from "./RegisterPage/Register";
import Login from "./LoginPage/Login";
import Page404 from "./Page404/Page404";
import HomePage from "./HomePage/HomePage";
import ShopPage from "./Shop/ShopPage";

import SingleProduct from "./SingleProductPage/SingleProduct";
import ProfilePage from "./ProfilePage/Profile";



//! user profile page --> TO DO //user staff - new template to be switched !
//! search component  to be implemented in 'Shop/Filter/Filter.jsx'
  

  function App() {
    //to be used context for user
    const [user, setUser] = useState(null);

  return (

    <BrowserRouter>

      <Navbar1/>
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="register" element={<Register/>} />

            <Route path="login" element={<Login/>} setUser={setUser} />
            <Route path="profile" element={<ProfilePage user={user}/>} />

            <Route path="logout" element={<HomePage/>} />
            <Route path="about" element={<AboutPage/>} />
            <Route path="contact" element={<ContactPage/>} /> 
            <Route path="shop" element={<ShopPage/>} />             
            <Route path="shop/:productId" element={<SingleProduct/>} />
            

            <Route path="*" element={<Page404 />} />   
        </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
