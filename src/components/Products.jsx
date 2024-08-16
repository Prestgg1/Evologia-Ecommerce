import React, { useEffect, useState } from 'react'
import { useOutletContext, useParams,NavLink } from 'react-router-dom'
import Loader from './Loader'
import axios from 'axios'
import Product from './Product'

const Products = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const { category } = useParams()
  const fetchdata = async () => {
    setLoading(true)
    let response;
    if (category == undefined) {
      response = await axios.get('https://fakestoreapi.com/products').then(res => res.data)
    }
    else{
      response = await axios.get('https://fakestoreapi.com/products/category/' + category).then(res=>res.data)
    }
    let data = response
    setProducts(data)
    setLoading(false)
  }
  useEffect(() => {
    fetchdata();
  },[category])

  return (
    <>

    <div className={`${loading?'flex':'grid'} grid-cols-1 w-full justify-center items-center md:grid-cols-2 place-items-center lg:grid-cols-3 gap-4 mt-8`}>
      {loading ?  <Loader/>: products.map(product => (
            <NavLink key={product.id} to={`/store/${product.id}`}>
              <Product product={product} />
            </NavLink>
          ))}    

    </div>

    </>
  )
}

export default Products
