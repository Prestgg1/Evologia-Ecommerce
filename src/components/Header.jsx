import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <header className="h-[85px] px-[3rem] py-[1rem]  border-b-[1px]">
      <nav className="h-full flex items-center justify-between border-slate-600">
      <NavLink to="/"><img src="/assets/indir.svg" alt="" className="h-full w-[162px]" /></NavLink>
      <div className="links flex gap-[50px] text-[#1f1f1f] font-extrabold">
        <NavLink to="/store">Store</NavLink>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/faq">FAQ</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
      </nav>
       
    </header>
  )
}

export default Header
