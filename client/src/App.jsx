import Navbar from "./Navbar/Navbar";
import TopThree from "./TopThree/TopThree";
import { ProductOverview } from "./ProductOverview";
import { Filter } from "./Filter/Filter";
import SearchBar from "./SearchBar/SearchBar";
import { ProductList } from "./ProductList/ProductList";
import { Footer } from "./Footer/Footer";

import ContactPage from "./ContactPage/ContactPage";
import AboutPage from "./AboutPage/AboutPage";


// import {Cart} from "./Cart";  - new template to be switched !
// import Slider from "./Slider";

function App() {
  return (
    <div>
      {/* <Navbar/> */}
      {/* <TopThree/> */}
      {/* <ProductOverview/> */}
      {/* <Filter/> */}
      {/* <SearchBar/> */}
      {/* <ProductList/> */}     
      {/* <Footer/> */}

        <AboutPage/>
        <ContactPage/>


       {/* <Slider/> */}
      {/* <Cart/>  */}
     </div>
  );
}

export default App;
