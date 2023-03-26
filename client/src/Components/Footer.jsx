import { Facebook, Instagram, MailOutline, Phone, Room, Twitter } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive';

const Container = styled.div`
    display:flex;
    padding:20px;
    ${mobile({padding:"1px"})};
`;

const Left = styled.div`
    display:flex;
    flex:1;
    padding:20px;
    flex-direction:column;
    

`;
const Logo = styled.h1`
    font-size: 2.5rem;
    display:flex;
    color: navy;
    
    align-items:center;
    ${mobile({fontSize:"1.5rem"})};
`;
const Desc = styled.p`
margin: 20px 0px;
${mobile({margin:"10px 0", fontSize:"11px"})};
`;
const SocialConatiner = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    gap:2rem;
    ${mobile({gap:"0rem", justifyContent:"flex-start"})};
   
`;
const SocialIcon = styled.div`
    display:flex;
    border-radius: 50%;
    padding: 0.75rem;
    color:white;
    background:#${props=>props.color};
    transform: scale(1.2);
    cursor:pointer;
    ${mobile({transform:"scale(0.7)"})};
`;
const Center = styled.div`
flex:1;
padding:20px;
${mobile({display:"none"})};
`;

const Title=styled.h3`
margin-bottom: 30px;
display:flex;
align-items:center;
color:navy;
${mobile({marginBottom:"10px"})};


`;
const List=styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;

`;

const ListItem=styled.li`
width: 50%;
margin-bottom: 10px;
`;
const Right = styled.div`
flex:1;
padding:20px;

`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  ${mobile({marginBottom:"10px",fontSize:"11px"})};

`;

const Payment = styled.img`

    width: 100%;
    cursor:pointer;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>E-Shoppy.</Logo>
        <Desc> There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </Desc>
        <SocialConatiner>
        <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          
        </SocialConatiner>
      </Left>
      <Center>
      <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
      <Title>Contact</Title>
        <ContactItem>
          <Room style={{marginRight:"10px"}}/> 622 Dixie Path , South Tobinchester 98336
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight:"10px"}}/> +1 234 56 78
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight:"10px"}} /> contact@lama.dev
        </ContactItem>
        <Payment src="https://tse3.mm.bing.net/th?id=OIP.gvepTiC6ctZ0R5jo3HDjvgHaBL&pid=Api&P=0" />
      </Right>
    </Container>
  )
}

export default Footer
