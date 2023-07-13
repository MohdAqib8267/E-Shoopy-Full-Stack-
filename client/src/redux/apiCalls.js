import { loginFailure, loginStart, loginSuccess,registerStart,registerSuccess, registerFailure,logoutSuccess,logoutFailure,logoutStart} from "./userRedux"
import {publicRequest} from '../requestMethods'

export const login =async(dispatch,user)=>{
    
    dispatch(loginStart());
    try {
        const res = await publicRequest.post("/auth/login",user);
        dispatch(loginSuccess(res.data));
    } catch (error) {
        dispatch(loginFailure());
    }
}

export const register =async(dispatch,user)=>{
    console.log(user);
    dispatch(registerStart());
    try{
        const res = await publicRequest.post("/auth/register",user);
        dispatch(registerSuccess(res.data));
    }
   catch(error){
    dispatch(registerFailure());
   }
}
export const dispatchLogout=async(dispatch)=>{
    dispatch(logoutStart());
   try {
    localStorage.removeItem("persist:root");
    dispatch(logoutSuccess());
   } catch (error) {
    dispatch(logoutFailure());
   }
}