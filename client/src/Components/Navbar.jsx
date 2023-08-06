import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import {mobile} from '../responsive'
import {useDispatch,useSelector} from 'react-redux'
// import CustomizedMenus from '../Special_comp/WhyUs_button/WhyUs_button'
// import Categories_item from '../Special_comp/WhyUs_button/WhyUs_button'
import {CustomizedMenus,Categories_item} from '../Special_comp/WhyUs_button/WhyUs_button';

import { Link } from "react-router-dom";
import { dispatchLogout } from "../redux/apiCalls";


const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
  
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
  
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  border-radius: 0.5rem;
`;

const Input = styled.input`
  border: none;
 outline:none;
 ${mobile({ width: "60px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "16px" })}
  
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ justifyContent: "center",flex:"2" })}
  
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  border:1px solid black;
  padding:10px 5px;
  border-radius:20px;
  ${mobile({ fontSize: "12px",marginLeft:"10px" })}
`;
const MenuItemBadge = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px",marginLeft:"10px" })}
`;
const Why_us = styled.div`

`
const Navbar = () => {

  const dispatch = useDispatch();
  const quantity = useSelector((state)=>state.cart.quantity);
  // console.log(quantity);
  const user = useSelector((state)=>state.user);
  // console.log(user);

  const logout=()=>{
    dispatchLogout(dispatch);
  }
  return (
    <Container>
        <Wrapper>
        <Left>
          <Language>EN</Language>
          {/* <Why_us><CustomizedMenus /></Why_us> */}
          <Categories_item/>
          {/* <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ fontSize: 16, transform: "scale(1.5)",color: "white",
    background: "grey",
    borderRadius: "0.2rem",
    padding: "1.5px"}} />
          </SearchContainer> */}
        </Left>
        <Center>
          <Logo>E-Shoppy.</Logo>
        </Center>
        <Right>
          {user.currentUser?<MenuItem onClick={logout} style={{color:'white',background:'black',fontWeight:'bold'}} >Log Out</MenuItem>:
          <MenuItem style={{color:'white',background:'black',fontWeight:'bold'}} >REGISTER</MenuItem>
          &&
          <MenuItem>SIGN IN</MenuItem>
          }
          <Link to="/cart">
          <MenuItemBadge>
            <Badge badgeContent={quantity} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItemBadge>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar
