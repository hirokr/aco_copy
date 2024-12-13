"use client";

import { useSwiper } from "swiper/react";

import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

const SliderButton = ({ containerStyle, buttonStyle,iconStyle, setIndex, slider, length }) => {

  const swiper = useSwiper();
  return (
    <div className={containerStyle}>
      <button className={`${buttonStyle}`} onClick={() => {
        swiper.slidePrev()
        
        setIndex(()=>{
          return slider === 0 ? 0 : slider-1
        })
      }}>
        <PiCaretLeftBold  className={iconStyle}/>
      </button>
      <button className={`${buttonStyle}`} disabled={swiper.isEnd} onClick={() => {
        swiper.slideNext()
        swiper.isEnd ? undefined : setIndex(slider + 1)
      }}>
        <PiCaretRightBold className={iconStyle} />
      </button>
    </div>
  );
};

export default SliderButton;
