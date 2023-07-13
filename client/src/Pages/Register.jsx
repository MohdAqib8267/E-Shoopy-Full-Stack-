import React, { useState } from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../redux/apiCalls';
import { Link } from 'react-router-dom';

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
  const [name,setName]=useState("");
  const [last_name,setLast_name]=useState("");
  const [username,setUsername]=useState("");
  const [email,setemail]=useState("");
  const [password,setPassword]=useState("");
  const [confirmPassword,setConfirmPassword]=useState("");
  const dispatch = useDispatch();
  const {isFetching,error}=useSelector(state=>state.user);
  const handleClick = (e)=>{
    e.preventDefault();
    console.log(email,password);
    // login(dispatch, { email, password });
    register(dispatch,{username,email,password});
    
  }
  return (
    <Container>
          <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="name" onChange={(e)=>setName(e.target.value)} />
          <Input placeholder="last name" onChange={(e)=>setLast_name(e.target.value)} />
          <Input placeholder="username" onChange={(e)=>setUsername(e.target.value)}/>
          <Input placeholder="email" onChange={(e)=>setemail(e.target.value)}/>
          <Input placeholder="password" type="password" onChange={(e)=>setPassword(e.target.value)} />
          <Input placeholder="confirm password" type="password" onChange={(e)=>setConfirmPassword(e.target.value)} />
          <Link to="/login" style={{width:"100%",cursor:"pointer",margin:'10px 0',textDecoration:"none"}}>
            Already have a account? <b>Login</b>
          </Link>
          
          <Button onClick={handleClick} disabled={isFetching}>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Register
