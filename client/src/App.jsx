import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import Navbar from "./Navbar/Navbar";
import TopThree from "./TopThree/TopThree";
import { ProductOverview } from "./ProductOverview";
import { Filter } from "./Filter/Filter";
import SearchBar from "./SearchBar/SearchBar";
import { ProductList } from "./ProductList/ProductList";
import { Footer } from "./Footer/Footer";

import ContactPage from "./ContactPage/ContactPage";
import AboutPage from "./AboutPage/AboutPage";
import Register from "./RegisterPage/Register";
import Login from "./LoginPage/Login";
import Page404 from "./Page404/Page404";



// import {Cart} from "./Cart";  - new template to be switched !
// import Slider from "./Slider";

function App() {
  return (

    <BrowserRouter>
      <Navbar/> 
        <Routes>
            <Route path="/" element={<TopThree/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/about" element={<AboutPage/>} />
            <Route path="/contact" element={<ContactPage/>} />
            
            <Route path="/login" element={<Login/>} />

            <Route path="*" element={<Page404 />} />   
        </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
