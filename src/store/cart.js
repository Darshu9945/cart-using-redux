import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

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
       additemall(state,actions){
        let items=[]
        if(actions.payload){
           items=actions.payload
        }else{
           items=[]
        }
             state.item=items
           },

        additem(state ,actions){
            console.log(actions.payload,"kb")
          const finditem=state.item.find((i)=>i.title===actions.payload.title)
          if(finditem){
            console.log("kb")
            state.Totalamount=state.Totalamount+actions.payload.price
            finditem.quantity++
            finditem.Totalprice=finditem.quantity*finditem.price
          }
          else{
            console.log("guru")
            const kb={...actions.payload,Totalprice:actions.payload.price}
            state.item.push(kb)
            state.Totalamount=state.Totalamount+actions.payload.price
          }
        },
        removeitem(state,actions){
            console.log(actions.payload,"kb")
            const finditem=state.item.find((i)=>i.title===actions.payload.title)
            if(finditem.quantity===1){
                console.log("removed")
                const removceditem=state.item.filter(i=>i.title!== actions.payload.title)
                console.log(removceditem)
                state.item=[...removceditem]
            }
            else{
                state.Totalamount=state.Totalamount-actions.payload.price
                finditem.quantity--
            }
            
        }
    }
})
export const cartaction= cartSlice.actions
export default cartSlice