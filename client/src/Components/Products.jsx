import { useEffect, useState } from "react";
import styled from "styled-components"
import { popularProducts } from "../data";
import Product from "./Product";
import axios from "axios";


const Container = styled.div`
    padding:20px;
    display:flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;
const Products = ({cat,filters,sort,fetchAllProd}) => {
  // console.log(fetchAllProd);
  console.log(cat,filters,sort);
  const [products,setProducts] = useState([]);
  const [filteredProducts, setFilterProducts] = useState([]);

  useEffect(()=>{
    const getProducts = async()=>{
      try {
        // console.log(cat);
        const res = await axios.get(
          cat
            ? `http://localhost:4000/api/products/?Category=${cat}`
            : "http://localhost:4000/api/products"
          
          // "http://localhost:4000/api/products"          
        );
        setProducts(res.data);
          // console.log(res.data);
          // console.log(cat);
        
      } catch (error) {
        
      }
    }
    
    getProducts();
  },[cat,fetchAllProd])

  
  useEffect(()=>{

    console.log(products);
    
       cat && setFilterProducts(
      products.filter((item) => 
      
        Object.entries(filters).every(([key,value])=>
          item[key].includes(value)
        )
      )
    )
 

  },[products,cat,filters,fetchAllProd])
console.log(filteredProducts);

  useEffect(()=>{
    if(sort==="newest"){
      setFilterProducts((prev)=>
        [...prev].sort((a,b)=>a.createdAt-b.createdAt)
      )
    }
    else if(sort==="asc"){
      setFilterProducts((prev)=>
        [...prev].sort((a,b)=>a.price-b.price)
      )
    }
    else{
      setFilterProducts((prev)=>
        [...prev].sort((a,b)=>b.price-a.price)
      )
    }
  },[sort])
  return (
    <Container style={{border: "0.5rem solid lightgray",borderRadius: "30px",margin:'2rem',display: "flex",flexDirection:'column'}}>
      {/* <div style={{justifyContent:"center",display:'flex',color:'orangered'}}>
        <h2>Trending Collentions</h2>
      </div> */}
      <div style={{display: "flex",flexWrap: "wrap"}}>
        {cat ? filteredProducts.map((item)=>
        <Product item={item} key={item.id}/>
      )
      :  products.slice(-9).reverse().map((item) =>
      <Product item={item} key={item.id} />
    ) }
      </div>
      
    </Container>
  )
}

export default Products
