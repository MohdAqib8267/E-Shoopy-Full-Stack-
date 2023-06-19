import { Add, Remove } from '@material-ui/icons';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import styled from 'styled-components'
import Announcement from '../Components/Announcement';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import NewsLetter from '../Components/NewsLetter';
import { publicRequest } from '../requestMethods';
import { mobile } from '../responsive';
import Button from '@mui/material/Button';


import { addProducts } from '../redux/cartRedux';
import {useDispatch} from 'react-redux'

const Container = styled.div`
`;
const  Wrapper= styled.div`
    display:flex;
    padding:50px;
    ${mobile({padding:"10px",flexDirection:"column"})};
`;
const ImgContainer = styled.div`
flex: 1;
`;
const Image = styled.img`
width: 100%;
height: 75vh;
object-fit: cover;
${mobile({height:"50vh"})};
`;
const InfoContainer = styled.div`
flex: 1;

padding: 0px 50px;
${mobile({padding:"10px"})};
`;
const Title = styled.h1`
font-weight: bold;
color:purple;
`;
const Desc = styled.p`
  margin: 20px 0px;
  ${mobile({margin:"5px 0px"})};
  color:gray;
  font-size:0.8rem;

`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
  color: blue;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({width: "100%"})};
  
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
  
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({width: "100%"})};
 
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;


// const Button = styled.button`
//   padding: 15px;
//   border: 2px solid teal;
//   background-color: white;
//   cursor: pointer;
//   font-weight: 500;
//   &:hover{
//       background-color: #f8f4f4;
//   }
//   ${mobile({padding: "5px"})};
// `;

const Product = () => {
  const location = useLocation();
  const id = location.pathname.split('/')[2];

  const [product,setProduct]=useState({});
  const [quantity,setQuantity]=useState(1);
  const [color,setColor] = useState();
  const [size,setSize]=useState();  
  const dispatch = useDispatch();

  useEffect(()=>{
    const getData = async()=>{
      try {
        const res = await publicRequest.get(`/products/find/${id}`);
        // console.log(res.data.color);
        setProduct(res.data);
      } catch (error) {
        
      }
    }
    getData();
  },[id])

  const handleQuantity=(type)=>{
    if(type==="dec"){
      
      quantity>1 && setQuantity(quantity-1);
      
    }
    else{
      
        setQuantity(quantity+1);
      
    }
  }

  const handleClick =()=>{
    //update card
    dispatch(
      addProducts({...product,quantity,color,size})
    )

  }
  return (
    <Container>
        <Navbar />
        <Announcement/>
        <Wrapper>
        <ImgContainer>
          <Image src={product.img}/>
          {/* <Image src="https://images.unsplash.com/photo-1485913149399-a59b6725c5ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGdpcmwlMjBkZW5pbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" /> */}
        </ImgContainer>
        <InfoContainer>
        <Title>{product.title}</Title>
          <Desc>
          {product.desc}
          </Desc>
          <Price>$ {product.price}</Price>

          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>

                {product.color?.map((c)=>(
                    <FilterColor color= {c.toLowerCase()} key={c.toLowerCase()} onClick={()=>setColor(c.toLowerCase())}/>
                ))}
              
            </Filter>
            <Filter>
                <FilterTitle>Size</FilterTitle>
                <FilterSize onChange={(e)=>setSize(e.target.value)}>

                  {
                    product.size?.map((s)=>(
                      <FilterSizeOption key={s}>{s}</FilterSizeOption>
                    ))
                  }
          
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove onClick={()=>handleQuantity("dec")} />
              <Amount>{quantity}</Amount>
              <Add onClick={()=>handleQuantity("inc")}/>
            </AmountContainer>
            <Button onClick={handleClick} variant="contained">ADD TO CART</Button>
            {/* <Button onClick={handleClick}>ADD TO CART</Button> */}
          </AddContainer>
            
            <div style={{display:'flex', flexDirection:'column',color:'lightslategray',gap:'0.5rem',marginTop:'1rem'}}>
              <span>Vendor: <b>Polo</b></span>
              <span>Product Type: <b>Man</b></span>
              
              
              {product.category && (
  <span>
    Tag: <b>{product.category.map(category => category.charAt(0).toUpperCase() + category.slice(1)).join(", ")}</b>
  </span>
)}
                  
                
              
              
            </div>
        </InfoContainer>
                  
        </Wrapper>
        <NewsLetter/>
        <Footer />
      
    </Container>
  )
}

export default Product
