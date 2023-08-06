import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Announcement from "../Components/Announcement";
import Slider from "../Components/Slider";
import Categories from "../Components/Categories";
import Products from "../Components/Products";
import NewsLetter from "../Components/NewsLetter";
import Footer from "../Components/Footer";
import Button from "@mui/material/Button";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="Home">
      <Navbar />
      <Announcement />
      <Slider />
      <div style={{ paddingLeft: "20px" }} className="heading">
        <span style={{ color: "orange" }}>Top</span>
        <span style={{ color: "Gray" }}>Categories</span>
      </div>

      <Categories />
      <div
        style={{
          paddingLeft: "20px",
          paddingTop: "1rem",
          marginBottom: "-10px",
        }}
        className="heading"
      >
        <span style={{ color: "orange" }}>Trending</span>
        <span style={{ color: "Gray" }}>Products</span>
      </div>
      <Products />
      <div className="btn">
        <Link to="/products/all">
        <Button variant="contained">View More</Button>
        </Link>
      </div>

      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Home;
