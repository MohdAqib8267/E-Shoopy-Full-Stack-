import React from 'react'
import { useLocation } from 'react-router-dom'
import Footer from "../Components/Footer";

const Success = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div >

 
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',height:'50vh',background:'#fcf5f5'}}>
      <h1 style={{marginBottom:'1rem'}}>Your Booking is successful </h1>
      <h3>Thank you so much</h3>
    </div>
    <Footer />
       </div>
  )
}

export default Success
