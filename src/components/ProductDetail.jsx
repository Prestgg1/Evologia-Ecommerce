import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";
import Data from '../Data';
import Newsletter from './Newsletter';
import Testimonials from './Testimonials';
const ProductDetail = () => {
  const [product, setProduct] = useState([])
  const [categories,setCategories] = useState([])
  const [category,setCategory] = useState({})
  const { id } = useParams()

async function fetchdata(){
   const responseProduct = await axios.get('https://dummyjson.com/product/' + id)
   const resposeCategories=  await axios.get('https://dummyjson.com/products/categories')
    setProduct(responseProduct.data)
    setCategories(resposeCategories.data)
}
useEffect(() => {
  fetchdata();
}, [id]);

useEffect(() => {
  console.log(product.reviews);
}, [product]);

useEffect(() => {
  setCategory(categories.find((cat)=>cat.slug===product.category))
  console.log(categories)
}, [categories]);

  return (
    <main className='w-full flex flex-col justify-start items-start'>
<div className="location flex justify-center mb-10 text-left items-center capitalize"> <Link className='hover:opacity-50 hover:border-b-2' to='/store'>store</Link> <IoIosArrowForward /> <Link to={`/store/${category?.slug}`}>{product.category}</Link> <IoIosArrowForward /> <Link className='font-bold' to={`/product-details/${id}`}>{product.title}</Link>  </div> 
      <div className="rounded-3xl  h-full detail justify-stretch items-stretch gap-5 p-4 md:p-5 bg-[#F8F8F8] flex-col flex lg:flex-row">
        <div className='bg-white w-full md:flex-[2] flex justify-center items-center h-full  rounded-3xl'>
        <img src={product.thumbnail} className='w-full h-full' alt="" />
        </div>
     
      <div className='md:flex-[3]'>
      <div className="details justify-around gap-5 md:gap-0 h-full text-left flex flex-col items-center">
          <h1 className='font-extrabold text-xl md:text-2xl'>{product.title}</h1>
          <hr className='w-full'/>
          <p>{product.description}</p>
          <hr className='w-full'/>
          <div className='flex bg-white rounded-2xl items-center justify-between w-full p-3'><p className='text-4xl font-extrabold'>$ {product.price}</p>
          
            <button className="bg-black p-4 hover:opacity-45 h-full flex justify-center items-center duration-300 rounded-2xl outline-none text-white font-bold">Add to cart</button></div>
        </div>
      </div>
      
      </div>
      {product.reviews?.length>0? <Testimonials rewiews={product.reviews} /> : null}
    
    <Newsletter/>
    </main>
  )
}

export default ProductDetail
