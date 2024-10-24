import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className='pt-[100px] w-full flex-col gap-[20px]  justify-center flex items-center'>
      <div className="border-b-2 w-full pb-[50px] border-slate-600 flex flex-col md:flex-row  justify-between">
        <div className="leftside gap-4 flex items-center flex-col md:flex-row  justify-center">
          <img src="/assets/indir.svg" alt="" className='w-[162px] h-40px' />
          <p className='text-[18px] text-wrap font-medium w-full text-center md:w-[300px]'>Launch your personalized marketplace effortlessly with Evologia's Template</p>
        </div>

        <div className='rightside justify-around mt-3 w-full md:gap-[120px] md:mt-0 md:w-auto md:justify-normal flex'>
          <ul>
            <li className='font-bold'>Menu</li>
            <li>Store</li>
            <li>About us</li>
            <li>FAQ</li>
            <li>Contact</li>
            <li>Home 1</li>
            <li>Home 2</li>
          </ul>
          <ul className='[&>li]:flex [&>li]:justify-start [&>li]:gap-2 [&>li]:items-center'>
            <li className='font-bold'>Social Media</li>
            <li><FaTwitter/>  Twiter</li>
            <li><FaInstagramSquare/> Instagram</li>
            <li><FaFacebook/> Facebook</li>
            <li><FaTelegram/> Telegram</li>
            <li><FaTiktok/> Tiktok</li>
          </ul>
        </div>
      </div>
      <div className="py-[20px] flex flex-col md:flex-row justify-between">
        <p>© Copyright 2024 | Made by Prestgg.</p>
        <div className="links">
          <Link to="/privacy-policy" className='hover:underline hover:opacity-50'>Privacy Policy </Link>
          /
          <Link to="/terms-and-conditions" className='hover:underline hover:opacity-50'> Terms & Conditions</Link>
        </div>

      </div>

    </footer>
  )
}

export default Footer
