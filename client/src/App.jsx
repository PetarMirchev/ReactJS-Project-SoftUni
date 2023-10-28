import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import Navbar from "./Navbar/Navbar";
import { Footer } from "./Footer/Footer";
import ContactPage from "./ContactPage/ContactPage";
import AboutPage from "./AboutPage/AboutPage";
import Register from "./RegisterPage/Register";
import Login from "./LoginPage/Login";
import Page404 from "./Page404/Page404";
import HomePage from "./HomePage/HomePage";

import SearchBar from "./SearchBar/SearchBar";
import { ProductOverview } from "./ProductOverview";
import { Filter } from "./Filter/Filter";


import { ProductList } from "./ProductList/ProductList"; // all products items 
import {Cart} from "./Cart";  //user staff- new template to be switched !
// import Slider from "./Slider";

function App() {
  return (

    <BrowserRouter>
      <Navbar/> 
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/about" element={<AboutPage/>} />
            <Route path="/contact" element={<ContactPage/>} /> 
            
            
            <Route path="/cart" element={<Cart/>} />


            <Route path="*" element={<Page404 />} />   
        </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
