import { useEffect, useState } from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useDispatch,useSelector } from 'react-redux';
import cartSlice, { cartaction } from './store/cart';

import axios from 'axios';
import { itemaction } from './store/cart.slice';
let iscartitem=true
function App() {
  const cart=useSelector(state=>state.cart.iscart)
  const items=useSelector(state=>state.cart)
  const status=useSelector(state=>state.item)
  const [bgcolor,setbagcolor]=useState("white")
  const dispatch=useDispatch()
  useEffect(()=>{
    if(iscartitem){
        iscartitem=false
      return;
    }
   dispatch(itemaction.notification({
      title:"pendind",
      status:"sending"
    }))
    setbagcolor("white")
axios.put("https://cart-using-redux-default-rtdb.firebaseio.com/cart.json",items)
.then((res)=>{
    dispatch(itemaction.notification({
      title:"item added to firebase succefull",
      status:"sended"
    }))
    setbagcolor("green")
}).catch(err=>{
  dispatch(itemaction.notification({
    title:err.message,
    status:"failed"
   
  }))
  setbagcolor("red")
})
  },[items]) 




  useEffect(()=>{
    axios.get("https://cart-using-redux-default-rtdb.firebaseio.com/cart.json")
    .then((res)=>{
      console.log(res.data.item,"res.data")
      dispatch(cartaction.additemall(res.data.item))
    }).catch(err=>console.log(err.message))
      },[]) 
  return (

    <div>
      {status.showstatus && <div className='status' style={{backgroundColor:bgcolor}}> <p>{status.status}</p><p>{status.title}</p></div>}
    <Layout>
      {cart && <Cart />}
      <Products />
    </Layout>
    </div>
  );
}

export default App;
