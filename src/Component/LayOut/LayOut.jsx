import React, { useState } from "react"
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";


export default function LayOut() {
  
  return (
    <div>
    <Navbar/>
    <div className="pt-3">
    <Outlet></Outlet>
    </div>
    
    
    <Footer/>
    </div>
  )
}
