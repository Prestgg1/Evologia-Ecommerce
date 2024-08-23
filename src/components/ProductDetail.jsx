import axios from 'axios'
import React, { useContext, useEffect, useLayoutEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";
import Data from '../Data';
import Newsletter from './Newsletter';
const ProductDetail = () => {
  const [product, setProduct] = useState([])
  const [categories,setCategories] = useState([])
  const [category,setCategory] = useState({})
  const { id } = useParams()

async function fetchdata(){
   const responseProduct = await axios.get('https://dummyjson.com/products/' + id)
   const resposeCategories=  await axios.get('https://dummyjson.com/products/categories')
    setProduct(responseProduct.data)
    setCategories(resposeCategories.data)
    
  
}
useEffect(() => {
  fetchdata();
}, [id]);

useEffect(() => {
  console.log(product);
}, [product]);

useEffect(() => {
  setCategory(categories.find((cat)=>cat.slug===product.category))
  console.log(categories)
}, [categories]);

  return (
    <main className='w-full flex flex-col justify-start items-start'>
      
<div className="location flex justify-center mb-10 text-left items-center capitalize"> <Link className='hover:opacity-50 hover:border-b-2' to='/store'>store</Link> <IoIosArrowForward /> <Link to={`/store/${category?.slug}`}>{product.category}</Link> <IoIosArrowForward /> <Link className='font-bold' to={`/product-details/${id}`}>{product.title}</Link>  </div> 
      <div className="rounded-xl h-[50vh] detail justify-center items-center gap-5 px-10 bg-[#F8F8F8] flex-col flex lg:flex-row">
        <img src={product.thumbnail} className='w-1/2 rounded-2xl h-5/6' alt="" />
        <div className="details justify-around h-full text-left flex flex-col items-center">
          <h1 className='font-extrabold text-xl md:text-2xl'>{product.title}</h1>
          <hr className='w-full'/>
          <p>{product.description}</p>
          <hr className='w-full'/>
          
          <div className='flex bg-white  rounded-xl items-center justify-between w-11/12 px-4'><p className='text-2xl font-extrabold'>$ {product.price}</p>
          
            <button className="bg-black p-3 hover:opacity-45 h-2/3 flex justify-center items-center duration-300 rounded-md outline-none text-white font-bold">Add to cart</button></div>
        </div>
      </div>
    <Newsletter/>
    </main>
  )
}

export default ProductDetail
