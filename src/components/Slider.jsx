import React, { useRef, useCallback, useState, useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Navigation, Pagination,EffectCreative } from 'swiper/modules';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Slider() {
  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  const [sliderproduct,setSliderproduct] = useState([])
  const navigator = useNavigate();
  async function fetchdata(){
    const response = await axios.get('https://dummyjson.com/products/search?q=iphone-x&limit=1')
    setSliderproduct(response.data.products)
  }
  useEffect(() => {
    fetchdata();
  },[])
  return (
    <>
      <Swiper ref={sliderRef} modules={[Pagination, Navigation, Autoplay,EffectCreative]} autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      speed={1000}
      grabCursor={true}
      effect={'creative'}
      creativeEffect={{
        prev: {
          shadow: true,
          translate: [0, 0, -400],
        },
        next: {
          translate: ['100%', 0, 0],
        },
      }}
      className="mySwiper  relative" loop={true} pagination={{ clickable: true }}>
        <SwiperSlide className='video'>
          <video autoPlay={true} loop={true} src="https://framerusercontent.com/modules/assets/5gUXbZNd9m8aCDu909tqY3v8~3lRSGA1dVv9QbNFa6PHyrOQftj0plqYdiVhYUvJQjEU.mp4" playsInline="" ></video>
          <div className='w-full text-center h-full flex  gap-4 md:gap-8 flex-col justify-center items-center'>
            <h1 className='text-3xl font-extrabold w-full md:w-1/2 md:text-5xl'>Fashion Meets Function: Evevate Your Style</h1>
            <p className='text-xl w-full md:w-1/2  md:text-2xl'>Timeless Elegance and Modern Tech Unite In Out Connected Watches</p>
            <button onClick={()=>navigator('/store')} className='bg-white duration-300 rounded-lg p-4 md:px-10 text-black font-extrabold hover:bg-opacity-50 '>Shop Now</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          
      {!sliderproduct.length? null : 
      
      <div className='flex flex-col md:flex-row  h-full w-full justify-center bg-[#F0F4F5] items-center rounded-3xl'>
      <div className="detail md:ml-20 flex justify-center gap-4 ml-0 md:justify-between md:h-1/2 h-full md:items-start items-center  flex-col">
      <h1 className='text-3xl  lg:text-6xl md:text-start text-center font-extrabold'>Start Your Online Journey</h1>
      <p className='text-xl px-5 md:px-0 md:text-start text-center'>Create your own marketplace for any products and sell it in just a few minutes</p>
      <button className='bg-black font-extrabold text-white rounded-3xl py-4 md:self-start px-4' onClick={()=>{
        navigator('/store')
      }}>Browse products</button>
      </div>
      <img className='h-2/3 w-1/2 hidden md:block' src='https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Airpods/1.png' alt="" />
      </div>}
        </SwiperSlide>
        <SwiperSlide>
        {!sliderproduct.length? null : 
        <div className='flex flex-row h-full w-full justify-center bg-[#F0F4F5] items-center rounded-3xl'>
      <div className="detail lg:ml-20 flex lg:gap-10 gap-4  items-center lg:items-start  flex-col">
        <h1 className='text-2xl px-5 lg:text-6xl lg:text-start text-center font-extrabold'>Whay's New? It's Time For the Future</h1>
      <p className='text-xl lg:text-start text-center'>{sliderproduct[0].description}</p>
      <div className='flex gap-4 justify-center items-center'>
        {/* Buttonlar */}
      <button className='bg-black font-extrabold text-white rounded-3xl py-4 self-start px-4' onClick={()=>{
        navigator('/product-details/'+sliderproduct[0].id)
      }}>Buy now - {sliderproduct[0].price}$ </button>
      <button className='font-extrabold text-black rounded-3xl lg:py-2 h-full flex justify-center items-center'>Learn More <IoIosArrowForward/> </button>
      </div>

      </div>
      <img className='h-2/3 w-1/2 hidden md:block' src={sliderproduct[0].thumbnail} alt="" />
      </div>}

        </SwiperSlide>
        <div className="swipper-nav  absolute bottom-5 right-5 z-20 gap-2 flex">
        <IoIosArrowBack  onClick={handlePrev} className='text-3xl  bg-black bg-opacity-50 text-white rounded-full py-2 text-center h-10 w-10  justify-center items-center flex cursor-pointer' />
          <IoIosArrowForward onClick={handleNext} className=' text-3xl bg-black  bg-opacity-50 text-white rounded-full py-2 text-center h-10 w-10  justify-center items-center flex cursor-pointer' />
          </div>

      </Swiper>
    </>
  );
}
