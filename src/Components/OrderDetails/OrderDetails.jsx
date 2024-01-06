import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { cartContext } from '../../Context/CartContext/CartContext'

export default function OrderDetails() {

    const [order, setOrder] = useState(null)
    let {getUserOrders} =  useContext(cartContext)
    let {index} =   useParams()
   async  function getOrders(){
    
  let id = await localStorage.getItem("id")
   let {data} = await getUserOrders(id);
   console.log()
   setOrder(data[index])
   }

   useEffect(()=>{
    getOrders();
   },[])

  
  return  <>
  {order?
  <div className='mt-5'>
    <h2>Order Deatails </h2>
    <h3 className='h6 text-main'>Total Ordrer Price : {order.totalOrderPrice}</h3>
    {order.isPaid ==  true?<span className='bg-main text-white px-5 py-2 btn d-block w-25'>Paid</span> :<span className='bg-main text-white px-5 py-2 btn  d-block w-25'>UnPaid</span> }
    {/* {order.cartItems.map((product , i)=>
    
    <Link to={`/productDetails/${product.product.id}`}>
    <div key={i} className='row my-2 py-4 cart-item align-items-center py-2 border-bottom'>
 
  <div className="col-md-1">
    <img src={product.product.imageCover} className='w-100' alt="" />
   </div>
   <div className="col-md-11 d-flex justify-content-between">
    <div>
      <h6>{product.product.title}</h6>
      <h6 className='text-main'>price : {product.price} EGP</h6>
      <span><i className='fas fa-star rating-color px-1'></i>
        {product.product.ratingsAverage}
        </span>
    </div>
    <div>
    <h6 className='text-main h5 '>count : {product.count}</h6>
    </div>
   </div>
  
    </div></Link>)} */}
      {order.cartItems.map((product , i)=><div key={i} className='row justify-content-around  my-2 px-0 py-4 cart-item align-items-center py-2 border-bottom'>
   <div className="col-lg-10 col-md-8 col-6 d-flex align-items-center  ">
   <img src={product.product.imageCover} className='cart-img mx-2' alt="" />
    <div >
      <h6>{product.product.title}</h6>
      <h6 className='text-main'>price : {product.price}</h6>
  
    </div>
 
   </div>
   <div className='col-lg-2 col-md-4 col-6'>
   <h6 className='text-main h5 '>count : {product.count}</h6>
     
    </div>
 


    </div>)}
  </div>:<div className='w-100 vh-100 d-flex justify-content-center align-items-center text-main fa-3x'><i className='fas fa-spinner fa-spin'></i></div>
  
  
  
  
  
  }
  </>
}
