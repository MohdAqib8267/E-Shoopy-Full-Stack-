import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive';

const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
width:100vw;
height:100vh;
background-size: cover;
background: linear-gradient(
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0)
  ),
  url("https://images.unsplash.com/photo-1512386233331-f023884a92e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGJhY2tncm91bmQlMjBpbWFnZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1300&q=60")
    center no-repeat;
    
`;
const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({width:"75%"})};
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  ${mobile({fontSize:"16px"})};
`; 
const Form = styled.form`
    display:flex;
    flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  ${mobile({padding:"5px",margin: "5px 2px",fontSize:"12px"})};
`;
const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
  ${mobile({fontSize:"10px",margin:"5px 0px"})};
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  &:hover{
    background:green;
  }
  &:active{
    transform: translateY(3px);
    transition: all 0.5s ease;
  }
  ${mobile({width:"40%",padding:"4px 5px"})};
`;

const Register = () => {
  return (
    <Container>
          <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="name" />
          <Input placeholder="last name" />
          <Input placeholder="username" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Register
