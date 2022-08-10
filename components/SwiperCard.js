import React, { useRef, useState } from "react";
import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";
import Card from "./Card";

export default function App() {
  return (
    <>
      <div className="flex justify-center md:w-3/4">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          breakpoints={{
            1350: {
              slidesPerView: 2,
            },
          }}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="flex flex-col items-center ">
            <h2 className="text-3xl font-bold text-center mb-5">
            Company Visit
            </h2>
            <Card Content={<img src="/grab.jpg" width={700} />} />
          </SwiperSlide>
          <SwiperSlide className="flex flex-col items-center ">
            <h2 className="text-3xl font-bold text-center mb-5">
            Business Challenge
            </h2>
            <Card Content={<img src="/panenco.png" width={700} />} />
          </SwiperSlide>
          <SwiperSlide className="flex flex-col items-center ">
            <h2 className="text-3xl font-bold text-center mb-5">TEC Night</h2>
            <Card Content={<img src="/tecnight.jpg"  width={700}/>} />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
