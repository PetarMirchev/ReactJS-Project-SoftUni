import Navbar from "./Navbar";
import Banner from "./Banner";
import { Product } from "./Product";
import { Filter } from "./Filter";
import SearchBar from "./SearchBar";
import { ProductList } from "./ProductList";
import { Footer } from "./Footer";


// import {Cart} from "./Cart";
// import Slider from "./Slider";

function App() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Product/>
      <Filter/>
      <SearchBar/>
      <ProductList/>
     
      <Footer/>
       {/* <Slider/> */}
      {/* <Cart/> */}
     </div>
  );
}

export default App;
