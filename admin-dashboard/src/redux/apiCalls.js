import { loginFailure, loginStart, loginSuccess } from "./userRedux"
import {publicRequest, userRequest} from '../requestMethods'
import { 
    deleteProductFailure,
     deleteProductStart,
     deleteProductSuccess, 
     getProductFailure, 
     getProductStart, 
     getProductSuccess, 
     updateProductFailure, 
     updateProductStart,
     updateProductSuccess,
     addProductFailure, 
     addProductStart,
     addProductSuccess,
    } from "./productRedux";
import { useSelector } from "react-redux";


export const login =async(dispatch,user)=>{
    
    dispatch(loginStart());
    try {
        // console.log(user);
        const res = await publicRequest.post("/auth/login",user);
        console.log(res.data);
        dispatch(loginSuccess(res.data));

    } catch (error) {
        dispatch(loginFailure());
    }
}

export const getProducts = async(dispatch)=>{
    
    dispatch(getProductStart());
    try {
        const res = await publicRequest.get("/products");
       
        dispatch(getProductSuccess(res.data));
    } catch (error) {
        dispatch(getProductFailure());
    }

}

//delete
export const deleteProduct = async(id,dispatch,token)=>{
    // console.log(token);
    dispatch(deleteProductStart());
    try {
        const res = await userRequest.delete(`/products/${id}`,{
            
            headers:{
                Authorization:`Bearer ${token}`
            }
        });
        dispatch(deleteProductSuccess(id))
    } catch (error) {
        dispatch(deleteProductFailure());
    }
}
//update
export const updateProduct = async(id,token,product,dispatch)=>{
    // console.log({id,token,product});
    dispatch(updateProductStart());
    try {
        //update->using axios
        const res=await userRequest.put(`/products/${id}`,product,{
            headers:{
                Authorization:`Bearer ${token}`
            }
        })
        
        dispatch(updateProductSuccess({id,res}));
    } catch (error) {
        dispatch(updateProductFailure());
    }
}

//add product
export const addProduct = async(product,dispatch,token)=>{
    console.log(token);
    dispatch(addProductStart());
    try {
        //add->using axios
        const res = await userRequest.post(`/products`,product,{
            headers:{Authorization:`Bearar ${token}`}
        });
        console.log(res);
        dispatch(addProductSuccess(res.data));
    } catch (error) {
        dispatch(addProductFailure());
    }
}