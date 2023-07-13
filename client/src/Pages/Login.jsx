import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components'
import { mobile } from '../responsive';
import {login} from '../redux/apiCalls'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0)
  ),
  url("https://images.unsplash.com/photo-1512386233331-f023884a92e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGJhY2tncm91bmQlMjBpbWFnZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1300&q=60")
    center no-repeat;
    
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({width:"50%"})};
  
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  ${mobile({fontSize:"20px"})};
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
  ${mobile({padding:"5px"})};
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  &:hover{
    background:green;
  }
  &:active{
    transform: translateY(3px);
    transition: all 0.5s ease;
  }
  ${mobile({width:"50%",padding:"8px 10px"})};
  &:disabled{
    color:green;
    cursor:not-allowed;
  }
`;
const Error = styled.span`
  color:red;
 
`;
const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
  ${mobile({fontSize:"8px"})};

`;



const Login = () => {
  const [email,setemail]=useState("");
  const [password,setPassword]=useState("");
  const dispatch = useDispatch();
  const {isFetching,error}=useSelector(state=>state.user);

  const handleClick = (e)=>{
    e.preventDefault();
    console.log(email,password);
    login(dispatch, { email, password });
    
  }

  return (
    <Container>
       <Wrapper>
        <Title>LOG IN</Title>
        <Form>
          <Input placeholder="email"  onChange={(e)=>setemail(e.target.value)}/>
          <Input placeholder="password" type="password" onChange={(e)=>setPassword(e.target.value)}/>
          <Button onClick={handleClick} disabled={isFetching}>LOGIN</Button>
          {error && <Error>*something went wrong...</Error>}
          <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link href='/register' >CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Login
