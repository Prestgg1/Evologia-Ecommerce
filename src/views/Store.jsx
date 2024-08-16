import {React, useState,useEffect} from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Products from '../components/Products'
import { PiLineVertical } from "react-icons/pi";

const Store = () => {
  
  const [categories,setCategories] = useState([])
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products/categories').then(res=>res.json()).then(data=>setCategories(data))
  },[])
  return (
    <main>
      <div className='flex flex-col md:flex-row gap-6 font-extrabold justify-center items-center'>
        <h1 className='text-5xl tracking-widest font-[1000]'>store</h1>
        <PiLineVertical className='text-6xl hidden md:block' />
        <div className='categories flex-wrap justify-center items-center flex gap-5'>
          <NavLink end className={({isActive})=>isActive ? 'bg-black storenavbutton text-white' : ' storenavbutton bg-[#F8F8F8] text-black'} to='/store'>All</NavLink>
           {categories.map(category=>(
            <NavLink className={({isActive})=>isActive ? 'storenavbutton bg-black text-white' : 'bg-[#F8F8F8] storenavbutton text-black'} key={category} to={`/store/${category}`}>{category}</NavLink>
          /*   '' */
        ))}
        </div>
      </div>
      <Outlet context={[categories]} />
    </main>
  )
}

export default Store
