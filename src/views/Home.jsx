import React, { useContext } from 'react'
import Slider from '../components/Slider'
import { NavLink } from 'react-router-dom';
import { TbTruckDelivery } from "react-icons/tb";
import { FaCreditCard } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import Newsletter from '../components/Newsletter';
import Categories from '../components/Categories';
import Question from '../components/Question';
import { Helmet, HelmetProvider } from 'react-helmet-async';


const Home = () => {

  return (
    <HelmetProvider>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="Home Page" />
        <meta name="keywords" content="Home Page" />

      </Helmet>
   <main className='w-full  gap-10 flex flex-col justify-center items-center'>
      <div className='w-[90vw] md:container overflow-hidden'>
      <Slider />
      </div>
    
      
      <section className="w-[95vw]  overflow-hidden  whitespace-nowrap">
        <span className="inline-flex gap-20 text-7xl opacity-30 font-extrabold align-middle marquee">
          <span className="flex gap-2"><MdOutlineSecurity />30-day guarantee</span>
          <span className='flex gap-2'><TbTruckDelivery /> Free delivery</span>
          <span className='flex gap-2'><FaCreditCard /> Secure payments</span>
        </span>
      </section>
      <div className='container justify-center items-center flex flex-col gap-5 md:gap-10'>
      <Categories/>
      <Newsletter />
      <Question />
        </div>
    
    </main>
    </HelmetProvider>
 
  )
}

export default Home
