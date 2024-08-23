/* import React, { useEffect, useState } from 'react'
import { useOutletContext, useParams,NavLink } from 'react-router-dom'
import Loader from './Loader'
import axios from 'axios'
import Product from './Product'

const Products = () => {
  const categories = useOutletContext()
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const { category } = useParams()
  let cat = categories.find((cat)=>cat.name==category)
  const fetchdata = async () => {
    setLoading(true)
    let response;
    if (cat == undefined) {
      response = await axios.get('https://dummyjson.com/products').then(res => res.data)
    }
    else{
      response = await axios.get('https://dummyjson.com/products' + cat.title).then(res=>res.data)
    }
    let data = response
    setProducts(data)
    console.log(products)
    setLoading(false)
  }
  useEffect(() => {
    fetchdata();
  },[category])

  return (
    <>

    <div className={`${loading?'flex':'grid'} grid-cols-1 w-full justify-center items-center md:grid-cols-2 place-items-center lg:grid-cols-3 gap-4 mt-8`}>
      {loading ?  <Loader/>: products.map(product => (
            <NavLink key={product.id} to={`/product-details/${product.id}`}>
              <Product product={product} />
            </NavLink>
          ))}    

    </div>

    </>
  )
}

export default Products
 */
import Loader from './Loader';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useOutletContext, useParams,NavLink } from 'react-router-dom';
import Product from './Product';
const Products = () => {
  const categories = useOutletContext()
  console.log(categories)
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const { category } = useParams()
  let cat = categories.find((cat)=>cat.slug==category)
  const fetchdata = async () => {
    setLoading(true)
  
    
    let response;
    if (cat == undefined) {
      response = await axios.get('https://dummyjson.com/products').then(res => res.data.products)


    }
    else{
      response = await axios.get(cat.url).then(res=>res.data.products)
    }
    let data = response
    setProducts(data)
    console.log(products)
    setLoading(false)
  }
  useEffect(() => {
    fetchdata();
  },[category])
  return (
    <>
     <div className={`${loading?'flex':'grid'} grid-cols-1 w-full justify-center items-center md:grid-cols-2 place-items-center lg:grid-cols-3 gap-4 mt-8`}>
      {loading ?  <Loader/>: products.map(product => (
            <NavLink key={product.id} to={`/product-details/${product.id}`}>
              <Product product={product} />
            </NavLink>
          ))}    

    </div>
    
    </>
  )
}

export default Products
