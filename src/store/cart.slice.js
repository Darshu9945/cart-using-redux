import { createSlice } from "@reduxjs/toolkit";

const itemSlice=createSlice({
    name:'item',
    initialState:{
        title:'',
        status:'',
        showstatus:false
    },
    reducers:{
   notification(state,actions){
state.title=actions.payload.title
state.status=actions.payload.status
   },
   showdata(state){
    state.showstatus=true
   }

    }
       
})
export const itemaction= itemSlice.actions
export default itemSlice