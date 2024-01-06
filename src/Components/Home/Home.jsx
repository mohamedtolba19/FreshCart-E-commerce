import React, { useContext, useEffect, useState } from 'react'
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts'
import CategoriesSlider from '../CategoriesSlider/CategoriesSlider'
import MainSlider from '../MainSlider/MainSlider'
import { cartContext } from '../../Context/CartContext/CartContext'

export default function Home({changeHref}) {
  


  useEffect(()=>{
    changeHref((window.location.pathname))
  })
  return <>
  <MainSlider></MainSlider>
  <CategoriesSlider></CategoriesSlider>
 <FeaturedProducts></FeaturedProducts>
  </>
}
