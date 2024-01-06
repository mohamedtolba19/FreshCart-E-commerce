import React from 'react'
import Navbar from './../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './../Footer/Footer';

export default function Layout({userData , deleteUserData , setSearch , href}) {
  return <>
<div className='vh-100'>
<Navbar href = {href} setSearch = {setSearch} userData = {userData} deleteUserData = {deleteUserData}/>
  <div className="container-fluid px-1 px-sm-2 px-md-4 px-lg-5 py-5">
    <Outlet></Outlet>
  </div>
  <Footer/>
</div>
  </>
}
