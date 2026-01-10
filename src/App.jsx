import { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
'react-router-dom';

// PAGES
import Home from "./pages/Home.jsx";
import Shop from "./pages/Shop.jsx";
import Promo from "./pages/Promo";
import Loginpage from "./pages/Loginpage.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import DetailsProduct from "./pages/DetailsProduct.jsx";

// FOOTER
import Footer from './Components/Footer/Footer.jsx';
import Company from "./pages/Company.jsx";
import Product from "./pages/Product.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Signuppage from './pages/Signuppage.jsx';
import Cart from "./pages/Cart.jsx";
import PromoDetails from './Components/PromoDetails/PromoDetails.jsx';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/promo" element={<Promo />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path='/signup' element={<Signuppage/>}/>
        <Route path='/cart' element={<Cart/>}/>

        <Route path="/company" element={<Company/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/> 

        <Route path="/product/:id" element={<DetailsProduct/>}/>
        <Route path="/promo/:id" element={<PromoDetails/>}/>
      </Routes>
      <Footer/>
    </>

  );
}

export default App;
