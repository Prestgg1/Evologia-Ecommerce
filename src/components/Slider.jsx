import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import required modules
import { Autoplay, Navigation,Pagination } from 'swiper/modules';

export default function Slider() {
  return (
    <>
      <Swiper navigation={true} modules={[Pagination, Navigation,Autoplay]} autoplay={{
          delay: 2500,
          disableOnInteraction: false,}} className="mySwiper" loop={true} pagination={{clickable: true}}>
        <SwiperSlide className='video'>
          <video  autoPlay={true} loop={true} src="https://framerusercontent.com/modules/assets/5gUXbZNd9m8aCDu909tqY3v8~3lRSGA1dVv9QbNFa6PHyrOQftj0plqYdiVhYUvJQjEU.mp4" playsInline="" ></video>
          <div className='w-full text-center h-full flex  gap-4 md:gap-8 flex-col justify-center items-center'>
            <h1 className='text-3xl font-extrabold w-full md:w-1/2 md:text-5xl'>Fashion Meets Function: Evevate Your Style</h1>
            <p className='text-xl w-full md:w-1/2  md:text-2xl'>Timeless Elegance and Modern Tech Unite In Out Connected Watches</p>
            <button className='bg-white rounded-lg p-2 md:p-4 text-black font-extrabold '>Shop Now</button>
          </div>
          </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>

      </Swiper>
    </>
  );
}
