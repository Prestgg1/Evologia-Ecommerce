import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='pt-[100px] w-full flex-col gap-[20px]  justify-center flex items-center'>
      <div className="container border-b-2 pb-[50px] border-slate-600 flex  justify-between">
        <div className="leftside gap-4 flex flex-col  justify-center">
          <img src="indir.svg" alt="" className='w-[162px] h-40px' />
          <p className='text-[18px] font-medium w-[500px]'>Launch your personalized marketplace effortlessly with Evologia's Template</p>
        </div>

        <div className='rightside gap-[120px] flex'>
          <ul>
            <li className='font-bold'>Menu</li>
            <li>Store</li>
            <li>About us</li>
            <li>FAQ</li>
            <li>Contact</li>
            <li>Home 1</li>
            <li>Home 2</li>
          </ul>
          <ul>
            <li className='font-bold'>Social Media</li>
            <li>Twiter</li>
            <li>Instagram</li>
            <li>Facebook</li>
            <li>Telegram</li>
            <li>Tiktok</li>
          </ul>
        </div>
      </div>
      <div className="container py-[20px] flex justify-between">
        <p>© Copyright 2024 | Made by Prestgg.</p>
        <div className="links">
          <Link to="/terms-and-conditions" className='hover:underline hover:opacity-50'>Privacy Policy </Link>
          /
          <Link to="/privacy-policy" className='hover:underline hover:opacity-50'> Terms & Conditions</Link>
        </div>

      </div>

    </footer>
  )
}

export default Footer
