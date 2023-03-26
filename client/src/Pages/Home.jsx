
import React from 'react'
import Navbar from '../Components/Navbar'
import Announcement from '../Components/Announcement'
import Slider from '../Components/Slider'
import Categories from '../Components/Categories'
import Products from '../Components/Products'
import NewsLetter from '../Components/NewsLetter'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div className='Home'>
      <Navbar />
      <Announcement/>
      <Slider />
      <Categories />
      <Products />
      <NewsLetter />
      <Footer />
    </div>
  )
}

export default Home
