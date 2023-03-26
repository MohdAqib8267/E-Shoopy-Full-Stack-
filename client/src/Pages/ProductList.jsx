import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import styled from 'styled-components'
import Announcement from '../Components/Announcement';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import NewsLetter from '../Components/NewsLetter';
import Products from '../Components/Products';
import { mobile } from '../responsive';

const Container = styled.div`

`;

const Title = styled.h1`
margin: 20px;
${mobile({fontSize:"1.2rem",margin:"10px"})};
`;

const FilterContainer = styled.div`
    display:flex;
    justify-content:space-between;
 
    
    
`;

const Filter = styled.div`
margin: 20px;
display: flex;
justify-content:center;
align-items:center;
${mobile({margin:"10px",width:"100"})};

`;
const FilterText = styled.div`
font-size: 20px;
font-weight: 600;
margin-right: 20px;
${mobile({fontSize:"12px",marginRight:"10px"})};

`;


const Select=styled.select`
padding: 10px;
margin-right: 20px;
${mobile({padding:"3px",marginRight:"3px",fontSize:"10px"})};

`;
const Option = styled.option``;

const ProductList = () => {

  const location = useLocation();
  const cat = location.pathname.split('/')[2];
  
  const [filters,setFilters] = useState({});
  const [sort,setSort] = useState("newest");

  const  handleFilters = (e) =>{
    const value = e.target.value;
    
    setFilters({
      ...filters,
      [e.target.name]: value,
    })
  } 
  
  return (
    <Container>
      <Navbar/>
      <Announcement />
      <Title>{cat}</Title>
      <FilterContainer>
      <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name='color' onChange={handleFilters} >
            <Option disabled >
              Color
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
          <Select name='size' onChange={handleFilters}>
            <Option disabled >
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={(e)=>setSort(e.target.value)}>
            <Option value="newest">Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>
     
      </FilterContainer>
      <Products cat={cat} filters={filters} sort={sort}/>
      <NewsLetter/>
      <Footer />
    </Container>
  )
}

export default ProductList
