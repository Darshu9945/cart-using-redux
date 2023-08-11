import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:'cart',
    initialState:{
        iscart:false
    },
    reducers:{
        cartopne(state){
state.iscart=!state.iscart
        },
        cartclose(){

        }
    }
})
export const cartaction= cartSlice.actions
export default cartSlice