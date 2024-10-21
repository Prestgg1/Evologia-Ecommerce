import React from 'react'
import { FaStar } from "react-icons/fa";

const Comment = ({comment,rating,reviewerName}) => {
  return (
    <div className=' flex flex-1 flex-col gap-5 rounded-2xl p-4  bg-[#F8F8F8]'>
      <div className='flex flex-col md:flex-row justify-between gap-5 md:gap-0'>
      <h1 className='text-2xl font-extrabold'>{reviewerName}</h1>
      <div className='flex gap-1'>    {[...Array(rating)].map((star) => {
        return <FaStar className='text-2xl text-yellow-300' />
      })}</div>
      </div>
      <p className='text-lg'> {comment}</p>
     
    </div>
  )
}

export default Comment
