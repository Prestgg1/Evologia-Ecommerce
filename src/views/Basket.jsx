import React from 'react'
import useStore from '../store/product';
const Basket = () => {
  const addToCard = useStore((state) => state.addToCard)
  const products = useStore((state) => state.products);
  return (
    <main className='min-h-[43vh] container'>
      <h1 className='text-6xl font-extrabold mb-10 w-full text-center'>Basket</h1>
      <div className='w-full flex flex-col gap-10 justify-center items-center'>
        {products.map((product,index) => (
          <div key={index} className='w-full flex  justify-between items-center'>
            <h1 className='text-3xl font-bold'>{product.title}</h1>
           <div className='flex justify-center items-center gap-2'>
            <button className='bg-red-700 p-4 hover:opacity-45 h-full flex justify-center items-center duration-300 rounded-2xl outline-none text-white font-bold' onClick={()=>{
               if (products[index].quantity > 1) {
                products[index] = { ...products[index], quantity: products[index].quantity - 1 };
                addToCard([...products]);
              }
              else{
                products.splice(index, 1);
                addToCard([...products]);
              }
            }}>-</button>
            <h1 className='text-3xl font-bold'>{product.quantity}</h1>
            <button className='bg-green-700 p-4 hover:opacity-45 h-full flex justify-center items-center duration-300 rounded-2xl outline-none text-white font-bold' onClick={()=>{
               products[index] = { ...products[index], quantity: products[index].quantity + 1 }; addToCard([...products]);
            }}>+</button>
           </div>
          </div>
        ))}
        {products.length ? <><h1 className='text-3xl font-bold'>Total: {Math.round(products.reduce((a, b) => a + b.price * b.quantity, 0))}</h1>
        <button className='bg-black p-4 hover:opacity-45 h-full flex justify-center items-center duration-300 rounded-2xl outline-none text-white font-bold'>Pay</button></> :<p className="text-2xl">There is not anything in basket</p>}
      
      </div>
 
    </main>
  )
}

export default Basket
