import { NavLink } from "react-router-dom"
import { useState } from "react"
const Header = () => {
  const [active, setActive] = useState(false)
  return (
    <header className={`h-[85px] w-full relative px-[3rem] py-[1rem] ${active ? "" : "border-b-[1px]"}  `}>
      <nav className={`h-full flex  items-center justify-between`}>
      <NavLink to="/"><img src="/assets/indir.svg" alt="" className="h-full w-[162px]" /></NavLink>
      <div className="links h-9 desktop hidden md:flex gap-[50px] text-[#1f1f1f] font-extrabold">
        <NavLink to="/store">Store</NavLink>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/faq">FAQ</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
      <div className={`burger ${active ? "active" : ""}`} onClick={() => setActive(!active)}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      </nav>
      <div className={`links flex flex-col justify-start bg-white duration-500 ease-in-out transition-all absolute top-full left-0 translate-y-[-5px] px-10 py-5  border-b-[1px] overflow-hidden md:hidden gap-[50px] text-[#1f1f1f] font-extrabold ${!active ? "h-0 opacity-0 pointer-events-none invisible" : "w-full h-[300px] "}`}>
        <NavLink to="/store">Store</NavLink>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/faq">FAQ</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </header>
  )
}

export default Header
