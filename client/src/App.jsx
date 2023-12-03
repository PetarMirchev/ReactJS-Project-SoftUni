import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";


import Navbar1 from "./components/Navbar/Navbar1";
import Footer  from "./components/Footer/Footer1";
import ContactPage from "./components/ContactPage/ContactPage";
import AboutPage from "./components/AboutPage/AboutPage";
import Register from "./components/RegisterPage/Register";
import Login from "./components/LoginPage/Login";
import Logout from "./components/Logout/Logout";
import Page404 from "./components/Page404/Page404";
import HomePage from "./components/HomePage/HomePage";
import ShopPage from "./components/Shop/ShopPage";

import SingleProduct from "./components/SingleProductPage/SingleProduct";
import ProfilePage from "./components/ProfilePage/Profile";
import CreateProductPage from "./components/CreateProductAdminPage/CreateProductPage";
import CartPage from "./components/CartPage/CartPage";

import { AuthProvider } from './context/AuthContext';
import AuthGuard from "./guards/AuthGuard";

//! search component  to be implemented in 'Shop/Filter/Filter.jsx'
  

  function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
          <Navbar1/>
        <Routes>
              <Route path="/" element={<HomePage/>} />

              <Route path="/register" element={<Register/>} />
              <Route path="/login" element={<Login/>}/>

              <Route element={<AuthGuard/>}>
                <Route path="/profile" element={<ProfilePage />} />
                <Route path='/logout' element={<Logout/>} />
                <Route path="/create" element={<CreateProductPage/>} />
              </Route>
              
              <Route path="/about" element={<AboutPage/>} />
              <Route path="/contact" element={<ContactPage/>} /> 
              <Route path="/shop" element={<ShopPage/>} />             
              <Route path="/shop/:productId" element={<SingleProduct/>} />
              
              <Route path="cart" element={<CartPage/>} />

              <Route path="*" element={<Page404 />} />   
        </Routes>
          <Footer/>
        </AuthProvider>
      </BrowserRouter>
  );
}

export default App;
