import { NavLink } from "react-router-dom"
import { useEffect, useRef, useState } from "react"
import { FaShoppingBasket } from "react-icons/fa";
import useStore from "../store/product";

const Header = () => {
  const products = useStore((state) => state.products);
  const [active, setActive] = useState(false);
  const handle = useRef(null);
  const burger = useRef(null);

  const handleclick = (e) => {
    if (!handle.current.contains(e.target)) {
      setActive(false);
      document.removeEventListener("click", handleclick);
      console.log('clicked outside, closing menu');
    }
  };

  useEffect(() => {
    if (active) {
      document.addEventListener("click", handleclick);
    } else {
      document.removeEventListener("click", handleclick);
    }

    return () => {
      document.removeEventListener("click", handleclick);
    };
  }, [active]);
  return (
    <header ref={handle} className={`h-[85px] z-20 w-full relative px-[3rem] py-[1rem] ${active ? "" : "border-b-[1px]"}  `}>
      <nav className={`h-full flex  items-center justify-between`}>
      <NavLink to="/"><img src="/assets/indir.svg" alt="" className="h-full w-[162px]" /></NavLink>
      <div className="links h-9 desktop hidden md:flex gap-[50px] text-[#1f1f1f] font-extrabold">
        <NavLink to="/store">Store</NavLink>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/faq">FAQ</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/login" className="relative">
        <FaShoppingBasket className="text-3xl"/>
        <span className="absolute flex items-center justify-center bg-orange-500 rounded-full w-4 h-4 -top-2 text-white text-base right-0">{products.length}</span>
        </NavLink>
      </div>
      <div ref={burger} className={`burger ${active ? "active" : ""}`} onClick={() => {setActive(!active);console.log(active)}}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      </nav>
      <div className={`links flex flex-col z-20 justify-start bg-white duration-500 ease-in-out transition-all absolute top-full left-0 translate-y-[-5px] px-10 py-5  border-b-[1px] overflow-hidden md:hidden gap-[50px] text-[#1f1f1f] font-extrabold ${!active ? "h-0 opacity-0 pointer-events-none invisible" : "w-full h-[300px] "}`}>
        <NavLink to="/store" onClick={() => setActive(!active)}>Store</NavLink>
        <NavLink to="/about" onClick={() => setActive(!active)}>About Us</NavLink>
        <NavLink to="/faq" onClick={() => setActive(!active)}>FAQ</NavLink>
        <NavLink to="/contact" onClick={() => setActive(!active)}>Contact</NavLink>
      </div>
    </header>
  )
}
export default Header
