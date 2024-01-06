import axios from "axios";
import { createContext, useEffect, useState } from "react";

export let cartContext = createContext();

export function CartContextProvider(props){
  console.log(props)
 const [cartId, setCartId] = useState(null) ;
 const [cartOwner, setCartOwner] = useState(null) ;
 const [numOfCartItems, setNumOfCartItems] = useState(0) ;



 async function getUserCart(){
  let response  = await getLoggedUserCart();
  if(response?.data?.status == "success"){
    setCartOwner(response.data.data.cartOwner)
   setNumOfCartItems(response.data.numOfCartItems);
   setCartId(response.data.data._id);
  }
 }
useEffect(()=>{
  getUserCart();

},[])
  let headers = {
    token : localStorage.getItem("userToken")
  }

       
 

    function addToCart(productId){
        return axios.post(`https://route-ecommerce.onrender.com/api/v1/cart` , {
            productId
        },{
            headers
        }).then((response)=>response)
          .catch((error)=>error)
    }
    function getLoggedUserCart(){
      return  axios.get(`https://route-ecommerce.onrender.com/api/v1/cart` , {
            headers
        }).then((response)=> response)
        .catch((error)=> error)
    }

    function deleteItem(productId){
      
   return axios.delete(`https://route-ecommerce.onrender.com/api/v1/cart/${productId}`, {
        headers
      }).then((response)=>response)
      .catch((error)=>error);
    }

    function updateItem(productId,count){
      return axios.put(`https://route-ecommerce.onrender.com/api/v1/cart/${productId}`, {
        count
      },{
        headers
      }).then((response)=>response)
      .catch((error)=>error);
    }
    function payOnline(shippingAddress,cartId){
      console.log(cartId)
      return axios.post(`https://route-ecommerce.onrender.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:3000`, {
        shippingAddress
      },{
        headers
      }).then((response)=>response)
      .catch((error)=>error);
    }
    function cashOrder(shippingAddress,cartId){
      
      return axios.post(`https://route-ecommerce.onrender.com/api/v1/orders//${cartId}`, {
        shippingAddress
      },{
        headers
      }).then((response)=>response)
      .catch((error)=>error);
    }

    async function getUserOrders(id){
      return axios.get(`https://route-ecommerce.onrender.com/api/v1/orders/user/${id}`).then((response)=> response)
      .catch((error)=>error)
  
      
   }

    return <cartContext.Provider value={{ cartId , numOfCartItems , setNumOfCartItems, payOnline , addToCart , getLoggedUserCart  , deleteItem , updateItem , cashOrder,numOfCartItems ,getUserOrders,cartOwner}}>
{ props.children}
    </cartContext.Provider>
}