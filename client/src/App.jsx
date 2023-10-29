import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";


import Navbar1 from "./Navbar/Navbar1";
import Footer  from "./Footer/Footer1";

import ContactPage from "./ContactPage/ContactPage";
import AboutPage from "./AboutPage/AboutPage";
import Register from "./RegisterPage/Register";
import Login from "./LoginPage/Login";
import Page404 from "./Page404/Page404";
import HomePage from "./HomePage/HomePage";
import ShopPage from "./Shop/ShopPage";

 // all products items 
import {Cart} from "./Cart";  //user staff- new template to be switched !
// import Slider from "./Slider";

function App() {
  return (

    <BrowserRouter>

      <Navbar1/>
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/about" element={<AboutPage/>} />
            <Route path="/contact" element={<ContactPage/>} /> 
            <Route path="/shop" element={<ShopPage/>} /> 
            
            <Route path="/cart" element={<Cart/>} />


            <Route path="*" element={<Page404 />} />   
        </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
