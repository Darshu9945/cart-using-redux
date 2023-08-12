import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useDispatch,useSelector } from 'react-redux';
const Cart = (props) => {
  const item=useSelector(state=>state.cart.item)
  const quantity=useSelector(state=>state.cart.quantity)
  const Totalamount=useSelector(state=>state.cart.Totalamount)
console.log(item,"kbitem")
 
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        
       { item.map((i)=>{
       return <CartItem
          item={{ title: i.title, quantity: i.quantity, total: i.Totalprice, price: i.price }}
          key={i.title}
        />

       })       
       
       }
      </ul>
    </Card>
  );
};

export default Cart;
