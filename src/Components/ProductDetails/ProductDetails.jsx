import axios from 'axios';
import React, { useState  , useEffect} from 'react'
import { useParams } from 'react-router-dom';
import Slider from "react-slick";


export default function ProductDetails() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1 
   
  };
  const [productInfo, setProductInfo] = useState(null) ; 
  let {id} = useParams();
  console.log(id)

  function getProductDetails(){
    axios.get(`https://route-ecommerce.onrender.com/api/v1/products/${id}`).then(({data})=>{
      setProductInfo(data.data);
console.log(data.data)
    })
  }

  useEffect(()=>{
    getProductDetails()
  },[])

  return <>
 {productInfo?<div className = "row p-5">
<div className="col-lg-4  col-md-5 col-sm-6 col-12">
{productInfo?.images?<Slider {...settings}>
{productInfo.images.map((image,i)=>
 <img src={image} alt="" />
 
 
)}
    </Slider>:<div className='w-100 h-100 d-flex justify-content-center align-items-center text-main fa-3x'><i className='fas fa-spinner fa-spin'></i></div>}
</div>
<div className="col-lg-8  col-md-7 col-sm-6 col-12 d-flex align-items-center px-5 mt-lg-0 mt-md-0 mt-sm-0 mt-5 ">
  <div>
  <h2>{productInfo.title}</h2>
  <p>{productInfo.description}</p>
  <div className='d-flex justify-content-between'>
        <span className='text-muted'>{productInfo.price} EGP</span>
        <span><i className='fas fa-star rating-color'></i>
        {productInfo.ratingsAverage}
        </span>
    </div>
    <button className='btn bg-main text-white w-100 my-2'>Add to Cart + </button>
  </div>
</div>
 </div>:<div className='w-100 vh-100 d-flex justify-content-center align-items-center text-main fa-3x'><i className='fas fa-spinner fa-spin'></i></div>}
  
  
  </>
  
}