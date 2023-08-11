import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:'cart',
    initialState:{
        item:[],
        Totalamount:0,
        quantity:1, 
        iscart:false
    },
    reducers:{
        cartopne(state){
       state.iscart=!state.iscart
        },
        additem(state ,actions){
            console.log(actions.payload,"kb")
          const finditem=state.item.find((i)=>i.title===actions.payload.title)
          if(finditem){
            console.log("kb")
            state.quantity++
            state.Totalamount=state.Totalamount+actions.payload.price
          }
          else{
            console.log("guru")
            state.item.push(actions.payload)
            state.Totalamount=state.Totalamount+actions.payload.price
          }
        },
        removeitem(state,actions){

        }
    }
})
export const cartaction= cartSlice.actions
export default cartSlice