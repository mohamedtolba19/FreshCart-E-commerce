import React from 'react'
import Slider from "react-slick";
export default function MainSlider() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1 ,
    autoplay: true, 
      autoplaySpeed: 2000, 
      
  
  };
  return <>
  <Slider {...settings} className='mt-5 py-2 px-2'>
   <div className='slider'><img className='w-100'  src={require("../../assets/img/slider-image-1.jpeg")} alt="" /></div>
   <div className='slider'><img className='w-100'  src={require("../../assets/img/slider-image-2.jpeg")} alt="" /></div>
   <div className='slider'><img className='w-100'  src={require("../../assets/img/slider-image-3.jpeg")} alt="" /></div>
   <div className='slider'><img className='w-100'  src={require("../../assets/img/grocery-banner-2.jpeg")} alt="" /></div>
   <div className='slider'><img className='w-100'  src={require("../../assets/img/grocery-banner.png")} alt="" /></div>
   <div className='slider'><img className='w-100'  src={require("../../assets/img/slider-2.jpeg")} alt="" /></div>
    </Slider>
  
  </>
}
