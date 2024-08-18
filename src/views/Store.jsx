import {React, useState,useEffect, useContext} from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Products from '../components/Products'
import { PiLineVertical } from "react-icons/pi";
import Data from '../Data';
const Store = () => {
  const {categories} = useContext(Data)
  return (
    <main>
      <div className='flex flex-col lg:flex-row gap-6 font-extrabold justify-center items-center'>
        <h1 className='text-5xl tracking-widest font-[1000]'>store</h1>
        <PiLineVertical className='text-6xl hidden lg:block' />
        <div className='categories flex-wrap justify-center items-center flex gap-5'>
          <NavLink end className={({isActive})=>isActive ? 'bg-black storenavbutton text-white' : ' storenavbutton bg-[#F8F8F8] text-black'} to='/store'>All</NavLink>
           {categories.map(category=>(
            <NavLink className={({isActive})=>isActive ? 'storenavbutton bg-black text-white' : 'bg-[#F8F8F8] storenavbutton text-black'} key={category.id} to={`/store/${category.name}`}>{category.title}</NavLink>
          /*   '' */
        ))}
        </div>
      </div>
      <Outlet context={categories} />
    </main>
  )
}

export default Store
