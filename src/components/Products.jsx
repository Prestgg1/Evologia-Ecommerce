import Loader from './Loader';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useOutletContext, useParams, NavLink } from 'react-router-dom';
import Product from './Product';
import { HelmetProvider, Helmet } from 'react-helmet-async';

const Products = () => {
  const categories = useOutletContext();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cat, setCat] = useState(null); 
  const { category } = useParams();

  useEffect(() => {
    if (!categories) return;
    const foundCat = categories.find((singlecat) => singlecat.slug === category);
    setCat(foundCat);

    const fetchdata = async () => {
      setLoading(true);
      let response;
      if (!foundCat) {
        response = await axios.get('https://dummyjson.com/products').then(res => res.data.products);
      } else {
        response = await axios.get(foundCat.url).then(res => res.data.products);
      }
      setProducts(response);
      setLoading(false);
    };

    fetchdata();
  }, [category, categories]);

  if (!categories || loading) {
    return <Loader />;
  }

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>{cat ? cat.name : 'Products'}</title> 
        </Helmet>
      </HelmetProvider>

      <div className="grid grid-cols-1 w-full justify-center items-center md:grid-cols-2 place-items-center lg:grid-cols-3 gap-4 mt-8">
        {products.map(product => (
          <NavLink key={product.id} to={`/product-details/${product.id}`}>
            <Product product={product} />
          </NavLink>
        ))}
      </div>
    </>
  );
};

export default Products;
