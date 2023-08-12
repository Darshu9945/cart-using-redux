import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart";
import itemSlice from "./cart.slice";
const store=configureStore({
    reducer:{cart:cartSlice.reducer,item:itemSlice.reducer}
})

export default store