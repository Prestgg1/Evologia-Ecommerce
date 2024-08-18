import React, { useContext } from 'react'
import Slider from '../components/Slider'
import { NavLink } from 'react-router-dom';
import { TbTruckDelivery } from "react-icons/tb";
import { FaCreditCard } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import Newsletter from '../components/Newsletter';
import Categories from '../components/Categories';
import Question from '../components/Question';


const Home = () => {

  return (
    <main className='w-full gap-10 flex flex-col justify-center items-center'>
      
      <section></section>
      <Slider />
      <div className="spacer h-72"></div>
      <section className="w-full left-0  absolute overflow-hidden top-2/5 whitespace-nowrap">
        <span className="inline-flex gap-20 text-7xl opacity-30 font-extrabold align-middle marquee">
          <span className="flex gap-2"><MdOutlineSecurity />30-day guarantee</span>
          <span className='flex gap-2'><TbTruckDelivery /> Free delivery</span>
          <span className='flex gap-2'><FaCreditCard /> Secure payments</span>
        </span>
      </section>
      <Categories/>
      <Newsletter />
      <Question />
    </main>
  )
}

export default Home
