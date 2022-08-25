import React, { useRef, useState } from "react";
import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide, } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styles from "../styles/Home.module.css";

// import required modules
import { EffectCoverflow, Pagination, Autoplay, Navigation } from "swiper";
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
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          autoplay={{ delay: 5000 }}
          navigation
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
          className="mySwiper mySwiper-button-prev mySwiper-button-next"
        >
          <SwiperSlide className="flex flex-col items-center mb-9">
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
