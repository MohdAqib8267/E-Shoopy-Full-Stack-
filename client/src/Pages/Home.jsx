
import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import Announcement from '../Components/Announcement'
import Slider from '../Components/Slider'
import Categories from '../Components/Categories'
import Products from '../Components/Products'
import NewsLetter from '../Components/NewsLetter'
import Footer from '../Components/Footer'
import Button from '@mui/material/Button';
import axios from 'axios'
import { Link } from 'react-router-dom';

const Home = () => {
  const [fetchAllProd,setFetchAllProd]=useState(0);
  const fetchProducts = async(req,res)=>{
    // try {
    //   const data = await axios.get(``)
    // } catch (error) {
    //   res.status(500).json(error);
    // }
    setFetchAllProd((prev)=>prev+1);


  }
  return (
    <div className='Home'>
      <Navbar />
      <Announcement/>
      <Slider />
      <Categories />
      <div style={{display:"flex", justifyContent:"center"}}>
        <Link to={`/products/all`}>
        <Button variant="contained" onClick={fetchProducts}>View More</Button>
        </Link>
      </div>
     
      <Products fetchAllProd={fetchAllProd}/>
      <NewsLetter />
      <Footer />
    </div>
  )
}

export default Home
