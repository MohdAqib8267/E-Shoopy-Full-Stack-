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


export const login =async(dispatch,user)=>{
    
    dispatch(loginStart());
    try {
        const res = await publicRequest.post("/auth/login",user);
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
export const deleteProduct = async(id,dispatch)=>{
    dispatch(deleteProductStart());
    try {
        // const res = await userRequest.delete(`/products/${id}`);
        dispatch(deleteProductSuccess(id))
    } catch (error) {
        dispatch(deleteProductFailure());
    }
}
//update
export const updateProduct = async(id,product,dispatch)=>{
    dispatch(updateProductStart());
    try {
        //update->using axios
        dispatch(updateProductSuccess({id,product}));
    } catch (error) {
        dispatch(updateProductFailure());
    }
}

//add product
export const addProduct = async(product,dispatch)=>{
    dispatch(addProductStart());
    try {
        //add->using axios
        const res = await userRequest.post(`/products`,product)
        dispatch(addProductSuccess(res.data));
    } catch (error) {
        dispatch(addProductFailure());
    }
}