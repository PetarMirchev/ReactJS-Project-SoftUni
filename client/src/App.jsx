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
import Page404 from "./Page404/Page404";


// import {Cart} from "./Cart";  - new template to be switched !
// import Slider from "./Slider";

function App() {
  return (

    <BrowserRouter>
      <Navbar/>
        <Routes>

            {/* <TopThree/> */}
            {/* <ProductOverview/> */}
            {/* <Filter/> */}
            {/* <SearchBar/> */}
            {/* <ProductList/> */}     
          

              {/* <AboutPage/> */}
              {/* <ContactPage/> */}
              <Route path="/register" element={<Register/>} />

            {/* <Slider/> */}
            {/* <Cart/>  */}  

              <Route path="*" element={<Page404 />} />   
          </Routes>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;
