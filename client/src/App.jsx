import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { useState } from "react";

import Navbar1 from "./components/Navbar/Navbar1";
import Footer  from "./components/Footer/Footer1";
import ContactPage from "./components/ContactPage/ContactPage";
import AboutPage from "./components/AboutPage/AboutPage";
import Register from "./components/RegisterPage/Register";
import Login from "./components/LoginPage/Login";
import Page404 from "./components/Page404/Page404";
import HomePage from "./components/HomePage/HomePage";
import ShopPage from "./components/Shop/ShopPage";

import SingleProduct from "./components/SingleProductPage/SingleProduct";
import ProfilePage from "./components/ProfilePage/Profile";
import CreateProductPage from "./components/CreateProductAdminPage/CreateProductPage";
import CartPage from "./components/CartPage/CartPage";

import { AuthProvider } from './context/AuthContext';

//! search component  to be implemented in 'Shop/Filter/Filter.jsx'
  

  function App() {
    //to be used context for user
    const [user, setUser] = useState(null);

  return (

 
    <BrowserRouter>
      <AuthProvider>
        <Navbar1/>
          <Routes>
              <Route path="/" element={<HomePage/>} />

              <Route path="register" element={<Register/>} />
              <Route path="login" element={<Login/>} setUser={setUser} />

              <Route path="profile" element={<ProfilePage user={user}/>} />
              <Route path="logout" element={<HomePage/>} />
              <Route path="create" element={<CreateProductPage/>} />

              <Route path="about" element={<AboutPage/>} />
              <Route path="contact" element={<ContactPage/>} /> 
              <Route path="shop" element={<ShopPage/>} />             
              <Route path="shop/:productId" element={<SingleProduct/>} />
              
              <Route path="cart" element={<CartPage/>} />

              <Route path="*" element={<Page404 />} />   
          </Routes>
        <Footer/>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
