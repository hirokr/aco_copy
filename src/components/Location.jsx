"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { locations } from "@/lib/locations";
import SliderButton from "./SliderButton";
import { useState } from "react";

const Location = () => {
  const [first, setFirst] = useState(0);
  return (
    <div className=' w-full overflow-hidden py-10 px-5 sm:px-14 lg:px-20 xl:px-44'>
      <div className='hidden lg:block bg-white'>
        <Swiper slidesPerView={4} spaceBetween={2} className='h-full w-full  '>
          {locations.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div
                  className={`${
                    index === first ? "" : "border-l-[1px] border-compo/30"
                  } h-52 p-10`}
                >
                  <h1 className='text-xl pb-2 font-thin text-accent'>
                    {item.name}
                  </h1>
                  <p className='text-base'>{item.address[0]}</p>
                  <p className='text-base'>{item.address[1]}</p>
                  <p className='text-base'>{item.address[2]}</p>
                  <p className='text-base py-2 opacity-50 hover:opacity-100'>
                    Google maps
                  </p>
                </div>
              </SwiperSlide>
            );
          })}
          <SliderButton
            className='relative'
            containerStyle='flex absolute top-[40%] w-full justify-between'
            buttonStyle=' z-10'
            iconStyle='w-8 h-8 bg-accent text-white'
            setIndex={setFirst}
            slider={first}
            length={locations.length}
          />
        </Swiper>
      </div>
      <div className='hidden sm:block py-10 lg:hidden px-8 '>
        <Swiper
          slidesPerView={2}
          spaceBetween={2}
          className='h-full w-full flex justify-center items-center '
        >
          {locations.map((item, index) => {
            return (
              <SwiperSlide className=' ' key={index}>
                <div
                  className={`${
                    index === first ? "" : "border-l-[1px] border-compo/30"
                  } h-52 p-8 `}
                >
                  <h1 className='text-xl pb-2 font-thin text-accent'>
                    {item.name}
                  </h1>
                  <p className='text-base '>{item.address[0]}</p>
                  <p className='text-base'>{item.address[1]}</p>
                  <p className='text-base'>{item.address[2]}</p>
                  <p className='text-base py-2 opacity-50 hover:opacity-100'>
                    Google maps
                  </p>
                </div>
              </SwiperSlide>
            );
          })}
          <SliderButton
            containerStyle='flex absolute top-[40%] w-full justify-between'
            buttonStyle=' z-10'
            iconStyle='w-8 h-8 bg-accent text-white'
            setIndex={setFirst}
            slider={first}
            length={locations.length}
          />
        </Swiper>
      </div>
      <div className='block sm:hidden px-8'>
        <Swiper
          slidesPerView={1}
          spaceBetween={2}
          className='h-full w-full   flex justify-center items-center'
        >
          {locations.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div
                  className={` p-8 px-10`}
                >
                  <h1 className='text-xl pb-2 font-thin text-accent'>
                    {item.name}
                  </h1>
                  <p className='text-base'>{item.address[0]}</p>
                  <p className='text-base'>{item.address[1]}</p>
                  <p className='text-base'>{item.address[2]}</p>
                  <p className='text-base py-2 opacity-50 hover:opacity-100'>
                    Google maps
                  </p>
                </div>
              </SwiperSlide>
            );
          })}
          <SliderButton
            className='relative'
            containerStyle='flex absolute top-[40%] w-full justify-between'
            buttonStyle=' z-10'
            iconStyle='w-8 h-8 bg-accent text-white'
            setIndex={setFirst}
            slider={first}
            length={locations.length}
          />
        </Swiper>
      </div>
    </div>
  );
};

export default Location;
