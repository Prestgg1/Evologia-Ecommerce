
import Footer from "./components/Footer";
import Header from "./components/Header"
import Products from "./components/Products";
import About from "./views/About";
import Contact from "./views/Contact";
import Faq from "./views/Faq";
import Home from "./views/Home";
import Store from "./views/Store"


import {
  Routes,Route,
  Outlet
} from "react-router-dom";

const Layout = () => {
  return (
    <>
    <Header/>
    <div className="flex items-center z-10 flex-col container px-14  mt-20">
      <Routes>
        <Route index path="/" element={<Home/>}/>
        <Route path="faq" element={<Faq/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="store" element={<Store />}>
          <Route path=":category" element={<Products />} />
          <Route path="" element={<Products />} />
        </Route>
      </Routes>
      <Outlet/>
    <Footer/>
    </div>
    </>
  )
}

export default Layout
