import logo from './logo.svg';
import './App.css';
import toast, { Toaster } from 'react-hot-toast';
import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Cart from './Components/Cart/Cart';
import Categories from './Components/Categories/Categories';
import Products from './Components/Products/Products';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Home from './Components/Home/Home';
import { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';
import { CartContextProvider } from './Context/CartContext/CartContext';
import CategoryProducts from './Components/CategoryProducts/CategoryProducts';
import { WishListContextProvider } from './Context/WishListContext/WishListContext';
import WishList from './Components/WishList/WishList';
import CashOrder from './Components/CashOrder/CashOrder';
import OnlinePay from './Components/OnlinePay/OnlinePay';
import AllOrders from './Components/AllOrders/AllOrders';
import OrderDetails from './Components/OrderDetails/OrderDetails';




function App() {
  const [userData, setUserData] = useState(null)
  const [href, setHref] = useState(null);
 
  function changeHref(value){
    setHref(value)
  }
 let routers = createHashRouter([
  {path:"" , element:<Layout href = {href}  userData = {userData} deleteUserData = {deleteUserData}/> , children:[
    {index:true , element: <ProtectedRoute ><Home  changeHref={changeHref}/></ProtectedRoute>},
    {path:"cart" , element:<ProtectedRoute ><Cart  changeHref={changeHref}/> </ProtectedRoute>},
    {path:"categories" , element:<ProtectedRoute  ><Categories  changeHref={changeHref}/> </ProtectedRoute>},
    {path:"products" , element:<ProtectedRoute  ><Products userData = {userData}  changeHref={changeHref} /> </ProtectedRoute>},
    {path:"allorders" , element:<ProtectedRoute  ><AllOrders  changeHref={changeHref} saveUserData = {saveUserData} userData = {userData} /> </ProtectedRoute>},
    {path:"productDetails/:id" , element:<ProtectedRoute><ProductDetails/> </ProtectedRoute>},
    {path:"categoryproducts/:id" , element:<ProtectedRoute><CategoryProducts/> </ProtectedRoute>},
    {path:"orderdetails/:index" , element:<ProtectedRoute><OrderDetails/> </ProtectedRoute>},
    {path:"wishlist" , element:<ProtectedRoute><WishList  changeHref={changeHref}/></ProtectedRoute>},
    {path:"onlinepay" , element:<ProtectedRoute><OnlinePay/></ProtectedRoute>},
    {path:"cashorder" , element:<ProtectedRoute><CashOrder/></ProtectedRoute>},
    {path:"login" , element:<Login saveUserData = {saveUserData}/>},
    {path:"register" , element:<Register/>},
  ]}
 ])


 function saveUserData(){
  
  let encodedToken = localStorage.getItem("userToken");
   let decodedToken = jwtDecode(encodedToken) ;
   localStorage.setItem("id" , decodedToken.id)
   setUserData(decodedToken) ;
 }

useEffect(()=>{
  if(localStorage.getItem("userToken")){
    saveUserData();
   }
},[])

 function deleteUserData(){
  setUserData(null) ;
  localStorage.removeItem("userToken")
 }

 
  return <>
  <CartContextProvider userData = {userData}>
    <WishListContextProvider>
    <Toaster/>
    <RouterProvider router={routers}>

</RouterProvider>
</WishListContextProvider>
  </CartContextProvider>

  
  </> 
}

export default App;
