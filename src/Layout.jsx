
import { useContext } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header"
import Products from "./components/Products";
import About from "./views/About";
import Contact from "./views/Contact";
import Faq from "./views/Faq";
import Home from "./views/Home";
import Store from "./views/Store"
import Data from "./Data";

import Policy from "./views/Policy";
import {
  Routes,Route,
  Outlet
} from "react-router-dom";
import Terms from "./views/Terms";
import ProductDetail from "./components/ProductDetail";

const Layout = () => {
  const {status} = useContext(Data)
  return (
    <>
    <Header/>
    <div className="flex items-center z-10 flex-col container mt-10 md:mt-20">
      {status}
      <Routes>
       
        <Route index path="/" element={<Home/>}/>
        <Route path="faq" exact element={<Faq/>}/>
        <Route path="terms-and-conditions" exact element={<Terms/>}/>
        <Route path="privacy-policy" exact element={<Policy/>}/>
        <Route path="about" exact element={<About/>}/>
        <Route path="contact" exact element={<Contact/>}/>
        <Route path="store" element={<Store />}>
          <Route path=":category" element={<Products />} />
          <Route path="" element={<Products />} />
        </Route>
        <Route path="/product-details/:id" element={<ProductDetail/>}/>
        <Route path="/basket" element={<ProductDetail/>}/>
      </Routes>
      <Outlet/>
    <Footer/>
    </div>
    </>
  )
}

export default Layout
