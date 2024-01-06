import React, { useContext, useState } from 'react'
import logo from "../../assets/img/freshcart-logo.svg"
import { Link } from 'react-router-dom'
import { cartContext } from '../../Context/CartContext/CartContext'
import { wishlistContext } from '../../Context/WishListContext/WishListContext';
export default function Navbar({userData , deleteUserData , href}) {
  let {numOfCartItems } = useContext(cartContext);
  let { numOfWishListItems} = useContext(wishlistContext);
  const [cliked, setCliked] = useState(null)

// if(href == "/"){
//   setCliked("home")
  // document.getElementById("#home").classList.add("active");
  // document.getElementById("#products").classList.remove("active");
  // document.getElementById("#categories").classList.remove("active");
  // document.getElementById("#wishlist").classList.remove("active");
// }
// else if(href == "/products"){
//   setCliked("products")
//   // document.getElementById("#products").classList.add("active");
//   // document.getElementById("#home").classList.remove("active");
//   // document.getElementById("#categories").classList.remove("active");
//   // document.getElementById("#wishlist").classList.remove("active");
// }
// else if(href == "/categories"){
//   setCliked("categories")
//   // document.getElementById("#categories").classList.add("active");
//   // document.getElementById("#products").classList.remove("active");
//   // document.getElementById("#home").classList.remove("active");
//   // document.getElementById("#wishlist").classList.remove("active");
// }
// else if(href == "/wishlist"){
//   setCliked("wishlist")
//   // document.getElementById("#wishlist").classList.add("active");
//   // document.getElementById("#products").classList.remove("active");
//   // document.getElementById("#home").classList.remove("active");
//   // document.getElementById("#categories").classList.remove("active");
// }
  return <>
  <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
      <a className="navbar-brand " to="/">
<img src={logo}alt="" />

      </a>
      <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
        aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="collapsibleNavId">
       {userData?<ul className="navbar-nav me-auto mt-2 mt-lg-0">
         {href=="/"? <li className="nav-item  " id='home'>
            <Link className="nav-link click" to="/" aria-current="page">Home <span className="visually-hidden">(current)</span></Link>
          </li>: <li className="nav-item " id='home'>
            <Link className="nav-link" to="/" aria-current="page">Home <span className="visually-hidden">(current)</span></Link>
          </li>}
    {href == "/products" ?     
          <li className="nav-item " id='products'>
            <Link className="nav-link click" to="products">Products</Link>
          </li>:    
          <li className="nav-item" id='products'>
            <Link className="nav-link" to="products">Products</Link>
          </li>}

{href == "/categories" ?  <li className="nav-item " id='categories'>
            <Link className="nav-link click" to="categories">Categories</Link>
          </li>: <li className="nav-item" id='categories'>
            <Link className="nav-link" to="categories">Categories</Link>
          </li>}
{href == "/allorders" ?  <li className="nav-item " id='categories'>
            <Link className="nav-link click" to="allorders">Orders</Link>
          </li>: <li className="nav-item" id='orders'>
            <Link className="nav-link" to="allorders">Orders</Link>
          </li>}
         
    
       
        </ul>:""}
        <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
      
          {userData?<>
         
          {href == "/cart" ?   <li className="nav-item d-flex align-items-center px-2">
            <Link className="nav-link position-relative px-3" to="/cart">
              <span className='badge text-white bg-main position-absolute end-0 top-0 '>{numOfCartItems}</span>
              <i className='fas fa-regular fa-shopping-cart'></i>
            </Link>
            <span className='ms-1 click'>Cart</span>
          </li>:  <li className="nav-item d-flex align-items-center px-2">
            <Link className="nav-link position-relative px-3" to="/cart">
              <span className='badge text-white bg-main position-absolute end-0 top-0 '>{numOfCartItems}</span>
              <i className='fas fa-regular fa-shopping-cart'></i>
            </Link>
            <span className='ms-1'>Cart</span>
          </li>}
     {href == "/wishlist" ?<li className="nav-item d-flex align-items-center px-2 " id='wishList'>
            <Link className="nav-link position-relative px-3" to="wishlist">
            <span className='badge text-white bg-danger text-white position-absolute end-0 top-0 '>{numOfWishListItems}</span>
            <i class="fa-solid fa-heart text-danger"></i>
            </Link>
            <span className='ms-1 click'>WishList</span>
          </li>
        : <li className="nav-item d-flex align-items-center px-2 " id='wishList'>
        <Link className="nav-link position-relative px-3" to="wishlist">
        <span className='badge text-white bg-danger text-white position-absolute end-0 top-0 '>{numOfWishListItems}</span>
        <i class="fa-solid fa-heart text-danger"></i>
        </Link>
        <span className='ms-1'>WishList</span>
      </li>
    }
          <li className="nav-item">
            <Link className="nav-link text-main " onClick={deleteUserData} >Logout</Link>
          </li>
          </>:<>
          <li className="nav-item">
            <Link className="nav-link  text-main" to="login">Login</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link  text-main" to="register">Register</Link>
          </li>
          </>}
        
         
       
        </ul>
  
      </div>
    </div>
  </nav>
  
  </>
}
