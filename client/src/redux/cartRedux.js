import { createSlice } from '@reduxjs/toolkit'



const cartReducer = createSlice({
    name:"cart",
    initialState:{
        products:[],
        quantity:0,
        total:0,
    },
    reducers:{
        addProducts:(state,action)=>{
            state.quantity+=1;
            state.products.push(action.payload);
            state.total+=action.payload.price*action.payload.quantity;
        }
    }
})

export const {addProducts} = cartReducer.actions;
export default cartReducer.reducer;